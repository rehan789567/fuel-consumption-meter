import React from 'react';

export default function MarqueeTicker() {
  return (
    <div className="w-full bg-ink text-white py-3 border-y-2 border-ink overflow-hidden marquee-container flex items-center relative select-none">
      <div className="flex items-center w-full">
        {/* Fixed Indicator Badge */}
        <div className="bg-ink z-20 flex items-center gap-2 pl-4 sm:pl-8 pr-6 shrink-0 border-r border-neutral-700 font-mono text-[11px] font-black text-vermilion uppercase tracking-widest shadow-[8px_0px_16px_#09090B]">
          <span className="w-2.5 h-2.5 bg-vermilion animate-pulse"></span>
          <span className="hidden sm:inline">REAL-TIME DISPATCH</span>
          <span className="sm:hidden">DISPATCH</span>
        </div>

        {/* Infinite Seamless Running Track */}
        <div className="overflow-hidden flex-1 flex whitespace-nowrap">
          <div className="animate-marquee-infinite flex items-center font-mono text-xs uppercase tracking-wider text-neutral-300">
            {/* Loop Segment 1 */}
            <div className="flex items-center gap-8 px-6 shrink-0">
              <span className="flex items-center gap-2">
                <strong className="text-white bg-klein px-1 py-0.5">DISPATCH</strong> MY WEATHER 3D ATMOSPHERIC SHADERS ONLINE
              </span>
              <span className="text-vermilion font-bold">///</span>
              <span>
                <strong className="text-white bg-neutral-800 px-1 py-0.5">LMS APP:</strong> CLASSES 5-10 IN DEVELOPMENT WITH SUPABASE
              </span>
              <span className="text-vermilion font-bold">///</span>
              <span>
                <strong className="text-white">NEO CALCULATOR:</strong> C-ENGINE REFACTOR COMPLETE
              </span>
              <span className="text-vermilion font-bold">///</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> EXPLORING THREE.JS &amp; BABYLON.JS
              </span>
              <span className="text-vermilion font-bold">///</span>
              <span>
                <strong className="text-white">CYBERSECURITY &amp; ETHICAL HACKING PASSION</strong>
              </span>
              <span className="text-vermilion font-bold">///</span>
              <span>
                <strong className="text-white bg-klein px-1 py-0.5">TOOLKIT:</strong> AI STUDIO, CLAUDE &amp; STITCH
              </span>
              <span className="text-vermilion font-bold">///</span>
              <span>LOCATION: MULTAN, PAKISTAN</span>
              <span className="text-vermilion font-bold">///</span>
            </div>

            {/* Loop Segment 2 for Seamless Looping */}
            <div className="flex items-center gap-8 px-6 shrink-0">
              <span className="flex items-center gap-2">
                <strong className="text-white bg-klein px-1 py-0.5">DISPATCH</strong> MY WEATHER 3D ATMOSPHERIC SHADERS ONLINE
              </span>
              <span className="text-vermilion font-bold">///</span>
              <span>
                <strong className="text-white bg-neutral-800 px-1 py-0.5">LMS APP:</strong> CLASSES 5-10 IN DEVELOPMENT WITH SUPABASE
              </span>
              <span className="text-vermilion font-bold">///</span>
              <span>
                <strong className="text-white">NEO CALCULATOR:</strong> C-ENGINE REFACTOR COMPLETE
              </span>
              <span className="text-vermilion font-bold">///</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> EXPLORING THREE.JS &amp; BABYLON.JS
              </span>
              <span className="text-vermilion font-bold">///</span>
              <span>
                <strong className="text-white">CYBERSECURITY &amp; ETHICAL HACKING PASSION</strong>
              </span>
              <span className="text-vermilion font-bold">///</span>
              <span>
                <strong className="text-white bg-klein px-1 py-0.5">TOOLKIT:</strong> AI STUDIO, CLAUDE &amp; STITCH
              </span>
              <span className="text-vermilion font-bold">///</span>
              <span>LOCATION: MULTAN, PAKISTAN</span>
              <span className="text-vermilion font-bold">///</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
