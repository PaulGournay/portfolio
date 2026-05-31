import React from 'react';
import { motion } from 'framer-motion';

export function Experience() {
  const experiences = [
    {
      year: "2023 - 2028",
      title: "Cycle Ingénieur",
      institution: "Efrei Paris",
      description: "Top 8% de la promotion. Spécialisation en Robotique et Systèmes Embarqués.",
      type: "education"
    },
    {
      year: "2025",
      title: "Semestre d'échange anglophone",
      institution: "Asia Pacific University, Malaisie",
      description: "Approfondissement en Machine Learning et Data Science dans un environnement international.",
      type: "education"
    },
    {
      year: "2025",
      title: "Stage SWIM - ONG KosaBrin",
      institution: "Slovénie",
      description: "Éco-construction et conception d'infrastructures en matériaux de récupération.",
      type: "experience"
    }
  ];

  return (
    <section id="parcours" className="py-20 relative bg-[#121214]/50 border-y border-[#2b2b30] backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#f3f3f0] mb-4">
            Parcours & Expérience
          </h2>
          <p className="text-[#e6e6e0]/70 font-mono text-sm">
            {'//'} Timeline académique et professionnelle
          </p>
        </motion.div>

        <div className="relative border-l border-dashed border-[#2b2b30] ml-3 md:ml-0 md:border-none">
          {/* Ligne centrale pour desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-transparent border-l border-dashed border-[#2b2b30] -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Point central de la timeline */}
                <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-[#ff6a00] rounded-full md:-translate-x-[5.5px] mt-2 md:mt-0 shadow-[0_0_10px_#ff6a00]"></div>
                
                {/* Contenu */}
                <div className="md:w-1/2 pl-6 md:pl-0 flex flex-col justify-start">
                  <div className={`p-6 bg-[#1e1e22]/80 backdrop-blur-sm rounded-lg border border-[#2b2b30] hover:border-[#ff6a00]/50 transition-colors ${
                    index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                  }`}>
                    <span className="inline-block px-2 py-1 mb-3 text-xs font-mono font-bold bg-[#ff6a00]/10 text-[#ff6a00] rounded">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-bold text-[#f3f3f0] mb-1">{exp.title}</h3>
                    <h4 className="text-md text-[#e6e6e0]/80 mb-3">{exp.institution}</h4>
                    <p className="text-[#e6e6e0]/60 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                {/* Espace vide pour l'autre moitié sur desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
