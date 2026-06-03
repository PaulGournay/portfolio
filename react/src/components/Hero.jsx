import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import profileImg from '../assets/photocvpng.png';
import cvPdf from '../assets/CV_Paul_Gournay_Stage_Robotique_2026_new3.pdf';

export function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex flex-col justify-center relative pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-6 w-full grid md:grid-cols-[1fr_auto] gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <div className="inline-block mb-4 px-3 py-1 border border-dashed border-[#ff6a00]/50 rounded-full text-[#ff6a00] font-mono text-sm">
            Hello World / Bonjour
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#f3f3f0] mb-4">
            Paul <span className="text-gradient">GOURNAY</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-[#e6e6e0]/80 font-mono mb-8 border-l-2 border-[#ff6a00] pl-4 py-1">
            Étudiant Ingénieur en Robotique & Systèmes Embarqués <br className="hidden md:block" />
            <span className="text-[#ff6a00]/80">| Maker & Créateur</span>
          </h2>

          <p className="text-[#e6e6e0]/70 text-lg mb-10 max-w-2xl leading-relaxed">
            Passionné par la conception de systèmes de A à Z. J'assemble des lignes de code, des composants électroniques et des tissus pour créer des projets fonctionnels et innovants. En recherche de stage (20 semaines) à partir de novembre 2026.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={cvPdf}
              download="CV_Paul_Gournay_Stage_Robotique_2026.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff6a00] text-[#121214] font-bold rounded hover:bg-[#ff8b3d] transition-colors relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              <span>Télécharger mon CV</span>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#2b2b30] text-[#f3f3f0] font-bold rounded hover:border-[#ff6a00] hover:text-[#ff6a00] transition-colors bg-[#1e1e22]/50 backdrop-blur-sm"
            >
              Voir mes projets
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end relative"
        >
          <div className="relative w-64 h-[22rem] md:w-80 md:h-[28rem] flex items-end justify-center group mt-8 md:mt-0">
            {/* Dynamic glowing background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 bg-[#ff6a00]/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>

            {/* Floating tech rings */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full border border-dashed border-[#ff6a00]/30 animate-[spin_40s_linear_infinite] opacity-60"></div>
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-52 h-52 md:w-64 md:h-64 rounded-full border border-[#ff6a00]/20 animate-[spin_30s_linear_infinite_reverse] opacity-80"></div>

            {/* Bottom pedestal to anchor the portrait */}
            <div className="absolute bottom-0 w-[120%] h-32 bg-gradient-to-t from-[#121214] via-[#121214]/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute bottom-6 w-4/5 h-1 bg-gradient-to-r from-transparent via-[#ff6a00]/50 to-transparent z-20 blur-sm"></div>
            <div className="absolute bottom-6 w-3/5 h-[1px] bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent z-20"></div>

            {/* The photo itself */}
            <div className="relative z-10 w-full h-full flex items-end justify-center">
              <img
                src={profileImg}
                alt="Paul Gournay"
                className="w-auto h-full object-contain object-bottom filter drop-shadow-[0_0_20px_rgba(255,106,0,0.15)] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:drop-shadow-[0_10px_25px_rgba(255,106,0,0.3)]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#competences" className="text-[#e6e6e0]/50 hover:text-[#ff6a00] transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
