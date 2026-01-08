import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Steps from './components/Steps';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-light">
      <Header />
      <main className="pt-24 pb-12">
        <Hero />
        <Features />
        <Gallery />
        <Steps />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;