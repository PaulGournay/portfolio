import React from 'react';
import { motion } from 'framer-motion';
import { SkillBadge } from './SkillBadge';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectCard({ title, description, tags, link, github, image, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="border-stitched bg-[#121214]/80 backdrop-blur-sm p-5 flex flex-col h-full group hover:border-[#ff6a00]/50 transition-colors"
    >
      {/* Optional Image or 3D Viewer slot */}
      <div className="w-full aspect-video bg-[#1e1e22] rounded-md mb-4 overflow-hidden border border-[#2b2b30] flex items-center justify-center relative">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" />
        ) : children ? (
          children
        ) : (
          <div className="text-[#e6e6e0]/50 font-mono text-sm border-dashed-custom w-[90%] h-[80%] flex items-center justify-center rounded">
            [Espace Visuel / 3D]
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold font-mono text-[#f3f3f0] mb-2 group-hover:text-[#ff6a00] transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-[#e6e6e0]/80 mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {tags.map((tag, idx) => (
          <SkillBadge key={idx} delay={delay + 0.1 + (idx * 0.05)}>{tag}</SkillBadge>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-dashed border-[#2b2b30]">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 text-[#e6e6e0] hover:text-[#ff6a00] transition-colors">
            <ExternalLink size={16} />
            <span>Voir le projet</span>
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 text-[#e6e6e0] hover:text-[#ff6a00] transition-colors">
            <Github size={16} />
            <span>Code source</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
