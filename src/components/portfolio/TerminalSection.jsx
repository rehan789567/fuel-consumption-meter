import React, { useState } from 'react';

export default function TerminalSection() {
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([
    {
      type: 'comment',
      text: '# Muhammad Rehan - Developer Terminal Runtime [Multan, PK]'
    },
    {
      type: 'command',
      cmd: 'rehan --whoami',
      output: (
        <div className="text-neutral-700 pl-4 border-l-2 border-klein space-y-1 text-xs sm:text-[13px]">
          <p>
            <span className="text-klein font-bold">[IDENTITY]</span> Muhammad Rehan — 18-year-old developer &amp; Class 11 Student based in Multan, Pakistan.
          </p>
          <p>
            <span className="text-ink font-bold">[PATHWAY]</span> Began coding journey in 2024 from raw HTML, quickly growing into React, 3D graphics (Three.js), and C runtimes.
          </p>
          <p>
            <span className="text-emerald-700 font-bold">[STATUS]</span> Open for collaboration, technical apprenticeships, and high-impact web builds.
          </p>
        </div>
      )
    },
    {
      type: 'command',
      cmd: 'rehan --interests',
      output: (
        <div className="text-neutral-700 pl-4 border-l-2 border-vermilion space-y-1 text-xs sm:text-[13px]">
          <p>
            <span className="text-vermilion font-bold">[CYBERSECURITY]</span> Deeply passionate about ethical hacking, defensive systems, and vulnerability research.
          </p>
          <p>
            <span className="text-neutral-600 font-semibold">[CREED]</span> &quot;In an AI-driven world, human judgment and ethical hacking are more critical than ever.&quot;
          </p>
        </div>
      )
    }
  ]);

  const copyContact = () => {
    const email = 'rehanzps1@gmail.com';
    navigator.clipboard?.writeText?.(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  const executeChip = (commandText) => {
    let outputElement = null;

    if (commandText === 'rehan --whoami') {
      outputElement = (
        <div className="text-neutral-700 pl-4 border-l-2 border-klein space-y-1 text-xs">
          <p><span className="text-klein font-bold">[NAME]</span> Muhammad Rehan</p>
          <p><span className="text-ink font-bold">[BIO]</span> 18 y/o self-taught developer &amp; Class 11 student in Multan, Pakistan.</p>
          <p><span className="text-emerald-700 font-bold">[STATUS]</span> Building next-gen web &amp; 3D software.</p>
        </div>
      );
    } else if (commandText === 'rehan --stack') {
      outputElement = (
        <div className="text-neutral-700 pl-4 border-l-2 border-klein space-y-1 text-xs">
          <p><span className="text-klein font-bold">[CORE]</span> React, Vite, Three.js, React Three Fiber</p>
          <p><span className="text-ink font-bold">[BACKEND]</span> Node.js, Express, Supabase, Firebase</p>
          <p><span className="text-neutral-800 font-bold">[LANGUAGES]</span> C, Python, JavaScript, HTML5, CSS3</p>
        </div>
      );
    } else if (commandText === 'rehan --interests') {
      outputElement = (
        <div className="text-neutral-700 pl-4 border-l-2 border-vermilion space-y-1 text-xs">
          <p><span className="text-vermilion font-bold">[PASSION]</span> Cybersecurity, Penetration Testing &amp; Ethical Hacking.</p>
          <p><span className="text-neutral-600 font-semibold">[INSIGHT]</span> &quot;In an AI-driven world, human judgment and ethical hacking are more critical than ever.&quot;</p>
        </div>
      );
    } else {
      outputElement = (
        <div className="text-neutral-700 pl-4 border-l-2 border-klein space-y-1 text-xs">
          <p><span className="text-klein font-bold">[OUTPUT]</span> Execution complete. All subroutines nominal.</p>
        </div>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        type: 'command',
        cmd: commandText,
        output: outputElement
      }
    ]);
  };

  const clearConsole = () => {
    setHistory([]);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 pb-24 pt-6 border-x border-gridline" id="terminal">
      <div className="bg-white border-2 border-ink shadow-[8px_8px_0px_#0047FF]">
        {/* Terminal Header Bar */}
        <div className="border-b-2 border-ink bg-surface-dim px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 border border-ink bg-vermilion inline-block"></span>
              <span className="w-3.5 h-3.5 border border-ink bg-amber-400 inline-block"></span>
              <span className="w-3.5 h-3.5 border border-ink bg-emerald-500 inline-block"></span>
            </div>
            <span className="font-mono text-xs font-bold text-ink ml-2 uppercase">
              CONSOLE::REHAN_DEV_CLI_V1.0
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px] text-neutral-600">
            <span className="hidden sm:inline">TTY / MULTAN / PTS0</span>
            <button
              className="flex items-center gap-1 text-ink font-bold hover:text-klein transition-colors bg-white px-2 py-1 border border-ink text-[10px]"
              id="copy-btn"
              onClick={copyContact}
            >
              <span className="material-symbols-outlined text-[13px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'COPIED' : 'COPY EMAIL'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Command Execution Chips */}
        <div className="border-b border-gridline bg-white px-4 md:px-6 py-2.5 flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="text-neutral-500 font-bold uppercase mr-2">EXEC CHIPS:</span>
          <button
            className="px-2.5 py-1 bg-surface-subtle hover:bg-klein hover:text-white border border-ink text-ink font-semibold transition-colors"
            onClick={() => executeChip('rehan --whoami')}
          >
            rehan --whoami
          </button>
          <button
            className="px-2.5 py-1 bg-surface-subtle hover:bg-klein hover:text-white border border-ink text-ink font-semibold transition-colors"
            onClick={() => executeChip('rehan --stack')}
          >
            rehan --stack
          </button>
          <button
            className="px-2.5 py-1 bg-surface-subtle hover:bg-klein hover:text-white border border-ink text-ink font-semibold transition-colors"
            onClick={() => executeChip('rehan --interests')}
          >
            rehan --interests
          </button>
          <button
            className="ml-auto text-neutral-400 hover:text-ink text-[11px] font-bold uppercase"
            onClick={clearConsole}
          >
            [CLEAR]
          </button>
        </div>

        {/* Terminal Output Area */}
        <div
          className="p-6 md:p-8 font-mono text-xs sm:text-sm leading-relaxed space-y-3 bg-white text-ink overflow-x-auto min-h-[280px]"
          id="terminal-screen"
        >
          {history.map((item, idx) => {
            if (item.type === 'comment') {
              return (
                <div key={idx} className="flex items-center gap-2 text-neutral-400">
                  <span>{item.text}</span>
                </div>
              );
            }
            return (
              <div key={idx} className="space-y-1 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-klein font-bold">&gt;</span>
                  <span className="text-ink font-bold">{item.cmd}</span>
                </div>
                {item.output}
              </div>
            );
          })}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 pt-3" id="command-line">
            <span className="text-klein font-bold">&gt;</span>
            <span className="text-ink font-bold" id="current-cmd">
              echo $OPEN_FOR_WORK_MULTAN
            </span>
            <span className="w-2.5 h-4 bg-klein inline-block animate-pulse"></span>
          </div>
        </div>

        {/* Terminal Bottom Status Strip */}
        <div className="border-t border-gridline bg-surface-dim px-4 md:px-6 py-2.5 flex items-center justify-between font-mono text-[11px] text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="font-bold text-ink">STATUS: 200 OK</span>
            <span>// CONTACT: rehanzps1@gmail.com</span>
          </div>
          <div className="font-bold text-klein">
            CLICK CHIPS TO DISPATCH COMMANDS
          </div>
        </div>
      </div>
    </section>
  );
}
