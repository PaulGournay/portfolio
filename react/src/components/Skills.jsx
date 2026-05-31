import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Scissors } from 'lucide-react';

export function Skills() {
  const categories = [
    {
      title: "Embarqué & Électronique",
      icon: <Cpu className="text-[#ff6a00] mb-4" size={32} />,
      skills: ["C/C++ (ESP32/Arduino)", "VHDL (FPGA)", "Rétro-ingénierie", "IoT", "Dimensionnement électronique"]
    },
    {
      title: "Software & Data",
      icon: <Code2 className="text-[#ff6a00] mb-4" size={32} />,
      skills: ["Python", "Vue.js", "React", "Node.js", "Machine Learning", "Scikit-learn", "Data Science"]
    },
    {
      title: "Maker & Design",
      icon: <Scissors className="text-[#ff6a00] mb-4" size={32} />,
      skills: ["Impression 3D", "Fusion 360", "Couture / Création textile", "Matériaux techniques", "Prototypage rapide"]
    }
  ];

  return (
    <section id="competences" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#f3f3f0] mb-4 inline-block relative">
            Ma Boîte à Outils
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent opacity-50"></span>
          </h2>
          <p className="text-[#e6e6e0]/70 font-mono text-sm max-w-2xl mx-auto">
            {'//'} Hardware, Software et Physique : Une approche multidisciplinaire
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border-stitched bg-[#1e1e22]/80 backdrop-blur-sm p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              {category.icon}
              <h3 className="text-xl font-bold font-mono text-[#f3f3f0] mb-6 pb-4 border-b border-dashed border-[#2b2b30] group-hover:border-[#ff6a00]/50 transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-start text-[#e6e6e0]/80">
                    <span className="text-[#ff6a00] mr-2 text-lg leading-none">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
