import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "What services do you offer?",
      a: "I specialize in UI/UX design, graphic design, branding, and video editing/motion graphics. I can handle everything from a logo design to a full SaaS application interface."
    },
    {
      q: "What is your pricing?",
      a: "Pricing depends on the scope of the project. Graphic design tasks start around $100, while comprehensive UI/UX projects start at $500. I provide custom quotes after our initial consultation."
    },
    {
      q: "How long does a typical project take?",
      a: "A standard landing page design takes about 1-2 weeks. Full app designs can take 4-8 weeks. I always establish clear timelines before we begin."
    },
    {
      q: "Do you code the designs?",
      a: "My primary focus is design (Figma, Adobe CC), but I have a strong understanding of front-end development (HTML/CSS/React) which ensures my designs are highly implementable."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-4">FAQ</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold">Common Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-panel overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-medium text-lg pr-8">{faq.q}</span>
                <span className="text-white/50 shrink-0">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-white/60 font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
