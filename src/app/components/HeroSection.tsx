"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=ai.achaialabs.helios";
  const playStoreIcon = "https://play-lh.googleusercontent.com/wsT37_7zZBYThYH4FEn6cQk_mD94uwcW8xOJyCdWwauVYBKK_jnVpciFB170msTmF7Hzhl0EuGF-0QfBRwZ1b3Y=w512-h512";

  return (
    <section className="relative pt-32 pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Soft ambient background glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-orange/10 blur-[130px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Main Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-zinc-400">Available on Android</span>
            <span className="text-zinc-600">•</span>
            <span className="text-brand-gold font-semibold">Helios v1.0</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-white">
            Helios <br />
            <span className="text-gradient-gold">AI Prompt Library</span>
          </h1>

          {/* Short & Honest Subtitle */}
          <p className="text-base text-zinc-400 max-w-lg leading-relaxed">
            Discover, save, and organize AI prompts for ChatGPT, Midjourney, Claude, and Stable Diffusion. Built to streamline your creative workflow.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2">
            {/* Google Play Store Official Badge */}
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105 active:scale-95"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                className="h-16 w-auto object-contain"
              />
            </a>

            {/* App Store Coming Soon */}
            <div className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-medium text-zinc-400 bg-white/[0.02] border border-white/[0.08] rounded-2xl cursor-default">
              <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
              </svg>
              <span>App Store</span>
              <span className="px-2 py-0.5 rounded-full bg-brand-gold/10 text-[10px] font-bold text-brand-gold">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-zinc-500 border-t border-white/[0.05] w-full max-w-md">
            <span>Free Download</span>
            <span>•</span>
            <span>Android 7.0+</span>
            <span>•</span>
            <span>Achaia Labs</span>
          </div>
        </div>

        {/* Clean App Icon Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="glassmorphism rounded-3xl p-8 border border-white/[0.08] shadow-xl flex flex-col items-center text-center space-y-5 max-w-xs w-full">
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/10">
              <Image
                src={playStoreIcon}
                alt="Helios App Icon"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h3 className="text-xl font-bold font-display text-white">Helios</h3>
              <p className="text-xs text-brand-gold font-medium mt-0.5">AI Prompt Library</p>
            </div>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-orange to-brand-gold rounded-xl hover:brightness-110 shadow transition-all"
            >
              View on Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
