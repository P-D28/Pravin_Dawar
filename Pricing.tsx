import { motion } from 'motion/react';
import { Instagram, Linkedin, Dribbble, Facebook } from 'lucide-react';

const BehanceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.98 12.14c1.66 0 2.84-.94 2.84-2.5 0-1.57-1.1-2.43-2.65-2.43H4v5.04h4.98zm-2.5-3.6h2.2c.78 0 1.25.35 1.25 1.05 0 .72-.48 1.1-1.28 1.1H6.48v-2.15zm2.75 8.16c1.8 0 3.12-1 3.12-2.77 0-1.74-1.25-2.6-2.95-2.6H4v5.37h5.23zm-2.75-4.03h2.46c.9 0 1.48.42 1.48 1.2 0 .8-.58 1.25-1.5 1.25H6.48v-2.45zm13.1-2.9c-2.8 0-4.8 2.05-4.8 4.9 0 2.8 1.9 4.9 4.75 4.9 2.45 0 4.1-1.35 4.55-3.3h-2.35c-.3.8-1.1 1.35-2.15 1.35-1.4 0-2.35-1.05-2.45-2.55h7.1c.05-.3.05-.6.05-.9 0-2.6-1.8-4.4-4.7-4.4zm-2.4 3.35c.2-1.2 1.1-2.05 2.35-2.05 1.25 0 2.1.8 2.25 2.05h-4.6zm4.6-6.1h-4.5v1.5h4.5v-1.5z"/>
  </svg>
);

export function Intro() {
  const skills = ["Product Design", "UX Design", "UI Design", "Figma", "Branding", "Graphic Designer", "Video Editor"];
  
  const experience = [
    { role: "Freelance", company: "Open Work", year: "2021" },
    { role: "UX/UI Designer", company: "All Digital", year: "2024" },
    { role: "Graphic Designer", company: "All Digital", year: "2024" },
    { role: "Video Editor", company: "All Digital", year: "2024" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 items-stretch">
          
          {/* Left Card - Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-6 flex flex-col"
          >
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/5] bg-zinc-900">
              <img 
                src="https://ik.imagekit.io/pravindawar28/PD%20IMG%20for%20DP%20Profiles%20/freepik__transform-this-image-into-a-professional-studio-po__13901.png?updatedAt=1772107197018" 
                alt="Pravin Dawar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 whitespace-nowrap">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-white">Available for work</span>
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold mb-2">Hello I am Pravin Dawar</h3>
            <p className="text-white/60 text-sm mb-6">Graphic & UI/UX Designer + Video Editor</p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a href="https://www.behance.net/pravindawar28" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                <BehanceIcon />
              </a>
              <a href="https://www.instagram.com/dcreations05/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://in.linkedin.com/in/pravindawar28" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://dribbble.com/pravindawar28" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                <Dribbble size={18} />
              </a>
              <a href="https://www.facebook.com/parvin.dawar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                <Facebook size={18} />
              </a>
            </div>

            <div className="h-px w-full bg-white/5 mb-6" />

            <a href="mailto:dawarpravin35@gmail.com" className="w-full py-4 rounded-full bg-white/5 border border-white/10 text-center font-medium hover:bg-white/10 transition-colors">
              Connect with me
            </a>
          </motion.div>

          {/* Right Card - Details */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col"
          >
            <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
              I'm Pravin Dawar, a creative professional who helps brands connect with their audience through powerful design and motion. As a graphic designer at my core, I craft memorable visual identities and translate them into engaging digital experiences, from seamless user interfaces to dynamic video content.
            </p>

            <div className="h-px w-full bg-white/5 mb-10" />

            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm font-medium text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="h-px w-full bg-white/5 mb-10" />

            <div className="space-y-3 mt-auto">
              {experience.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-5 rounded-2xl bg-white/5 border border-white/5">
                  <h5 className="text-base font-medium text-white/80 w-1/3">{item.role}</h5>
                  <p className="text-white/50 text-sm w-1/3 sm:text-center">{item.company}</p>
                  <span className="text-sm font-mono text-white/40 w-1/3 sm:text-right">{item.year}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
