import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border-light bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-black font-bold text-lg shadow-[0_0_10px_rgba(250,204,21,0.5)]">
            C
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">Clonable</span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          {['Features', 'Showcase', 'Pricing', 'Help'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block" href="#">
            Log in
          </a>
          <a className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-md" href="#">
            Get Started
          </a>
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-icons-round">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-lg">
           {['Features', 'Showcase', 'Pricing', 'Help'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-600 font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              {item}
            </a>
          ))}
          <div className="h-px bg-slate-100 my-1"></div>
          <a className="text-slate-600 font-medium" href="#">Log in</a>
        </div>
      )}
    </header>
  );
};

export default Header;