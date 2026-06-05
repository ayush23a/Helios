const privacySections = [
  {
    title: "Information We Collect",
    content:
      "We may collect information you provide directly, such as your name, email address, account details, messages, and any content you submit while using [App Name]. We may also collect basic usage data, device information, log data, and cookies or similar technologies to help operate and improve the service.",
  },
  {
    title: "How We Use Information",
    content:
      "We use collected information to provide, maintain, secure, and improve [App Name], respond to support requests, personalize the user experience, send service-related updates, prevent fraud or abuse, and comply with legal obligations.",
  },
  {
    title: "Sharing of Information",
    content:
      "We do not sell your personal information. We may share information with trusted service providers who help us operate the app, when required by law, to protect our rights or users, or as part of a business transfer such as a merger, acquisition, or asset sale.",
  },
  {
    title: "Cookies and Tracking",
    content:
      "[App Name] may use cookies, local storage, analytics tools, or similar technologies to remember preferences, understand usage, and improve performance. You can usually manage cookies through your browser settings.",
  },
  {
    title: "Data Retention",
    content:
      "We retain personal information only for as long as reasonably necessary for the purposes described in this policy, unless a longer retention period is required or permitted by law.",
  },
  {
    title: "Data Security",
    content:
      "We use reasonable technical and organizational safeguards to protect your information. However, no method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
  },
  {
    title: "Your Choices and Rights",
    content:
      "Depending on your location, you may have rights to access, update, delete, restrict, or object to certain uses of your personal information. To make a request, contact us at [Contact Email].",
  },
  {
    title: "Children's Privacy",
    content:
      "[App Name] is not intended for children under the age of 13, or the minimum age required in your jurisdiction. We do not knowingly collect personal information from children without appropriate consent.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. When we make changes, we will update the effective date and may provide additional notice where appropriate.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900 sm:px-10 lg:px-16">
      <article className="mx-auto max-w-4xl">
        <header className="border-b border-zinc-200 pb-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Effective date: [Effective Date]. This sample Privacy Policy
            explains how [Company Name] collects, uses, and protects information
            when you use [App Name].
          </p>
        </header>

        <div className="mt-10 space-y-8">
          {privacySections.map((section) => (
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
              If you have questions about this Privacy Policy, contact us at
              [Contact Email] or [Company Address].
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
