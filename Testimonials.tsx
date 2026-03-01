import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fetchInstagramPosts, categories, Post } from '../data/posts';
import { ExternalLink, Loader2, X } from 'lucide-react';

const getGridSpan = (aspectRatio?: string) => {
  switch (aspectRatio) {
    case 'aspect-square': // 1:1
      return 'col-span-1 row-span-3 md:col-span-2 md:row-span-2 lg:row-span-2';
    case 'aspect-[4/5]': // 4:5
      return 'col-span-1 row-span-4 md:col-span-2 md:row-span-3 lg:row-span-3';
    case 'aspect-[3/4]': // 3:4
      return 'col-span-1 row-span-4 md:col-span-2 md:row-span-3 lg:row-span-3';
    case 'aspect-[9/16]': // 9:16
      return 'col-span-1 row-span-5 md:col-span-2 md:row-span-4 lg:row-span-4';
    case 'aspect-video': // 16:9
      return 'col-span-1 row-span-2 md:col-span-4 md:row-span-2 lg:row-span-2';
    case 'aspect-[2/1]': // 2:1
      return 'col-span-1 row-span-2 md:col-span-4 md:row-span-2 lg:row-span-2';
    default:
      return 'col-span-1 row-span-4 md:col-span-2 md:row-span-3 lg:row-span-3';
  }
};

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      try {
        const fetchedPosts = await fetchInstagramPosts('dcreations05');
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch Instagram posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative min-h-[800px] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest text-white/40 mb-4">Selected Work</h2>
            <h3 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight">Recent Designs</h3>
          </div>
          
          {/* Minimalist Filters */}
          <div className="flex flex-wrap gap-6 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm tracking-wide transition-all duration-500 relative ${
                  activeCategory === cat 
                    ? 'text-white' 
                    : 'text-white/40 hover:text-white/80'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="w-8 h-8 text-white/30 animate-spin mb-4" />
          </div>
        ) : (
          /* Dynamic Bento/Masonry Grid Layout */
          <motion.div layout className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-[100px] md:auto-rows-[120px] lg:auto-rows-[140px] grid-flow-dense">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                  onClick={() => setSelectedPost(post)}
                  className={`group cursor-pointer relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/5 ${getGridSpan(post.aspectRatio)}`}
                >
                  {/* Image Container */}
                  <img 
                    src={post.imageURL} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Soft Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 ease-out" />
                  
                  {/* Minimalist Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white/80 font-mono text-[9px] uppercase tracking-widest rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                      {post.aspectRatio?.replace('aspect-', '').replace('[', '').replace(']', '') || '4/5'}
                    </span>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-medium text-white/90 group-hover:text-white transition-colors duration-300 leading-tight">{post.title}</h4>
                    <p className="text-sm text-white/50 mt-2 font-light">{post.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Minimalist Full Screen Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 md:p-12 bg-[#050505]/95 backdrop-blur-md"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl max-h-full flex flex-col md:flex-row bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl border border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={() => setSelectedPost(null)} 
                className="absolute top-6 right-6 z-50 p-3 bg-black/20 hover:bg-white/10 rounded-full text-white/70 hover:text-white backdrop-blur-md transition-all duration-300"
              >
                <X size={20} strokeWidth={1.5} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-3/5 bg-[#050505] flex items-center justify-center p-8 md:p-12 relative min-h-[40vh]">
                 <img 
                   src={selectedPost.imageURL} 
                   alt={selectedPost.title} 
                   className="max-w-full max-h-[60vh] md:max-h-[75vh] object-contain rounded-xl shadow-2xl" 
                   referrerPolicy="no-referrer"
                 />
              </div>

              {/* Info Section */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col bg-[#0a0a0a] overflow-y-auto max-h-[50vh] md:max-h-none border-t md:border-t-0 md:border-l border-white/5">
                 <div className="mb-10">
                   <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-4 block">
                     {selectedPost.category}
                   </span>
                   <h3 className="text-3xl md:text-4xl font-display font-medium text-white leading-tight tracking-tight">{selectedPost.title}</h3>
                 </div>

                 <div className="space-y-8 mb-10 flex-1">
                   <div className="flex flex-col">
                     <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest mb-2">Client</span>
                     <span className="text-white/90 font-medium text-base">{selectedPost.clientName || 'Unknown'}</span>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest mb-2">Product</span>
                     <span className="text-white/90 font-medium text-base">{selectedPost.productName || 'Various'}</span>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest mb-2">Description</span>
                     <p className="text-white/60 text-sm leading-relaxed font-light mt-1">{selectedPost.description}</p>
                   </div>
                 </div>

                 {selectedPost.link && (
                   <a href={selectedPost.link} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-center w-full gap-2 bg-white text-black py-4 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                     View Live Project <ExternalLink size={16} strokeWidth={1.5} />
                   </a>
                 )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
