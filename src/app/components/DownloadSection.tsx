"use client";

import React from "react";

export default function DownloadSection() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=ai.achaialabs.helios";

  return (
    <section id="download" className="relative py-28 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] left-[10%] w-[450px] h-[450px] rounded-full bg-brand-orange/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-gold/10 blur-[160px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="mx-auto max-w-5xl">
        <div className="glassmorphism rounded-[2.5rem] p-10 sm:p-16 border border-white/[0.08] text-center space-y-10 relative overflow-hidden shadow-2xl glow-orange">
          {/* Inner subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-orange/[0.03] to-transparent pointer-events-none" />

          <div className="space-y-4 max-w-2xl mx-auto relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xs font-semibold uppercase tracking-wider text-brand-gold">
              ⚡ Instant Download
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
              Elevate Your <br />
              <span className="text-gradient-gold">Prompt Engineering Today</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Get <strong className="text-white">Helios: AI Prompt Library</strong> directly on Google Play Store. Unlock thousands of prompts, save favorites, and craft AI parameters in seconds.
            </p>
          </div>

          {/* Download CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative">
            {/* Google Play Store Button */}
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center gap-4 px-8 py-4 bg-zinc-900 border border-white/15 hover:border-brand-gold hover:bg-black rounded-2xl transition-all shadow-xl hover:scale-105 group"
            >
              <svg className="w-8 h-8 text-white group-hover:text-brand-gold transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 01-.61-1.39V3.204c0-.528.204-1.012.61-1.39zM14.735 12.943l3.072-3.072 3.593 2.052a2 2 0 010 3.473l-3.593 2.053-3.072-3.106zm-1.886-1.886L3.9 3.011c-.04-.022-.08-.046-.12-.066L12.85 11.057zm0 1.886l-9.071 8.113c.04-.02.08-.044.12-.066l8.951-5.112v-2.935z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-none">Available Now on</p>
                <p className="text-base font-extrabold text-white mt-1">Google Play</p>
              </div>
            </a>

            {/* Apple App Store Button - Coming Soon */}
            <div className="w-full sm:w-auto inline-flex items-center gap-4 px-8 py-4 bg-zinc-950/60 border border-white/10 rounded-2xl cursor-not-allowed opacity-80 backdrop-blur-sm relative">
              <svg className="w-8 h-8 text-zinc-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-none">Apple App Store</p>
                <p className="text-base font-extrabold text-zinc-400 mt-1">Coming Soon</p>
              </div>
              <span className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full bg-brand-gold text-black text-[9px] font-black uppercase tracking-wider shadow-md">
                In Dev
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
            <span>Package: <code className="text-zinc-300 font-mono">ai.achaialabs.helios</code></span>
            <span>Developer: <strong className="text-zinc-300">Achaia Labs</strong></span>
            <span>Compatible: <strong className="text-zinc-300">Android 7.0+</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
