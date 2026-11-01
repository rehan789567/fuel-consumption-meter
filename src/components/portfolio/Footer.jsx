import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 border-ink">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        {/* 5-Column Swiss Typographic Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start pb-12 border-b-2 border-ink">
          {/* Column 1: Monogram & Bio (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-klein text-white font-mono font-black flex items-center justify-center text-lg shadow-[3px_3px_0px_#09090B]">
                MR
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-xl tracking-tight text-ink uppercase leading-none">
                  MUHAMMAD REHAN
                </span>
                <span className="font-mono text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                  VIBE CODER &amp; WEB DEVELOPER
                </span>
              </div>
            </div>
            <p className="font-body text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              18-year-old self-taught developer &amp; vibe coder based in Multan, PK. Merging 3D Three.js experiences, modern full-stack web, and cybersecurity exploration in an AI-driven era.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[10px]">
              <span className="bg-surface-dim border border-ink px-2 py-1 text-ink font-bold">
                PKT (UTC+5)
              </span>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-500 px-2 py-1 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> AVAILABLE NOW
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Index (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-2 font-mono text-xs uppercase">
            <span className="font-bold text-ink mb-1 border-b border-gridline pb-1">
              NAVIGATION INDEX
            </span>
            <a className="text-neutral-600 hover:text-klein transition-colors" href="#hero">
              [01] OVERVIEW
            </a>
            <a className="text-neutral-600 hover:text-klein transition-colors" href="#projects">
              [02] PRODUCTION WORK
            </a>
            <a className="text-neutral-600 hover:text-klein transition-colors" href="#stack">
              [03] TECH STACK &amp; MATRIX
            </a>
            <a className="text-neutral-600 hover:text-klein transition-colors" href="#terminal">
              [04] CLI TERMINAL
            </a>
            <a className="text-neutral-600 hover:text-klein transition-colors" href="#contact">
              [05] CONTACT PROTOCOL
            </a>
          </div>

          {/* Column 3: Featured Projects Links (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-2 font-mono text-xs uppercase">
            <span className="font-bold text-ink mb-1 border-b border-gridline pb-1">
              FEATURED BUILDS
            </span>
            <a className="text-neutral-600 hover:text-klein transition-colors flex items-center gap-1" href="#projects">
              <span className="text-klein font-bold">&gt;</span> MY WEATHER 3D
            </a>
            <a className="text-neutral-600 hover:text-klein transition-colors flex items-center gap-1" href="#projects">
              <span className="text-vermilion font-bold">&gt;</span> LMS WEB APP
            </a>
            <a className="text-neutral-600 hover:text-klein transition-colors flex items-center gap-1" href="#projects">
              <span className="text-ink font-bold">&gt;</span> NEO CALCULATOR
            </a>
            <a className="text-neutral-600 hover:text-klein transition-colors flex items-center gap-1" href="#projects">
              <span className="text-neutral-400 font-bold">&gt;</span> GUESS GAME (C)
            </a>
          </div>

          {/* Column 4: Communication Vectors & Verified Profiles (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-2 font-mono text-xs uppercase">
            <span className="font-bold text-ink mb-1 border-b border-gridline pb-1">
              VERIFIED VECTORS
            </span>
            <a className="text-neutral-600 hover:text-klein flex items-center gap-1.5 transition-colors" href="mailto:rehanzps1@gmail.com">
              <span className="text-klein font-bold">&gt;</span> EMAIL
            </a>
            <a className="text-neutral-600 hover:text-klein flex items-center gap-1.5 transition-colors" href="tel:+923238951383">
              <span className="text-klein font-bold">&gt;</span> TEL: +92 323 8951383
            </a>
            <a
              className="text-neutral-600 hover:text-klein flex items-center gap-1.5 transition-colors"
              href="https://github.com/rehan789567"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-klein font-bold">&gt;</span> GITHUB
            </a>
            <a
              className="text-neutral-600 hover:text-klein flex items-center gap-1.5 transition-colors"
              href="https://www.linkedin.com/in/muhammad-rehan-600640393"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-klein font-bold">&gt;</span> LINKEDIN
            </a>
            <a
              className="text-neutral-600 hover:text-klein flex items-center gap-1.5 transition-colors"
              href="https://www.instagram.com/im.__.rehan"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-klein font-bold">&gt;</span> INSTAGRAM
            </a>
          </div>

          {/* Column 5: Telemetry & Tech Specs (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-2 font-mono text-[11px] uppercase bg-surface-dim p-4 border border-gridline-dark">
            <span className="font-bold text-ink mb-1">SYSTEM TELEMETRY</span>
            <div className="space-y-1.5 text-neutral-600 text-[10px]">
              <div><span className="text-neutral-400">ENGINE:</span> REACT + THREE.JS</div>
              <div><span className="text-neutral-400">CSS:</span> TAILWIND</div>
              <div><span className="text-neutral-400">GRID:</span> SWISS BAUHAUS 1928</div>
              <div><span className="text-neutral-400">COORDS:</span> 30.1575° N, 71.5249° E</div>
              <div className="pt-1 text-klein font-bold">IKB #0047FF CALIBRATED</div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Bar with Specs, Palette & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500 uppercase">
          <div>
            © 2025 MUHAMMAD REHAN // MULTAN, PAKISTAN // ALL SPECIFICATIONS CERTIFIED UNDER SWISS GRID STANDARD.
          </div>
          <div className="flex items-center gap-4 text-ink font-bold">
            <span className="text-klein">IKB #0047FF</span>
            <span>•</span>
            <span className="text-vermilion">VERMILION #FF4D00</span>
            <span>•</span>
            <span>PITCH BLACK #09090B</span>
            <a
              href="#hero"
              className="ml-2 px-2.5 py-1 bg-surface-dim hover:bg-klein hover:text-white border border-ink text-ink font-bold text-[10px] transition-colors flex items-center gap-1"
            >
              <span>TOP</span>
              <span className="material-symbols-outlined text-[12px]">arrow_upward</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
