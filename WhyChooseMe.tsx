import { motion } from 'motion/react';
import { Layout, Image as ImageIcon, PenTool, MonitorPlay, Figma } from 'lucide-react';

export function Services() {
  const services = [
    { icon: <Layout />, title: "UI/UX Design", desc: "Intuitive, user-centered interfaces for web and mobile apps." },
    { icon: <ImageIcon />, title: "Poster/Carousel Design", desc: "Engaging social media creatives that drive conversion." },
    { icon: <PenTool />, title: "Graphic Design", desc: "Comprehensive visual identity and branding materials." },
    { icon: <Figma />, title: "Figma Design", desc: "Scalable design systems and high-fidelity prototypes." },
    { icon: <MonitorPlay />, title: "Video & Motion", desc: "Dynamic video editing and motion graphics to tell your story." },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-4">What I Do</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold">Design Services</h3>
          </div>
          <p className="text-white/60 max-w-md text-sm md:text-base">
            Delivering end-to-end design solutions that elevate your brand and engage your audience across all digital touchpoints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-panel p-8 flex flex-col gap-4 hover:border-white/30 hover:bg-white/10 transition-all duration-300 cursor-default hover:-translate-y-2"
            >
              <div className="text-white/80 mb-2 group-hover:scale-110 group-hover:text-white transition-transform duration-300 origin-left">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold group-hover:text-white transition-colors">{service.title}</h4>
              <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
