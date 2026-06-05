"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

const termsSections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using Helios, you agree to these Terms and Conditions. If you do not agree, you should not use the app or related services.",
  },
  {
    title: "Use of the Service",
    content:
      "You agree to use Helios only for lawful purposes and in a way that does not harm, disable, overload, or interfere with the service or other users. You are responsible for keeping your account credentials secure.",
  },
  {
    title: "User Accounts",
    content:
      "You may need to create an account to access certain features. You agree that the information you provide is accurate and that you will update it when necessary. We may suspend or terminate accounts that violate these terms.",
  },
  {
    title: "User Content",
    content:
      "You retain ownership of content you submit to Helios. By submitting content, you grant Achaia Labs a limited license to host, process, display, and use that content as needed to provide and improve the service.",
  },
  {
    title: "Intellectual Property",
    content:
      "The app, design, features, logos, software, and related materials are owned by Achaia Labs or its licensors. You may not copy, modify, distribute, sell, or lease any part of the service unless allowed by law or written permission.",
  },
  {
    title: "Payments and Subscriptions",
    content:
      "If Helios offers paid features, pricing, billing terms, renewal rules, cancellation options, and refund policies will be shown at checkout or in the relevant product area. You are responsible for any applicable taxes or fees.",
  },
  {
    title: "Third-Party Services",
    content:
      "Helios may link to or integrate with third-party services. We are not responsible for third-party content, policies, availability, or practices.",
  },
  {
    title: "Disclaimers",
    content:
      "The service is provided on an as-is and as-available basis. To the fullest extent permitted by law, Achaia Labs disclaims warranties of merchantability, fitness for a particular purpose, and non-infringement.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, Achaia Labs will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, goodwill, or business opportunities.",
  },
  {
    title: "Termination",
    content:
      "We may suspend or terminate your access to Helios if you violate these terms, create risk for the service, or use the app in a way that may cause legal or operational harm.",
  },
  {
    title: "Changes to These Terms",
    content:
      "We may update these Terms and Conditions from time to time. Continued use of Helios after changes become effective means you accept the updated terms.",
  },
];

const getSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function TermsNCondition() {
  const [activeSlug, setActiveSlug] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      // Find the current section
      for (const section of termsSections) {
        const slug = getSlug(section.title);
        const element = document.getElementById(slug);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;
          
          if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
            setActiveSlug(slug);
            return;
          }
        }
      }
      
      // Check for Contact Us
      const contactElement = document.getElementById("contact-us");
      if (contactElement) {
        const { top } = contactElement.getBoundingClientRect();
        if (scrollPosition >= top + window.scrollY) {
          setActiveSlug("contact-us");
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-cosmic-dark text-zinc-300 pt-32 pb-24 px-6 sm:px-10 lg:px-16 relative">
        {/* Subtle background ambient glows */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-orange/3 blur-[120px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl">
          {/* Back button */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-orange transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* 1. STICKY SIDEBAR TABLE OF CONTENTS */}
            <aside className="lg:col-span-4 sticky top-28 hidden lg:block bg-white/[0.01] border border-white/[0.04] p-6 rounded-2xl backdrop-blur-md max-h-[75vh] overflow-y-auto custom-scrollbar">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-4">
                Table of Contents
              </h3>
              <nav className="flex flex-col gap-3.5 text-sm">
                {termsSections.map((section) => {
                  const slug = getSlug(section.title);
                  return (
                    <a
                      key={slug}
                      href={`#${slug}`}
                      className={`transition-colors duration-300 font-medium ${
                        activeSlug === slug
                          ? "text-brand-gold"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      {section.title}
                    </a>
                  );
                })}
                <a
                  href="#contact-us"
                  className={`transition-colors duration-300 font-medium ${
                    activeSlug === "contact-us"
                      ? "text-brand-gold"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Contact Us
                </a>
              </nav>
            </aside>

            {/* 2. MAIN TERMS CONTENT ARTICLE */}
            <article className="lg:col-span-8 space-y-12">
              <header className="border-b border-white/[0.06] pb-8 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Helios Documentation
                </p>
                <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
                  Terms and Conditions
                </h1>
                <p className="text-sm text-zinc-500">
                  Last Updated: <b>June 6th, 2026</b>
                </p>
                <p className="text-base leading-relaxed text-zinc-400">
                  These Terms and Conditions describe the rules and regulations for using the Helios application and website, operated by Achaia Labs (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
                </p>
              </header>

              <div className="space-y-12">
                {termsSections.map((section) => {
                  const slug = getSlug(section.title);
                  return (
                    <section
                      id={slug}
                      key={slug}
                      className="scroll-mt-28 space-y-4 group"
                    >
                      <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight group-hover:text-brand-gold transition-colors">
                        {section.title}
                      </h2>
                      <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                        {section.content}
                      </p>
                    </section>
                  );
                })}

                {/* Contact Us Segment */}
                <section
                  id="contact-us"
                  className="scroll-mt-28 p-8 sm:p-10 rounded-2xl bg-white/[0.01] border border-white/[0.06] backdrop-blur-md space-y-4"
                >
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                    Contact Us
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                    If you have questions, suggestions, or concerns regarding these Terms and Conditions, please reach out to our legal department at:
                  </p>
                  <div className="pt-2 flex flex-col gap-2 text-sm font-semibold">
                    <span className="text-brand-gold">
                      Email:{" "}
                      <a href="mailto:legal@achaialabs.tech" className="hover:text-brand-orange transition-colors">
                        legal@achaialabs.tech
                      </a>
                    </span>
                    <span className="text-zinc-500 font-normal">
                      Company Address: Achaia Labs, Galaxy Headquarters, Space Sector 4
                    </span>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
