import { motion } from 'motion/react';
import { MessageSquare, PenTool, Code, CheckCircle } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: <MessageSquare size={24} />,
      title: "Let's Get In Touch",
      description: "We start with a deep dive into your goals, audience, and vision to ensure perfect alignment.",
      number: "01"
    },
    {
      icon: <PenTool size={24} />,
      title: "Grab Your Designs",
      description: "Iterative design process where concepts are refined into high-fidelity, premium visuals.",
      number: "02"
    },
    {
      icon: <Code size={24} />,
      title: "Kickstart Development",
      description: "Translating designs into pixel-perfect, responsive code or preparing assets for your team.",
      number: "03"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "And Hand Over",
      description: "Final review, quality assurance, and delivery of all source files and documentation.",
      number: "04"
    }
  ];

  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-4">How I Work</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold">Process Is Everything</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 relative overflow-hidden group hover:bg-white/[0.05] transition-colors"
            >
              <div className="text-8xl font-display font-bold text-white/[0.03] absolute -top-4 -right-4 pointer-events-none transition-transform group-hover:scale-110">
                {step.number}
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
                {step.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
