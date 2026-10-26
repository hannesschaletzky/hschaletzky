import type { ReactNode } from "react";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import { siteNav } from "~/components/site/siteNav";

// layout for the legal pages (German, as required for a German business)
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen" lang="de">
      <Header links={siteNav} />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-4xl font-light text-white sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-400">Stand: {updated}</p>
        <div className="mt-12 space-y-10 leading-relaxed">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {children}
    </section>
  );
}

// open point that still has to be filled in before going live
export function Todo({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-yellow-300/90 px-1 text-navy">[{children}]</span>
  );
}

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-teal underline underline-offset-4 hover:text-teal-light"
    >
      {children}
    </a>
  );
}
