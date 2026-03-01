import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const stats = [
    { value: "100+", label: "Happy Clients" },
    { value: "$6.8k+", label: "Revenue Added" },
    { value: "4.8", label: "Average Rating" },
  ];

  const reviews = [
    { name: "Dr. Jyoti Tripathi", role: "Clinic Owner", text: "Pravin completely transformed our online presence. The new branding and UI are exceptional." },
    { name: "Prashant Kulkarni", role: "Startup Founder", text: "Working with him was a game changer! He understood our vision perfectly and delivered beyond expectations." },
    { name: "Raj Pipalde", role: "Marketing Director", text: "The ad creatives he designed boosted our conversion rate significantly. Highly recommended." },
    { name: "Pratik Pal", role: "Product Manager", text: "A rare mix of great UI/UX skills and graphic design talent. Fast, communicative, and professional." },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-4">Testimonials</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold">Clients Love Me</h3>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-mono uppercase tracking-wider text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 flex flex-col justify-between"
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">"{review.text}"</p>
              <div>
                <h5 className="font-semibold text-white">{review.name}</h5>
                <p className="text-sm text-white/50">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
