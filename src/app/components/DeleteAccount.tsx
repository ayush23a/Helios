"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

const deleteAccountSections = [
  {
    title: "How to Request Deletion",
    content: "To request account deletion, please send an email to our support team using the same email address associated with your Helios account. Using your registered email address helps us verify account ownership and process your request securely.",
  },
  {
    title: "What Happens Next",
    content: "Once we receive and verify your request, we will initiate the deletion of your Helios account and associated data from our systems. Account deletion requests are processed within 7 business days.",
  },
  {
    title: "Data That May Be Deleted",
    content: "When you request deletion of your account, we will erase the personal information associated with your profile to the maximum extent possible. This includes:",
    isList: true,
    listItems: [
      "Profile information (username, display name, profile details)",
      "Authentication records (login methods, linked accounts)",
      "User preferences (theme settings, customization options)",
      "User-generated content (saved prompts, custom combinations, and creative history)"
    ]
  },
  {
    title: "Temporary Data Retention",
    content: "Certain security, fraud-prevention, or legally required logs may be retained for up to 30 days before being permanently deleted in accordance with our data retention practices.",
  },
  {
    title: "Frequently Asked Questions",
    content: "Here are some of the most common questions regarding the Helios account deletion process:",
    isFaq: true,
    faqItems: [
      {
        question: "How do I request deletion?",
        answer: "You can request deletion by sending an email to contact@achaialabs.tech from the email address registered to your Helios account."
      },
      {
        question: "How long does the process take?",
        answer: "We process and verify all account deletion requests within 7 business days of receipt."
      },
      {
        question: "What data is deleted?",
        answer: "We delete your profile information, authentication records, user preferences, and all user-generated content from our database."
      },
      {
        question: "Why are some logs retained temporarily?",
        answer: "We retain security, fraud-prevention, or legally mandated logs for up to 30 days before permanent deletion to ensure platform integrity and compliance."
      }
    ]
  }
];

const getSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function DeleteAccount() {
  const [activeSlug, setActiveSlug] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Find the current section
      for (const section of deleteAccountSections) {
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

      // Check for Support Contact / Contact Us
      const contactElement = document.getElementById("support-contact");
      if (contactElement) {
        const { top } = contactElement.getBoundingClientRect();
        if (scrollPosition >= top + window.scrollY) {
          setActiveSlug("support-contact");
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
                {deleteAccountSections.map((section) => {
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
                  href="#support-contact"
                  className={`transition-colors duration-300 font-medium ${
                    activeSlug === "support-contact"
                      ? "text-brand-gold"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Support Contact
                </a>
              </nav>
            </aside>

            {/* 2. MAIN CONTENT ARTICLE */}
            <article className="lg:col-span-8 space-y-12">
              <header className="border-b border-white/[0.06] pb-8 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Helios User Management
                </p>
                <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
                  Request Account Deletion
                </h1>
                <p className="text-sm text-zinc-500">
                  Effective Date: <b>June 15th, 2026</b>
                </p>
                <p className="text-base leading-relaxed text-zinc-400">
                  Helios users can request deletion of their account and associated data at any time. Below you will find details on how to make a request, what happens once you request deletion, and what data is affected.
                </p>
              </header>

              <div className="space-y-12">
                {deleteAccountSections.map((section) => {
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
                      
                      {section.content && (
                        <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                          {section.content}
                        </p>
                      )}

                      {/* Render list items if applicable */}
                      {section.isList && section.listItems && (
                        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-zinc-400">
                          {section.listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}

                      {/* Render FAQ block if applicable */}
                      {section.isFaq && section.faqItems && (
                        <div className="space-y-6 pt-2">
                          {section.faqItems.map((faq, index) => (
                            <div key={index} className="p-5 rounded-xl bg-white/[0.01] border border-white/[0.04] space-y-2">
                              <h4 className="text-base font-semibold text-white">
                                {faq.question}
                              </h4>
                              <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                                {faq.answer}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  );
                })}

                {/* Support Contact Segment */}
                <section
                  id="support-contact"
                  className="scroll-mt-28 p-8 sm:p-10 rounded-2xl bg-white/[0.01] border border-white/[0.06] backdrop-blur-md space-y-6"
                >
                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                      Support Contact
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
                      To delete your account, please use the button below or email us directly at:
                    </p>
                    <div className="text-lg font-bold text-brand-gold hover:text-brand-orange transition-colors">
                      <a href="mailto:contact@achaialabs.tech">contact@achaialabs.tech</a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="mailto:contact@achaialabs.tech?subject=Helios Account Deletion Request"
                      className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-brand-orange to-brand-gold rounded-full hover:brightness-110 shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      Email Support to Request Deletion
                    </a>
                    <div className="mt-3 flex items-start gap-2 text-xs text-zinc-500">
                      <svg className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>
                        <b>Important:</b> You must send the email from the address registered with your Helios account so we can verify your identity.
                      </span>
                    </div>
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
