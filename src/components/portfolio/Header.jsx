import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-ink">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand & Architect Tag */}
        <div className="flex items-center gap-5">
          <div className="w-11 h-11 bg-klein text-white flex items-center justify-center font-mono font-black text-xl shadow-[3px_3px_0px_#09090B]">
            MR
          </div>
          <div className="flex flex-col">
            <a
              className="font-headline font-black text-xl tracking-tighter uppercase text-ink hover:text-klein transition-colors leading-tight"
              href="#hero"
            >
              MUHAMMAD REHAN
            </a>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
              [VIBE CODER &amp; WEB DEVELOPER // MULTAN, PK]
            </span>
          </div>
        </div>

        {/* Navigation Index */}
        <nav className="hidden lg:flex items-center gap-8 font-mono text-[12px] font-bold uppercase tracking-wider text-ink">
          <a
            className="text-klein border-b-2 border-klein pb-1 hover:text-klein transition-colors"
            href="#hero"
          >
            [01] OVERVIEW
          </a>
          <a
            className="hover:text-klein transition-colors"
            href="#projects"
          >
            [02] PROJECTS
          </a>
          <a
            className="hover:text-klein transition-colors"
            href="#stack"
          >
            [03] STACK
          </a>
          <a
            className="hover:text-klein transition-colors"
            href="#terminal"
          >
            [04] CLI TERMINAL
          </a>
          <a
            className="hover:text-klein transition-colors"
            href="#contact"
          >
            [05] CONTACT
          </a>
        </nav>

        {/* Live Availability Status & Direct Action */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 border border-gridline-dark px-3 py-1.5 font-mono text-[11px] bg-surface-dim">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="font-bold text-ink">
              OPEN FOR COLLABORATION // CLASS 11
            </span>
          </div>
          <a
            className="inline-flex items-center justify-center px-6 py-3 bg-klein text-white font-mono font-bold text-xs uppercase tracking-widest border-2 border-ink shadow-[4px_4px_0px_#09090B] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:bg-ink transition-all"
            href="mailto:rehanzps1@gmail.com"
          >
            CONTACT // GET IN TOUCH
          </a>
        </div>
      </div>
    </header>
  );
}
