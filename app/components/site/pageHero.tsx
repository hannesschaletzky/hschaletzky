import type { ReactNode } from "react";
import Mountains from "~/components/site/mountains";

// smaller version of the E2 hero for subpages
export default function PageHero({
  eyebrow,
  title,
  highlight,
  children,
  cta,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  children: ReactNode;
  cta: { label: string; href: string };
}) {
  return (
    <section
      // -mb-px: overlaps the next section so no dark hairline shows at fractional pixel ratios
      className="relative -mb-px h-[42rem] overflow-hidden sm:h-[44rem]">
      <Mountains heightClass="h-[28%] sm:h-[34%]" />
      <div className="relative mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6 sm:pt-24">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-light leading-tight text-white sm:text-6xl">
          {title}
          <br />
          <span className="font-semibold text-teal">{highlight}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg">{children}</p>
        <a
          href={cta.href}
          className="mt-10 inline-block rounded-full bg-teal px-6 py-3 font-semibold text-navy transition hover:bg-teal-light"
        >
          {cta.label}
        </a>
      </div>
    </section>
  );
}
