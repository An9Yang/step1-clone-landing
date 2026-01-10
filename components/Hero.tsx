import React, { useState, useEffect } from 'react';

const brands = ['Apple', 'Stripe', 'Linear', 'Venmo', 'Framer'];

const Hero: React.FC = () => {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentBrand = brands[currentBrandIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentBrand.length) {
          setDisplayText(currentBrand.substring(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentBrand.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentBrandIndex((prev) => (prev + 1) % brands.length);
        }
      }
    }, isDeleting ? 60 : 90);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentBrandIndex]);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] hero-gradient-overlay -z-10 pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/15 rounded-full blur-[60px] animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-[80px] -z-10"></div>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 max-w-5xl mx-auto leading-tight text-foreground">
        Clone{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-teal-300 inline-block min-w-[120px] md:min-w-[180px] bg-[length:200%_200%] animate-gradient-flow">
          {displayText}
        </span>
        , Make it Yours.
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed font-light">
        Copy style from any site, apply them to yours.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto mb-20">
        <a className="relative w-full sm:w-auto h-12 px-6 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:bg-primary/90 transition-all duration-200 ease-smooth flex items-center justify-center gap-2.5 group shadow-elevation-2 hover:shadow-elevation-3 overflow-hidden btn-primary-glow" href="#">
          {/* Chrome Icon - Monochrome outline style */}
          <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="21.17" y1="8" x2="12" y2="8"></line>
            <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
            <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
          </svg>
          <span className="relative z-10">Install for Chrome</span>
          <div className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-500 z-0"></div>
        </a>
        <a className="w-full sm:w-auto h-12 px-6 bg-card border border-border text-foreground font-semibold text-sm rounded-xl hover:bg-muted hover:border-border transition-all duration-200 ease-smooth flex items-center justify-center gap-2.5 shadow-elevation-1 hover:shadow-elevation-2" href="#">
          <span className="material-icons-round text-lg text-muted-foreground">play_circle</span>
          <span>Watch Demo</span>
        </a>
      </div>

      {/* Hero UI Mockup */}
      <div className="relative w-full max-w-5xl mx-auto perspective-1000 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
        <div className="relative rounded-xl overflow-hidden border border-border shadow-elevation-4 bg-card/90 backdrop-blur-md transition-shadow duration-300 ease-smooth hover:shadow-elevation-4">
          <div className="h-10 bg-muted border-b border-border flex items-center px-4 gap-2 justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
            </div>
            <div className="flex-1 text-center">
              <div className="bg-background border border-border rounded py-0.5 px-3 text-[10px] text-muted-foreground font-mono inline-flex items-center gap-1">
                <span className="material-icons-round text-[10px]">lock</span>
                step1.app
              </div>
            </div>
            <div className="w-10"></div>
          </div>
          <div className="aspect-[16/9] w-full bg-muted relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-dots-pattern opacity-50"></div>

            {/* Extracted Style Card */}
            <div className="absolute top-[20%] left-[15%] w-[300px] bg-card rounded-xl border border-border shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] p-5 z-20 animate-float">
              <div className="flex justify-between items-center mb-4 border-b border-border/50 pb-3">
                <span className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Style Extracted</span>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground/70 font-medium">Palette</span>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border-2 border-card bg-[#007AFF]"></div>
                    <div className="w-6 h-6 rounded-full border-2 border-card bg-[#F5F5F7]"></div>
                    <div className="w-6 h-6 rounded-full border-2 border-card bg-[#1D1D1F]"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground/70 font-medium">Typography</span>
                  <span className="text-xs font-semibold text-foreground bg-muted px-2 py-1 rounded">SF Pro Display</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground/70 font-medium">Roundness</span>
                  <div className="w-12 h-4 rounded-full border border-border bg-muted relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-zinc-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cursor */}
            <div className="absolute top-[50%] left-[55%] z-30 pointer-events-none drop-shadow-xl">
              <svg className="w-8 h-8 text-foreground fill-foreground" viewBox="0 0 24 24"><path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4V2z"></path></svg>
              <div className="absolute top-6 left-4 bg-card border border-border text-foreground text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Style Copied!
              </div>
            </div>

            {/* Dashed Selection Box */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-2/3 h-2/3 border-2 border-dashed border-zinc-600 rounded-xl relative bg-card/50 backdrop-blur-sm">
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
