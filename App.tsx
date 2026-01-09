import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Steps from './components/Steps';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'privacy') {
        setCurrentPage('privacy');
        window.scrollTo(0, 0);
      } else if (hash === 'terms') {
        setCurrentPage('terms');
        window.scrollTo(0, 0);
      } else if (hash === '' || !['privacy', 'terms'].includes(hash)) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfUse />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <Gallery />
            <Steps />
            <CTA />
            <FAQ />
          </>
        );
    }
  };

  const isLegalPage = currentPage === 'privacy' || currentPage === 'terms';

  return (
    <div className="min-h-screen bg-background-light">
      <Header />
      <main className={`pt-24 pb-12 ${isLegalPage ? 'bg-white' : ''}`}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;