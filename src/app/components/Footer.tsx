"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-cosmic-dark py-12 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Decorative background ambient light */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-orange/3 blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-white/[0.04]">
          {/* Brand Info Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-brand-orange to-brand-gold flex items-center justify-center">
                <div className="absolute w-9 h-1.5 border border-white/50 rounded-full rotate-[-20deg]" />
                <div className="w-2 h-2 rounded-full bg-cosmic-dark" />
              </div>
              <span className="text-lg font-bold tracking-wider font-display text-white">
                Helios
              </span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
              Explore a universe of creative possibilities. The premium AI prompt database curated for creators, builders, and cosmic minds.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Product
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="/#features" className="text-zinc-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#explore" className="text-zinc-400 hover:text-white transition-colors">
                  Explore Prompts
                </a>
              </li>
              <li>
                <a href="/#safety" className="text-zinc-400 hover:text-white transition-colors">
                  Safety & Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Legal & Support
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">
                  Terms of Conditions
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="text-zinc-400 hover:text-white transition-colors">
                  Data Safety
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@achaialabs.tech"
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Helios. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted in the galaxy by
            <a
              href="https://achaialabs.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-brand-orange transition-colors"
            >
              Achaia Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
