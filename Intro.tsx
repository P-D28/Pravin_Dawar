import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Behance', url: 'https://www.behance.net/pravindawar28' },
    { name: 'Instagram', url: 'https://www.instagram.com/dcreations05/' },
    { name: 'LinkedIn', url: 'https://in.linkedin.com/in/pravindawar28' },
    { name: 'Dribbble', url: 'https://dribbble.com/pravindawar28' },
    { name: 'Facebook', url: 'https://www.facebook.com/parvin.dawar/' },
  ];

  return (
    <footer className="relative bg-[#050505] pt-20 pb-32 md:pb-40 overflow-hidden border-t border-white/10">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-md h-[100px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 mb-20">
          {/* Left Column: Brand */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display font-black text-4xl md:text-5xl tracking-tighter text-white mb-4">
                PRAVIN DAWAR<span className="text-white/50">.</span>
              </h2>
              <p className="text-white/50 font-mono text-sm uppercase tracking-widest max-w-sm leading-relaxed">
                Elevating brands through strategic design and digital innovation.
              </p>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-white/40 font-mono text-xs uppercase tracking-widest mb-2">Navigation</h3>
              <a href="#services" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Services</a>
              <a href="#projects" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Projects</a>
              <a href="#my-work" className="text-white/70 hover:text-white transition-colors text-sm font-medium">My Work</a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Contact</a>
            </div>
            
            <div className="flex flex-col gap-4 sm:col-span-2">
              <h3 className="text-white/40 font-mono text-xs uppercase tracking-widest mb-2">Socials</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center justify-between text-white/70 hover:text-white transition-colors text-sm font-medium border-b border-white/10 hover:border-white/30 pb-2"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Massive Typography Footer Bottom */}
        <div className="flex flex-col items-center justify-center border-t border-white/10 pt-12">
          <h1 className="text-[12vw] leading-none font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent tracking-tighter select-none pointer-events-none text-center w-full">
            DCREATIONS
          </h1>
          
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 text-xs font-mono uppercase tracking-widest text-white/40">
            <p>© {currentYear} Pravin Dawar.</p>
            <p>All Systems Operational.</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Work
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
