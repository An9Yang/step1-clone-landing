import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = 4;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const getSlideStyle = (index: number): React.CSSProperties => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff % totalItems) + totalItems) % totalItems;

    if (normalizedDiff === 0) {
      // Active card - centered, no rotation
      return {
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        opacity: 1,
        zIndex: 30,
        filter: 'none',
      };
    } else if (normalizedDiff === 1) {
      // Right card - move right + Y rotation
      return {
        transform: 'translateX(65%) scale(0.8) rotateY(-12deg)',
        opacity: 0.7,
        zIndex: 20,
        filter: 'brightness(0.95)',
      };
    } else if (normalizedDiff === totalItems - 1) {
      // Left card - move left + Y rotation
      return {
        transform: 'translateX(-65%) scale(0.8) rotateY(12deg)',
        opacity: 0.7,
        zIndex: 20,
        filter: 'brightness(0.95)',
      };
    } else {
      // Hidden cards
      return {
        transform: normalizedDiff < totalItems / 2
          ? 'translateX(100%) scale(0.6) rotateY(-25deg)'
          : 'translateX(-100%) scale(0.6) rotateY(25deg)',
        opacity: 0,
        zIndex: 10,
        filter: 'brightness(0.8)',
        pointerEvents: 'none',
      };
    }
  };

  const slides = [
    {
      id: 0,
      title: "Payment Method",
      subtitle: "Secure checkout component",
      content: (
        <div className="relative w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-lg p-6">
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
          <button className="w-full mt-6 bg-slate-900 text-white font-medium py-2.5 rounded-lg shadow-md hover:bg-slate-800 transition-colors">
            Update Payment
          </button>
        </div>
      )
    },
    {
      id: 1,
      title: "Dashboard Widget",
      subtitle: "Analytics overview card",
      content: (
        <div className="w-full max-w-sm bg-white p-5 rounded-xl shadow-lg border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <div className="h-2.5 w-24 bg-slate-200 rounded"></div>
            <div className="flex gap-1">
              <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center">
                <span className="material-icons-round text-slate-400 text-sm">more_vert</span>
              </div>
            </div>
          </div>
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="material-icons-round text-blue-600 text-lg">trending_up</span>
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold text-slate-900">$12,450</div>
                <div className="text-xs text-green-600 font-medium">+12.5% from last week</div>
              </div>
            </div>
          </div>
          <div className="h-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-end p-2 gap-1">
            {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
              <div key={i} className="flex-1 bg-blue-400/60 rounded-t" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Profile Card",
      subtitle: "User profile component",
      content: (
        <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg border border-slate-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl font-bold">
              JD
            </div>
            <div className="flex-1">
              <div className="text-lg font-bold text-slate-900">Jane Doe</div>
              <div className="text-sm text-slate-500">Product Designer</div>
            </div>
            <button className="px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-full">
              Follow
            </button>
          </div>
          <div className="flex gap-6 py-3 border-t border-slate-100">
            <div className="text-center">
              <div className="text-lg font-bold text-slate-900">248</div>
              <div className="text-xs text-slate-500">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-slate-900">12.4k</div>
              <div className="text-xs text-slate-500">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-slate-900">892</div>
              <div className="text-xs text-slate-500">Following</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Notification Panel",
      subtitle: "Alert system component",
      content: (
        <div className="w-full max-w-sm bg-white p-5 rounded-xl shadow-lg border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-bold text-slate-900">Notifications</div>
            <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded-full">3 new</span>
          </div>
          <div className="space-y-3">
            {[
              { icon: 'mail', color: 'blue', text: 'New message from Alex', time: '2m ago' },
              { icon: 'task_alt', color: 'green', text: 'Task completed successfully', time: '1h ago' },
              { icon: 'warning', color: 'orange', text: 'Storage almost full', time: '3h ago' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                <div className={`w-8 h-8 rounded-full bg-${item.color}-100 flex items-center justify-center`}>
                  <span className={`material-icons-round text-${item.color}-600 text-sm`}>{item.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-700">{item.text}</div>
                  <div className="text-xs text-slate-400">{item.time}</div>
                </div>
              </div>
            ))}
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

        <div className="carousel-container relative h-[550px] w-full flex justify-center items-center overflow-visible py-10">
          {/* Navigation Buttons */}
          <button
            aria-label="Previous slide"
            onClick={handlePrev}
            className="absolute left-4 lg:left-10 z-40 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg text-slate-600 flex items-center justify-center hover:bg-slate-50 hover:text-primary hover:scale-110 transition-all"
          >
            <span className="material-icons-round text-2xl">arrow_back</span>
          </button>

          {/* Background gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-blue-100/30 to-purple-100/30 blur-3xl rounded-full -z-10"></div>

          {/* Carousel Items */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="carousel-item absolute w-[600px] max-w-[85vw] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col cursor-pointer"
              style={getSlideStyle(index)}
              onClick={() => {
                if (index !== activeIndex) {
                  setActiveIndex(index);
                }
              }}
            >
              {/* Browser Chrome */}
              <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2 justify-between shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="px-3 py-0.5 bg-white border border-slate-200 rounded text-[10px] text-slate-400 font-mono flex items-center gap-1 shadow-sm">
                  <span className="material-icons-round text-[10px]">lock</span> {slide.title.toLowerCase().replace(' ', '-')}
                </div>
                <div className="w-10 flex justify-end">
                  <span className="material-icons-round text-slate-400 text-sm hover:text-slate-600 cursor-pointer">refresh</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="relative flex-1 bg-white flex items-center justify-center p-8 overflow-hidden min-h-[320px]">
                <div className="absolute inset-0 bg-dots-pattern opacity-30"></div>
                <div className="relative z-10">
                  {slide.content}
                </div>

                {/* Hover Overlay - only for active slide */}
                {index === activeIndex && (
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 z-20">
                    <button className="bg-primary text-slate-900 font-bold px-6 py-3 rounded-full shadow-xl flex items-center gap-2 hover:bg-yellow-400 hover:scale-105 transition-all">
                      <span className="material-icons-round">visibility</span> View Live Demo
                    </button>
                    <div className="flex gap-2">
                      <button className="bg-white text-slate-700 font-medium px-4 py-2 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 flex items-center gap-1.5 text-sm">
                        <span className="material-icons-round text-base">style</span> Use Template
                      </button>
                      <button className="bg-white text-slate-700 font-medium px-4 py-2 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 flex items-center gap-1.5 text-sm">
                        <span className="material-icons-round text-base">open_in_new</span> Clone
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-white border-t border-slate-100 p-4 flex justify-between items-center text-sm">
                <div>
                  <div className="font-semibold text-slate-900">{slide.title}</div>
                  <div className="text-xs text-slate-500">{slide.subtitle}</div>
                </div>
                <div className="flex gap-3 text-slate-400">
                  <span className="flex items-center gap-1 text-xs"><span className="material-icons-round text-sm">favorite</span> {Math.floor(Math.random() * 500) + 100}</span>
                  <span className="flex items-center gap-1 text-xs"><span className="material-icons-round text-sm">visibility</span> {(Math.random() * 5 + 1).toFixed(1)}k</span>
                </div>
              </div>
            </div>
          ))}

          <button
            aria-label="Next slide"
            onClick={handleNext}
            className="absolute right-4 lg:right-10 z-40 w-12 h-12 rounded-full bg-slate-900 text-white border border-transparent shadow-lg flex items-center justify-center hover:bg-slate-800 hover:scale-110 transition-all"
          >
            <span className="material-icons-round text-2xl">arrow_forward</span>
          </button>

          {/* Progress Indicators */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'w-8 bg-slate-900'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
