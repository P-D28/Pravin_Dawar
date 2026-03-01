import { motion } from 'motion/react';

export function About() {
  const skills = ["Product Design", "UX Design", "Figma", "Branding", "Video Editor", "Motion Graphics"];
  
  const experience = [
    { role: "Senior UI/UX Designer", company: "All Digital", year: "2024 - Present" },
    { role: "Graphic Designer", company: "Creative Agency", year: "2022 - 2024" },
    { role: "Freelance Designer", company: "Self Employed", year: "2021 - 2022" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-4">Expert Designer</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">Pravin Dawar, Your Designer</h3>
            <p className="text-lg text-white/70 leading-relaxed mb-8 font-light">
              I blend strategic thinking with high-end visual execution. My approach combines the precision of UI/UX design with the expressive power of graphic design and motion, creating experiences that don't just look premium—they perform.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-panel p-8 md:p-10"
          >
            <h4 className="font-display text-2xl font-semibold mb-8">Experience</h4>
            <div className="space-y-8">
              {experience.map((item, i) => (
                <div key={i} className="relative pl-6 border-l border-white/10 last:border-transparent">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h5 className="text-lg font-medium text-white">{item.role}</h5>
                      <p className="text-white/50">{item.company}</p>
                    </div>
                    <span className="text-sm font-mono text-white/40">{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
