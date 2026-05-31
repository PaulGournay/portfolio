import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Center, Bounds, Environment } from '@react-three/drei';
import * as THREE from 'three';
// Assure-toi que le chemin vers ton asset est correct
import scissorsUrl from '../assets/scissors.glb';

export default function Scissors3D({ isDragging }) {
  // Chargement du modèle GLTF
  const { nodes, scene } = useGLTF(scissorsUrl);

  // Animation : Valeurs d'amortissement (Damping) pour la fluidité
  const currentAmplitude = useRef(0.05);
  const currentSpeed = useRef(2);

  // Sauvegarde des Quaternions intiaux pour une rotation pure (évite le gigotement)
  const initialQuaternions = useMemo(() => {
    // Sécurité au cas où le GLTF met du temps à charger
    if (!nodes || !nodes.top_blade || !nodes.bottom_blade) return null;
    return {
      top: nodes.top_blade.quaternion.clone(),
      bottom: nodes.bottom_blade.quaternion.clone(),
    };
  }, [nodes]);

  // Axe de rotation local (le gond correspond à l'axe Y local dans ton fichier)
  const rotationAxis = new THREE.Vector3(0, 0, 1);

  // Boucle d'animation (useFrame s'exécute à chaque frame)
  useFrame((state) => {
    if (!initialQuaternions) return;

    // L'assignation directe (sans accélération) de l'étape précédente
    currentSpeed.current = isDragging ? 30 : 2;
    currentAmplitude.current = isDragging ? 0.3 : 0.1;

    const time = state.clock.getElapsedTime();
    const oscillation = (Math.sin(time * currentSpeed.current) + 1) / 2;
    const baseAngle = oscillation * currentAmplitude.current;

    // --- MODIFICATION ICI : Mouvement 50/50 ---
    // On donne exactement la moitié de l'angle total à chaque lame
    const angle = baseAngle * 0.99;

    const rotationAxis = new THREE.Vector3(0, 0, 1); // Axe Z

    // On applique le même angle aux deux, toujours avec des signes opposés
    const topRotation = new THREE.Quaternion().setFromAxisAngle(rotationAxis, angle);
    const bottomRotation = new THREE.Quaternion().setFromAxisAngle(rotationAxis, angle);
    // ------------------------------------------

    nodes.top_blade.quaternion.copy(initialQuaternions.top).multiply(topRotation);
    nodes.bottom_blade.quaternion.copy(initialQuaternions.bottom).multiply(bottomRotation);
  });

  return (
    // --- CORRECTION ORIENTATION ---
    // On change Y de PI/2 (gauche) à -PI/2 (droite). On garde l'inclinaison X de PI/4.
    <group rotation={[Math.PI / 4, -Math.PI / 2, 0]} dispose={null}>

      // --- CORRECTION LUMINOSITÉ ---
      // Ajoute un éclairage de studio réaliste ("city", "studio", "lobby", etc.)
      <Environment preset="city" />

      <Bounds fit clip observe margin={1.2}>
        <Center>
          <primitive object={scene} />
        </Center>
      </Bounds>
    </group>
  );
}

// Préchargement pour éviter les lags au montage du composant
useGLTF.preload(scissorsUrl);