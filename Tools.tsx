import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Pricing() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-4">Pricing</h2>
          <h3 className="font-display text-5xl md:text-7xl font-bold mb-6">Let's Grow Together</h3>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
            Ready to elevate your brand? Choose a starting point below or contact me for a custom quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Graphic Design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 flex flex-col"
          >
            <h4 className="text-2xl font-semibold mb-2">Graphic Designing</h4>
            <p className="text-white/50 mb-8">Posters, carousels, logos, and branding materials.</p>
            <div className="mb-8">
              <span className="text-sm text-white/50">Starting from</span>
              <div className="text-5xl font-display font-bold">$100</div>
            </div>
            <a href="mailto:hello@example.com" className="mt-auto w-full py-4 rounded-xl bg-white/10 hover:bg-white/20 text-center font-semibold transition-colors">
              Inquire Now
            </a>
          </motion.div>

          {/* UI/UX Design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 flex flex-col border-white/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-bl-xl">Popular</div>
            <h4 className="text-2xl font-semibold mb-2">UI & UX Designing</h4>
            <p className="text-white/50 mb-8">Websites, web apps, mobile apps, and design systems.</p>
            <div className="mb-8">
              <span className="text-sm text-white/50">Starting from</span>
              <div className="text-5xl font-display font-bold">$500</div>
            </div>
            <a href="mailto:hello@example.com" className="mt-auto w-full py-4 rounded-xl bg-white text-black hover:bg-white/90 text-center font-semibold transition-colors flex items-center justify-center gap-2">
              Start Project <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
