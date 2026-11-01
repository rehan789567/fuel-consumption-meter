import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../App';
import Header from '../portfolio/Header';
import HeroSection from '../portfolio/HeroSection';
import ProjectsSection from '../portfolio/ProjectsSection';
import StackSection from '../portfolio/StackSection';
import TerminalSection from '../portfolio/TerminalSection';
import ContactSection from '../portfolio/ContactSection';
import Footer from '../portfolio/Footer';

describe('Portfolio Application Components', () => {
  it('renders Header with navigation and branding', () => {
    const html = renderToString(<Header />);
    expect(html).toContain('MUHAMMAD REHAN');
    expect(html).toContain('VIBE CODER &amp; WEB DEVELOPER');
    expect(html).toContain('#hero');
    expect(html).toContain('#projects');
  });

  it('renders HeroSection with headline and actions', () => {
    const html = renderToString(<HeroSection />);
    expect(html).toContain('MUHAMMAD');
    expect(html).toContain('REHAN');
    expect(html).toContain('WEB DEVELOPER');
    expect(html).toContain('CYBER ENTHUSIAST');
    expect(html).toContain('EXPLORE PROJECTS');
    expect(html).toContain('LAUNCH LIVE CLI');
  });

  it('renders ProjectsSection with all 4 key projects', () => {
    const html = renderToString(<ProjectsSection />);
    expect(html).toContain('FEATURED SHIPPED WORK');
    expect(html).toContain('My Weather');
    expect(html).toContain('LMS Web App');
    expect(html).toContain('Neo Calculator');
    expect(html).toContain('Number Guessing Game');
  });

  it('renders StackSection with skills matrix', () => {
    const html = renderToString(<StackSection />);
    expect(html).toContain('SKILLS &amp; DEVELOPMENT ENVIRONMENT');
    expect(html).toContain('PRIMARY WEB STACK');
    expect(html).toContain('React');
    expect(html).toContain('Three.js');
    expect(html).toContain('Supabase');
  });

  it('renders TerminalSection with commands and CLI interface', () => {
    const html = renderToString(<TerminalSection />);
    expect(html).toContain('CONSOLE::REHAN_DEV_CLI_V1.0');
    expect(html).toContain('rehan --whoami');
    expect(html).toContain('rehan --stack');
    expect(html).toContain('rehan --interests');
  });

  it('renders ContactSection and Footer with accurate vectors', () => {
    const contactHtml = renderToString(<ContactSection />);
    expect(contactHtml).toContain('INITIATE CONTACT // COLLABORATE');
    expect(contactHtml).toContain('rehanzps1@gmail.com');
    expect(contactHtml).toContain('+92 323 8951383');

    const footerHtml = renderToString(<Footer />);
    expect(footerHtml).toContain('SWISS GRID STANDARD');
    expect(footerHtml).toContain('IKB #0047FF');
  });

  it('renders the entire App without crashing', () => {
    const appHtml = renderToString(<App />);
    expect(appHtml).toContain('MUHAMMAD REHAN');
    expect(appHtml).toContain('bg-swiss-grid');
  });
});
