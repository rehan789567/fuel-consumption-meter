import React from 'react';

export default function StackSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 border-t-2 border-x border-ink" id="stack">
      <div className="mb-10">
        <div className="font-mono text-xs font-bold tracking-widest text-klein uppercase mb-2 flex items-center gap-2">
          <span>03 // CAPABILITIES MATRIX</span>
          <span className="w-6 h-[2px] bg-klein"></span>
        </div>
        <h2 className="font-headline font-black text-3xl sm:text-4xl uppercase tracking-tight text-ink">
          SKILLS &amp; DEVELOPMENT ENVIRONMENT
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-ink bg-white">
        {/* Column 1: Primary & Frontend */}
        <div className="p-6 border-b md:border-b-0 lg:border-r border-gridline-dark flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs font-bold uppercase text-klein mb-3 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-klein"></span>
              PRIMARY WEB STACK
            </div>
            <ul className="font-mono text-xs space-y-2 text-neutral-800">
              <li className="flex items-center justify-between border-b border-gridline pb-1">
                <span>React</span> <span className="text-neutral-400 text-[10px]">V18+</span>
              </li>
              <li className="flex items-center justify-between border-b border-gridline pb-1">
                <span>Vite</span> <span className="text-neutral-400 text-[10px]">BUNDLER</span>
              </li>
              <li className="flex items-center justify-between border-b border-gridline pb-1">
                <span>Three.js</span> <span className="text-klein font-bold text-[10px]">WEBGL</span>
              </li>
              <li className="flex items-center justify-between border-b border-gridline pb-1">
                <span>React Three Fiber</span> <span className="text-neutral-400 text-[10px]">R3F</span>
              </li>
              <li className="flex items-center justify-between">
                <span>WeatherAPI</span> <span className="text-neutral-400 text-[10px]">REST</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-3 border-t border-gridline font-mono text-[11px] text-neutral-500">
            FOCUS: COMPONENT SYSTEMS &amp; 3D
          </div>
        </div>

        {/* Column 2: Languages */}
        <div className="p-6 border-b md:border-b-0 lg:border-r border-gridline-dark flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs font-bold uppercase text-vermilion mb-3 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-vermilion"></span>
              LANGUAGES
            </div>
            <ul className="font-mono text-xs space-y-2 text-neutral-800">
              <li className="flex items-center justify-between border-b border-gridline pb-1">
                <span>HTML5 / CSS3</span> <span className="text-neutral-400 text-[10px]">SEMANTIC</span>
              </li>
              <li className="flex items-center justify-between border-b border-gridline pb-1">
                <span>JavaScript</span> <span className="text-neutral-400 text-[10px]">ESNEXT</span>
              </li>
              <li className="flex items-center justify-between border-b border-gridline pb-1">
                <span>Python</span> <span className="text-neutral-400 text-[10px]">SCRIPTING</span>
              </li>
              <li className="flex items-center justify-between">
                <span>C</span> <span className="text-neutral-400 text-[10px]">LOW-LEVEL</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-3 border-t border-gridline font-mono text-[11px] text-neutral-500">
            FOCUS: SYSTEMS LOGIC &amp; SCRIPTING
          </div>
        </div>

        {/* Column 3: Backend & Mobile */}
        <div className="p-6 border-b sm:border-b-0 lg:border-r border-gridline-dark flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs font-bold uppercase text-ink mb-3 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-ink"></span>
              BACKEND, DATA &amp; MOBILE
            </div>
            <ul className="font-mono text-xs space-y-2 text-neutral-800">
              <li className="flex items-center justify-between border-b border-gridline pb-1">
                <span>Node.js &amp; Express</span> <span className="text-neutral-400 text-[10px]">API</span>
              </li>
              <li className="flex items-center justify-between border-b border-gridline pb-1">
                <span>Supabase</span> <span className="text-emerald-600 font-bold text-[10px]">POSTGRES</span>
              </li>
              <li className="flex items-center justify-between border-b border-gridline pb-1">
                <span>Firebase</span> <span className="text-neutral-400 text-[10px]">REALTIME</span>
              </li>
              <li className="flex items-center justify-between">
                <span>React Native &amp; Expo</span> <span className="text-neutral-400 text-[10px]">MOBILE</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-3 border-t border-gridline font-mono text-[11px] text-neutral-500">
            FOCUS: DATA PERSISTENCE &amp; CLOUD
          </div>
        </div>

        {/* Column 4: 3D & AI Workflow */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs font-bold uppercase text-klein mb-3 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-klein"></span>
              3D &amp; VIBE-CODING SUITE
            </div>
            <ul className="font-mono text-xs space-y-2 text-neutral-800">
              <li className="flex items-center justify-between border-b border-gridline pb-1">
                <span>Three.js / Babylon.js</span> <span className="text-neutral-400 text-[10px]">3D</span>
              </li>
              <li className="flex items-center justify-between border-b border-gridline pb-1">
                <span>Google AI Studio</span> <span className="text-neutral-400 text-[10px]">PROMPTING</span>
              </li>
              <li className="flex items-center justify-between border-b border-gridline pb-1">
                <span>Claude</span> <span className="text-neutral-400 text-[10px]">ARCHITECT</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Stitch</span> <span className="text-neutral-400 text-[10px]">UI BUILDER</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-3 border-t border-gridline font-mono text-[11px] text-neutral-500">
            PHILOSOPHY: AI SPEED + HUMAN TASTE
          </div>
        </div>
      </div>
    </section>
  );
}
