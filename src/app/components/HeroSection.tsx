"use client";

import React from "react";
import PlanetCenterpiece from "./PlanetCenterpiece";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background visual effects */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text/Content Column */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Animated cosmic badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-brand-gold backdrop-blur-sm shadow-inner shadow-brand-orange/5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            AI Prompts From Across the Galaxy
          </div>

          {/* Hero Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-white">
            Unleash Cosmic <br className="hidden sm:inline" />
            Creativity with <span className="text-gradient-gold">Helios</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
            Welcome to the ultimate cosmic observatory for AI prompt generation. Discover premium prompts, streamline your workflow, and navigate a universe of unlimited creative ideas.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#download"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-brand-orange to-brand-gold rounded-full hover:brightness-110 shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Get the App
            </a>
            <a
              href="#explore"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.15] rounded-full transition-all"
            >
              Explore Feed
            </a>
          </div>

          {/* Short Statistics / Proof points */}
          <div className="pt-6 grid grid-cols-3 gap-6 sm:gap-10 border-t border-white/[0.05] w-full max-w-md">
            <div>
              <p className="text-2xl font-bold font-display text-white">5k+</p>
              <p className="text-xxs text-zinc-500 uppercase tracking-widest mt-1">Prompts</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-display text-white">12+</p>
              <p className="text-xxs text-zinc-500 uppercase tracking-widest mt-1">AI Models</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-display text-white">99%</p>
              <p className="text-xxs text-zinc-500 uppercase tracking-widest mt-1">Reliability</p>
            </div>
          </div>
        </div>

        {/* Planet Centerpiece Column */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <PlanetCenterpiece />
        </div>
      </div>

      {/* Elegant bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-600 animate-pulse">
        <span>Explore Orbit</span>
        <div className="w-1.5 h-6 rounded-full border border-zinc-700 flex justify-center p-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}
