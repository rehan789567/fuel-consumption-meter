import React, { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState('3d');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-surface-dim border-t-2 border-ink py-16 sm:py-24" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Section Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b-2 border-ink pb-6">
          <div>
            <div className="font-mono text-xs font-bold tracking-widest text-klein uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-klein"></span>
              <span>04 // TRANSMISSION PROTOCOL &amp; DIRECT REACH</span>
              <span className="w-6 h-[2px] bg-klein"></span>
            </div>
            <h2 className="font-headline font-black text-3xl sm:text-5xl uppercase tracking-tight text-ink">
              INITIATE CONTACT // COLLABORATE
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600 uppercase flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-600 font-bold bg-white border border-ink px-2.5 py-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              STATUS: READY FOR DISPATCH
            </span>
            <span className="hidden sm:inline text-neutral-400">|</span>
            <span className="hidden sm:inline font-bold text-ink">RESPONSE SLA &lt; 24H</span>
          </div>
        </div>

        {/* Main Split Grid: Contact Form & Telemetry Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Swiss Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border-2 border-ink p-6 sm:p-10 shadow-[8px_8px_0px_#09090B] relative">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-surface-dim border-l-2 border-b-2 border-ink p-2 flex flex-col justify-between font-mono text-[9px] text-neutral-500 pointer-events-none select-none">
              <span>FORM::01</span>
              <span className="text-right text-klein font-bold">SECURE</span>
            </div>

            <div className="mb-8">
              <div className="font-headline font-black text-2xl uppercase tracking-tight text-ink mb-1">
                DIRECT PROJECT INQUIRY
              </div>
              <p className="font-body text-sm text-neutral-600">
                Submit your brief below or initiate direct email transmission. All inputs verified client-side.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Grid Row: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs font-bold uppercase tracking-wider text-ink flex items-center justify-between">
                    <span>[01] FULL NAME / IDENTITY</span>
                    <span className="text-klein font-normal text-[10px]">REQUIRED *</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ada Lovelace or Company"
                    className="font-mono text-xs text-ink bg-surface-dim border-2 border-ink p-3 focus:bg-white focus:outline-none focus:border-klein transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs font-bold uppercase tracking-wider text-ink flex items-center justify-between">
                    <span>[02] EMAIL VECTOR</span>
                    <span className="text-klein font-normal text-[10px]">REQUIRED *</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rehan@example.com"
                    className="font-mono text-xs text-ink bg-surface-dim border-2 border-ink p-3 focus:bg-white focus:outline-none focus:border-klein transition-colors"
                  />
                </div>
              </div>

              {/* Inquiry Type Selectors */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                  [SELECT TOPIC / SPECIALIZATION]
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
                  <label
                    className={`border-2 border-ink p-2 text-center cursor-pointer transition-colors flex items-center justify-center ${
                      topic === '3d'
                        ? 'bg-klein text-white'
                        : 'bg-surface-dim hover:border-klein hover:text-klein'
                    }`}
                  >
                    <input
                      type="radio"
                      name="topic"
                      value="3d"
                      className="sr-only"
                      checked={topic === '3d'}
                      onChange={() => setTopic('3d')}
                    />
                    <span>3D Web App</span>
                  </label>
                  <label
                    className={`border-2 border-ink p-2 text-center cursor-pointer transition-colors flex items-center justify-center ${
                      topic === 'lms'
                        ? 'bg-klein text-white'
                        : 'bg-surface-dim hover:border-klein hover:text-klein'
                    }`}
                  >
                    <input
                      type="radio"
                      name="topic"
                      value="lms"
                      className="sr-only"
                      checked={topic === 'lms'}
                      onChange={() => setTopic('lms')}
                    />
                    <span>LMS / Full-Stack</span>
                  </label>
                  <label
                    className={`border-2 border-ink p-2 text-center cursor-pointer transition-colors flex items-center justify-center ${
                      topic === 'cyber'
                        ? 'bg-klein text-white'
                        : 'bg-surface-dim hover:border-klein hover:text-klein'
                    }`}
                  >
                    <input
                      type="radio"
                      name="topic"
                      value="cyber"
                      className="sr-only"
                      checked={topic === 'cyber'}
                      onChange={() => setTopic('cyber')}
                    />
                    <span>Cyber Advisory</span>
                  </label>
                  <label
                    className={`border-2 border-ink p-2 text-center cursor-pointer transition-colors flex items-center justify-center ${
                      topic === 'other'
                        ? 'bg-klein text-white'
                        : 'bg-surface-dim hover:border-klein hover:text-klein'
                    }`}
                  >
                    <input
                      type="radio"
                      name="topic"
                      value="other"
                      className="sr-only"
                      checked={topic === 'other'}
                      onChange={() => setTopic('other')}
                    />
                    <span>Collaboration</span>
                  </label>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs font-bold uppercase tracking-wider text-ink flex items-center justify-between">
                  <span>[03] TRANSMISSION / PROJECT BRIEF</span>
                  <span className="text-neutral-500 font-normal text-[10px]">MARKDOWN READY</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project timeline, vision, tech specifications, or collaboration concept..."
                  className="font-mono text-xs text-ink bg-surface-dim border-2 border-ink p-3 focus:bg-white focus:outline-none focus:border-klein transition-colors"
                />
              </div>

              {/* Submit & Feedback */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-klein text-white font-mono font-bold text-xs uppercase tracking-widest border-2 border-ink shadow-[4px_4px_0px_#09090B] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-ink transition-all cursor-pointer"
                >
                  <span>DISPATCH TRANSMISSION</span>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>

                <span className="font-mono text-[11px] text-neutral-500 text-right">
                  ENCRYPTION: LOCAL ENDPOINT // 200 OK
                </span>
              </div>

              {/* Success Feedback Toast */}
              {submitted && (
                <div
                  id="contact-notice"
                  className="p-3 bg-emerald-50 border-2 border-emerald-500 text-emerald-800 font-mono text-xs flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-emerald-600 text-sm">
                    check_circle
                  </span>
                  <span>
                    TRANSMISSION PACKED // OPENING MAIL CLIENT OR DISPATCH READY AT REHANZPS1@GMAIL.COM
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Right: Direct Reach Card & Telemetry (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 1: Verified Direct Coordinates */}
            <div className="bg-white border-2 border-ink p-6 sm:p-8 shadow-[6px_6px_0px_#0047FF] relative">
              <div className="font-mono text-xs font-bold text-vermilion uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-vermilion"></span>
                <span>DIRECT CHANNELS &amp; VERIFIED VECTORS</span>
              </div>
              <h3 className="font-headline font-black text-2xl uppercase tracking-tight text-ink mb-6">
                COMMUNICATION MATRIX
              </h3>

              <div className="space-y-4 font-mono text-xs">
                {/* Email Vector */}
                <div className="border-2 border-ink p-3.5 bg-surface-dim hover:bg-white transition-colors flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 uppercase font-bold">
                      PRIMARY INBOX
                    </span>
                    <a
                      href="mailto:rehanzps1@gmail.com"
                      className="text-ink font-bold text-sm hover:text-klein transition-colors"
                    >
                      rehanzps1@gmail.com
                    </a>
                  </div>
                  <a
                    href="mailto:rehanzps1@gmail.com"
                    className="p-2 bg-klein text-white hover:bg-ink transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">mail</span>
                  </a>
                </div>

                {/* Phone Vector */}
                <div className="border-2 border-ink p-3.5 bg-surface-dim hover:bg-white transition-colors flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 uppercase font-bold">
                      DIRECT PHONE &amp; WHATSAPP
                    </span>
                    <a
                      href="tel:+923238951383"
                      className="text-ink font-bold text-sm hover:text-klein transition-colors"
                    >
                      +92 323 8951383
                    </a>
                  </div>
                  <a
                    href="tel:+923238951383"
                    className="p-2 bg-white text-ink border border-ink hover:bg-surface-subtle transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">call</span>
                  </a>
                </div>

                {/* SLA & Location Specs */}
                <div className="border-t border-gridline pt-4 grid grid-cols-2 gap-3 text-[11px]">
                  <div className="bg-surface-subtle p-2 border border-gridline-dark">
                    <span className="text-neutral-500 block text-[9px] uppercase font-bold">
                      LOCATION
                    </span>
                    <span className="text-ink font-bold">MULTAN, PK (UTC+5)</span>
                  </div>
                  <div className="bg-surface-subtle p-2 border border-gridline-dark">
                    <span className="text-neutral-500 block text-[9px] uppercase font-bold">
                      TURNAROUND
                    </span>
                    <span className="text-klein font-bold">&lt; 24 HOURS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Status Indicator Box */}
            <div className="bg-ink text-white p-6 border-2 border-ink shadow-[6px_6px_0px_#FF4D00] flex flex-col justify-between gap-4 font-mono">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400 font-bold uppercase">
                  NODE DISPATCH STATUS
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>{' '}
                  ONLINE
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-body">
                Available for web development projects, Three.js 3D spatial experiences, Class 11 technical apprenticeships, and security vulnerability reviews.
              </p>
              <div className="pt-2 border-t border-neutral-700 flex items-center justify-between text-[11px] text-neutral-400 uppercase">
                <span>ROLE: VIBE CODER</span>
                <span className="text-vermilion font-bold">IKB #0047FF // 60 FPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
