"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=ai.achaialabs.helios";
  const achaiaLabsUrl = "https://www.achaialabs.tech/";
  const linkedinUrl = "https://www.linkedin.com/showcase/heliosapp";
  const twitterUrl = "https://x.com/achaialabs";
  const instagramUrl = "https://instagram.com/achaialabs";

  return (
    <footer className="w-full py-16 px-6 bg-zinc-950 border-t border-zinc-900/80 text-zinc-300">
      <div className="mx-auto max-w-3xl space-y-12 text-center">
        {/* About Us Section */}
        <div className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight text-center">
            About us
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light tracking-wide text-left">
            <p>
              Our company&apos;s vision is to empower individuals to achieve their full potential in the digital-first, AI-driven era. Built by <a href={achaiaLabsUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-gold font-semibold transition-colors underline underline-offset-4 decoration-amber-500/50">Achaia Labs</a>, an engineering lab dedicated to building reliable SaaS, AI tools, mobile, and web applications, we create products designed to accelerate human innovation.
            </p>
            <p>
              <strong className="font-brand font-bold text-white">Helios</strong> is your ultimate AI productivity companion—giving you instant access to field-tested prompts for ChatGPT, Claude, and Gemini so you get expert results in seconds.
            </p>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full max-w-xl mx-auto border-t border-zinc-800/80 pt-8">
          {/* Centered Circular Social & Contact Icons */}
          <div className="flex items-center justify-center gap-3">
            {/* Website / Contact Email */}
            <a
              href={achaiaLabsUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Achaia Labs Website"
              className="w-10 h-10 rounded-full bg-zinc-800/90 border border-zinc-700/60 hover:bg-brand-orange hover:border-brand-orange hover:text-white flex items-center justify-center text-zinc-300 transition-all hover:scale-105"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-10 h-10 rounded-full bg-zinc-800/90 border border-zinc-700/60 hover:bg-brand-orange hover:border-brand-orange hover:text-white flex items-center justify-center text-zinc-300 transition-all hover:scale-105"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98Z"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="X (Twitter)"
              className="w-10 h-10 rounded-full bg-zinc-800/90 border border-zinc-700/60 hover:bg-brand-orange hover:border-brand-orange hover:text-white flex items-center justify-center text-zinc-300 transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="w-10 h-10 rounded-full bg-zinc-800/90 border border-zinc-700/60 hover:bg-brand-orange hover:border-brand-orange hover:text-white flex items-center justify-center text-zinc-300 transition-all hover:scale-105"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation & Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-zinc-400 font-medium">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Use
          </Link>
          <Link href="/data-safety" className="hover:text-white transition-colors">
            Data Safety
          </Link>
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Google Play Store
          </a>
        </div>

        {/* Product & Company Attribution Line */}
        <div className="text-xs sm:text-sm text-zinc-400 pt-2 font-medium">
          Helios is a product by{" "}
          <a
            href={achaiaLabsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white hover:text-brand-gold transition-colors"
          >
            Achaia Labs
          </a>
        </div>
      </div>
    </footer>
  );
}
