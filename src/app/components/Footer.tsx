"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=ai.achaialabs.helios";
  const appIcon = "https://play-lh.googleusercontent.com/wsT37_7zZBYThYH4FEn6cQk_mD94uwcW8xOJyCdWwauVYBKK_jnVpciFB170msTmF7Hzhl0EuGF-0QfBRwZ1b3Y=w512-h512";

  return (
    <footer className="relative border-t border-white/[0.04] bg-zinc-950 py-16 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden shadow-md shadow-brand-orange/30">
                <Image
                  src={appIcon}
                  alt="Helios Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight font-display text-white">
                Helios
              </span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              The ultimate AI prompt library for ChatGPT, Midjourney, Claude & Stable Diffusion. Built by <strong className="text-white">Achaia Labs</strong>.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-xl text-xs font-semibold text-white transition-all"
              >
                <span>Google Play Store</span>
              </a>
              <a
                href="/app-ads.txt"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] rounded-xl text-xs font-mono text-zinc-400 hover:text-white transition-all"
              >
                <span>app-ads.txt</span>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#showcase" className="text-zinc-400 hover:text-white transition-colors">
                  App Showcase
                </a>
              </li>
              <li>
                <a href="#features" className="text-zinc-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#explore" className="text-zinc-400 hover:text-white transition-colors">
                  Prompt Library
                </a>
              </li>
              <li>
                <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                  Play Store Page
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Developer Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Legal & Support
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/data-safety" className="text-zinc-400 hover:text-white transition-colors">
                  Data Safety
                </Link>
              </li>
              <li>
                <a href="mailto:imgurujeet@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                  Support Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Helios: AI Prompt Library. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Developed by</span>
            <a
              href="https://heliosai.achaialabs.tech"
              className="text-zinc-300 font-semibold hover:text-brand-gold transition-colors"
            >
              Achaia Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
