import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Scissors3D from './components/Scissors3D';
import ModelViewer3D from './components/ModelViewer3D';
import photoProfile from './assets/photocvpng.png';
import logigameVideo from './assets/LogiGame_Demo.mp4';
import studyCountModel from './assets/StudyCount_3D_model.glb';
import photoAppStudyCount from './assets/Photo_app_StudyCount.png';
import photoIrlStudyCount from './assets/Photo_irl_StudyCount.png';
import cvPdf from './assets/CV_Paul_Gournay_Stage_Robotique_2026_new3.pdf';
import imlImg1 from './assets/IML_Project_img1.png';
import imlImg2 from './assets/IML_Project_img2.png';
import imlImgResult from './assets/IML_Project_result.png';
import duffleImgMain from './assets/sewing_pics/DuffleBag_display_pic.jpg';
import duffleImg1 from './assets/sewing_pics/DuffleBag_1.jpg';
import duffleImg2 from './assets/sewing_pics/DuffleBag_2.jpg';
import magnesieImgMain from './assets/sewing_pics/Sac_magnésie_escalade_display_pic.png';
import magnesieImg1 from './assets/sewing_pics/Sac_magnésie_escalade_1.jpg';
import magnesieImg2 from './assets/sewing_pics/Sac_magnésie_escalade_2.jpg';
import magnesieImg3 from './assets/sewing_pics/Sac_magnésie_escalade_3.jpg';
import magnesieImg4 from './assets/sewing_pics/Sac_magnésie_escalade_4.jpg';
import graphImg1 from './assets/Graph_Theory_Project/Graph_Theory_Project_1.png';
import graphImg2 from './assets/Graph_Theory_Project/Graph_Theory_Project_2.png';
import joGame1 from './assets/JO-Games_project/JO_Game_Badminton_main_menu.png';
import joGame2 from './assets/JO-Games_project/JO_Game_Badminton.png';
import joGame3 from './assets/JO-Games_project/JO_Game_Badminton_2.png';
import joGame4 from './assets/JO-Games_project/JO_Game_Basketball.png';
import passerelleImg from './assets/esp_32_connected_cd_player_.jpg';
import orProjectImg from './assets/Operations_research_project.png';
import logoEfrei from './assets/Logo efrei design couleur.png';

// --- COMPOSANTS RÉUTILISABLES ---



const ProjectCard = ({ title, tags, description, media = [], githubUrl, isCouture }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const hasMultipleMedia = media.length > 1;
  const currentMedia = media.length > 0 ? media[currentMediaIndex] : null;

  const nextMedia = () => setCurrentMediaIndex((prev) => (prev + 1) % media.length);
  const prevMedia = () => setCurrentMediaIndex((prev) => (prev - 1 + media.length) % media.length);

  return (
    <div className={`relative p-6 flex flex-col group mt-4 ${isCouture ? 'bg-white border-zigzag shadow-brutal' : 'bg-slate-800 border-2 border-slate-700 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.5)]'}`}>

      {isCouture && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-slate-200/80 backdrop-blur-sm border border-slate-300 shadow-sm rotate-[-2deg] z-10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-slate-400 shadow-inner"></div>
        </div>
      )}

      <div className={`mb-6 w-full border flex items-center justify-center overflow-hidden relative transition-colors group/media ${isCouture ? 'aspect-square bg-stone-100 border-slate-200 cutting-mat-bg group-hover:bg-slate-50' : 'h-72 bg-slate-900 border-slate-600'}`}>

        {currentMedia ? (
          <>
            {currentMedia.type === '3d' && (
              <div className="w-full h-full cursor-grab active:cursor-grabbing">
                <ModelViewer3D modelUrl={currentMedia.url} />
              </div>
            )}
            {currentMedia.type === 'video' && (
              <video
                src={currentMedia.url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}
            {currentMedia.type === 'image' && (
              <img
                src={currentMedia.url}
                alt={`${title} screenshot`}
                className="w-full h-full object-contain"
              />
            )}

            {/* Slider Controls */}
            {hasMultipleMedia && (
              <>
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevMedia(); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/50 hover:bg-slate-800 text-white p-2 rounded-full opacity-100 md:opacity-0 md:group-hover/media:opacity-100 transition-opacity z-10 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextMedia(); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/50 hover:bg-slate-800 text-white p-2 rounded-full opacity-100 md:opacity-0 md:group-hover/media:opacity-100 transition-opacity z-10 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                  {media.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-colors ${idx === currentMediaIndex ? (isCouture ? 'bg-orange-500' : 'bg-green-400') : 'bg-slate-500/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <span className="text-slate-400 text-sm flex flex-col items-center font-mono">
            <svg className="w-8 h-8 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            [ Aucun média disponible ]
          </span>
        )}
      </div>

      <h3 className={`text-2xl font-bold mb-4 ${isCouture ? 'font-serif text-slate-800' : 'font-mono text-stone-50'}`}>{title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span key={idx} className={`${isCouture ? 'woven-label px-2 py-0.5 text-xs text-orange-600' : 'bg-slate-700/50 text-green-400 px-2 py-1 text-xs border border-slate-600'} font-mono`}>
            {isCouture ? tag : `> ${tag}`}
          </span>
        ))}
      </div>
      <div className={`text-sm leading-relaxed flex-grow border-t pt-4 mt-2 mb-6 ${isCouture ? 'text-slate-600 border-dashed border-slate-200' : 'text-slate-400 border-solid border-slate-700'}`}>
        {description}
      </div>
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className={`mt-auto self-start inline-flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all ${isCouture ? 'bg-slate-800 text-stone-50 shadow-[3px_3px_0px_0px_rgba(249,115,22,1)] hover:translate-y-1 hover:shadow-none' : 'bg-transparent text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-slate-900'}`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
          {isCouture ? 'Code source' : 'EXECUTE ./github.sh'}
        </a>
      )}
    </div>
  );
};



// --- SECTIONS DU PORTFOLIO ---

const Hero = ({ isCouture }) => (
  <section className={`min-h-screen flex items-center justify-center pt-20 pb-12 px-6 relative overflow-hidden ${isCouture ? 'bg-stone-50' : 'bg-slate-900'}`}>

    {isCouture ? (
      <>
        <div className="absolute top-0 left-0 w-full h-full opacity-60 pointer-events-none cutting-mat-bg"></div>
        <div className="absolute left-4 top-0 bottom-0 w-8 border-r-2 border-dashed border-slate-300 opacity-40 flex-col justify-between py-10 pointer-events-none hidden md:flex">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-full h-px bg-slate-400 relative">
              {i % 5 === 0 && <span className="absolute left-10 -top-3 text-xs font-mono text-slate-500">{i * 10}</span>}
              {i % 5 === 0 && <div className="absolute right-0 w-4 h-px bg-slate-600"></div>}
            </div>
          ))}
        </div>
      </>
    ) : (
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
    )}

    <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
      <div className="mb-8 relative inline-block group mt-8 sm:mt-0">

        {isCouture ? (
          <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-orange-500/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] z-0 pointer-events-none"></div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-dashed border-orange-500/30 animate-[spin_40s_linear_infinite] opacity-60 z-0 pointer-events-none"></div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[150%] h-1 bg-gradient-to-r from-transparent via-orange-500/80 to-transparent z-10 blur-sm"></div>
          </>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 rounded-none blur-2xl z-0 pointer-events-none border border-green-500/30"></div>
        )}

        <div className={`relative z-20 w-48 h-56 sm:w-64 sm:h-72 flex items-end justify-center ${!isCouture && 'border-b-4 border-green-500'}`}>
          <img
            src={photoProfile}
            alt="Photo Profil"
            className={`w-auto h-full object-contain object-bottom filter transition-transform duration-500 group-hover:scale-105 ${isCouture ? 'drop-shadow-[0_0_15px_rgba(249,115,22,0.15)] group-hover:-translate-y-2' : 'grayscale contrast-125 sepia-[0.3] hue-rotate-[80deg]'}`}
          />
        </div>
      </div>

      <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-4 ${isCouture ? 'font-serif text-slate-800' : 'font-mono text-stone-50'}`}>
        Paul GOURNAY
      </h1>
      <h2 className={`text-xl md:text-2xl font-medium mb-6 ${isCouture ? 'text-slate-600' : 'font-mono text-slate-400'}`}>
        Étudiant en 3ème année @ <span className={`font-bold ${isCouture ? 'text-blue-600' : 'text-green-400'}`}>EFREI Paris</span>
      </h2>
      <p className={`text-lg max-w-2xl mx-auto leading-relaxed border-t border-b py-6 ${isCouture ? 'text-slate-600 border-dashed border-slate-300 mb-8' : 'font-mono text-slate-400 border-solid border-slate-700 mb-10'}`}>
        À la recherche d’un stage de 5 mois en <strong>Système Embarqué / Robotique</strong> à partir de Novembre 2026.
      </p>

      {isCouture && (
        <div className="max-w-4xl mx-auto mt-8 p-8 bg-white/60 backdrop-blur border border-slate-200 shadow-sm rounded-xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden text-left">
          <div className="absolute top-0 left-0 w-2 h-full bg-orange-400"></div>
          <div className="flex-1 text-slate-600 text-lg leading-relaxed">
            <p className="mb-4">
              À côté de mes études d'ingénieur, la couture est devenue une vraie passion. J'ai voulu profiter de ce portfolio pour présenter aussi mon univers créatif et mes réalisations textiles.
            </p>
            <p className="mb-4">
              J'ajoute peu à peu ici les projets que j'ai pu documenter. Il y en a beaucoup d'autres (retouches, créations complètes...) que je n'avais pas forcément pris en photo sur le moment, mais qui viendront étoffer cette page avec le temps !
            </p>
            <p>
              Cette fibre créative m'a d'ailleurs poussé à m'investir à fond dans la vie associative de mon école, jusqu'à devenir président de l'association <strong>Efrei Design</strong>.
            </p>
          </div>
          <div className="w-40 shrink-0 flex justify-center">
            <img src={logoEfrei} alt="Logo Efrei Design" className="w-full h-auto object-contain drop-shadow-md transition-transform hover:scale-105 duration-300" />
          </div>
        </div>
      )}
    </div>
  </section>
);



const Portfolio = ({ isCouture }) => {
  const allProjects = [
    {
      title: "LogiGame (Architecture Matérielle)",
      tags: ["VHDL", "FPGA Xilinx Artix-7", "Vivado", "Architecture Matérielle"],
      description: (
        <div className="flex flex-col gap-4">
          <p>
            Conception d'un cœur de microcontrôleur sur carte FPGA ARTY et création de "LogiGame", un jeu de réflexe interactif exploitant directement cette architecture matérielle.
          </p>
          <p>
            Développement complet en VHDL sous Vivado. J'ai intégré une UAL (Unité Arithmétique et Logique) et géré les mémoires, tout en concevant une machine à états (FSM), des timers et un générateur pseudo-aléatoire (LFSR) pour la logique du jeu.
          </p>
          <p>
            <strong>Ce que j'en retiens :</strong> Une plongée fascinante dans le "hardware" pur. Ce projet m'a permis de comprendre comment exécuter des instructions bas niveau et concevoir un système numérique robuste et interactif.
          </p>
        </div>
      ),
      media: [
        { type: 'video', url: logigameVideo }
      ],
      githubUrl: "https://github.com/Sowker/VHDL2.git"
    },
    {
      title: "Timer Pomodoro Connecté « Studycount »",
      tags: ["C++", "ESP32", "Impression 3D", "E-paper", "IoT"],
      description: (
        <div className="flex flex-col gap-4">
          <p>
            Création d'un timer physique intelligent basé sur la méthode Pomodoro pour booster la productivité, de la conception électronique jusqu'au produit final posé sur le bureau.
          </p>
          <p>
            J'ai programmé un microcontrôleur ESP32 en C++ pour piloter un écran E-paper ultra basse consommation. Côté mécanique, j'ai entièrement modélisé le boîtier sur-mesure avant de l'imprimer en 3D pour assembler parfaitement tous les composants.
          </p>
          <p>
            <strong>Ce que j'en retiens :</strong> La satisfaction immense de concevoir un produit complet de A à Z. Allier le code, l'électronique et la modélisation 3D pour créer un objet concret et utile au quotidien.
          </p>
        </div>
      ),
      media: [
        { type: '3d', url: studyCountModel },
        { type: 'image', url: photoAppStudyCount },
        { type: 'image', url: photoIrlStudyCount }
      ],
      githubUrl: "https://github.com/PaulGournay/StudyCount.git"
    },
    {
      title: "Passerelle Vocale Hi-Fi & Infrarouge",
      tags: ["C++", "ESP32", "API SinricPro", "IoT", "Électronique"],
      description: (
        <div className="flex flex-col gap-4">
          <p>
            Donner une seconde vie à une vieille chaîne Hi-Fi en la connectant à Google Home. L'objectif : pouvoir allumer, éteindre et contrôler le volume du lecteur CD à la voix.
          </p>
          <p>
            Le lecteur CD utilisait un protocole infrarouge propriétaire de 48 bits non documenté. J'ai dû faire de la rétro-ingénierie pour décoder ces trames IR en utilisant une LED réceptrice et un second ESP32. Ce fut un vrai défi car le signal comportait énormément de bruit qu'il a fallu filtrer. J'ai ensuite conçu un circuit d'amplification NPN et utilisé l'API SinricPro pour faire le pont avec l'écosystème Google.
          </p>
          <p>
            <strong>Ce que j'en retiens :</strong> Un vrai travail d'investigation ! Réussir à hacker un vieux signal infrarouge pour le marier avec le cloud moderne m'a beaucoup appris sur le traitement du signal et l'interfaçage hardware.
          </p>
        </div>
      ),
      media: [
        { type: 'image', url: passerelleImg }
      ],
      githubUrl: "https://github.com/PaulGournay/CD-Player-google-home.git"
    },
    {
      title: "🏅 JO-Games : Spécial JO de Paris",
      tags: ["Python", "Pygame", "POO", "Git", "Jeux Vidéo"],
      description: (
        <div className="flex flex-col gap-4">
          <p>
            Développement en équipe de 5 d'une compilation de 4 mini-jeux d'arcade (Badminton, Basket, Tir, Javelot). Le petit plus du projet : on avait anticipé l'événement en basant toute l'application sur le thème des JO de Paris !
          </p>
          <p>
            Se répartir le travail pour créer un menu commun et coder des mécaniques très différentes pour chaque sport (physique du volant, gravité du ballon, jauges de puissance, collisions).
          </p>
          <p>
            <strong>Ce que j'en retiens :</strong> Le projet idéal pour vraiment comprendre la Programmation Orientée Objet (POO) et la collaboration technique avec Git. Ça m'a forcé à écrire un code propre et structuré pour que les 4 autres membres de l'équipe puissent travailler dessus sans s'arracher les cheveux !
          </p>
        </div>
      ),
      media: [
        { type: 'image', url: joGame1 },
        { type: 'image', url: joGame2 },
        { type: 'image', url: joGame3 },
        { type: 'image', url: joGame4 }
      ],
      githubUrl: "https://github.com/GuillaumeBernardEFREI/JO-Games"
    },
    {
      title: "🖥️ Optimisation de Datacenter & Théorie des Graphes",
      tags: ["Algorithmique", "Python", "Dijkstra", "Floyd-Warshall", "Théorie des Graphes"],
      description: (
        <div className="flex flex-col gap-4">
          <p>
            Migrer des serveurs en urgence suite à une fuite d'eau, sans jamais poser un serveur lourd sur un plus léger pour éviter la casse. C'est la logique mathématique des Tours de Hanoï appliquée à la vraie vie !
          </p>
          <p>
            - <em>Modélisation :</em> Traduction du problème physique en graphe (ce qui a fait apparaître visuellement une belle fractale : le Triangle de Sierpiński).<br />
            - <em>Algorithmique :</em> Implémentation de Dijkstra et Floyd-Warshall pour trouver le chemin le plus court et prouver que la migration prendra toujours 2ⁿ - 1 déplacements.
          </p>
          <p>
            <strong>Ce que j'en retiens :</strong> L'importance de choisir le bon algorithme selon le contexte. Bien que Dijkstra soit ultra-rapide, j'ai défendu l'usage de Floyd-Warshall. Ce dernier calcule tous les itinéraires à l'avance, ce qui permet au système de s'adapter instantanément si le technicien se trompe de baie en pleine manipulation, sans avoir à recalculer !
          </p>
        </div>
      ),
      media: [
        { type: 'image', url: graphImg1 },
        { type: 'image', url: graphImg2 }
      ],
      githubUrl: "https://github.com/ant-one-dev/Graph-Theory.git"
    },
    {
      title: "🎓 Prédiction de la Réussite Scolaire par Machine Learning",
      tags: ["Python", "Machine Learning", "Scikit-learn", "Data Science"],
      description: (
        <div className="flex flex-col gap-2">
          <span>Développement d'un pipeline de Machine Learning visant à prédire les scores d'examens d'étudiants en fonction de 20 variables académiques, personnelles et socio-économiques (6 607 enregistrements).</span>
          <ul className="list-disc pl-4 mt-2 space-y-2">
            <li><strong>Méthodologie :</strong> Prétraitement (StandardScaler, MinMaxScaler), et comparaison One-Hot Encoding vs Label Encoding.</li>
            <li><strong>Modélisation :</strong> Régression Linéaire (incluant descente de gradient manuelle) et KNN optimisé via GridSearchCV. Validation croisée avancée.</li>
            <li><strong>Résultats Clés :</strong> R² de 0,7696 et MAE de 0,45 pour la Régression Linéaire avec OHE.</li>
            <li><strong>Applications :</strong> Système d'alerte précoce pour élèves à risque et conseil académique personnalisé.</li>
            <li><strong>Ce que j'en retiens :</strong> L'impact crucial de la préparation des données (preprocessing) sur les performances d'un modèle IA, et l'utilité de la validation croisée pour éviter le surapprentissage.</li>
          </ul>
        </div>
      ),
      media: [
        { type: 'image', url: imlImg1 },
        { type: 'image', url: imlImg2 },
        { type: 'image', url: imlImgResult }
      ],
      githubUrl: "https://github.com/Clayton2394/Project_IML.git"
    },
    {
      title: "Duffle-Bag Patchwork & Upcycling",
      tags: ["Couture", "Upcycling", "Design", "Patchwork", "Cuir"],
      description: (
        <div className="flex flex-col gap-4">
          <p>
            Pour ce projet, j'ai vraiment voulu m'amuser avec les matières et la récup'. L'idée, c'était de créer un sac de voyage 100% unique à partir de pièces qui avaient déjà un vécu. J'ai assemblé un gros patchwork avec plein de trucs différents : du vieux jean, du tissu camouflage, de la flanelle, et même du tissu batik malaisien pour apporter une petite touche d'originalité.
          </p>
          <p>
            Pour les détails, j'ai récupéré du vrai cuir sur d'anciens manteaux, et j'ai eu l'occasion de tester la gravure laser directement sur le denim pour réaliser les motifs panthère et le lettrage "For Nothing".
          </p>
          <p>
            <strong>Ce que j'en retiens :</strong> Travailler des matières techniques comme le jean et le cuir demande une bonne rigueur. Et le petit clin d'œil perso dont je suis fier : avoir cousu le patch d'Efrei Design, pour marquer mon année en tant que président de l'asso !
          </p>
        </div>
      ),
      media: [
        { type: 'image', url: duffleImgMain },
        { type: 'image', url: duffleImg1 },
        { type: 'image', url: duffleImg2 }
      ]
    },
    {
      title: "Sac de Magnésie \"PG\"",
      tags: ["Couture", "Upcycling", "Modélisation 3D", "Escalade"],
      description: (
        <div className="flex flex-col gap-4">
          <p>
            Étant grimpeur, ça me tenait à cœur de fabriquer mon propre matos ! J'ai imaginé ce sac de magnésie en mode upcycling, avec un côté un peu streetwear qui change de ce qu'on voit d'habitude en salle. La structure est faite à partir de vieux pantalons en jean et de chutes de tissu camo que j'ai assemblés en patchwork.
          </p>
          <p>
            À l'intérieur, j'ai doublé le tout avec de la flanelle pour que la magnésie reste bien en place. J'ai aussi poussé le DIY jusqu'au bout : j'ai modélisé et imprimé mon propre mousqueton en 3D pour l'accrocher au baudrier, et j'ai utilisé de la paracorde pour le système de fermeture, histoire de rester dans l'esprit escalade.
          </p>
          <p>
            <strong>Ce que j'en retiens :</strong> La conception de A à Z d'un objet utilitaire qui allie couture complexe, modélisation 3D (mousqueton) et flocage personnalisé en cuir. C'est l'aboutissement parfait de ma démarche Maker appliquée au sport !
          </p>
        </div>
      ),
      media: [
        { type: 'image', url: magnesieImgMain },
        { type: 'image', url: magnesieImg1 },
        { type: 'image', url: magnesieImg2 },
        { type: 'image', url: magnesieImg3 },
        { type: 'image', url: magnesieImg4 }
      ]
    },
    {
      title: "Solveur du Problème de Transport (Recherche Opérationnelle)",
      tags: ["Python", "Recherche Opérationnelle", "Algorithmique", "CLI"],
      description: (
        <div className="flex flex-col gap-4">
          <p>
            Développement en équipe de 4 d'une application en ligne de commande (CLI) en Python pour modéliser et résoudre le problème de transport classique, en minimisant les coûts d'acheminement entre fournisseurs et clients.
          </p>
          <p>
            J'ai implémenté les algorithmes de résolution à la main sans bibliothèque externe : méthodes du coin Nord-Ouest et Balas-Hammer pour la solution initiale, parcours en largeur (BFS) pour valider le graphe connexe, puis la méthode du Stepping-Stone pour l'optimisation itérative.
          </p>
          <p>
            <strong>Ce que j'en retiens :</strong> Un excellent projet pour mettre en pratique des concepts mathématiques poussés et développer une logique d'optimisation stricte, tout en gérant le travail collaboratif de manière efficace.
          </p>
        </div>
      ),
      media: [
        { type: 'image', url: orProjectImg }
      ],
      githubUrl: "https://github.com/tarkhog25/Operations_Research_project.git"
    }
  ];

  const projects = allProjects.filter(p => isCouture ? p.tags.includes("Couture") : !p.tags.includes("Couture"));

  return (
    <section className={`py-24 px-6 relative ${isCouture ? 'bg-stone-50' : 'bg-slate-900'}`}>

      {isCouture && <div className="absolute inset-0 opacity-40 cutting-mat-bg pointer-events-none"></div>}

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${isCouture ? 'font-serif text-slate-800' : 'font-mono text-stone-50'}`}>
          {isCouture ? 'Portfolio Projets' : 'ls ./projects'}
        </h2>

        {isCouture ? (
          <div className="w-32 h-[2px] bg-slate-300 mx-auto mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[2px] bg-orange-500"></div>
          </div>
        ) : (
          <div className="w-24 h-px bg-green-500/50 mx-auto mb-16"></div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-${projects.length === 1 ? '1' : '2'} gap-8 max-w-${projects.length === 1 ? 'xl' : '6xl'} mx-auto`}>
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} isCouture={isCouture} />
          ))}
        </div>
      </div>
    </section>
  );
};



const CVViewer = ({ isCouture }) => (
  <section className={`py-24 px-6 relative ${isCouture ? 'bg-stone-50' : 'bg-slate-900'}`}>
    <div className={`absolute top-0 left-0 w-full ${isCouture ? 'border-t-[3px] border-dashed border-slate-300' : 'border-t border-slate-800'}`}></div>
    <div className="max-w-4xl mx-auto">
      <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${isCouture ? 'font-serif text-slate-800' : 'font-mono text-stone-50'}`}>
        {isCouture ? 'Mon Curriculum Vitae' : 'cat /docs/cv.pdf'}
      </h2>
      <div className={`w-full h-[80vh] border shadow-xl ${isCouture ? 'border-slate-300 bg-white' : 'border-slate-700 bg-slate-800'} overflow-hidden rounded-lg`}>
        <iframe
          src={cvPdf}
          title="CV Paul Gournay"
          className="w-full h-full"
          style={{ border: 'none' }}
        />
      </div>
      <div className="mt-8 text-center">
        <a
          href={cvPdf}
          download="CV_Paul_Gournay_Stage_Robotique_2026.pdf"
          className={`inline-block px-8 py-4 font-bold text-lg transition-all ${isCouture ? 'bg-slate-800 text-stone-50 rounded shadow-[4px_4px_0px_0px_rgba(249,115,22,1)] hover:translate-y-1 hover:shadow-none' : 'bg-transparent text-green-400 border-2 border-green-400 font-mono hover:bg-green-400 hover:text-slate-900'}`}
        >
          {isCouture ? 'Télécharger le PDF' : './download_cv.sh'}
        </a>
      </div>
    </div>
  </section>
);

const Footer = ({ isCouture }) => (
  <footer className={`py-12 text-center border-t-4 ${isCouture ? 'bg-slate-900 text-slate-400 border-orange-500' : 'bg-slate-950 text-slate-500 border-green-500'}`}>
    <div className="max-w-4xl mx-auto px-6">
      <h2 className={`text-2xl font-bold mb-6 ${isCouture ? 'text-stone-50 font-serif' : 'text-stone-50 font-mono'}`}>Contactez-moi</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-sm font-mono">
        <a href="mailto:paul.gournay@efrei.net" className={`flex items-center gap-2 transition-colors ${isCouture ? 'hover:text-orange-400' : 'hover:text-green-400'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          paul.gournay@efrei.net
        </a>
        <a href="tel:+33768768866" className={`flex items-center gap-2 transition-colors ${isCouture ? 'hover:text-orange-400' : 'hover:text-green-400'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          07 68 76 88 66
        </a>
      </div>

      <div className="flex justify-center gap-6 font-mono">
        <a href="https://linkedin.com/in/paul-gournay-358138291" target="_blank" rel="noreferrer" className={`text-stone-50 transition-colors font-medium ${isCouture ? 'hover:text-orange-500' : 'hover:text-green-400'}`}>
          LinkedIn
        </a>
        <a href="https://github.com/PaulGournay" target="_blank" rel="noreferrer" className={`text-stone-50 transition-colors font-medium ${isCouture ? 'hover:text-orange-500' : 'hover:text-green-400'}`}>
          GitHub
        </a>
        <a href="https://www.thingiverse.com/P0lfr/designs" target="_blank" rel="noreferrer" className={`text-stone-50 transition-colors font-medium ${isCouture ? 'hover:text-orange-500' : 'hover:text-green-400'}`}>
          Thingiverse
        </a>
      </div>
      <div className="mt-12 text-xs border-t border-slate-800 pt-6 font-mono opacity-50">
        © 2026 Paul Gournay
      </div>
    </div>
  </footer>
);


// --- SAS D'ENTRÉE (LANDING SCREEN) ---

const LandingScreen = ({ onSelectTheme }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-full flex flex-col overflow-hidden font-sans relative"
    >
      {/* Header en haut à gauche */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-50 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 pointer-events-none drop-shadow-xl">
        <h1 className="text-xl md:text-2xl font-bold bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white border border-white/20 shadow-lg font-mono">
          Paul.Gournay
        </h1>
        <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-md text-white px-4 py-2 rounded-full border border-slate-700/50">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <p className="text-xs font-mono uppercase tracking-[0.2em] font-bold">
            Portfolio
          </p>
        </div>
      </div>

      {/* Côté Code (Haut) */}
      <div
        onMouseEnter={() => setHoveredSection('code')}
        onMouseLeave={() => setHoveredSection(null)}
        className="relative bg-slate-900 flex flex-col items-center justify-center p-8 group overflow-hidden border-b-4 border-dashed border-orange-500 transition-all duration-700 ease-in-out"
        style={{ flex: hoveredSection === 'couture' ? 3 : 5 }}
      >
        {/* Lignes de code en fond */}
        <div className="absolute inset-0 opacity-10 font-mono text-xs text-green-400 p-8 pointer-events-none whitespace-pre select-none flex flex-col">
          {`function initializeSystem() {
  const hardware = connectToESP32();
  const brain = setupNeuralNetwork();
  hardware.onReady(() => {
    brain.execute(hardware);
  });
}
while(true) {
  listen();
}`}
        </div>

        <h2 className="text-4xl md:text-5xl font-mono font-bold text-stone-50 mb-4 text-center z-10 mt-16 md:mt-16">Ingénierie & Code</h2>
        <p className="text-slate-400 font-mono mb-8 text-center max-w-sm z-10 text-sm md:text-base">Systèmes embarqués, intelligence artificielle, algorithmique et développement logiciel.</p>

        {/* Bouton Clavier */}
        <button
          onClick={() => onSelectTheme('code')}
          className="relative group/btn z-10 focus:outline-none"
        >
          <div className="absolute inset-0 bg-green-600 rounded-xl translate-y-3 transition-transform group-active/btn:translate-y-1"></div>
          <div className="relative bg-slate-800 text-green-400 font-mono font-bold text-xl px-12 py-4 rounded-xl border-2 border-slate-700 uppercase tracking-widest transform transition-transform group-active/btn:translate-y-2 flex items-center gap-3">
            Enter
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </button>
      </div>

      {/* Côté Couture (Bas) */}
      <div
        onMouseEnter={() => setHoveredSection('couture')}
        onMouseLeave={() => setHoveredSection(null)}
        className={`relative bg-stone-50 cutting-mat-bg flex flex-col items-center justify-center group transition-all duration-700 ease-in-out overflow-hidden ${hoveredSection === 'couture' ? 'p-8' : 'p-4 md:p-8'}`}
        style={{ flex: hoveredSection === 'couture' ? 3 : 1 }}
      >
        <div className="absolute inset-0 bg-stone-50 opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>

        <div className={`flex flex-col items-center transition-transform duration-700 ${hoveredSection === 'couture' ? 'scale-100' : 'scale-90 md:scale-100'}`}>
          <h2 className={`font-serif font-bold text-slate-800 text-center transition-all duration-500 ${hoveredSection === 'couture' ? 'text-4xl md:text-5xl mb-4' : 'text-2xl md:text-3xl mb-2 md:mb-2'}`}>Atelier Couture</h2>
          <p className={`text-slate-500 font-mono text-center max-w-sm transition-all duration-500 ${hoveredSection === 'couture' ? 'text-sm md:text-base mb-8 h-auto opacity-100' : 'text-xs md:text-sm mb-4 md:mb-2 h-0 md:h-auto opacity-0 md:opacity-100 overflow-hidden'}`}>Design textile, modélisation 3D et confection sur-mesure.</p>

          {/* Composant Ciseaux Slider avec Canvas 3D */}
          <div className={`relative flex items-center transition-all duration-500 ${hoveredSection === 'couture' ? 'w-80 h-16 mt-2 opacity-100' : 'w-80 h-16 mt-2 opacity-100 md:h-0 md:mt-0 md:opacity-0 md:overflow-hidden'}`}>
            {/* Ligne pointillée type patron de couture */}
            <div className="absolute left-8 right-0 h-0 border-t-[3px] border-dashed border-slate-700 opacity-80 z-0"></div>

            {/* Texte d'indication */}
            <span className="absolute right-0 -top-6 text-slate-700 font-mono text-sm pointer-events-none uppercase tracking-widest font-bold">
              Couper ici &rarr;
            </span>

            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 260 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(e, info) => {
                setIsDragging(false);
                if (info.offset.x > 200) {
                  onSelectTheme('couture');
                }
              }}
              className="w-16 h-16 bg-transparent flex items-center justify-center cursor-grab active:cursor-grabbing z-10 relative drop-shadow-xl"
            >
              {/* Scène 3D des Ciseaux */}
              <div className="w-32 h-32 pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                  <ambientLight intensity={1} />
                  <directionalLight position={[5, 5, 5]} intensity={1.5} />
                  <directionalLight position={[-5, -5, -5]} intensity={0.5} />
                  <Scissors3D isDragging={isDragging} />
                </Canvas>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </motion.div>
  );
};


// --- COMPOSANT APP PRINCIPAL ---

export default function App() {
  const [currentView, setCurrentView] = useState('landing');

  if (currentView === 'landing') {
    return <LandingScreen onSelectTheme={setCurrentView} />;
  }

  const isCouture = currentView === 'couture';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`font-sans ${isCouture ? 'bg-stone-50 text-slate-800 selection:bg-orange-500' : 'bg-slate-900 text-stone-50 selection:bg-green-500'} selection:text-white min-h-screen relative`}
    >
      {/* Bouton retour au Landing */}
      <button
        onClick={() => setCurrentView('landing')}
        className={`fixed top-4 left-4 z-50 px-4 py-2 backdrop-blur rounded font-mono text-xs transition-colors border ${isCouture ? 'bg-white/50 border-slate-300 text-slate-600 hover:bg-orange-500 hover:text-white hover:border-orange-500' : 'bg-slate-800/50 border-slate-600 text-slate-400 hover:bg-green-500 hover:text-slate-900 hover:border-green-500'}`}
      >
        &larr; Retour
      </button>

      <Hero isCouture={isCouture} />
      <Portfolio isCouture={isCouture} />
      <CVViewer isCouture={isCouture} />
      <Footer isCouture={isCouture} />
    </motion.div>
  );
}