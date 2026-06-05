"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glassmorphism rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl shadow-black/40">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Minimalist Planet Icon */}
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-brand-orange to-brand-gold flex items-center justify-center shadow-md shadow-brand-orange/30 group-hover:scale-105 transition-transform">
              <div className="absolute w-10 h-2 border border-white/50 rounded-full rotate-[-20deg]" />
              <div className="w-2.5 h-2.5 rounded-full bg-cosmic-dark" />
            </div>
            <span className="text-xl font-bold tracking-wider font-display text-white group-hover:text-brand-gold transition-colors">
              Helios
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#explore" className="hover:text-white transition-colors">
              Explore Prompts
            </a>
            <a href="#safety" className="hover:text-white transition-colors">
              Safety & Trust
            </a>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#download"
              className="relative inline-flex items-center justify-center px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-brand-orange to-brand-gold rounded-full hover:brightness-110 shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Get Helios
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 mx-2">
          <div className="glassmorphism rounded-2xl p-6 flex flex-col gap-4 shadow-2xl border border-white/10">
            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-white font-medium py-1"
            >
              Features
            </a>
            <a
              href="#explore"
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-white font-medium py-1"
            >
              Explore Prompts
            </a>
            <a
              href="#safety"
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-white font-medium py-1"
            >
              Safety & Trust
            </a>
            <Link
              href="/privacy"
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-white font-medium py-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-white font-medium py-1"
            >
              Terms & Conditions
            </Link>
            <hr className="border-white/10 my-1" />
            <a
              href="#download"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-brand-orange to-brand-gold rounded-full shadow-lg shadow-brand-orange/20"
            >
              Get Helios
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
