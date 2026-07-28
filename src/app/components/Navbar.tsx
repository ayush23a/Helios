"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const playStoreUrl = "https://play.google.com/store/apps/details?id=ai.achaialabs.helios";
  const appIcon = "https://play-lh.googleusercontent.com/wsT37_7zZBYThYH4FEn6cQk_mD94uwcW8xOJyCdWwauVYBKK_jnVpciFB170msTmF7Hzhl0EuGF-0QfBRwZ1b3Y=w512-h512";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glassmorphism rounded-full px-5 sm:px-7 py-3 flex items-center justify-between bg-zinc-950/70 backdrop-blur-md shadow-2xl shadow-black/80 border border-white/10">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-brand-orange/30 group-hover:scale-105 transition-all">
              <Image
                src={appIcon}
                alt="Helios Icon"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight font-display text-white group-hover:text-brand-gold transition-colors leading-none">
                Helios
              </span>
              <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold">AI Prompt Library</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <a href="#showcase" className="hover:text-white transition-colors">
              App Showcase
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#explore" className="hover:text-white transition-colors">
              Prompt Feed
            </a>
            <a href="#safety" className="hover:text-white transition-colors">
              Safety
            </a>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </div>

          {/* Direct CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-brand-orange to-brand-gold rounded-full hover:brightness-110 shadow-lg shadow-brand-orange/20 hover:scale-[1.03] transition-all"
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 01-.61-1.39V3.204c0-.528.204-1.012.61-1.39zM14.735 12.943l3.072-3.072 3.593 2.052a2 2 0 010 3.473l-3.593 2.053-3.072-3.106zm-1.886-1.886L3.9 3.011c-.04-.022-.08-.046-.12-.066L12.85 11.057zm0 1.886l-9.071 8.113c.04-.02.08-.044.12-.066l8.951-5.112v-2.935z" />
              </svg>
              <span>Get on Play Store</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 mx-2">
          <div className="glassmorphism rounded-2xl p-6 flex flex-col gap-4 bg-zinc-950/90 backdrop-blur-xl border border-white/10 shadow-2xl">
            <a href="#showcase" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white font-medium py-1">
              App Showcase
            </a>
            <a href="#features" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white font-medium py-1">
              Features
            </a>
            <a href="#explore" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white font-medium py-1">
              Prompt Feed
            </a>
            <a href="#safety" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white font-medium py-1">
              Safety & Trust
            </a>
            <Link href="/privacy" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white font-medium py-1">
              Privacy Policy
            </Link>
            <hr className="border-white/10 my-1" />
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-brand-orange to-brand-gold rounded-full shadow-lg shadow-brand-orange/20"
            >
              Get on Play Store
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
