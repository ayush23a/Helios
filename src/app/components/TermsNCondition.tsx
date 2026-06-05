const termsSections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using [App Name], you agree to these Terms and Conditions. If you do not agree, you should not use the app or related services.",
  },
  {
    title: "Use of the Service",
    content:
      "You agree to use [App Name] only for lawful purposes and in a way that does not harm, disable, overload, or interfere with the service or other users. You are responsible for keeping your account credentials secure.",
  },
  {
    title: "User Accounts",
    content:
      "You may need to create an account to access certain features. You agree that the information you provide is accurate and that you will update it when necessary. We may suspend or terminate accounts that violate these terms.",
  },
  {
    title: "User Content",
    content:
      "You retain ownership of content you submit to [App Name]. By submitting content, you grant [Company Name] a limited license to host, process, display, and use that content as needed to provide and improve the service.",
  },
  {
    title: "Intellectual Property",
    content:
      "The app, design, features, logos, software, and related materials are owned by [Company Name] or its licensors. You may not copy, modify, distribute, sell, or lease any part of the service unless allowed by law or written permission.",
  },
  {
    title: "Payments and Subscriptions",
    content:
      "If [App Name] offers paid features, pricing, billing terms, renewal rules, cancellation options, and refund policies will be shown at checkout or in the relevant product area. You are responsible for any applicable taxes or fees.",
  },
  {
    title: "Third-Party Services",
    content:
      "[App Name] may link to or integrate with third-party services. We are not responsible for third-party content, policies, availability, or practices.",
  },
  {
    title: "Disclaimers",
    content:
      "The service is provided on an as-is and as-available basis. To the fullest extent permitted by law, [Company Name] disclaims warranties of merchantability, fitness for a particular purpose, and non-infringement.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, [Company Name] will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, goodwill, or business opportunities.",
  },
  {
    title: "Termination",
    content:
      "We may suspend or terminate your access to [App Name] if you violate these terms, create risk for the service, or use the app in a way that may cause legal or operational harm.",
  },
  {
    title: "Changes to These Terms",
    content:
      "We may update these Terms and Conditions from time to time. Continued use of [App Name] after changes become effective means you accept the updated terms.",
  },
];

export default function TermsNCondition() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900 sm:px-10 lg:px-16">
      <article className="mx-auto max-w-4xl">
        <header className="border-b border-zinc-200 pb-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Terms and Conditions
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Effective date: [Effective Date]. These sample Terms and Conditions
            describe the rules for using [App Name], operated by [Company Name].
          </p>
        </header>

        <div className="mt-10 space-y-8">
          {termsSections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-zinc-700">
                {section.content}
              </p>
            </section>
          ))}

          <section className="rounded-lg border border-zinc-200 bg-white p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Contact Us
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700">
              If you have questions about these Terms and Conditions, contact us
              at [Contact Email] or [Company Address].
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
