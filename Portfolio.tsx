import { motion } from 'motion/react';
import { ArrowRight, ArrowDownRight, Sparkles, Download, ExternalLink } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Top Status Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-6 mb-12 gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-mono uppercase tracking-widest text-white/70">Open for new projects</span>
          </div>
          <div className="text-sm font-mono uppercase tracking-widest text-white/50">
            Based in India • Worldwide
          </div>
        </motion.div>

        {/* Massive Typography */}
        <div className="mb-16 relative">
          {/* Graphic Design Tool Animation (Bezier Curve) */}
          <div className="absolute -top-20 right-[10%] w-64 h-64 pointer-events-none hidden lg:block opacity-30 z-0">
            <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
              <motion.path
                d="M 20 180 C 20 80, 180 120, 180 20"
                fill="transparent"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="400"
                initial={{ strokeDashoffset: 400 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              />
              {/* Anchor Points */}
              <motion.circle cx="20" cy="180" r="4" fill="white" />
              <motion.circle cx="180" cy="20" r="4" fill="white" />
              {/* Handles */}
              <motion.line x1="20" y1="180" x2="20" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <motion.line x1="180" y1="20" x2="180" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <motion.circle cx="20" cy="80" r="3" fill="transparent" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
              <motion.circle cx="180" cy="120" r="3" fill="transparent" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            </svg>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase relative z-10"
          >
            Pravin <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30 italic pr-4">
              Dawar
            </span>
          </motion.h1>
        </div>

        {/* Bento Grid Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Intro Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 lg:col-span-6 glass-panel p-8 flex flex-col justify-between bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Sparkles className="text-white/40 mb-6" size={32} />
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8">
              A multidisciplinary designer specializing in <span className="text-white font-medium">Graphic Design</span>, <span className="text-white font-medium">UI/UX</span>, and <span className="text-white font-medium">Motion</span>. I craft visual identities that demand attention.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                View Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/10 transition-colors"
              >
                Let's Talk
              </a>
              <a 
                href="https://drive.google.com/uc?export=download&id=1KlOmdYAhbWyYfyS7WMNf6LHcB3dGUp_-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/10 transition-colors overflow-hidden"
              >
                <span>Download CV</span>
                <div className="relative w-5 h-5 [perspective:1000px]">
                  <div className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateX(-180deg)]">
                    <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center">
                      <Download size={18} />
                    </div>
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(180deg)] flex items-center justify-center">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Stats / Highlight Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-5 lg:col-span-3 glass-panel p-8 flex flex-col justify-between bg-[#111] border-white/5"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50">Experience</span>
              <ArrowDownRight className="text-white/30" />
            </div>
            <div>
              <h3 className="font-display text-7xl font-bold mb-2">5+</h3>
              <p className="text-white/60 text-sm uppercase tracking-wider">Years of crafting<br/>digital experiences</p>
            </div>
          </motion.div>

          {/* Video/Reel Teaser Box (Placeholder) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex lg:col-span-3 glass-panel p-2 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img 
              src="https://ik.imagekit.io/pravindawar28/fauji-360.jpg" 
              alt="Showreel Teaser" 
              className="w-full h-full object-cover rounded-xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowRight size={20} className="-rotate-45" />
              </div>
              <p className="text-sm font-medium uppercase tracking-wider">Play Showreel</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 text-sm font-mono uppercase tracking-widest text-white/40">
              <span>Graphic Design</span>
              <span className="text-white/20">✦</span>
              <span>UI/UX Design</span>
              <span className="text-white/20">✦</span>
              <span>Video Editing</span>
              <span className="text-white/20">✦</span>
              <span>Brand Identity</span>
              <span className="text-white/20">✦</span>
              <span>Motion Graphics</span>
              <span className="text-white/20">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
