import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border-light bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8" viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="181.119" height="181.119" rx="40" fill="white" stroke="#e2e8f0" strokeWidth="2"/>
            <path d="M55.7429 76.0664L105.052 55.7429L125.376 105.052" stroke="black" strokeWidth="10.6667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M76.0664 125.376L105.052 55.7429" stroke="black" strokeWidth="10.6667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-bold text-lg tracking-tight text-slate-900">Step1</span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          {['Showcase', 'Pricing'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block" href="#">
            Log in
          </a>
          <a className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all duration-200 ease-smooth shadow-elevation-1 hover:shadow-elevation-2" href="#">
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
           {['Showcase', 'Pricing'].map((item) => (
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