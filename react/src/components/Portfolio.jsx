import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

export function Portfolio() {
  const projects = [
    {
      title: "Passerelle Vocale Hi-Fi",
      description: "Rétro-ingénierie d'un protocole infrarouge propriétaire de 48 bits et conception d'une passerelle vocale (Google Home) avec dimensionnement d'un circuit d'amplification NPN pour de la haute fidélité.",
      tags: ["C++", "ESP32", "API SinricPro", "Électronique analogique", "IoT"],
      // image: "/src/assets/project1.png", // Uncomment and add your image path
    },
    {
      title: "Timer Pomodoro 'Studycount'",
      description: "Conception complète d'un timer connecté pour la productivité. Modélisation 3D du boîtier, conception électronique avec écran E-paper et programmation embarquée.",
      tags: ["C++", "ESP32", "Impression 3D", "E-paper", "Fusion 360"],
      // // TODO: Insérer le viewer 3D ici pour le modèle Thingiverse
      // 3dModel: true 
    },
    {
      title: "LogiGame",
      description: "Conception d'un cœur de microcontrôleur sur carte ARTY. Intégration d'une UAL (Unité Arithmétique et Logique), de mémoires et d'automates à états finis pour architecture matérielle.",
      tags: ["VHDL", "FPGA Xilinx Artix-7", "Vivado", "Architecture Matérielle"],
    },
    {
      title: "Créations Textiles & Ingénierie Pratique",
      description: "Transfert de mes compétences de conception 3D vers le textile. Réalisation de A à Z d'un Duffle Bag robuste et d'un sac de magnésie pour l'escalade, optimisé pour la préhension et l'usage intensif.",
      tags: ["Design", "Couture", "Matériaux techniques", "Conception", "Maker"],
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#f3f3f0]">
              Projets
            </h2>
            <div className="h-px bg-[#2b2b30] flex-grow mt-2"></div>
          </div>
          <p className="text-[#e6e6e0]/70 font-mono text-sm">
            {'//'} Sélection de réalisations : de la puce électronique au fil de couture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              delay={index * 0.2}
            >
              {project.title.includes("Studycount") && (
                <div className="text-center p-4 border-dashed-custom text-[#ff6a00]/70 flex flex-col items-center justify-center h-full w-[90%] mx-auto mt-4 mb-4 rounded bg-[#121214]/50">
                  <span className="font-mono text-sm mb-2">{'/* Viewer 3D à intégrer ici */'}</span>
                  <span className="text-xs">Espace réservé pour modèle Thingiverse</span>
                </div>
              )}
            </ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
}
