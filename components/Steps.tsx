import React from 'react';

const Steps: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-6">
          <span className="material-icons-round text-sm text-primary">bolt</span> Quick Integration
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">Setup in minutes</h2>
        <p className="text-xl text-slate-500 font-light">Simple steps to supercharge your design workflow.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Step 1 */}
        <div className="bg-white border border-slate-200 p-10 rounded-3xl flex flex-col md:flex-row gap-12 items-center hover:border-slate-300 hover:shadow-lg transition-all shadow-sm">
          <div className="md:w-1/2">
            <span className="text-primary font-mono text-sm mb-4 block tracking-wider font-bold">01. INSTALLATION</span>
            <h3 className="text-3xl font-bold mb-6 text-slate-900">Install the extension</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">Get started by adding the extension to your browser. It sits quietly until you need it.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-600"><span className="bg-primary/20 text-yellow-700 p-1 rounded-full material-icons-round text-sm">check</span> One-click installation</li>
              <li className="flex items-center gap-3 text-slate-600"><span className="bg-primary/20 text-yellow-700 p-1 rounded-full material-icons-round text-sm">check</span> Works on any website</li>
            </ul>
            <button className="px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-bold transition-colors border border-slate-200">View in Web Store</button>
          </div>
          <div className="md:w-1/2 w-full bg-slate-50 rounded-2xl border border-slate-200 p-8 flex flex-col items-center justify-center min-h-[250px] relative overflow-hidden group shadow-lg">
            <div className="absolute inset-x-8 top-8 bottom-0 bg-white rounded-t-xl border-x border-t border-slate-200 shadow-sm flex flex-col">
              <div className="h-8 border-b border-slate-100 bg-slate-50 flex items-center px-3 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white h-5 rounded border border-slate-200 mx-2"></div>
                <svg className="w-4 h-4" viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="181.119" height="181.119" rx="40" fill="white"/>
                    <path d="M55.7429 76.0664L105.052 55.7429L125.376 105.052" stroke="black" strokeWidth="10.6667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M76.0664 125.376L105.052 55.7429" stroke="black" strokeWidth="10.6667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </div>
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 text-green-600">
                    <span className="material-icons-round">check</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">Added to Chrome</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white border border-slate-200 p-10 rounded-3xl flex flex-col md:flex-row-reverse gap-12 items-center hover:border-slate-300 hover:shadow-lg transition-all shadow-sm">
          <div className="md:w-1/2">
            <span className="text-primary font-mono text-sm mb-4 block tracking-wider font-bold">02. SELECT & CLONE</span>
            <h3 className="text-3xl font-bold mb-6 text-slate-900">Pick any element</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">Hover over any button, image, or section on the web. Our smart inspector detects the design automatically.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-600"><span className="bg-primary/20 text-yellow-700 p-1 rounded-full material-icons-round text-sm">check</span> Intelligent detection</li>
              <li className="flex items-center gap-3 text-slate-600"><span className="bg-primary/20 text-yellow-700 p-1 rounded-full material-icons-round text-sm">check</span> Captures hover effects</li>
            </ul>
            <button className="px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-bold transition-colors border border-slate-200">See Demo</button>
          </div>
          <div className="md:w-1/2 w-full h-64 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center relative overflow-hidden shadow-inner group">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="bg-white border-2 border-primary text-slate-900 px-8 py-4 rounded-lg relative cursor-pointer transform group-hover:scale-105 transition-transform duration-300 shadow-xl">
              <span className="font-bold text-lg">Sign Up Button</span>
              <div className="absolute -top-3 -right-3 bg-primary text-black text-[10px] font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                <span className="material-icons-round text-[10px]">ads_click</span> Selected
              </div>
              <div className="absolute top-1/2 -right-20 w-16 h-[2px] bg-primary border-t border-dashed border-white/50"></div>
              <div className="absolute top-1/2 -right-[5px] w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Steps;