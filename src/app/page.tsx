import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-950 sm:px-10">
      <section className="mx-auto flex max-w-4xl flex-col gap-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Helios
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Legal pages
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Use these sample pages as a starting point for your app policies.
            Replace the placeholders and review the text for your exact product,
            region, and business requirements.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            className="rounded-lg border border-zinc-200 bg-white p-6 transition hover:border-zinc-400"
            href="/privacy-policy"
          >
            <h2 className="text-xl font-semibold">Privacy Policy</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Sample language for data collection, use, security, retention,
              and user rights.
            </p>
          </Link>

          <Link
            className="rounded-lg border border-zinc-200 bg-white p-6 transition hover:border-zinc-400"
            href="/terms-and-conditions"
          >
            <h2 className="text-xl font-semibold">Terms and Conditions</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Sample language for acceptable use, accounts, content, payments,
              liability, and termination.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
