import { motion } from 'motion/react';
import { Menu, X, PenTool } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'My Work', href: '#my-work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Left Logo */}
      <div className="fixed top-6 left-6 z-50 mix-blend-difference">
        <a href="#" className="font-display font-black text-2xl tracking-tighter text-white flex items-center gap-2 group">
          <PenTool size={24} className="group-hover:rotate-12 transition-transform" /> 
          PD<span className="text-white/50">.</span>
        </a>
      </div>

      {/* Top Right CTA */}
      <div className="fixed top-6 right-6 z-50 hidden md:block mix-blend-difference">
        <a href="#contact" className="text-xs font-mono uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
          Start a Project
        </a>
      </div>

      {/* Floating Pill Navigation (Center Bottom) */}
      <motion.div 
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-full flex items-center gap-2 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-6 py-3 rounded-full text-sm font-medium text-white/70 hover:text-black hover:bg-white transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Mobile Menu Button */}
      <button 
        className="fixed top-6 right-6 z-50 md:hidden text-white mix-blend-difference"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
          animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center"
        >
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-4xl font-bold text-white hover:text-white/50 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#contact" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 text-sm font-mono uppercase tracking-widest text-white border-b border-white/30 pb-1"
            >
              Start a Project
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
}
