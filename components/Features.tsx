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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

        {/* Large Feature - Side by Side Layout (Demo Left, Text Right) */}
        <div className="md:col-span-2 bento-card p-6 rounded-3xl group relative overflow-hidden min-h-[320px]">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-yellow-200/20 opacity-0 group-hover:opacity-100 group-hover:animate-shine"></div>
          <div className="relative z-10 h-full flex flex-col md:flex-row gap-6">
            {/* Demo Area - Left */}
            <div className="md:w-1/2 bg-slate-50 rounded-2xl border border-slate-200 p-4 flex items-center justify-center min-h-[280px] relative overflow-hidden">
              {/* Placeholder for demo video/animation */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              <div className="relative text-center">
                <div className="w-16 h-16 bg-yellow-100 text-yellow-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-200 shadow-sm">
                  <span className="material-icons-round text-3xl">language</span>
                </div>
                <div className="flex gap-2 justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="h-2 rounded-full bg-slate-300 w-8 group-hover:bg-primary transition-colors"></div>
                  <div className="h-2 rounded-full bg-slate-300 w-16 group-hover:bg-primary/80 transition-colors delay-75"></div>
                  <div className="h-2 rounded-full bg-slate-300 w-6 group-hover:bg-primary/60 transition-colors delay-150"></div>
                </div>
                <p className="text-xs text-slate-400 mt-4">Demo video placeholder</p>
              </div>
            </div>
            {/* Text Area - Right */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <span className="text-primary font-mono text-xs mb-2 block tracking-wider font-bold">SITE</span>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Site Clone</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Clone entire websites with a single click. Capture layouts, styles, and structure instantly for your own projects.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-600 text-sm">
                  <span className="w-5 h-5 bg-primary/20 text-yellow-700 rounded-full flex items-center justify-center">
                    <span className="material-icons-round text-xs">check</span>
                  </span>
                  Full page capture
                </li>
                <li className="flex items-center gap-2 text-slate-600 text-sm">
                  <span className="w-5 h-5 bg-primary/20 text-yellow-700 rounded-full flex items-center justify-center">
                    <span className="material-icons-round text-xs">check</span>
                  </span>
                  Editable output
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tall Feature - Stacked Layout (Text Top, Demo Bottom) */}
        <div className="md:col-span-1 md:row-span-2 bento-card p-6 rounded-3xl group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative z-10 h-full flex flex-col">
            {/* Text Area - Top */}
            <div className="mb-4">
              <span className="text-blue-600 font-mono text-xs mb-2 block tracking-wider font-bold">COMPONENT</span>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Component Clone</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Extract individual UI components. Grab buttons, cards, navbars - any element you need.
              </p>
            </div>
            {/* Demo Area - Bottom (Larger) */}
            <div className="flex-1 bg-slate-900 rounded-xl p-4 min-h-[240px] flex flex-col shadow-lg border border-slate-700 relative overflow-hidden">
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 flex flex-col justify-center space-y-2">
                <div className="h-2 w-full bg-slate-700 rounded"></div>
                <div className="h-2 w-4/5 bg-slate-700 rounded"></div>
                <div className="h-2 w-3/5 bg-slate-700 rounded"></div>
                <div className="h-6 w-24 bg-blue-500/30 rounded mt-3 flex items-center justify-center">
                  <span className="text-blue-400 text-xs font-mono">copied!</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2 text-center">Demo video placeholder</p>
            </div>
          </div>
        </div>

        {/* Small Feature 1 - With Visual Preview */}
        <div className="md:col-span-1 bento-card p-5 rounded-3xl group relative overflow-hidden min-h-[220px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative z-10 h-full flex flex-col">
            {/* Text Area */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-600 font-mono text-xs tracking-wider font-bold">EDIT</span>
              </div>
              <h3 className="text-lg font-bold mb-1 text-slate-900">Visual Edit</h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                Edit designs visually without code. Point, click, and customize in real-time.
              </p>
            </div>
            {/* Visual Preview */}
            <div className="flex-1 bg-slate-50 rounded-xl border border-slate-200 p-3 flex items-center justify-center min-h-[100px]">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-200 group-hover:bg-purple-300 transition-colors"></div>
                <div className="w-8 h-8 rounded-lg bg-purple-400 group-hover:bg-purple-500 transition-colors"></div>
                <div className="w-8 h-8 rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Feature 2 - With Visual Preview */}
        <div className="md:col-span-1 bento-card p-5 rounded-3xl group relative overflow-hidden min-h-[220px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative z-10 h-full flex flex-col">
            {/* Text Area */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-600 font-mono text-xs tracking-wider font-bold">STYLE</span>
              </div>
              <h3 className="text-lg font-bold mb-1 text-slate-900">Style Extraction</h3>
              <p className="text-slate-600 leading-relaxed text-xs">
                Extract colors, fonts, and spacing from any site. Build your design tokens automatically.
              </p>
            </div>
            {/* Visual Preview */}
            <div className="flex-1 bg-slate-50 rounded-xl border border-slate-200 p-3 flex items-center justify-center min-h-[100px]">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-400 group-hover:scale-110 transition-transform"></div>
                <div className="w-6 h-6 rounded-full bg-green-600 group-hover:scale-110 transition-transform delay-75"></div>
                <div className="w-6 h-6 rounded-full bg-green-800 group-hover:scale-110 transition-transform delay-150"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;