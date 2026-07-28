"use client";

import React, { useState } from "react";
import Image from "next/image";

const appScreenshots = [
  {
    id: 1,
    title: "Explore Prompts",
    subtitle: "Browse curated AI prompt categories in dark mode UI",
    tag: "Browse",
    url: "https://play-lh.googleusercontent.com/55FYsmZ_IumUCGSa6KnhVwElEr9cTYu1g-iGo5xtcKIl8M1RdlGOq0DIAQ4i-7U00sdfoJ6PDTtPrPN6eKfD4w=w1024-h2048",
  },
  {
    id: 2,
    title: "Organize Collections",
    subtitle: "Group your favorite prompts into clean workspaces",
    tag: "Workspaces",
    url: "https://play-lh.googleusercontent.com/k7ugaCmAyApaFCBjWaW6E5ZN-VP3n67V-eaEk5_sKWFV-NK09Zz5Rz-gJalv1hpxr4gRRNLraNQxwT2T3LrTWA=w1024-h2048",
  },
  {
    id: 3,
    title: "Prompt Details",
    subtitle: "View exact parameters for Midjourney, ChatGPT, & Claude",
    tag: "Parameters",
    url: "https://play-lh.googleusercontent.com/r6QvGoGY7-xPVBnnwagsrPnZTStJ7JVbE-dJ6yRHgArcyRY214RrjL6fqvKV75pamdK9C8usrDdzFcG1mVMK=w1024-h2048",
  },
  {
    id: 4,
    title: "Video Parameters",
    subtitle: "Prompts tuned for cinematic AI video generation",
    tag: "AI Video",
    url: "https://play-lh.googleusercontent.com/dT632pkrOVCnMZns9MYZ_BAJwrpUxv5f4n31SNUJlr1YKtmacS7OvkylrXm3hPAdZp6uHhloZCAfiwLugDAT=w1024-h2048",
  },
  {
    id: 5,
    title: "1-Tap Copy",
    subtitle: "Copy prompt text instantly to your clipboard",
    tag: "Copy",
    url: "https://play-lh.googleusercontent.com/k24sXgp-pk_qK7e2jLMJWuD_-4VN29euYPkEGi4c0eZh8-8e4Ywiodbf_ghu5VscADJqWGiAZOulPZ_6uIMrbA=w1024-h2048",
  },
];

export default function AppShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="showcase" className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
            App Screenshots
          </h2>
          <p className="text-sm text-zinc-400">
            Preview the Helios Android app UI before downloading.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {appScreenshots.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeIdx === idx
                  ? "bg-gradient-to-r from-brand-orange to-brand-gold text-white shadow-md scale-105"
                  : "bg-white/[0.02] border border-white/[0.08] text-zinc-400 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Display Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-block px-3 py-1 rounded-md bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold">
              {appScreenshots[activeIdx].tag}
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              {appScreenshots[activeIdx].title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {appScreenshots[activeIdx].subtitle}
            </p>

            <div className="pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=ai.achaialabs.helios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-orange to-brand-gold text-white font-bold text-xs uppercase tracking-wider rounded-full shadow hover:brightness-110 transition-all"
              >
                <span>Download on Google Play</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-[260px] sm:w-[300px] h-[540px] sm:h-[600px] rounded-[38px] bg-zinc-950 p-2.5 shadow-2xl border-4 border-zinc-800 ring-1 ring-white/10 glow-orange">
              {/* Speaker Notch */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-8 h-1 bg-zinc-800 rounded-full" />
              </div>

              {/* Screen */}
              <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-black">
                <Image
                  src={appScreenshots[activeIdx].url}
                  alt={appScreenshots[activeIdx].title}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 768px) 260px, 300px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
