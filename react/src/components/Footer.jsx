import React from 'react';
import { Linkedin, Github, Mail, Phone, Wrench } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#121214] border-t border-[#2b2b30] pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#ff6a00]/30 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold font-mono text-[#f3f3f0] mb-4 flex items-center gap-2">
              <span className="text-[#ff6a00]">&lt;</span> Let's Connect <span className="text-[#ff6a00]">/&gt;</span>
            </h3>
            <p className="text-[#e6e6e0]/70 mb-6 max-w-sm">
              À la recherche d'un stage de 20 semaines en Robotique & Systèmes Embarqués à partir de novembre 2026.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:contact@paulgournay.com" className="flex items-center gap-3 text-[#e6e6e0] hover:text-[#ff6a00] transition-colors w-fit group">
                <div className="p-2 bg-[#1e1e22] border border-[#2b2b30] rounded group-hover:border-[#ff6a00]/50 transition-colors">
                  <Mail size={18} />
                </div>
                <span>contact@paulgournay.com</span>
              </a>
              <a href="tel:+33000000000" className="flex items-center gap-3 text-[#e6e6e0] hover:text-[#ff6a00] transition-colors w-fit group">
                <div className="p-2 bg-[#1e1e22] border border-[#2b2b30] rounded group-hover:border-[#ff6a00]/50 transition-colors">
                  <Phone size={18} />
                </div>
                <span>+33 6 00 00 00 00</span>
              </a>
            </div>
          </div>
          
          <div className="flex md:justify-end">
            <div>
              <h4 className="text-lg font-bold font-mono text-[#f3f3f0] mb-4">Réseaux & Liens</h4>
              <div className="flex flex-col gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#e6e6e0] hover:text-[#ff6a00] transition-colors">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#e6e6e0] hover:text-[#ff6a00] transition-colors">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#e6e6e0] hover:text-[#ff6a00] transition-colors">
                  <Wrench size={20} />
                  <span>Thingiverse</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-dashed border-[#2b2b30] text-center text-[#e6e6e0]/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Paul Gournay. Tous droits réservés.</p>
          <p className="font-mono text-xs">
            Fait avec <span className="text-[#ff6a00]">♥</span>, React & beaucoup de café
          </p>
        </div>
      </div>
    </footer>
  );
}
