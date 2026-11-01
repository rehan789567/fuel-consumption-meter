import React from 'react';

export default function MetricBlocks() {
  return (
    <div className="max-w-[1440px] mx-auto border-x border-gridline">
      {/* HIGH-CONTRAST METRIC BLOCKS (SOLID BORDERS & BAUHAUS NUMBERING) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-2 border-b-2 border-ink bg-white" id="matrix">
        {/* Metric 1 */}
        <div className="p-6 md:p-8 border-b sm:border-b-0 border-r border-gridline-dark flex flex-col justify-between hover:bg-surface-subtle transition-colors group">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-500 uppercase mb-4">
            <span className="group-hover:text-klein font-bold transition-colors">[01] ODYSSEY</span>
            <span className="material-symbols-outlined text-[16px] text-klein">code</span>
          </div>
          <div className="font-headline font-black text-4xl lg:text-5xl tracking-tight text-ink mb-2">
            2024+
          </div>
          <div className="font-mono text-xs font-bold uppercase text-neutral-700 tracking-wide border-t border-gridline pt-2">
            RAW HTML TO FULL STACK &amp; 3D
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-6 md:p-8 border-b sm:border-b-0 border-r border-gridline-dark flex flex-col justify-between hover:bg-surface-subtle transition-colors group">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-500 uppercase mb-4">
            <span className="group-hover:text-klein font-bold transition-colors">[02] VELOCITY</span>
            <span className="material-symbols-outlined text-[16px] text-vermilion">bolt</span>
          </div>
          <div className="font-headline font-black text-4xl lg:text-5xl tracking-tight text-klein mb-2">
            18 Y/O
          </div>
          <div className="font-mono text-xs font-bold uppercase text-neutral-700 tracking-wide border-t border-gridline pt-2">
            SELF-TAUGHT CLASS 11 STUDENT
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-6 md:p-8 border-b sm:border-b-0 border-r border-gridline-dark flex flex-col justify-between hover:bg-surface-subtle transition-colors group">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-500 uppercase mb-4">
            <span className="group-hover:text-klein font-bold transition-colors">[03] SHIPPED</span>
            <span className="material-symbols-outlined text-[16px] text-ink">deployed_code</span>
          </div>
          <div className="font-headline font-black text-4xl lg:text-5xl tracking-tight text-ink mb-2">
            4+
          </div>
          <div className="font-mono text-xs font-bold uppercase text-neutral-700 tracking-wide border-t border-gridline pt-2">
            ACTIVE PRODUCTION EXPERIENCES
          </div>
        </div>

        {/* Metric 4 */}
        <div className="p-6 md:p-8 flex flex-col justify-between hover:bg-surface-subtle transition-colors group">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-500 uppercase mb-4">
            <span className="group-hover:text-vermilion font-bold transition-colors">[04] PASSION</span>
            <span className="material-symbols-outlined text-[16px] text-emerald-600">security</span>
          </div>
          <div className="font-headline font-black text-4xl lg:text-5xl tracking-tight text-vermilion mb-2">
            100%
          </div>
          <div className="font-mono text-xs font-bold uppercase text-neutral-700 tracking-wide border-t border-gridline pt-2">
            VIBE CODING &amp; CYBER ETHICS
          </div>
        </div>
      </div>
    </div>
  );
}
