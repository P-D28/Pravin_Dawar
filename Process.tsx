import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { workCategories, WorkCategory } from '../data/workData';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={prevSlide}
          className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ category, index, onClick }: { category: WorkCategory, index: number, onClick: () => void; key?: React.Key }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // 3D Tilt Effect
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const tiltXSpring = useSpring(tiltX, { stiffness: 150, damping: 15 });
  const tiltYSpring = useSpring(tiltY, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(tiltYSpring, [-1, 1], [8, -8]);
  const rotateY = useTransform(tiltXSpring, [-1, 1], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // For custom cursor
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    // For 3D tilt
    const width = rect.width;
    const height = rect.height;
    const tiltMouseX = e.clientX - rect.left;
    const tiltMouseY = e.clientY - rect.top;
    const xPct = (tiltMouseX / width) * 2 - 1;
    const yPct = (tiltMouseY / height) * 2 - 1;
    tiltX.set(xPct);
    tiltY.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    tiltX.set(0);
    tiltY.set(0);
  };

  const displayTitle = category.title.replace(' Section', '').replace(' Design', '');

  let gridClasses = 'md:col-span-1 aspect-[4/5]';
  if (category.gridAspectRatio === 'aspect-video') {
    gridClasses = 'md:col-span-2 aspect-video';
  } else if (category.gridAspectRatio === 'aspect-square') {
    gridClasses = 'md:col-span-1 aspect-square';
  } else if (category.gridAspectRatio === 'aspect-[4/5]') {
    gridClasses = 'md:col-span-1 aspect-[4/5]';
  }

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ 
        borderRadius: '16px',
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative overflow-hidden bg-white/10 hover:bg-[#050505] cursor-none transition-all duration-700
        rounded-2xl p-[1px] hover:shadow-[0_0_40px_rgba(212,212,216,0.15)]
        ${gridClasses}
      `}
    >
      {/* Animated Silver Matte Border */}
      <div className="absolute inset-[-100%] group-hover:animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#00000000_50%,#d4d4d8_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Inner Content Wrapper */}
      <div className="absolute inset-[1px] bg-[#050505] rounded-[15px] overflow-hidden z-0">
        {/* Background Image with Zoom and Parallax */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ transform: "translateZ(-30px)" }}
        >
          <img 
            src={category.coverImage} 
            alt={category.title}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Aspect Ratio Badge */}
      <div className="absolute top-6 right-6 z-20 pointer-events-none">
        <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-white/70 uppercase group-hover:border-zinc-400/50 group-hover:text-zinc-300 transition-colors">
          {category.gridAspectRatio.replace('aspect-', '').replace('[', '').replace(']', '')}
        </div>
      </div>

      {/* Floating Custom Cursor */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%', transform: "translateZ(50px)" }}
            className="absolute top-0 left-0 w-24 h-24 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center z-50 pointer-events-none"
          >
            <span className="text-white font-mono text-xs uppercase tracking-widest font-bold drop-shadow-md">View</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div 
        className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-20 pointer-events-none"
        style={{ transform: "translateZ(40px)" }}
      >
        {/* Top Bar */}
        <div className="flex justify-between items-start">
          <span className="text-white/70 font-mono text-sm uppercase tracking-widest border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-md bg-black/40 shadow-lg">
            {index.toString().padStart(2, '0')}
          </span>
          <span className="text-white/90 font-mono text-xs uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {category.items.length} Projects
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h4 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tighter leading-none uppercase drop-shadow-2xl">
            {displayTitle}
          </h4>
          <div className="h-0 group-hover:h-6 transition-all duration-500 opacity-0 group-hover:opacity-100 mt-3 overflow-hidden">
            <span className="text-white/80 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
              Explore Category <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function MyWork() {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleCategorySelect = (category: WorkCategory) => {
    setSelectedCategory(category);
    setVisibleCount(4);
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 4);
      setIsLoadingMore(false);
    }, 800);
  };

  return (
    <section id="my-work" className="py-24 relative min-h-[800px] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono uppercase tracking-widest text-white/50 mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-white/50"></span>
              Design Portfolio
            </h2>
            <h3 className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              Creative <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-200 italic">Disciplines</span>
            </h3>
          </div>
          <p className="text-white/50 max-w-sm text-sm md:text-base leading-relaxed font-light">
            A curated collection of my specialized design categories, featuring 100% unique modern styles and perfect visuals.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
            >
              {workCategories.map((category, index) => (
                <CategoryCard 
                  key={category.id} 
                  category={category} 
                  index={index} 
                  onClick={() => handleCategorySelect(category)} 
                />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="details"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Futuristic Top Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-6 mb-10 gap-4">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-white/30"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="font-mono text-sm uppercase tracking-widest">Return</span>
                </button>
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/50">
                  <span className="hidden sm:inline">System / Categories /</span>
                  <span className="text-white">{selectedCategory.title}</span>
                </div>
              </div>

              <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h3 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">{selectedCategory.title}</h3>
                  <p className="text-white/50 font-mono text-sm uppercase tracking-widest">
                    Displaying {Math.min(visibleCount, selectedCategory.items.length)} of {selectedCategory.items.length} records
                  </p>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-white/50 to-transparent" />
              </div>

              {selectedCategory.items.length === 0 ? (
                <div className="text-center py-32 border border-white/10 rounded-3xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <div className="w-2 h-2 bg-white/50 rounded-full" />
                    </div>
                    <p className="text-white/50 font-mono text-sm uppercase tracking-widest">Data Not Found / Awaiting Upload</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className={`grid ${selectedCategory.gridCols || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6 md:gap-8`}>
                    {selectedCategory.items.slice(0, visibleCount).map((item, index) => {
                      if (selectedCategory.id === 'infographic') {
                        return (
                          <motion.div 
                            key={item.id} 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                            className="group relative bg-white/10 hover:bg-[#050505] p-[1px] rounded-3xl overflow-hidden flex flex-col hover:shadow-[0_0_40px_rgba(212,212,216,0.15)] transition-all duration-500"
                          >
                            {/* Animated Silver Matte Border */}
                            <div className="absolute inset-[-100%] group-hover:animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#00000000_50%,#d4d4d8_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Inner Content */}
                            <div className="relative w-full h-full bg-[#050505] rounded-[23px] overflow-hidden flex flex-col z-10">
                              <div className={`w-full ${selectedCategory.gridAspectRatio || 'aspect-[4/5]'} relative bg-[#111] overflow-hidden`}>
                              {item.images && item.images.length > 1 ? (
                                <ImageSlider images={item.images} />
                              ) : (
                                <img 
                                  src={item.imageURL} 
                                  alt={item.title}
                                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                  referrerPolicy="no-referrer"
                                />
                              )}
                              {/* Stronger gradient overlay for text legibility */}
                              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                              
                              {/* Text Content Overlay */}
                              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20 pointer-events-none">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                  <h4 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-4 drop-shadow-2xl group-hover:text-zinc-300 transition-colors">{item.title}</h4>
                                  <div className="space-y-3 border-l-2 border-zinc-400/50 pl-4">
                                    <div className="flex flex-col">
                                      <span className="text-white/50 font-mono text-[10px] uppercase tracking-widest">Client</span>
                                      <span className="text-white/90 font-medium text-sm drop-shadow-md">{item.clientName}</span>
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-white/50 font-mono text-[10px] uppercase tracking-widest">Type</span>
                                      <span className="text-white/90 font-medium text-sm drop-shadow-md">{item.categoryType}</span>
                                    </div>
                                  </div>
                                  {item.description && (
                                    <p className="text-white/60 text-sm leading-relaxed font-light mt-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.description}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                            </div>
                          </motion.div>
                        );
                      }

                      return (
                        <motion.div 
                          key={item.id} 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                          className="group relative bg-white/10 hover:bg-[#0a0a0a] p-[1px] rounded-3xl overflow-hidden flex flex-col hover:shadow-[0_0_40px_rgba(212,212,216,0.15)] transition-all duration-500"
                        >
                          {/* Animated Silver Matte Border */}
                          <div className="absolute inset-[-100%] group-hover:animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#00000000_50%,#d4d4d8_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Inner Content */}
                          <div className="relative w-full h-full bg-[#0a0a0a] rounded-[23px] overflow-hidden flex flex-col z-10">
                            {/* Tech Corner Accents */}
                          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/20 rounded-tl-3xl z-20 pointer-events-none transition-colors group-hover:border-white/60" />
                          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/20 rounded-br-3xl z-20 pointer-events-none transition-colors group-hover:border-white/60" />

                          <div className={`w-full ${selectedCategory.gridAspectRatio || 'aspect-[4/3]'} relative bg-[#111] overflow-hidden`}>
                            {item.images && item.images.length > 1 ? (
                              <ImageSlider images={item.images} />
                            ) : (
                              <img 
                                src={item.imageURL} 
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                referrerPolicy="no-referrer"
                              />
                            )}
                            {/* Scanline overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none z-10 opacity-20" />
                          </div>
                          <div className="p-6 md:p-8 flex flex-col flex-1 relative z-20 bg-gradient-to-b from-transparent to-[#050505]">
                            <div className="flex items-center gap-2 mb-4">
                              <span className="w-2 h-2 bg-white/30 rounded-full" />
                              <h4 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">{item.title}</h4>
                            </div>
                            
                            <div className="space-y-3 mb-8 flex-1">
                              <div className="flex justify-between items-end border-b border-white/10 pb-2 group-hover:border-white/20 transition-colors">
                                <span className="text-white/40 font-mono text-xs uppercase tracking-widest">Client</span>
                                <span className="text-white/90 font-medium text-sm text-right">{item.clientName}</span>
                              </div>
                              <div className="flex justify-between items-end border-b border-white/10 pb-2 group-hover:border-white/20 transition-colors">
                                <span className="text-white/40 font-mono text-xs uppercase tracking-widest">Type</span>
                                <span className="text-white/90 font-medium text-sm text-right">{item.categoryType}</span>
                              </div>
                              <div className="flex justify-between items-end border-b border-white/10 pb-2 group-hover:border-white/20 transition-colors">
                                <span className="text-white/40 font-mono text-xs uppercase tracking-widest">Product</span>
                                <span className="text-white/90 font-medium text-sm text-right">{item.productName}</span>
                              </div>
                            </div>

                            {item.description && (
                              <p className="text-white/60 text-sm leading-relaxed font-light">{item.description}</p>
                            )}
                          </div>
                        </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {visibleCount < selectedCategory.items.length && (
                    <div className="mt-12 flex justify-center">
                      <button
                        onClick={handleLoadMore}
                        disabled={isLoadingMore}
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-colors disabled:opacity-50"
                      >
                        {isLoadingMore ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Loading...
                          </>
                        ) : (
                          'Load More'
                        )}
                      </button>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
