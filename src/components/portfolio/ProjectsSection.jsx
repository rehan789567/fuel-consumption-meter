import React from 'react';

export default function ProjectsSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 sm:py-24 border-x border-gridline" id="projects">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b-2 border-ink pb-6">
        <div>
          <div className="font-mono text-xs font-bold tracking-widest text-klein uppercase mb-2 flex items-center gap-2">
            <span>02 // PRODUCTION CRAFT &amp; KEY PROJECTS</span>
            <span className="w-6 h-[2px] bg-klein"></span>
          </div>
          <h2 className="font-headline font-black text-3xl sm:text-5xl uppercase tracking-tight text-ink">
            FEATURED SHIPPED WORK
          </h2>
        </div>
        <div className="font-mono text-xs text-neutral-600 uppercase flex items-center gap-3">
          <span className="px-2 py-1 bg-white border border-ink font-bold">SORT: ALL_CORE</span>
          <span>4 IMPLEMENTATIONS</span>
        </div>
      </div>

      {/* Bento Cards Grid with Interactive Animations (4 Projects) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* PROJECT 01: My Weather */}
        <article className="bg-white border-2 border-ink flex flex-col justify-between shadow-[6px_6px_0px_#09090B] group project-card-interactive relative overflow-hidden">
          {/* Blueprint Corner Accent on Hover */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-klein opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div className="p-6">
            <div className="flex items-center justify-between border-b border-gridline pb-3 mb-5">
              <span className="font-mono text-[11px] font-bold text-klein bg-klein/10 px-2 py-0.5 uppercase group-hover:bg-klein group-hover:text-white transition-colors duration-300">
                3D &amp; REACT // FEATURED
              </span>
              <span className="font-mono text-[11px] text-neutral-500 font-bold group-hover:text-ink transition-colors">
                #PRJ-01
              </span>
            </div>

            {/* Wireframe Schematic Visual */}
            <div className="w-full h-36 bg-surface-subtle border border-gridline-dark mb-5 p-3 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-swiss-grid opacity-60"></div>
              <div className="relative z-10 flex justify-between font-mono text-[9px] font-bold text-neutral-600">
                <span>ATMOSPHERIC 3D</span>
                <span className="text-klein">WEATHER API</span>
              </div>
              <div className="relative z-10 my-auto text-center font-headline font-black text-xl tracking-tighter text-ink group-hover:scale-105 transition-transform duration-300">
                MY<span className="text-klein">WEATHER</span>
              </div>
              <div className="relative z-10 flex justify-between font-mono text-[9px] text-neutral-500 border-t border-gridline pt-1">
                <span>DYNAMIC THEMES</span>
                <span>R3F SHADERS</span>
              </div>
            </div>

            <h3 className="font-headline font-black text-xl uppercase text-ink mb-2 group-hover:text-klein transition-colors">
              My Weather
            </h3>
            <p className="font-body text-neutral-700 text-xs sm:text-sm leading-relaxed mb-5 min-h-[60px]">
              A weather forecasting site with dynamic UI theming that changes with real-time weather conditions and 3D atmospheric effects.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px] font-bold uppercase text-neutral-600">
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">React</span>
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">Vite</span>
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">Three.js</span>
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">R3F</span>
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">WeatherAPI</span>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="border-t-2 border-ink bg-surface-dim p-3.5 flex items-center justify-between group-hover:bg-klein group-hover:text-white transition-colors duration-300">
            <span className="font-mono text-[11px] font-black uppercase tracking-wider">
              EXPLORE SHADERS
            </span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1.5 transition-transform duration-300">
              arrow_forward
            </span>
          </div>
        </article>

        {/* PROJECT 02: LMS Web App */}
        <article className="bg-white border-2 border-ink flex flex-col justify-between shadow-[6px_6px_0px_#09090B] group project-card-interactive relative overflow-hidden">
          {/* Blueprint Corner Accent on Hover */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-vermilion opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div className="p-6">
            <div className="flex items-center justify-between border-b border-gridline pb-3 mb-5">
              <span className="font-mono text-[11px] font-bold text-vermilion bg-vermilion/10 px-2 py-0.5 uppercase group-hover:bg-vermilion group-hover:text-white transition-colors duration-300">
                FULL-STACK // ACTIVE PROD
              </span>
              <span className="font-mono text-[11px] text-neutral-500 font-bold group-hover:text-ink transition-colors">
                #PRJ-02
              </span>
            </div>

            {/* Wireframe Schematic Visual */}
            <div className="w-full h-36 bg-surface-subtle border border-gridline-dark mb-5 p-3 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-swiss-grid opacity-60"></div>
              <div className="relative z-10 flex justify-between font-mono text-[9px] font-bold text-neutral-600">
                <span>STATUS: IN PROGRESS</span>
                <span className="text-vermilion">SUPABASE</span>
              </div>
              <div className="relative z-10 my-auto text-center font-headline font-black text-xl tracking-tighter text-ink group-hover:scale-105 transition-transform duration-300">
                LMS<span className="text-vermilion">PORTAL</span>
              </div>
              <div className="relative z-10 flex justify-between font-mono text-[9px] text-neutral-500 border-t border-gridline pt-1">
                <span>GRADES 5 TO 10</span>
                <span>AUTH &amp; POSTGRES</span>
              </div>
            </div>

            <h3 className="font-headline font-black text-xl uppercase text-ink mb-2 group-hover:text-klein transition-colors">
              LMS Web App
            </h3>
            <p className="font-body text-neutral-700 text-xs sm:text-sm leading-relaxed mb-5 min-h-[60px]">
              A tailored learning management system for a small educational institute serving students across classes 5 to 10.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px] font-bold uppercase text-neutral-600">
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">React</span>
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">Vite</span>
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">Supabase</span>
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">PostgreSQL</span>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="border-t-2 border-ink bg-surface-dim p-3.5 flex items-center justify-between group-hover:bg-klein group-hover:text-white transition-colors duration-300">
            <span className="font-mono text-[11px] font-black uppercase tracking-wider">
              VIEW ROADMAP
            </span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1.5 transition-transform duration-300">
              arrow_forward
            </span>
          </div>
        </article>

        {/* PROJECT 03: Neo Calculator */}
        <article className="bg-white border-2 border-ink flex flex-col justify-between shadow-[6px_6px_0px_#09090B] group project-card-interactive relative overflow-hidden">
          {/* Blueprint Corner Accent on Hover */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-ink opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div className="p-6">
            <div className="flex items-center justify-between border-b border-gridline pb-3 mb-5">
              <span className="font-mono text-[11px] font-bold text-ink bg-neutral-200 px-2 py-0.5 uppercase group-hover:bg-ink group-hover:text-white transition-colors duration-300">
                SYSTEMS &amp; WEB
              </span>
              <span className="font-mono text-[11px] text-neutral-500 font-bold group-hover:text-ink transition-colors">
                #PRJ-03
              </span>
            </div>

            {/* Wireframe Schematic Visual */}
            <div className="w-full h-36 bg-surface-subtle border border-gridline-dark mb-5 p-3 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-swiss-grid opacity-60"></div>
              <div className="relative z-10 flex justify-between font-mono text-[9px] font-bold text-neutral-600">
                <span>C KERNEL LOGIC</span>
                <span className="text-ink font-bold">PRECISION ARITHMETIC</span>
              </div>
              <div className="relative z-10 my-auto text-center font-headline font-black text-xl tracking-tighter text-ink group-hover:scale-105 transition-transform duration-300">
                NEO<span className="text-neutral-400">CALC</span>
              </div>
              <div className="relative z-10 flex justify-between font-mono text-[9px] text-neutral-500 border-t border-gridline pt-1">
                <span>RESPONSIVE GUI</span>
                <span>LOW-LEVEL SPEED</span>
              </div>
            </div>

            <h3 className="font-headline font-black text-xl uppercase text-ink mb-2 group-hover:text-klein transition-colors">
              Neo Calculator
            </h3>
            <p className="font-body text-neutral-700 text-xs sm:text-sm leading-relaxed mb-5 min-h-[60px]">
              Arithmetic calculation engine with core numerical logic compiled in C, presented through a clean responsive web interface.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px] font-bold uppercase text-neutral-600">
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">C Lang</span>
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">HTML5</span>
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">CSS3</span>
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">JavaScript</span>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="border-t-2 border-ink bg-surface-dim p-3.5 flex items-center justify-between group-hover:bg-klein group-hover:text-white transition-colors duration-300">
            <span className="font-mono text-[11px] font-black uppercase tracking-wider">
              INSPECT CODE
            </span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1.5 transition-transform duration-300">
              arrow_forward
            </span>
          </div>
        </article>

        {/* PROJECT 04: Number Guessing Game */}
        <article className="bg-white border-2 border-ink flex flex-col justify-between shadow-[6px_6px_0px_#09090B] group project-card-interactive relative overflow-hidden">
          {/* Blueprint Corner Accent on Hover */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-klein opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div className="p-6">
            <div className="flex items-center justify-between border-b border-gridline pb-3 mb-5">
              <span className="font-mono text-[11px] font-bold text-klein bg-klein/10 px-2 py-0.5 uppercase group-hover:bg-klein group-hover:text-white transition-colors duration-300">
                ALGORITHMIC C GAME
              </span>
              <span className="font-mono text-[11px] text-neutral-500 font-bold group-hover:text-ink transition-colors">
                #PRJ-04
              </span>
            </div>

            {/* Wireframe Schematic Visual */}
            <div className="w-full h-36 bg-surface-subtle border border-gridline-dark mb-5 p-3 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-swiss-grid opacity-60"></div>
              <div className="relative z-10 flex justify-between font-mono text-[9px] font-bold text-neutral-600">
                <span>PSEUDO-RANDOM RNG</span>
                <span className="text-klein">BINARY LOGIC</span>
              </div>
              <div className="relative z-10 my-auto text-center font-headline font-black text-xl tracking-tighter text-ink group-hover:scale-105 transition-transform duration-300">
                GUESS<span className="text-klein">GAME</span>
              </div>
              <div className="relative z-10 flex justify-between font-mono text-[9px] text-neutral-500 border-t border-gridline pt-1">
                <span>STATE MACHINE</span>
                <span>INTUITIVE GUI</span>
              </div>
            </div>

            <h3 className="font-headline font-black text-xl uppercase text-ink mb-2 group-hover:text-klein transition-colors">
              Number Guessing Game
            </h3>
            <p className="font-body text-neutral-700 text-xs sm:text-sm leading-relaxed mb-5 min-h-[60px]">
              Interactive logic game where players predict hidden numbers. Core algorithmic state driven by C logic wrapped in an intuitive GUI.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px] font-bold uppercase text-neutral-600">
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">C Lang</span>
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">HTML5</span>
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">CSS3</span>
              <span className="bg-neutral-100 border border-neutral-300 px-1.5 py-0.5">JavaScript</span>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="border-t-2 border-ink bg-surface-dim p-3.5 flex items-center justify-between group-hover:bg-klein group-hover:text-white transition-colors duration-300">
            <span className="font-mono text-[11px] font-black uppercase tracking-wider">
              TEST INTERFACE
            </span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1.5 transition-transform duration-300">
              arrow_forward
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
