import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="help">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Common Questions</h2>
        </div>
        <div className="space-y-4">
          <details className="group border border-slate-200 rounded-xl bg-white cursor-pointer overflow-hidden transition-all duration-300 open:pb-4 shadow-sm">
            <summary className="flex justify-between items-center p-6 list-none hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-lg text-slate-800">Do I need to know how to code?</h3>
              <span className="material-icons-round text-slate-400 group-open:rotate-180 transition-transform">keyboard_arrow_down</span>
            </summary>
            <div className="px-6 text-slate-600">
              No code required. The tool gives you ready-to-use designs that you can apply directly to your projects.
            </div>
          </details>

          <details className="group border border-slate-200 rounded-xl bg-white cursor-pointer overflow-hidden transition-all duration-300 open:pb-4 shadow-sm">
            <summary className="flex justify-between items-center p-6 list-none hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-lg text-slate-800">Does it work with my website builder?</h3>
              <span className="material-icons-round text-slate-400 group-open:rotate-180 transition-transform">keyboard_arrow_down</span>
            </summary>
            <div className="px-6 text-slate-600">
              Yes! Step1 works with most modern platforms. It detects the style and helps you replicate it anywhere.
            </div>
          </details>

          <details className="group border border-slate-200 rounded-xl bg-white cursor-pointer overflow-hidden transition-all duration-300 open:pb-4 shadow-sm">
            <summary className="flex justify-between items-center p-6 list-none hover:bg-slate-50 transition-colors">
              <h3 className="font-bold text-lg text-slate-800">Is the design mobile friendly?</h3>
              <span className="material-icons-round text-slate-400 group-open:rotate-180 transition-transform">keyboard_arrow_down</span>
            </summary>
            <div className="px-6 text-slate-600">
              Absolutely. We ensure that all cloned styles maintain their look and feel across desktop, tablet, and mobile devices.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;