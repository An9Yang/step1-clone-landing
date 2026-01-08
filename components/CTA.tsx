import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-3xl p-12 md:p-20 text-center overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] isolate">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/20 via-white/80 to-white"></div>
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight relative">
            Accelerate your website.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto mb-10 font-medium leading-relaxed">
            Join thousands of creators building stunning websites in half the time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-slate-900 px-8 font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shine_1s_infinite]"></div>
              <span className="mr-2">Get Started Free</span>
              <span className="material-icons-round text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
            <a className="group inline-flex h-12 items-center justify-center rounded-full bg-white border border-slate-200 px-8 font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2" href="#">
              <img alt="Community" className="w-5 h-5 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7fFuVhQ1LiSlE_m0qKDzDyXwEq1in76Co733hSGrrpQrGqZfBj69DWyPmfP9U8AWxzy07j4bdjCEL0mz3kfTPMos2xkupw6lII6946bcLvcw8xSQVHnB7yoeHUi4GBFcEK1oP6yqc6xt2KUkaWlD6nawjlHntLb35tlK6px7wa_mIG0fldZ_-o_dSjDj2gmJ78TX6CACVXDdKie8LvFwAyO5HF9lX33H0uQy63SxgKpRsybT03yw_PKDZpNhxLQ8Cco8v3-9h-Rm7"/>
              <span>Community</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;