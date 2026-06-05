"use client";

import React from "react";

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-28 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-white/[0.03]">
      {/* Decorative nebula glows */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-brand-gold/5 blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="mx-auto max-w-5xl">
        <div className="glassmorphism rounded-[2.5rem] p-12 sm:p-16 border border-white/[0.06] text-center space-y-8 relative overflow-hidden shadow-2xl">
          {/* Inner ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-orange/[0.02] to-transparent pointer-events-none" />
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
              Ready to Explore the <br />
              <span className="text-gradient-gold">Creative Universe?</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Download Helios today to start generating, organizing, and deploying professional prompts. Available now for creators worldwide.
            </p>
          </div>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Google Play Store Button */}
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center gap-3 px-7 py-3.5 bg-zinc-900 border border-white/10 hover:border-brand-orange hover:bg-black rounded-2xl transition-all shadow-md group"
            >
              {/* Play Store SVG */}
              <svg className="w-6 h-6 text-white group-hover:text-brand-gold transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 01-.61-1.39V3.204c0-.528.204-1.012.61-1.39zM14.735 12.943l3.072-3.072 3.593 2.052a2 2 0 010 3.473l-3.593 2.053-3.072-3.106zm-1.886-1.886L3.9 3.011c-.04-.022-.08-.046-.12-.066L12.85 11.057zm0 1.886l-9.071 8.113c.04-.02.08-.044.12-.066l8.951-5.112v-2.935z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-none">Get it on</p>
                <p className="text-sm font-bold text-white mt-1">Google Play</p>
              </div>
            </a>

            {/* Apple App Store Button */}
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center gap-3 px-7 py-3.5 bg-zinc-900 border border-white/10 hover:border-brand-orange hover:bg-black rounded-2xl transition-all shadow-md group"
            >
              {/* App Store SVG */}
              <svg className="w-6 h-6 text-white group-hover:text-brand-gold transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-none">Download on the</p>
                <p className="text-sm font-bold text-white mt-1">App Store</p>
              </div>
            </a>
          </div>

          <p className="text-xxs text-zinc-600 font-medium tracking-wider uppercase">
            Compatible with Android 10+ and iOS 15+
          </p>
        </div>
      </div>
    </section>
  );
}
