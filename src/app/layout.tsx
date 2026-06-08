import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Helios | AI Prompts From Across The Galaxy",
  icons: {
    icon: "/space.ico"
  },
  description: "Discover, craft, and share premium AI prompts. A cosmic creative ecosystem with gorgeous prompts for ChatGPT, Midjourney, and more.",
  keywords: ["AI Prompts", "ChatGPT Prompts", "Midjourney Prompts", "Prompt Engineering", "Cosmic UI"],
  authors: [{ name: "Achaia Labs" }],
  openGraph: {
    title: "Helios | AI Prompts From Across The Galaxy",
    description: "Discover, craft, and share premium AI prompts. A cosmic creative ecosystem.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full max-w-full overflow-x-hidden ${inter.variable} ${outfit.variable} antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-cosmic-dark text-foreground font-sans relative selection:bg-brand-orange/30 selection:text-white">
        {/* Bulletproof wrapper to contain all absolute overflows */}
        <div className="relative w-full overflow-x-hidden flex flex-col flex-grow">
          {/* Subtle background ambient nebula glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
          <div className="absolute top-[40vh] right-1/4 w-[600px] h-[600px] rounded-full bg-brand-gold/3 blur-[140px] pointer-events-none -z-10" />
          
          {/* Small subtle background star-like points using CSS */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/10 via-transparent to-transparent pointer-events-none -z-10" />
          
          {children}
        </div>
      </body>
    </html>
  );
}


