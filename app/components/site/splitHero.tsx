import type { ReactNode } from "react";
import { primaryButton, secondaryButton } from "~/components/site/buttons";

export type Fact = {
  label: string;
  value: string;
  // a small line under the value, e.g. "einmalig" or "pro Monat"
  caption?: string;
  // the tile links there, e.g. down to the prices
  href?: string;
};

// the hero of the area pages: text on the left, proof on the right (a client
// voice or the built sites), no mountains. Short on phones: the first screen
// shows what, price, who and the buttons. The h1 keeps the words of the page
// (search terms). Two looks:
// - websites (byline set): facts as price tiles, then the photo next to the
//   buttons with name and role below them
// - cloud (no byline): the photo next to the facts in 2 × 2, then the button
export default function SplitHero({
  byline,
  title,
  highlight,
  text,
  facts,
  factsNote,
  cta,
  second,
  media,
}: {
  byline?: { role: string; name: string };
  title: string;
  highlight: string;
  text: ReactNode;
  facts?: Fact[];
  factsNote?: string;
  // short: the button text next to the photo (websites), so it stays on one line
  cta: { label: string; short?: string; href: string };
  // short: the text on phones, label the one from sm up (e.g. the number)
  second?: { label: string; short?: string; href: string };
  // right column from lg up
  media?: ReactNode;
}) {
  const websites = Boolean(byline);
  const label =
    "text-[11px] font-semibold uppercase tracking-[0.08em] sm:text-xs sm:tracking-[0.12em]";

  const buttons = (
    <div
      id="hero-cta"
      className={`flex flex-col gap-3 sm:flex-row ${websites ? "" : "mt-8 sm:flex-wrap"}`}
    >
      <a
        href={cta.href}
        {...(cta.href.startsWith("http") && {
          target: "_blank",
          rel: "noreferrer",
        })}
        className={`text-center ${primaryButton}`}
      >
        {websites ? (cta.short ?? cta.label) : cta.label}
      </a>
      {second && (
        <a href={second.href} className={`text-center ${secondaryButton}`}>
          {second.short ? (
            <>
              <span className="sm:hidden">{second.short}</span>
              <span className="hidden whitespace-nowrap sm:inline">
                {second.label}
              </span>
            </>
          ) : (
            second.label
          )}
        </a>
      )}
    </div>
  );

  return (
    <section className="border-b border-white/10">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-12 pt-8 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <h1 className="text-4xl font-light leading-tight text-white sm:text-5xl sm:leading-[1.1]">
            {title}
            <br />
            <span className="font-semibold text-teal">{highlight}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">{text}</p>

          {facts && websites && (
            // the prices as tiles, each one a link down to the packages (↓) or
            // to the offer page (→)
            <div
              className={`mt-7 grid gap-3 ${facts.length > 2 ? "grid-cols-2 sm:max-w-xl sm:grid-cols-3" : "grid-cols-2 sm:max-w-md"}`}
            >
              {facts.map((fact) => (
                <a
                  key={fact.label}
                  href={fact.href}
                  className="group block rounded-xl border border-white/10 bg-navy-light px-4 py-3 transition hover:-translate-y-0.5 hover:border-teal/50"
                >
                  <span className={`block leading-tight text-teal ${label}`}>
                    {fact.label}
                  </span>
                  <span className="mt-1 flex items-baseline justify-between gap-2 text-xl font-bold text-white">
                    {fact.value}
                    <span
                      aria-hidden="true"
                      className={`text-base text-teal transition-transform ${fact.href?.startsWith("#") ? "group-hover:translate-y-0.5" : "group-hover:translate-x-0.5"}`}
                    >
                      {fact.href?.startsWith("#") ? "↓" : "→"}
                    </span>
                  </span>
                  {fact.caption && (
                    <span className="block text-xs text-slate-400">
                      {fact.caption}
                    </span>
                  )}
                </a>
              ))}
            </div>
          )}

          {facts && !websites && (
            // cloud: the photo next to the facts in 2 × 2, plain (the quote is
            // the only box) with grey labels. On phones values with " · " go
            // on separate lines
            <div className="mt-6 flex items-center gap-4 min-[360px]:gap-6">
              <img
                src="/hannes-portrait.jpg"
                width={960}
                height={960}
                alt="Hannes Schaletzky"
                className="h-24 w-24 shrink-0 rounded-full object-cover ring-2 ring-teal/50 ring-offset-2 ring-offset-navy sm:h-28 sm:w-28"
              />
              <dl className="grid grid-cols-[auto_auto] gap-x-4 gap-y-3 min-[360px]:gap-x-7 sm:gap-x-12 sm:gap-y-4">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className={`text-slate-400 ${label}`}>{fact.label}</dt>
                    <dd className="mt-0.5 whitespace-nowrap text-base font-bold leading-snug text-white sm:text-xl">
                      {fact.value.split(" · ").map((part, i) => (
                        <span key={part}>
                          {i > 0 && (
                            <span className="hidden sm:inline"> · </span>
                          )}
                          <span className="block sm:inline">{part}</span>
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          {factsNote && (
            <p className="mt-2 text-sm text-slate-400">{factsNote}</p>
          )}

          {byline ? (
            // websites: the photo as tall as the buttons, name and role below
            // them
            <div className="mt-8 flex items-center gap-3 min-[380px]:gap-4 sm:gap-6">
              <img
                src="/hannes-portrait.jpg"
                width={960}
                height={960}
                alt="Hannes Schaletzky"
                className="h-[4.5rem] w-[4.5rem] shrink-0 rounded-full object-cover min-[340px]:h-[5.75rem] min-[340px]:w-[5.75rem] min-[380px]:h-[6.75rem] min-[380px]:w-[6.75rem] sm:h-24 sm:w-24"
              />
              <div className="min-w-0 flex-1 sm:flex-none">
                {buttons}
                <p className="mt-3.5 pl-3 text-sm leading-tight sm:text-base">
                  <span className="block font-semibold text-white">
                    {byline.name}
                  </span>
                  <span className="block text-slate-400">{byline.role}</span>
                </p>
              </div>
            </div>
          ) : (
            buttons
          )}
        </div>
        {media && <div className="hidden lg:block">{media}</div>}
      </div>
    </section>
  );
}
