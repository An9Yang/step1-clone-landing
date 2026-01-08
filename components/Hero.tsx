import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] hero-gradient-overlay -z-10 pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-[60px] animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-[80px] -z-10"></div>

      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 mb-8 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="group-hover:text-slate-900 transition-colors">v2.0 Available</span>
        <span className="material-icons-round text-xs opacity-50 group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1] text-slate-900">
        Clone <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500">Apple</span>,
        <span className="block text-slate-900 mt-2">Make it yours.</span>
      </h1>

      <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
        Copy styles from any site. Apply them to yours. Pixel-perfect.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto mb-20">
        <a className="relative w-full sm:w-auto px-5 py-2.5 bg-primary text-black font-bold text-sm rounded-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] overflow-hidden transform hover:-translate-y-0.5" href="#">
          <span className="relative z-10">Install Now</span>
          <span className="material-icons-round text-lg group-hover:translate-x-0.5 transition-transform relative z-10">download</span>
          <div className="absolute inset-0 bg-white/40 -translate-x-full group-hover:animate-shine z-0"></div>
        </a>
        <a className="w-full sm:w-auto px-5 py-2.5 bg-white border border-slate-200 text-slate-900 font-medium text-sm rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md" href="#">
          <span className="material-icons-round text-lg text-primary">play_arrow</span>
          <span>Watch Demo</span>
        </a>
      </div>

      {/* Hero UI Mockup */}
      <div className="relative w-full max-w-5xl mx-auto perspective-1000 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-orange-500/30 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
        <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-2xl bg-white/90 backdrop-blur-md transform transition-transform duration-500 hover:scale-[1.01]">
          <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2 justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            </div>
            <div className="flex-1 text-center">
              <div className="bg-white border border-slate-200 rounded py-0.5 px-3 text-[10px] text-slate-400 font-mono inline-flex items-center gap-1">
                <span className="material-icons-round text-[10px]">lock</span>
                clonable.io/app
              </div>
            </div>
            <div className="w-10"></div>
          </div>
          <div className="aspect-[16/9] w-full bg-slate-50 relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-dots-pattern opacity-50"></div>
            
            {/* Extracted Style Card */}
            <div className="absolute top-[20%] left-[15%] w-[300px] bg-white rounded-xl border border-slate-200 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] p-5 z-20 animate-float">
              <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-3">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Style Extracted</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Palette</span>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-[#007AFF]"></div>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-[#F5F5F7]"></div>
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-[#1D1D1F]"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Typography</span>
                  <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded">SF Pro Display</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Roundness</span>
                  <div className="w-12 h-4 rounded-full border border-slate-200 bg-slate-50 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-slate-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cursor */}
            <div className="absolute top-[50%] left-[55%] z-30 pointer-events-none drop-shadow-xl">
              <svg className="w-8 h-8 text-slate-900 fill-slate-900" viewBox="0 0 24 24"><path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4V2z"></path></svg>
              <div className="absolute top-6 left-4 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Style Copied!
              </div>
            </div>

            {/* Dashed Selection Box */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-2/3 h-2/3 border-2 border-dashed border-slate-300 rounded-xl relative bg-white/50 backdrop-blur-sm">
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;