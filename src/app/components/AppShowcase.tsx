"use client";

import React, { useState } from "react";
import Image from "next/image";

const appScreenshots = [
  {
    id: 1,
    title: "Cosmic Trends Feed",
    subtitle: "Discover hot community prompts updated daily",
    tag: "Trending",
    url: "https://play-lh.googleusercontent.com/55FYsmZ_IumUCGSa6KnhVwElEr9cTYu1g-iGo5xtcKIl8M1RdlGOq0DIAQ4i-7U00sdfoJ6PDTtPrPN6eKfD4w=w1024-h2048",
  },
  {
    id: 2,
    title: "Constellations & Workspaces",
    subtitle: "Organize prompt chains and variable workflows",
    tag: "Workspaces",
    url: "https://play-lh.googleusercontent.com/k7ugaCmAyApaFCBjWaW6E5ZN-VP3n67V-eaEk5_sKWFV-NK09Zz5Rz-gJalv1hpxr4gRRNLraNQxwT2T3LrTWA=w1024-h2048",
  },
  {
    id: 3,
    title: "Prompt Crafter & Vault",
    subtitle: "Customize parameters for Midjourney, ChatGPT & Claude",
    tag: "Prompt Engine",
    url: "https://play-lh.googleusercontent.com/r6QvGoGY7-xPVBnnwagsrPnZTStJ7JVbE-dJ6yRHgArcyRY214RrjL6fqvKV75pamdK9C8usrDdzFcG1mVMK=w1024-h2048",
  },
  {
    id: 4,
    title: "AI Video Parameters",
    subtitle: "High performance cinematic parameters for Runway & Luma",
    tag: "AI Video",
    url: "https://play-lh.googleusercontent.com/dT632pkrOVCnMZns9MYZ_BAJwrpUxv5f4n31SNUJlr1YKtmacS7OvkylrXm3hPAdZp6uHhloZCAfiwLugDAT=w1024-h2048",
  },
  {
    id: 5,
    title: "1-Click Copy & Export",
    subtitle: "Instantly deploy prompts directly to your AI app",
    tag: "Fast Copy",
    url: "https://play-lh.googleusercontent.com/k24sXgp-pk_qK7e2jLMJWuD_-4VN29euYPkEGi4c0eZh8-8e4Ywiodbf_ghu5VscADJqWGiAZOulPZ_6uIMrbA=w1024-h2048",
  },
];

export default function AppShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="showcase" className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-white/[0.04]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-semibold uppercase tracking-wider text-brand-gold">
            <span>📱</span> Actual Play Store App Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
            Inside <span className="text-gradient-gold">Helios App</span>
          </h2>
          <p className="text-base text-zinc-400">
            Take a look inside the actual Android app available on Google Play. Built with lightning-fast navigation, dark-mode cosmic aesthetic, and 1-tap copy efficiency.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {appScreenshots.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeIdx === idx
                  ? "bg-gradient-to-r from-brand-orange to-brand-gold text-white shadow-lg shadow-brand-orange/20 scale-105"
                  : "bg-white/[0.02] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <span className="opacity-60 mr-1.5">{item.tag}</span>
              {item.title}
            </button>
          ))}
        </div>

        {/* Device Frame Display & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Feature Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-block px-3 py-1 rounded-md bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
              {appScreenshots[activeIdx].tag}
            </div>
            <h3 className="text-3xl font-extrabold font-display text-white">
              {appScreenshots[activeIdx].title}
            </h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              {appScreenshots[activeIdx].subtitle}
            </p>
            <div className="p-6 rounded-2xl glassmorphism-card space-y-4 border border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold text-sm">
                  ✓
                </div>
                <p className="text-sm font-semibold text-white">Real-time Community Prompt Sync</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold text-sm">
                  ✓
                </div>
                <p className="text-sm font-semibold text-white">Engineered for Midjourney v6 & ChatGPT 4o</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold text-sm">
                  ✓
                </div>
                <p className="text-sm font-semibold text-white">AdMob & Cloud Vault Integration</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=ai.achaialabs.helios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg shadow-brand-orange/20 hover:brightness-110 transition-all"
              >
                <span>Download on Google Play</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Phone Mockup Container */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] rounded-[42px] bg-zinc-950 p-3 shadow-2xl border-4 border-zinc-800 ring-1 ring-white/10 glow-orange">
              {/* Phone Speaker Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-10 h-1 bg-zinc-800 rounded-full" />
              </div>

              {/* Phone Screen Frame */}
              <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-black">
                <Image
                  src={appScreenshots[activeIdx].url}
                  alt={appScreenshots[activeIdx].title}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 768px) 280px, 320px"
                  priority
                />
              </div>

              {/* Subtle Ambient Reflection Overlay */}
              <div className="absolute inset-0 rounded-[42px] bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
