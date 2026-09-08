import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureInteraction } from './components/SignatureInteraction';
import { Services } from './components/Services';
import { Materials } from './components/Materials';
import { Technology } from './components/Technology';
import { Industries } from './components/Industries';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { QuoteConfigurator } from './components/QuoteConfigurator';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const scrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPipeline = () => {
    const el = document.getElementById('pipeline');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-industrial-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-400">
      {/* Header Navigation */}
      <Navbar onOpenQuoteModal={scrollToQuote} />

      {/* Main Content Sections */}
      <main>
        <Hero onExplorePipeline={scrollToPipeline} onOpenQuote={scrollToQuote} />
        <SignatureInteraction />
        <Services />
        <Materials />
        <Technology />
        <Industries />
        <Portfolio />
        <Process />
        <QuoteConfigurator />
      </main>

      {/* Industrial Footer */}
      <Footer />
    </div>
  );
};

export default App;
