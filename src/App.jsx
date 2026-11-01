import React from 'react';
import Header from './components/portfolio/Header';
import HeroSection from './components/portfolio/HeroSection';
import MetricBlocks from './components/portfolio/MetricBlocks';
import MarqueeTicker from './components/portfolio/MarqueeTicker';
import ProjectsSection from './components/portfolio/ProjectsSection';
import StackSection from './components/portfolio/StackSection';
import TerminalSection from './components/portfolio/TerminalSection';
import ContactSection from './components/portfolio/ContactSection';
import Footer from './components/portfolio/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink flex flex-col font-body selection:bg-klein selection:text-white">
      <Header />
      <main className="w-full bg-surface-dim/40 bg-swiss-grid flex-1">
        <HeroSection />
        <MetricBlocks />
        <MarqueeTicker />
        <ProjectsSection />
        <StackSection />
        <TerminalSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
