import React from 'react';
import { motion } from 'framer-motion';

export function SkillBadge({ children, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#1e1e22] text-[#e6e6e0] border border-[#2b2b30] hover:border-[#ff6a00] hover:text-[#ff6a00] transition-colors cursor-default"
    >
      {children}
    </motion.span>
  );
}
