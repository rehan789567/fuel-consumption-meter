import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative max-w-[1440px] mx-auto border-x border-b border-gridline bg-white" id="hero">
      {/* Coordinate Strip Top */}
      <div className="border-b border-gridline px-4 md:px-8 py-2.5 flex items-center justify-between font-mono text-[11px] text-neutral-500 uppercase">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2.5 h-2.5 bg-vermilion"></span>
          <span className="text-ink font-bold">STRUCTURAL VIEWPORT // CANVAS_01</span>
          <span>// MULTAN [30.1575° N, 71.5249° E]</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-ink font-mono font-medium">
          <span>SPATIAL 3D: THREE.JS</span>
          <span className="text-neutral-300">|</span>
          <span className="text-klein font-bold">IKB #0047FF CALIBRATED</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* Left Hero Typography Block (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-10 md:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gridline">
          <div>
            {/* Monospace pill badge */}
            <div className="inline-flex items-center gap-2 border-2 border-ink px-3 py-1 mb-6 bg-white shadow-[3px_3px_0px_#0047FF] transition-transform hover:-translate-y-0.5 cursor-default">
              <span className="w-2 h-2 bg-klein"></span>
              <span className="font-mono text-[11px] font-black uppercase tracking-widest text-ink">
                VIBE CODER // WEB &amp; SOFTWARE DEVELOPER
              </span>
            </div>

            {/* Massive Swiss Bauhaus Headline with Kinetic Typography Animation */}
            <h1 className="font-headline font-black text-4xl sm:text-5xl md:text-6xl xl:text-[66px] leading-[0.98] tracking-[-0.04em] uppercase text-ink mb-8 select-none">
              <span className="kinetic-word-block">MUHAMMAD</span>{' '}
              <span className="kinetic-word-block text-ink">REHAN</span>
              <br />
              <span className="text-klein underline decoration-vermilion decoration-4 underline-offset-8 kinetic-glow-pulse cursor-pointer">
                WEB DEVELOPER
              </span>{' '}
              <span className="text-neutral-400">&amp;</span>
              <br />
              <span className="bg-ink text-white px-2 py-0.5 inline-block my-1 shadow-[3px_3px_0px_#FF4D00] transition-transform hover:translate-x-1 cursor-default">
                CYBER ENTHUSIAST
              </span>
            </h1>

            <p className="font-body text-lg md:text-xl text-neutral-700 max-w-xl font-normal leading-relaxed border-l-4 border-klein pl-5 mb-10">
              18-year-old self-taught developer based in Multan, Pakistan. Crafting responsive web apps, 3D interactive experiences with Three.js, and exploring cybersecurity &amp; ethical hacking in an AI-driven world.
            </p>
          </div>

          {/* Hero Action Controls */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              className="inline-flex items-center gap-3 px-8 py-4 bg-klein text-white font-headline font-bold text-sm tracking-widest uppercase border-2 border-ink shadow-[5px_5px_0px_#09090B] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-ink transition-all"
              href="#projects"
            >
              <span>EXPLORE PROJECTS</span>
              <span className="material-symbols-outlined text-[18px]">south_east</span>
            </a>
            <a
              className="inline-flex items-center gap-3 px-7 py-4 bg-white text-ink font-mono font-bold text-xs tracking-wider uppercase border-2 border-ink hover:border-klein hover:text-klein transition-all"
              href="#terminal"
            >
              <span>LAUNCH LIVE CLI</span>
              <span className="px-1.5 py-0.5 bg-neutral-100 border border-neutral-300 text-[10px] text-neutral-600 font-bold">
                ESC
              </span>
            </a>
            <div className="w-full sm:w-auto mt-2 sm:mt-0 font-mono text-[11px] text-neutral-500 uppercase flex items-center gap-2">
              <span className="text-vermilion font-bold">&gt;&gt;</span> REACT // VITE // THREE.JS // PYTHON // C
            </div>
          </div>
        </div>

        {/* Right Visual Wireframe & Bauhaus Composition (5 Cols) */}
        <div className="lg:col-span-5 bg-surface-dim p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Bauhaus Geometric Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-klein text-white font-mono text-[10px] p-2 flex flex-col justify-between border-l-2 border-b-2 border-ink pointer-events-none select-none z-20">
            <span>GRID::MR01</span>
            <span className="font-black text-right text-lg">90°</span>
          </div>

          {/* Interactive Geometric Gizmo / Wireframe Canvas */}
          <div className="my-auto w-full aspect-square max-w-[360px] mx-auto relative flex items-center justify-center cursor-crosshair group">
            {/* Grid Underlay Circle */}
            <div className="absolute inset-0 rounded-full border border-dashed border-gridline-dark"></div>
            <div className="absolute w-[86%] h-[86%] rounded-full border border-klein/20 animate-spin-slow"></div>
            <div className="absolute w-[80%] h-[80%] border border-ink/30 animate-spin-slow pointer-events-none"></div>
            <div className="absolute w-[75%] h-[75%] border-2 border-klein animate-spin-reverse pointer-events-none"></div>
            <div className="absolute w-[60%] h-[60%] border border-vermilion rotate-45 animate-spin-reverse"></div>

            {/* Inner 3D Coordinate Node */}
            <div className="relative z-10 w-32 h-36 border-2 border-ink bg-white shadow-[4px_4px_0px_#0047FF] overflow-hidden flex flex-col group/portrait">
              <div className="w-full bg-ink text-white font-mono text-[8px] font-bold px-2 py-0.5 flex items-center justify-between tracking-wider uppercase border-b border-ink shrink-0">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  REHAN
                </span>
                <span className="text-klein text-[7px]">NODE_01</span>
              </div>
              <div className="relative flex-1 w-full h-full overflow-hidden bg-neutral-100">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6fWbLCdmkLn6bTvL6sThlc2okbh4bZvNFlyM-mYqGmQEPn0z8zWqvnGaUe9qUidSvoeL37-nXtPHKuTLFTSk8tRqj4mFns6TcCZcSv-5ExaiyRqnrzw551e03sZpakKptsD0XkbDrPbjxNp3-MRzrs6C_wS_xBxST7bNfTytTsY_lDkN79u2yQwrwKtv6J5dEfg34G7YXcS9r1O_wKuA4MvUcTadZDTntXMcde-LDWiPdZZOr25W4"
                  alt="Muhammad Rehan portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/portrait:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-1 left-1.5 right-1.5 flex items-center justify-between font-mono text-[8px] text-white font-bold leading-none">
                  <span className="bg-klein px-1 py-0.5 text-[7px] uppercase tracking-wider">CLASS 11</span>
                  <span className="text-[7px] text-neutral-300">MULTAN, PK</span>
                </div>
              </div>
            </div>

            {/* Floating Bauhaus Badges */}
            <div className="absolute -bottom-2 -left-2 bg-ink text-white font-mono text-[10px] font-bold px-3 py-1.5 border border-white shadow-[2px_2px_0px_#FF4D00] z-20">
              MATRIX: 4x4 AFFINE
            </div>
            <div className="absolute -top-3 right-8 bg-vermilion text-white font-mono text-[10px] font-black px-2.5 py-1 tracking-wider z-20">
              THREE.JS 60 FPS
            </div>
          </div>

          {/* Bottom Telemetry Spec */}
          <div className="border-t-2 border-ink pt-4 mt-6 flex items-center justify-between font-mono text-[11px]">
            <span className="font-bold text-ink">LOCATION: MULTAN, PK</span>
            <span className="text-klein font-bold">VIBE-CODING ENGINE // ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
