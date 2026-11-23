import type { ReactNode } from "react";
import Mountains from "~/components/site/mountains";
import { primaryButton } from "~/components/site/buttons";

// smaller version of the index hero for subpages
export default function PageHero({
  title,
  highlight,
  children,
  cta,
  note,
  phone,
}: {
  title: string;
  highlight: string;
  children: ReactNode;
  cta: { label: string; href: string };
  // a short line under the text, e.g. price and payment, visible without scrolling
  note?: string;
  // a second, quieter way next to the button: the phone number to tap on mobile
  phone?: { label: string; href: string };
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
        <h1 className="text-4xl font-light leading-tight text-white sm:text-6xl sm:leading-[1.15]">
          {title}
          <br />
          <span className="font-semibold text-teal">{highlight}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg">{children}</p>
        {note && (
          <p className="mx-auto mt-4 max-w-xl text-balance font-semibold text-white">
            {note}
          </p>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <a
            href={cta.href}
            // external links (the booking page) open in a new tab
            {...(cta.href.startsWith("http") && {
              target: "_blank",
              rel: "noreferrer",
            })}
            className={`inline-block ${primaryButton}`}
          >
            {cta.label}
          </a>
          {phone && (
            <a
              href={phone.href}
              className="font-semibold text-white hover:text-teal-light"
            >
              {phone.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
