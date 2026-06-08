"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

const privacySections = [
  {
    title: "Effective Date and Contact",
    content:
      "This Privacy Policy applies to Helios, operated by Achaia Labs. If you have questions or requests about this Policy or your personal data, contact us at privacy@achaialabs.tech.",
  },
  {
    title: "Information We Collect",
    content:
      "We may collect information you provide directly, such as your name, email address, account details, feedback, support messages, saved prompts, and any other content you submit while using Helios. We may also collect basic device information, app usage data, crash logs, diagnostic data, and similar technical information to operate and improve the service.",
  },
  {
    title: "How We Use Information",
    content:
      "We use information to provide and maintain Helios, personalize your experience, process requests and support inquiries, send service-related notices, improve features and performance, detect abuse or fraud, enforce our terms, and comply with legal obligations.",
  },
  {
    title: "Prompts, Content, and Generated Results",
    content:
      "Helios may allow you to submit prompts, ideas, or other content for generating images or videos. We may process that content to provide the service, moderate abuse, troubleshoot issues, and improve the app. Do not submit sensitive information unless you are comfortable with it being processed for these purposes.",
  },
  {
    title: "Payments and Subscriptions",
    content:
      "If you purchase a subscription or other paid feature, payment may be processed by the relevant app store or payment provider. We may receive limited transaction information, such as purchase status or subscription status, but we do not intentionally store full card details unless we clearly tell you otherwise.",
  },
  {
    title: "Sharing of Information",
    content:
      "We do not sell your personal information. We may share information with trusted service providers who help us run the app, with payment and subscription providers, when required by law, to protect our rights or users, or as part of a merger, acquisition, or other business transfer.",
  },
  {
    title: "Cookies, Analytics, and Similar Technologies",
    content:
      "Helios may use cookies, local storage, analytics tools, SDKs, or similar technologies to remember preferences, understand how the app is used, and improve performance and reliability. Where required, you can manage cookies through your browser or device settings.",
  },
  {
    title: "Data Retention",
    content:
      "We retain personal information only for as long as reasonably necessary for the purposes described in this Policy, unless a longer retention period is required or permitted by law. We may also retain limited records to comply with legal, tax, accounting, security, or dispute-resolution obligations.",
  },
  {
    title: "Data Security",
    content:
      "We use reasonable technical and organizational safeguards to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Your Rights and Choices",
    content:
      "Depending on where you live, you may have rights to access, correct, delete, restrict, or object to certain processing of your personal information. You may also be able to withdraw consent where processing is based on consent. To make a request, contact us at privacy@achaialabs.tech.",
  },
  {
    title: "Children's Privacy",
    content:
      "Helios is not intended for children under 13, or the minimum age required in your jurisdiction. We do not knowingly collect personal information from children without appropriate consent. If you believe a child has provided us personal information, contact us and we will take appropriate steps.",
  },
  {
    title: "International Data Transfers",
    content:
      "Your information may be processed in countries other than the one where you live. Where required, we take steps intended to provide appropriate protection for cross-border transfers.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. When we do, we will revise the effective date and may provide additional notice when appropriate.",
  },
];

const getSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function PrivacyPolicy() {
  const [activeSlug, setActiveSlug] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      // Find the current section
      for (const section of privacySections) {
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
                {privacySections.map((section) => {
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

            {/* 2. MAIN POLICY CONTENT ARTICLE */}
            <article className="lg:col-span-8 space-y-12">
              <header className="border-b border-white/[0.06] pb-8 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Helios Documentation
                </p>
                <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
                  Privacy Policy
                </h1>
                <p className="text-sm text-zinc-500">
                  Last Updated: <b>June 6th, 2026</b>
                </p>
                <p className="text-base leading-relaxed text-zinc-400">
                  This Privacy Policy explains how Achaia Labs (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, shares, and protects personal information when you use the Helios mobile application and public website.
                </p>
              </header>

              <div className="space-y-12">
                {privacySections.map((section) => {
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
                    If you have questions, suggestions, or concerns regarding this Privacy Policy, please reach out to our privacy team at:
                  </p>
                  <div className="pt-2 flex flex-col gap-2 text-sm font-semibold">
                    <span className="text-brand-gold">
                      Email:{" "}
                      <a href="mailto:contact@achaialabs.tech" className="hover:text-brand-orange transition-colors">
                        contact@achaialabs.tech
                      </a>
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
