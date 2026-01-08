import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-black font-bold text-sm">C</div>
              <span className="font-bold text-xl text-slate-900">Clonable</span>
            </div>
            <p className="text-slate-500 text-sm mb-6 max-w-xs leading-relaxed">
              Tools for modern web design and cloning for everyone.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all shadow-sm" href="#"><span className="material-icons-round text-sm">adb</span></a>
              <a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all shadow-sm" href="#"><span className="material-icons-round text-sm">alternate_email</span></a>
              <a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all shadow-sm" href="#"><span className="material-icons-round text-sm">group</span></a>
            </div>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Showcase</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Chrome Extension</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Quick Start</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Updates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a className="hover:text-primary transition-colors" href="#">About</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2024 Clonable. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;