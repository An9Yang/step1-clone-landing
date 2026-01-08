import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const totalItems = 3;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const getSlideClass = (index: number) => {
    if (index === activeIndex) return 'carousel-item active absolute z-20 scale-100 opacity-100 translate-x-0';
    const prevIndex = (activeIndex - 1 + totalItems) % totalItems;
    const nextIndex = (activeIndex + 1) % totalItems;
    
    if (index === prevIndex) return 'carousel-item prev absolute z-10 scale-75 opacity-70 -translate-x-[60%] lg:-translate-x-[55%] filter grayscale brightness-90';
    if (index === nextIndex) return 'carousel-item next absolute z-10 scale-75 opacity-70 translate-x-[60%] lg:translate-x-[55%] filter grayscale brightness-90';
    
    return 'hidden'; // Should not happen with 3 items
  };

  const slides = [
    {
      id: 0,
      title: "Dashboard Widget",
      content: (
        <div className="w-full max-w-sm bg-white p-4 rounded-lg shadow-sm border border-slate-100 mb-2">
            <div className="h-2 w-1/3 bg-slate-200 rounded mb-2"></div>
            <div className="h-2 w-2/3 bg-slate-100 rounded mb-4"></div>
            <div className="flex gap-2">
            <div className="h-8 w-8 rounded bg-blue-100"></div>
            <div className="h-8 flex-1 bg-slate-50 rounded border border-slate-100"></div>
            </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Payment Method",
      content: (
        <div className="relative w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-lg p-6 transform transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900">Payment Method</h3>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Active</span>
            </div>
            <div className="space-y-4">
                <div className="flex items-center p-3 border border-primary/40 bg-yellow-50/50 rounded-lg cursor-pointer ring-1 ring-primary/20">
                    <div className="w-10 h-6 bg-slate-800 rounded mr-3 relative overflow-hidden">
                        <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-semibold text-slate-900">Visa ending in 4242</div>
                        <div className="text-xs text-slate-500">Expires 12/24</div>
                    </div>
                    <div className="w-4 h-4 rounded-full border-4 border-primary bg-white"></div>
                </div>
                <div className="flex items-center p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-6 bg-slate-200 rounded mr-3"></div>
                    <div className="flex-1">
                        <div className="text-sm font-medium text-slate-600">Mastercard ending in 8899</div>
                        <div className="text-xs text-slate-400">Expires 08/25</div>
                    </div>
                    <div className="w-4 h-4 rounded-full border border-slate-300"></div>
                </div>
            </div>
            <button className="w-full mt-6 bg-slate-900 text-white font-medium py-2.5 rounded-lg shadow-md hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                <span>Update Payment</span>
            </button>
        </div>
      )
    },
    {
      id: 2,
      title: "Profile Card",
      content: (
        <div className="w-full max-w-sm bg-white p-4 rounded-lg shadow-sm border border-slate-100 mb-2 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 shrink-0"></div>
            <div className="flex-1 space-y-2">
                <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
            </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 overflow-hidden bg-slate-50" id="showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500 mb-6">
            <span className="material-icons-round text-sm text-primary">layers</span> Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Clone Gallery
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Explore a curated selection of stunning designs ready to be cloned and customized for your next project.
          </p>
        </div>

        <div className="carousel-container relative h-[600px] w-full flex justify-center items-center overflow-visible py-10">
          <button 
            aria-label="Previous slide" 
            onClick={handlePrev}
            className="absolute left-4 lg:left-10 z-40 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg text-slate-600 flex items-center justify-center hover:bg-slate-50 hover:text-primary transition-all hover:scale-110"
          >
            <span className="material-icons-round text-2xl">arrow_back</span>
          </button>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-blue-100/30 to-purple-100/30 blur-3xl rounded-full -z-10"></div>

          {slides.map((slide, index) => {
             const styles = {
                 0: "carousel-item prev absolute w-[500px] h-[350px] bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden cursor-pointer group hover:border-slate-300 transition-all duration-500 ease-out",
                 1: "carousel-item active absolute w-[700px] max-w-[90vw] h-[450px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col group transition-all duration-500 ease-out",
                 2: "carousel-item next absolute w-[500px] h-[350px] bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden cursor-pointer group hover:border-slate-300 transition-all duration-500 ease-out"
             };
             
             // Calculate visual position
             let visualPosition = (index - activeIndex + totalItems) % totalItems;
             // React needs stable keys, so we map visual positions to classes manually or via logic
             
             // Simplification for the "visual look": 
             // We can just render specific slide data into the 3 slots (prev, active, next) based on activeIndex
             // But to keep it proper reacting, let's map the render slots.
             
             return null; 
          })}
          
          {/* Render Slots Approach for visual simplicity matching HTML */}
          
          {/* Previous Slot */}
           <div 
             className="carousel-item prev absolute w-[500px] h-[350px] bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden cursor-pointer group hover:border-slate-300 transition-all duration-500 ease-out"
             onClick={handlePrev}
             style={{ 
                 transform: 'translateX(-60%) scale(0.8)',
                 opacity: 0.7,
                 zIndex: 10,
                 filter: 'grayscale(100%)'
            }}
           >
                <div className="h-8 bg-slate-50 border-b border-slate-200 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
                <div className="p-6 flex flex-col items-center justify-center h-[calc(100%-2rem)] bg-slate-50/50">
                    {slides[(activeIndex - 1 + totalItems) % totalItems].content}
                    <span className="text-sm font-medium text-slate-500 mt-2">{slides[(activeIndex - 1 + totalItems) % totalItems].title}</span>
                </div>
           </div>

           {/* Active Slot */}
           <div 
             className="carousel-item active absolute w-[700px] max-w-[90vw] h-[450px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col group transition-all duration-500 ease-out"
             style={{ 
                transform: 'translateX(0) scale(1)',
                opacity: 1,
                zIndex: 30,
                filter: 'grayscale(0%)'
           }}
           >
             <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2 justify-between shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="px-3 py-0.5 bg-white border border-slate-200 rounded text-[10px] text-slate-400 font-mono flex items-center gap-1 shadow-sm">
                    <span className="material-icons-round text-[10px]">lock</span> secure-payment
                </div>
                <div className="w-10 flex justify-end">
                    <span className="material-icons-round text-slate-400 text-sm hover:text-slate-600 cursor-pointer">refresh</span>
                </div>
            </div>
            <div className="relative flex-1 bg-white flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute inset-0 bg-dots-pattern opacity-30"></div>
                {slides[activeIndex].content}

                 <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                    <button className="bg-primary text-slate-900 font-bold px-6 py-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-yellow-400 hover:scale-105">
                        <span className="material-icons-round">visibility</span> View Live Demo
                    </button>
                    <div className="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                        <button className="bg-white text-slate-700 font-medium px-4 py-2 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 flex items-center gap-1.5 text-sm">
                            <span className="material-icons-round text-base">style</span> Use Template
                        </button>
                        <button className="bg-white text-slate-700 font-medium px-4 py-2 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 flex items-center gap-1.5 text-sm">
                            <span className="material-icons-round text-base">open_in_new</span> Clone
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white border-t border-slate-100 p-4 flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>
                        <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
                        <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">+2</div>
                    </div>
                    <span className="text-slate-500 text-xs">Used by 1.2k+ creators</span>
                </div>
                <div className="flex gap-3 text-slate-400">
                    <span className="flex items-center gap-1 text-xs"><span className="material-icons-round text-sm">favorite</span> 342</span>
                    <span className="flex items-center gap-1 text-xs"><span className="material-icons-round text-sm">visibility</span> 5.1k</span>
                </div>
            </div>
           </div>

           {/* Next Slot */}
           <div 
             className="carousel-item next absolute w-[500px] h-[350px] bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden cursor-pointer group hover:border-slate-300 transition-all duration-500 ease-out"
             onClick={handleNext}
             style={{ 
                transform: 'translateX(60%) scale(0.8)',
                opacity: 0.7,
                zIndex: 10,
                filter: 'grayscale(100%)'
           }}
           >
                 <div className="h-8 bg-slate-50 border-b border-slate-200 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
                <div className="p-6 flex flex-col items-center justify-center h-[calc(100%-2rem)] bg-slate-50/50">
                    {slides[(activeIndex + 1) % totalItems].content}
                    <span className="text-sm font-medium text-slate-500 mt-2">{slides[(activeIndex + 1) % totalItems].title}</span>
                </div>
           </div>


          <button 
            aria-label="Next slide" 
            onClick={handleNext}
            className="absolute right-4 lg:right-10 z-40 w-12 h-12 rounded-full bg-slate-900 text-white border border-transparent shadow-lg flex items-center justify-center hover:bg-slate-800 transition-all hover:scale-110"
          >
            <span className="material-icons-round text-2xl">arrow_forward</span>
          </button>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {[0, 1, 2].map(idx => (
                 <button 
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-colors ${idx === activeIndex ? 'w-8 bg-slate-900' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                 />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;