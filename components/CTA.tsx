import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-card rounded-3xl p-12 md:p-20 text-center overflow-hidden border border-border/60 shadow-elevation-3 isolate">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(63,63,70,0.5)_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-card/20 via-card/80 to-card"></div>
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight relative">
            Accelerate your website.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 font-medium leading-relaxed">
            Join thousands of creators building stunning websites in half the time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a className="group relative h-12 px-6 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:bg-primary/90 transition-all duration-200 ease-smooth flex items-center justify-center gap-2.5 shadow-elevation-2 hover:shadow-elevation-3 overflow-hidden btn-primary-glow" href="#">
              <div className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-500 z-0"></div>
              <span className="relative z-10">Get Started Free</span>
              <span className="material-icons-round text-lg relative z-10 transition-transform group-hover:translate-x-0.5">arrow_forward</span>
            </a>
            <a className="h-12 px-6 bg-muted border border-border text-foreground font-semibold text-sm rounded-xl hover:bg-muted/80 hover:border-border transition-all duration-200 ease-smooth flex items-center justify-center gap-2.5 shadow-elevation-1 hover:shadow-elevation-2" href="#">
              <span className="material-icons-round text-lg text-muted-foreground">group</span>
              <span>Community</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
