"use client";

import React from "react";

const safetyPoints = [
  {
    title: "Zero Selling of Personal Data",
    description: "We believe your creative ideas are entirely yours. We never trade, sell, or monetize your prompt templates or personal information with advertising brokers.",
    icon: (
      <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Local Preference Controls",
    description: "Prefer local isolation? Customize your preference to save prompt vaults entirely on-device, bypassing external server synchronization completely.",
    icon: (
      <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Secure Account Vaults",
    description: "Our synchronization servers run on robust cloud environments using state-of-the-art security practices to protect your cloud backups and integrations.",
    icon: (
      <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function SafetySection() {
  return (
    <section id="safety" className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-white/[0.03]">
      {/* Decorative cosmic nebula light */}
      <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-orange/3 blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Visual Representation */}
          <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
            <div className="relative w-full max-w-[320px] aspect-square rounded-3xl bg-gradient-to-tr from-brand-orange/10 via-white/[0.01] to-brand-gold/10 p-px shadow-2xl border border-white/[0.04] overflow-hidden group">
              <div className="absolute inset-0 bg-cosmic-dark/80 rounded-3xl" />
              {/* Star-field effect inside container */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              {/* Interactive Core Shield SVG */}
              <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
                <div className="relative w-24 h-24 rounded-full bg-white/[0.02] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 group-hover:border-brand-orange/40 transition-all duration-500">
                  {/* Glowing orbital ring inside card */}
                  <div className="absolute w-28 h-6 border border-brand-gold/30 rounded-full rotate-[15deg] animate-orbit-slow" />
                  
                  {/* Central Shield Icon */}
                  <svg className="w-10 h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="text-white font-bold font-display text-lg">Helios Security Core</h4>
                  <p className="text-zinc-500 text-xs mt-1">Built to secure prompt blueprints</p>
                </div>
                
                <div className="w-full flex items-center justify-between text-xxs font-mono text-zinc-500 bg-black/40 border border-white/[0.04] p-3.5 rounded-xl">
                  <span>SSL ENCRYPTION</span>
                  <span className="text-emerald-500 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Information */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
                Privacy First
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                A Safe Haven in the Creative Cosmos
              </h2>
              <p className="text-sm sm:text-base text-zinc-400">
                Your ideas are valuable assets. Helios is built from the ground up with a core commitment to user privacy, transparent data policies, and absolute creative sovereignty.
              </p>
            </div>

            <div className="space-y-6">
              {safetyPoints.map((point, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-center">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white font-display">
                      {point.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
