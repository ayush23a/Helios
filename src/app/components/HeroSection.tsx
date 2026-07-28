"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=ai.achaialabs.helios";
  const appIcon = "https://play-lh.googleusercontent.com/wsT37_7zZBYThYH4FEn6cQk_mD94uwcW8xOJyCdWwauVYBKK_jnVpciFB170msTmF7Hzhl0EuGF-0QfBRwZ1b3Y=w512-h512";

  return (
    <section className="relative w-full py-16 px-6 sm:px-10 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Soft Ambient Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] rounded-full bg-brand-orange/10 blur-[130px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-xl w-full flex flex-col items-center space-y-6">
        {/* Centered Squircle App Logo Icon */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-[22px] p-0.5 bg-gradient-to-b from-zinc-700/70 via-zinc-800/50 to-zinc-950 shadow-xl shadow-black/50 ring-1 ring-white/10 shrink-0 overflow-hidden">
          <div className="relative w-full h-full rounded-[20px] overflow-hidden">
            <Image
              src={appIcon}
              alt="Helios App Icon"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Headline Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-brand tracking-tight text-white leading-tight">
          Helios <span className="text-brand-orange font-normal">—</span> <span className="text-zinc-200 font-medium">AI Prompt App</span>
        </h1>

        {/* Subtitle Tagline */}
        <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed font-light font-display tracking-wide">
          Stop guessing prompts. Access thousands of field-tested AI prompts for every use case and get expert results instantly.
        </p>

        {/* Official Google Play Badge & iOS Note */}
        <div className="flex flex-col items-center space-y-3 pt-2">
          {/* Official Google Play Store Badge PNG Image */}
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              className="h-[74px] w-auto object-contain"
            />
          </a>

          {/* iOS / App Store Text Note */}
          <p className="text-xs text-zinc-500 font-medium tracking-wide">
            iOS coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
