import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden" id="features">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
        <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">Why Step1?</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Rapid Design Kit</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">Don't start from scratch when you can iterate on perfection.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)] relative z-10">
        
        {/* Large Feature */}
        <div className="md:col-span-2 md:row-span-2 bento-card p-8 rounded-3xl group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-yellow-200/20 opacity-0 group-hover:opacity-100 group-hover:animate-shine"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors duration-200 shadow-sm">
                <span className="material-icons-round text-2xl">speed</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Design 10x Faster</h3>
              <p className="text-slate-600 leading-relaxed text-base max-w-md">
                Save hours of design work. Stop struggling with layout details. Use ready-made styles and focus on your content instantly.
              </p>
            </div>
            <div className="mt-8 flex gap-2 overflow-hidden opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
              <div className="h-2 rounded-full bg-slate-200 w-12 group-hover:bg-primary transition-colors"></div>
              <div className="h-2 rounded-full bg-slate-200 w-24 group-hover:bg-primary/80 transition-colors delay-75"></div>
              <div className="h-2 rounded-full bg-slate-200 w-8 group-hover:bg-primary/60 transition-colors delay-150"></div>
            </div>
          </div>
        </div>

        {/* Tall Feature */}
        <div className="md:col-span-1 md:row-span-2 bento-card p-8 rounded-3xl group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative z-10 h-full flex flex-col">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-200 shadow-sm">
              <span className="material-icons-round text-2xl">content_paste</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Instant Clone</h3>
            <p className="text-slate-600 leading-relaxed text-sm mb-6">
              No setup needed. Copy the look and feel of any element straight to your project instantly.
            </p>
            <div className="mt-auto bg-slate-900 rounded-lg p-3 transform group-hover:translate-y-0 translate-y-2 transition-transform shadow-lg border border-slate-700">
              <div className="flex gap-1 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="h-1.5 w-3/4 bg-slate-700 rounded mb-1.5"></div>
              <div className="h-1.5 w-1/2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>

        {/* Small Feature 1 */}
        <div className="md:col-span-1 bento-card p-6 rounded-3xl group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200 shadow-sm">
                <span className="material-icons-round text-xl">palette</span>
              </div>
              <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded uppercase">Style</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-900">Fully Customizable</h3>
            <p className="text-slate-600 leading-relaxed text-xs">
              Adjust colors, spacing, and fonts to match your brand perfectly.
            </p>
          </div>
        </div>

        {/* Small Feature 2 */}
        <div className="md:col-span-1 bento-card p-6 rounded-3xl group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200 shadow-sm">
                <span className="material-icons-round text-xl">check_circle</span>
              </div>
              <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded uppercase">Ready</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-900">Ready to Use</h3>
            <p className="text-slate-600 leading-relaxed text-xs">
              Works with your favorite website builders and tools instantly.
            </p>
          </div>
        </div>

        {/* Small Feature 3 */}
        <div className="md:col-span-1 bento-card p-6 rounded-3xl group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tl from-orange-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-200 shadow-sm">
                <span className="material-icons-round text-xl">devices</span>
              </div>
              <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded uppercase">View</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-900">Mobile Friendly</h3>
            <p className="text-slate-600 leading-relaxed text-xs">
              Automatically looks great on phones, tablets, and desktops.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;