"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=ai.achaialabs.helios";

  return (
    <header className="w-full px-4 sm:px-6 py-4 sm:py-5">
      <div className="mx-auto max-w-6xl flex items-center justify-between gap-2">
        {/* Sleek Minimalist Brand Mark */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight font-brand text-white group-hover:text-brand-gold transition-colors leading-none">
            Helios<span className="text-brand-orange font-black">.</span>
          </span>
          <span className="hidden sm:inline-flex text-[9.5px] text-zinc-400 font-semibold px-2.5 py-0.5 bg-zinc-900/90 border border-zinc-800 rounded-full tracking-wider uppercase">
            AI Prompt App
          </span>
        </Link>

        {/* Responsive Download CTA Button */}
        <div className="shrink-0">
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-orange to-brand-gold hover:brightness-110 shadow-lg shadow-brand-orange/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
          >
            Download Now
          </a>
        </div>
      </div>
    </header>
  );
}
