"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=ai.achaialabs.helios";
  const playStoreIcon = "https://play-lh.googleusercontent.com/wsT37_7zZBYThYH4FEn6cQk_mD94uwcW8xOJyCdWwauVYBKK_jnVpciFB170msTmF7Hzhl0EuGF-0QfBRwZ1b3Y=w512-h512";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background ambient cosmic glow */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-brand-orange/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[10%] w-[350px] h-[350px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headlines & CTAs */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Play Store Verified Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-semibold text-zinc-300 backdrop-blur-md shadow-inner shadow-brand-orange/5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            <span className="text-brand-gold font-bold">Helios v1.0</span>
            <span className="text-zinc-500">•</span>
            <span>Live on Google Play</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display leading-[1.08] tracking-tight text-white">
            The Ultimate <br className="hidden sm:inline" />
            <span className="text-gradient-gold">AI Prompt Library</span>
          </h1>

          {/* Subtitle scraped from Play Store context */}
          <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
            Generate better results with <strong className="text-white">Helios</strong>. Discover, copy, and craft high-performance AI prompts for <span className="text-brand-gold font-semibold">ChatGPT, Midjourney, Claude, Sora & Stable Diffusion</span>.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Direct Play Store Link */}
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-brand-orange to-brand-gold rounded-full hover:brightness-110 shadow-xl shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:scale-[1.03] active:scale-[0.98] transition-all group"
            >
              <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 01-.61-1.39V3.204c0-.528.204-1.012.61-1.39zM14.735 12.943l3.072-3.072 3.593 2.052a2 2 0 010 3.473l-3.593 2.053-3.072-3.106zm-1.886-1.886L3.9 3.011c-.04-.022-.08-.046-.12-.066L12.85 11.057zm0 1.886l-9.071 8.113c.04-.02.08-.044.12-.066l8.951-5.112v-2.935z" />
              </svg>
              <span>Get on Google Play</span>
            </a>

            {/* App Store Coming Soon Badge */}
            <div className="w-full sm:w-auto relative group">
              <div className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-zinc-400 bg-white/[0.02] border border-white/[0.08] rounded-full cursor-not-allowed opacity-80 backdrop-blur-sm">
                <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
                </svg>
                <span>App Store</span>
                <span className="px-2 py-0.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-[10px] font-extrabold text-brand-gold tracking-normal uppercase">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Social Proof & Rating Metrics */}
          <div className="pt-6 grid grid-cols-3 gap-6 sm:gap-10 border-t border-white/[0.06] w-full max-w-lg text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold font-display text-white">4.8 ★</p>
              <p className="text-[11px] text-zinc-500 uppercase tracking-widest mt-1">Play Store Rating</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold font-display text-white">5,000+</p>
              <p className="text-[11px] text-zinc-500 uppercase tracking-widest mt-1">AI Prompts</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold font-display text-white">100%</p>
              <p className="text-[11px] text-zinc-500 uppercase tracking-widest mt-1">Free to Discover</p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Mockup */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          {/* Glowing Ring Effect */}
          <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-brand-orange/20 animate-orbit-slow pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full border border-brand-gold/15 animate-orbit-fast pointer-events-none" />

          {/* Main App Icon Preview Card */}
          <div className="relative glassmorphism rounded-3xl p-8 border border-white/[0.1] shadow-2xl flex flex-col items-center text-center space-y-6 max-w-sm w-full glow-orange">
            <div className="relative w-28 h-28 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/10 group">
              <Image
                src={playStoreIcon}
                alt="Helios App Icon"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold font-display text-white">Helios</h3>
              <p className="text-xs text-brand-gold font-medium uppercase tracking-wider mt-1">AI Prompt Library</p>
            </div>

            <div className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-left space-y-2 text-xs">
              <div className="flex items-center justify-between text-zinc-400">
                <span>Developer</span>
                <span className="font-semibold text-white">Achaia Labs</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>Platform</span>
                <span className="font-semibold text-white">Android / Web</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>Category</span>
                <span className="font-semibold text-white">Tools & Productivity</span>
              </div>
            </div>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-brand-orange to-brand-gold rounded-xl hover:brightness-110 shadow-md transition-all"
            >
              Install from Play Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
