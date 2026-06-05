"use client";

import React, { useState } from "react";
import Image from "next/image";

const promptData = [
  {
    id: "space-explorer",
    title: "Space Explorer",
    category: "Midjourney",
    model: "Midjourney v6.0",
    image: "/space_explorer.png",
    promptText: "Cinematic digital painting of an astronaut surfing on golden solar flare ripples, nebula dust, starry background, purple and amber highlights, highly detailed, 8k resolution, photorealistic, cinematic composition --ar 1:1 --v 6.0",
    likes: 243,
  },
  {
    id: "lofi-dusk",
    title: "Lofi Dusk",
    category: "Midjourney",
    model: "Midjourney v6.0",
    image: "/lofi_dusk.png",
    promptText: "Dreamy cinematic vertical portrait of a girl in a white linen dress standing in a wildflower field at dusk, city lights glowing softly in the distant valley background, starry sky above, warm lofi aesthetic, rich twilight colors --ar 1:1",
    likes: 189,
  },
  {
    id: "cosmic-trends",
    title: "Cosmic Trends",
    category: "Flux.1",
    model: "Flux.1 Dev",
    image: "/cosmic_trends.png",
    promptText: "A close-up cinematic portrait of a person face, illuminated by colorful red and green cosmic nebula projections, starry overlays, neon details, dark room, premium aesthetic",
    likes: 312,
  },
];

export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["All", "Midjourney", "Flux.1"];

  const filteredPrompts = activeTab === "All"
    ? promptData
    : promptData.filter((p) => p.category === activeTab);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="explore" className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background glowing nebula */}
      <div className="absolute top-[20%] left-[-15%] w-[500px] h-[500px] rounded-full bg-brand-orange/3 blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
              Creative Discovery
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Browse the Celestial Feed
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Get inspired by prompts that push the boundaries of AI generation. Click any card to copy its exact prompt parameters.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 p-1 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="glassmorphism-card rounded-3xl overflow-hidden flex flex-col group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-900">
                <Image
                  src={prompt.image}
                  alt={prompt.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  priority
                />
                {/* Floating model tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm text-xxs font-bold text-brand-gold uppercase tracking-wider">
                  {prompt.model}
                </div>
              </div>

              {/* Text & Action Content */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold font-display text-white">
                      {prompt.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
                      <svg className="w-4 h-4 text-brand-orange fill-brand-orange/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {prompt.likes}
                    </div>
                  </div>

                  {/* Prompt Text Block */}
                  <div className="relative p-4 rounded-2xl bg-black/30 border border-white/[0.04] text-xs text-zinc-300 font-mono leading-relaxed max-h-24 overflow-y-auto custom-scrollbar">
                    {prompt.promptText}
                  </div>
                </div>

                {/* Copy CTA Button */}
                <button
                  onClick={() => handleCopy(prompt.id, prompt.promptText)}
                  className={`w-full py-3 rounded-2xl font-bold text-xs uppercase tracking-widest border transition-all duration-300 flex items-center justify-center gap-2 ${
                    copiedId === prompt.id
                      ? "bg-brand-gold/10 border-brand-gold text-brand-gold glow-orange"
                      : "bg-white/[0.02] border-white/[0.08] text-zinc-300 hover:text-white hover:border-brand-orange hover:bg-brand-orange/5"
                  }`}
                >
                  {copiedId === prompt.id ? (
                    <>
                      <svg className="w-4 h-4 animate-scale" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      Copy Prompt
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
