"use client";

import React from "react";

export default function PlanetCenterpiece() {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[400px] aspect-square flex items-center justify-center select-none animate-float">
      {/* Background Glow behind the planet */}
      <div className="absolute w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] rounded-full bg-brand-orange/20 blur-3xl" />
      
      {/* SVG Canvas for Planet and Rings */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full drop-shadow-[0_10px_30px_rgba(213,89,0,0.15)]"
      >
        <defs>
          {/* Planet body gradient */}
          <radialGradient id="planetGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="35%" stopColor="#D55900" />
            <stop offset="85%" stopColor="#7C2D12" />
            <stop offset="100%" stopColor="#451A03" />
          </radialGradient>

          {/* Ring gradient */}
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D55900" stopOpacity="0.8" />
          </linearGradient>

          {/* Shadow filters for craters */}
          <filter id="craterShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feOffset dx="1" dy="2" />
            <feGaussianBlur stdDeviation="2" result="offset-blur" />
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
            <feFlood floodColor="black" floodOpacity="0.6" result="color" />
            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* 1. BACK HALF OF THE RINGS (renders behind the planet body) */}
        <g style={{ transformOrigin: "200px 200px", transform: "rotate(-18deg)" }}>
          {/* Outer Ring Back */}
          <path
            d="M 60,200 A 140,55 0 0,1 340,200"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            className="opacity-40"
          />
          {/* Middle Ring Back */}
          <path
            d="M 80,200 A 120,45 0 0,1 320,200"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="5"
            className="opacity-60"
          />
          {/* Inner Ring Back */}
          <path
            d="M 100,200 A 100,35 0 0,1 300,200"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="3"
            className="opacity-50"
          />
        </g>

        {/* 2. PLANET BODY */}
        <circle cx="200" cy="200" r="90" fill="url(#planetGrad)" />

        {/* Craters & Spots (styled according to the app screenshot) */}
        <g>
          {/* Top-left large crater */}
          <ellipse
            cx="170"
            cy="150"
            rx="18"
            ry="14"
            fill="#7C2D12"
            opacity="0.8"
            filter="url(#craterShadow)"
          />
          <ellipse cx="172" cy="148" rx="10" ry="8" fill="#451A03" opacity="0.4" />

          {/* Bottom-right medium crater */}
          <circle
            cx="230"
            cy="240"
            r="16"
            fill="#9A3412"
            opacity="0.85"
            filter="url(#craterShadow)"
          />
          <circle cx="232" cy="238" r="9" fill="#451A03" opacity="0.4" />

          {/* Small crater top right */}
          <circle
            cx="235"
            cy="165"
            r="10"
            fill="#7C2D12"
            opacity="0.7"
            filter="url(#craterShadow)"
          />

          {/* Small crater bottom left */}
          <circle
            cx="160"
            cy="230"
            r="12"
            fill="#9A3412"
            opacity="0.75"
            filter="url(#craterShadow)"
          />

          {/* Tiny details */}
          <circle cx="190" cy="265" r="5" fill="#7C2D12" opacity="0.6" />
          <circle cx="140" cy="190" r="7" fill="#7C2D12" opacity="0.6" />
        </g>

        {/* 3. FRONT HALF OF THE RINGS (renders in front of the planet body, creating 3D depth) */}
        <g style={{ transformOrigin: "200px 200px", transform: "rotate(-18deg)" }}>
          {/* Inner Ring Front */}
          <path
            d="M 300,200 A 100,35 0 0,1 100,200"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Middle Ring Front */}
          <path
            d="M 320,200 A 120,45 0 0,1 80,200"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Outer Ring Front */}
          <path
            d="M 340,200 A 140,55 0 0,1 60,200"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>

        {/* 4. ORBITING STARS AND PLANETARY SPARKLES (matching screenshot stars on rings) */}
        <g style={{ transformOrigin: "200px 200px" }} className="animate-orbit-slow">
          {/* Orbiting star 1 (Purple) */}
          <path
            d="M 120 115 L 123 123 L 131 123 L 125 128 L 127 136 L 120 131 L 113 136 L 115 128 L 109 123 L 117 123 Z"
            fill="#C084FC"
            className="drop-shadow-[0_0_8px_#A855F7]"
          />
        </g>
        <g style={{ transformOrigin: "200px 200px" }} className="animate-orbit-fast">
          {/* Orbiting star 2 (Purple/White small) */}
          <path
            d="M 280 290 L 282 295 L 287 295 L 283 298 L 285 303 L 280 300 L 275 303 L 277 298 L 273 295 L 278 295 Z"
            fill="#E9D5FF"
            className="drop-shadow-[0_0_6px_#FFF]"
          />
        </g>
        <g style={{ transformOrigin: "200px 200px", animationDirection: "reverse", animationDuration: "30s" }} className="animate-orbit-slow">
          {/* Orbiting star 3 (Lavender) */}
          <path
            d="M 330 95 L 333 100 L 339 100 L 334 104 L 336 109 L 330 106 L 324 109 L 326 104 L 321 100 L 327 100 Z"
            fill="#C084FC"
            className="drop-shadow-[0_0_10px_#A855F7]"
          />
        </g>
      </svg>
    </div>
  );
}
