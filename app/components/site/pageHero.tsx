import type { ReactNode } from "react";
import Mountains from "~/components/site/mountains";

// smaller version of the index hero for subpages
export default function PageHero({
  title,
  highlight,
  children,
  cta,
}: {
  title: string;
  highlight: string;
  children: ReactNode;
  cta: { label: string; href: string };
}) {
  return (
    <section
      // at least one screen high (minus the header: 77 px on phones, 69 px from
      // md up), so the next section starts
      // below the fold; the text sits centred above the mountains, the bottom
      // padding keeps room for them
      // (slightly taller than them, so the peak never touches the button);
      // -mb-px overlaps the next section so no dark hairline shows at fractional
      // pixel ratios
      className="relative -mb-px flex min-h-[calc(100svh-77px)] flex-col md:min-h-[calc(100svh-69px)] justify-center overflow-hidden pb-56 sm:pb-[max(17rem,calc(100vw/5.5+2rem))]"
    >
      <Mountains heightClass="h-48 sm:h-60" />
      <div className="relative mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6 sm:pt-24">
        <h1 className="text-4xl font-light leading-tight text-white sm:text-6xl sm:leading-none">
          {title}
          <br />
          <span className="font-semibold text-teal">{highlight}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg">{children}</p>
        <a
          href={cta.href}
          // external links (the booking page) open in a new tab
          {...(cta.href.startsWith("http") && {
            target: "_blank",
            rel: "noreferrer",
          })}
          className="mt-10 inline-block rounded-full bg-teal px-6 py-3 font-semibold text-navy transition hover:bg-teal-light"
        >
          {cta.label}
        </a>
      </div>
    </section>
  );
}
