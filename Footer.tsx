import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function DesignElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Abstract Shapes */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-emerald-500/5 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/5 blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-white/5 blur-[100px]"
      />

      {/* Floating Particles */}
      {mounted && Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100 - Math.random() * 200],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, Math.random() * 0.5 + 0.2, 0],
            scale: [0, Math.random() + 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Crop Marks (Corners) */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-white/20" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-white/20" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-white/20" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-white/20" />

      {/* Registration Marks (Edges) */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
        <div className="w-full h-[1px] bg-white/20 absolute" />
        <div className="h-full w-[1px] bg-white/20 absolute" />
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
        <div className="w-full h-[1px] bg-white/20 absolute" />
        <div className="h-full w-[1px] bg-white/20 absolute" />
      </div>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
        <div className="w-full h-[1px] bg-white/20 absolute" />
        <div className="h-full w-[1px] bg-white/20 absolute" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
        <div className="w-full h-[1px] bg-white/20 absolute" />
        <div className="h-full w-[1px] bg-white/20 absolute" />
      </div>
    </div>
  );
}
