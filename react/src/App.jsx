import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Scissors3D from './components/Scissors3D';
import photoProfile from './assets/photocvpng.png';
import logigameVideo from './assets/LogiGame_Demo.mp4';

// --- COMPOSANTS RÉUTILISABLES ---

const SkillBadge = ({ skill, isCouture }) => (
  <span className={`${isCouture ? 'woven-label px-4 py-1.5 hover:border-orange-500 hover:text-orange-500 hover:-rotate-1' : 'bg-slate-800 border border-slate-600 px-3 py-1 text-green-400 hover:bg-slate-700 hover:text-green-300'} text-sm font-mono transition-colors inline-block transform cursor-default`}>
    {skill}
  </span>
);

const ProjectCard = ({ title, tags, description, has3DViewer, videoUrl, githubUrl, isCouture }) => (
  <div className={`relative p-6 flex flex-col group mt-4 ${isCouture ? 'bg-white border-zigzag shadow-brutal' : 'bg-slate-800 border-2 border-slate-700 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.5)]'}`}>
    
    {isCouture && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-slate-200/80 backdrop-blur-sm border border-slate-300 shadow-sm rotate-[-2deg] z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-slate-400 shadow-inner"></div>
      </div>
    )}

    <div className={`mb-6 h-48 border flex items-center justify-center overflow-hidden relative transition-colors ${isCouture ? 'bg-stone-100 border-slate-200 cutting-mat-bg group-hover:bg-slate-50' : 'bg-slate-900 border-slate-600'}`}>
      {has3DViewer ? (
        <div className="text-slate-400 text-sm flex flex-col items-center p-4 text-center font-mono">
          <svg className="w-8 h-8 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
          <span>[ Espace Viewer 3D Thingiverse à intégrer ici ]</span>
        </div>
      ) : videoUrl ? (
        <video 
          src={videoUrl} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-slate-400 text-sm flex flex-col items-center font-mono">
          <svg className="w-8 h-8 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          [ Insérer Image ou Vidéo ici ]
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
    <p className={`text-sm leading-relaxed flex-grow border-t pt-4 mt-2 mb-6 ${isCouture ? 'text-slate-600 border-dashed border-slate-200' : 'text-slate-400 border-solid border-slate-700'}`}>
      {description}
    </p>
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

const TimelineItem = ({ year, title, subtitle, description, isCouture }) => (
  <div className="relative pl-8 sm:pl-32 py-8 group">
    <div className={`absolute left-4 sm:left-[7.5rem] top-0 bottom-0 ${isCouture ? 'w-[2px] bg-orange-500 group-last:bg-gradient-to-b group-last:from-orange-500 group-last:to-transparent' : 'w-px border-l-2 border-dashed border-green-500/50 group-last:border-none'}`}></div>
    
    <div className={`absolute top-9 shadow-sm transition-transform group-hover:scale-125 ${isCouture ? 'left-3 sm:left-[7.25rem] w-5 h-5 bg-stone-50 border-4 border-orange-500 rounded-full' : 'left-3.5 sm:left-[7.3rem] w-3 h-3 bg-green-400'}`}></div>

    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:mb-0">
      <div className={`sm:absolute sm:left-0 sm:w-24 font-mono font-bold sm:text-right mt-1 sm:mt-0 text-lg ${isCouture ? 'text-orange-500' : 'text-green-400'}`}>
        {isCouture ? year : `[${year}]`}
      </div>
      <div className={`p-6 border relative ml-2 w-full transition-shadow ${isCouture ? 'bg-white border-slate-200 shadow-sm hover:shadow-brutal' : 'bg-slate-800/80 backdrop-blur border-slate-700 hover:border-green-400'}`}>
        {isCouture && <div className="absolute top-5 -left-4 w-4 h-px border-t-[2px] border-dashed border-orange-500"></div>}
        
        <h4 className={`text-2xl font-bold ${isCouture ? 'font-serif text-slate-800' : 'font-mono text-stone-50'}`}>{title}</h4>
        <div className={`text-sm font-mono mb-3 ${isCouture ? 'text-slate-500' : 'text-green-600'}`}>{isCouture ? subtitle : `sys.source > ${subtitle}`}</div>
        {description && <p className={`text-sm pt-3 ${isCouture ? 'text-slate-600 border-t border-dashed border-slate-200' : 'text-slate-400 border-t border-slate-700'}`}>{description}</p>}
      </div>
    </div>
  </div>
);

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
        Étudiant Ingénieur en <span className={`font-bold ${isCouture ? 'text-blue-600' : 'text-green-400'}`}>Robotique & Systèmes Embarqués</span> | Maker & Créateur
      </h2>
      <p className={`text-lg max-w-2xl mx-auto mb-10 leading-relaxed border-t border-b py-6 ${isCouture ? 'text-slate-600 border-dashed border-slate-300' : 'font-mono text-slate-400 border-solid border-slate-700'}`}>
        Passionné par la conception de systèmes de A à Z. J'assemble des lignes de code, des composants électroniques et des tissus pour créer des projets fonctionnels et innovants. En recherche de stage (20 semaines) à partir de novembre 2026.
      </p>

      <a href="/CV_2026_Stage_Paul_Gournay.pdf" target="_blank" rel="noreferrer"
        className={`inline-block px-8 py-4 font-bold text-lg transition-all ${isCouture ? 'bg-slate-800 text-stone-50 rounded shadow-[4px_4px_0px_0px_rgba(249,115,22,1)] hover:translate-y-1 hover:shadow-none' : 'bg-transparent text-green-400 border-2 border-green-400 font-mono hover:bg-green-400 hover:text-slate-900'}`}>
        {isCouture ? 'Télécharger mon CV' : './download_cv.sh'}
      </a>
    </div>
  </section>
);

const Skills = ({ isCouture }) => {
  const allCategories = [
    {
      title: "Embarqué & Électronique",
      icon: "⚡",
      skills: ["C/C++ (ESP32/Arduino)", "VHDL (FPGA)", "Rétro-ingénierie", "IoT"]
    },
    {
      title: "Software & Data",
      icon: "💻",
      skills: ["Python", "Vue.js", "Node.js", "Machine Learning (Scikit-learn)"]
    },
    {
      title: "Maker & Design",
      icon: "🧵",
      skills: ["Impression 3D (Fusion 360)", "Couture (Création textile)", "Président asso Efrei Design"]
    }
  ];

  const skillCategories = allCategories.filter(cat => isCouture ? cat.title === "Maker & Design" : cat.title !== "Maker & Design");

  return (
    <section className={`py-24 px-6 relative overflow-hidden ${isCouture ? 'bg-slate-900 text-stone-50' : 'bg-slate-950 text-stone-50'}`}>
      
      {isCouture ? (
        <>
          <div className="absolute inset-0 opacity-10 cross-stitch-bg pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full border-t-[3px] border-dashed border-orange-500/60"></div>
        </>
      ) : (
        <div className="absolute top-0 left-0 w-full border-t border-slate-800"></div>
      )}

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center text-stone-50 ${isCouture ? 'font-serif' : 'font-mono'}`}>{isCouture ? 'Ma Boîte à Outils' : 'sys.get_capabilities()'}</h2>
        <div className={`grid grid-cols-1 md:grid-cols-${isCouture ? '1' : '2'} gap-10 max-w-${isCouture ? 'md' : '4xl'} mx-auto`}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={`p-8 relative group shadow-lg ${isCouture ? 'bg-slate-800/80 backdrop-blur-sm border border-slate-700' : 'bg-slate-900 border border-slate-800'}`}>
              
              {isCouture && (
                <>
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-orange-500/50"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-orange-500/50"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-orange-500/50"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-orange-500/50"></div>
                </>
              )}
              
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">{cat.icon}</div>
              <h3 className={`text-xl font-bold mb-6 pb-4 ${isCouture ? 'font-serif text-stone-100 border-b border-dashed border-slate-600' : 'font-mono text-green-400 border-b border-slate-700'}`}>{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <SkillBadge key={sIdx} skill={skill} isCouture={isCouture} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ isCouture }) => {
  const allProjects = [
    {
      title: "Passerelle Vocale Hi-Fi",
      tags: ["C++", "ESP32", "API SinricPro", "IoT", "Électronique"],
      description: "Rétro-ingénierie d'un protocole infrarouge propriétaire de 48 bits et conception d'une passerelle vocale (Google Home) avec dimensionnement d'un circuit d'amplification NPN.",
      has3DViewer: false
    },
    {
      title: "Timer Pomodoro « Studycount »",
      tags: ["C++", "ESP32", "Impression 3D", "E-paper"],
      description: "Conception complète d'un timer connecté. (Boîtier modélisé et imprimé en 3D).",
      has3DViewer: true,
      githubUrl: "https://github.com/PaulGournay/StudyCount.git"
    },
    {
      title: "LogiGame",
      tags: ["VHDL", "FPGA Xilinx Artix-7", "Vivado", "Architecture Matérielle"],
      description: "Conception d'un cœur de microcontrôleur sur carte ARTY. Intégration d'une UAL, mémoires et automates à états finis.",
      has3DViewer: false,
      videoUrl: logigameVideo,
      githubUrl: "https://github.com/Sowker/VHDL2.git"
    },
    {
      title: "Créations Textiles & Ingénierie Pratique",
      tags: ["Design", "Couture", "Matériaux techniques"],
      description: "Transfert de mes compétences de conception 3D vers le textile. Réalisation de A à Z d'un Duffle Bag robuste et d'un sac de magnésie pour l'escalade (optimisé pour la préhension).",
      has3DViewer: false
    }
  ];

  const projects = allProjects.filter(p => isCouture ? p.tags.includes("Couture") : !p.tags.includes("Couture"));

  return (
    <section className={`py-24 px-6 relative ${isCouture ? 'bg-stone-50' : 'bg-slate-900'}`}>
      
      {isCouture && <div className="absolute inset-0 opacity-40 cutting-mat-bg pointer-events-none"></div>}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${isCouture ? 'font-serif text-slate-800' : 'font-mono text-stone-50'}`}>
          {isCouture ? 'Portfolio Projets' : 'dir ./projects'}
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

const Experience = ({ isCouture }) => {
  const timeline = [
    {
      year: "2023 - 2028",
      title: "Cycle Ingénieur",
      subtitle: "Efrei Paris",
      description: "Classé dans le top 8% de la promotion (Prépa intégrée)."
    },
    {
      year: "2025",
      title: "Semestre d'échange anglophone",
      subtitle: "Asia Pacific University, Malaisie",
      description: "Machine Learning et Data Science."
    },
    {
      year: "2025",
      title: "Stage SWIM (Bénévole International)",
      subtitle: "ONG KosaBrin, Slovénie",
      description: "Éco-construction et infrastructures en matériaux de récupération."
    }
  ];

  return (
    <section className={`py-24 px-6 relative ${isCouture ? 'bg-white' : 'bg-slate-950'}`}>
      <div className={`absolute top-0 left-0 w-full ${isCouture ? 'border-t-[3px] border-dashed border-slate-300' : 'border-t border-slate-800'}`}></div>

      <div className="max-w-3xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${isCouture ? 'font-serif text-slate-800' : 'font-mono text-stone-50'}`}>
          {isCouture ? 'Parcours & Expérience' : 'cat /var/log/experience.log'}
        </h2>
        <div className={isCouture ? 'border-zigzag p-6 md:p-12 bg-stone-50 shadow-brutal' : 'border border-slate-800 p-6 md:p-12 bg-slate-900/50'}>
          {timeline.map((item, idx) => (
            <TimelineItem key={idx} {...item} isCouture={isCouture} />
          ))}
        </div>
      </div>
    </section>
  );
};

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
        <a href="#" target="_blank" rel="noreferrer" className={`text-stone-50 transition-colors font-medium ${isCouture ? 'hover:text-orange-500' : 'hover:text-green-400'}`}>
          GitHub
        </a>
        <a href="#" target="_blank" rel="noreferrer" className={`text-stone-50 transition-colors font-medium ${isCouture ? 'hover:text-orange-500' : 'hover:text-green-400'}`}>
          Thingiverse
        </a>
      </div>
      <div className="mt-12 text-xs border-t border-slate-800 pt-6 font-mono opacity-50">
        © 2026 Paul GOURNAY. Fait avec React & Tailwind CSS. Assemblé à la main.
      </div>
    </div>
  </footer>
);


// --- SAS D'ENTRÉE (LANDING SCREEN) ---

const LandingScreen = ({ onSelectTheme }) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-full flex flex-col md:flex-row overflow-hidden font-sans relative"
    >
      
      {/* Header Central / Titre Portfolio */}
      <div className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-none drop-shadow-xl text-center w-full">
        <h1 className="text-3xl md:text-5xl font-bold bg-white/90 backdrop-blur-md px-8 py-3 rounded-full text-slate-900 shadow-lg font-serif">
          Paul Gournay
        </h1>
        <div className="mt-4 flex items-center gap-4 bg-slate-900 text-white px-6 py-2 rounded-full shadow-xl border border-slate-700">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <p className="text-sm md:text-base font-mono uppercase tracking-[0.3em] font-bold">
            Portfolio
          </p>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
        </div>
      </div>

      {/* Côté Couture (Gauche) */}
      <div className="relative flex-1 bg-stone-50 cutting-mat-bg flex flex-col items-center justify-center p-8 border-b-4 md:border-b-0 md:border-r-4 border-dashed border-orange-500 group">
        <div className="absolute inset-0 bg-stone-50 opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-800 mb-6 text-center">Atelier Couture</h2>
        <p className="text-slate-500 font-mono mb-16 text-center max-w-sm">Design textile, modélisation 3D et confection sur-mesure.</p>
        
        {/* Composant Ciseaux Slider avec Canvas 3D */}
        <div className="relative w-80 h-16 flex items-center mt-4">
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

      {/* Côté Code (Droite) */}
      <div className="relative flex-1 bg-slate-900 flex flex-col items-center justify-center p-8 group overflow-hidden">
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
        
        <h2 className="text-4xl md:text-6xl font-mono font-bold text-stone-50 mb-6 text-center z-10">Ingénierie & Code</h2>
        <p className="text-slate-400 font-mono mb-16 text-center max-w-sm z-10">Systèmes embarqués, VHDL, robotique et développement logiciel.</p>
        
        {/* Bouton Clavier */}
        <button 
          onClick={() => onSelectTheme('code')}
          className="relative group/btn z-10 focus:outline-none"
        >
          <div className="absolute inset-0 bg-green-600 rounded-xl translate-y-3 transition-transform group-active/btn:translate-y-1"></div>
          <div className="relative bg-slate-800 text-green-400 font-mono font-bold text-xl px-12 py-6 rounded-xl border-2 border-slate-700 uppercase tracking-widest transform transition-transform group-active/btn:translate-y-2 flex items-center gap-3">
            Enter
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </button>
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
      <Skills isCouture={isCouture} />
      <Portfolio isCouture={isCouture} />
      <Experience isCouture={isCouture} />
      <Footer isCouture={isCouture} />
    </motion.div>
  );
}