"use client";

import React from "react";

const features = [
  {
    id: 1,
    title: "Cosmic Trends",
    description: "Access the hottest prompt ideas currently circulating the cosmos. Curated and updated daily to keep your generation outputs fresh.",
    icon: (
      <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Constellations",
    description: "Organize your creative inspirations into grouped constellations of prompt flows. Connect variables and chain prompts sequentially.",
    icon: (
      <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Video Galaxy",
    description: "Explore highly optimized cinematic AI video parameters. Designed for Runway Gen-2, Luma Dream Machine, Sora, and Pika.",
    icon: (
      <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-gold/3 blur-[120px] pointer-events-none -z-10" />
      
      <div className="mx-auto max-w-7xl">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Cosmic Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Designed for Creators of the New Universe
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Helios breaks prompt engineering out of boring spreadsheets and places it in an interface that feels alive, structured, and infinite.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="glassmorphism-card rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card glowing gradient hover overlay */}
              <div className="absolute -inset-px bg-gradient-to-tr from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="space-y-6">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center shadow-inner group-hover:border-brand-orange/30 group-hover:scale-105 transition-all">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold font-display text-white group-hover:text-brand-gold transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Full Width Card: Upgrade to Helios Pro */}
        <div className="mt-8 glassmorphism-card rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
          {/* Subtle starry grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          
          {/* Subtle golden nebulous background glow */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-gold/10 blur-[90px] pointer-events-none -z-10 group-hover:bg-brand-orange/10 transition-all duration-700" />
          
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-xxs font-bold uppercase tracking-wider text-brand-gold">
                👑 Helios Pro
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                Unlock Premium Galactic Workspaces
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Step beyond the free tier. Unleash infinite constellations, synchronize your prompt vault securely across devices, and gain priority access to professional video models and Midjourney v6 parameters.
              </p>
            </div>
            
            <a
              href="#download"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-brand-orange/20 hover:brightness-110 hover:shadow-brand-orange/40 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
            >
              Upgrade to Pro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
