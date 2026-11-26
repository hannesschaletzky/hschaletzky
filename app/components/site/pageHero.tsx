import type { ReactNode } from "react";
import { primaryButton, secondaryButton } from "~/components/site/buttons";
import Mountains from "~/components/site/mountains";

// the hero of the subpages: smaller than the one on the start page, with a low
// strip of mountains, so the content below starts early (on phones right after
// the buttons, without a full screen of hero)
export default function PageHero({
  title,
  highlight,
  children,
  cta,
  note,
  phone,
  byline,
}: {
  title: string;
  highlight: string;
  children: ReactNode;
  cta: { label: string; href: string };
  // a short line under the text, e.g. price and payment, visible without scrolling
  note?: string;
  // a second button next to the main one: call directly (tel:), handy on phones.
  // short is the button text on phones, label the one with the number from sm up
  phone?: { label: string; short: string; href: string };
  // who is behind the page, with the small photo: one line above the heading,
  // e.g. "Ihr Webdesigner in Berlin: Hannes Schaletzky"
  byline?: string;
}) {
  return (
    <section
      // from md up at least one screen high (minus the 69 px header), the text
      // centred above the mountains; on phones only as high as its content.
      // The bottom padding keeps room for the mountains (a bit more than their
      // height, so the peak never touches the buttons); -mb-px overlaps the next
      // section so no dark hairline shows at fractional pixel ratios
      className="relative -mb-px flex flex-col justify-center overflow-hidden pb-32 sm:pb-56 md:min-h-[calc(100svh-69px)]"
    >
      <Mountains compact />
      <div className="relative mx-auto max-w-4xl px-4 pt-10 text-center sm:px-6 sm:pt-20">
        {byline && (
          <p className="mb-6 inline-flex items-center gap-3 text-left text-sm font-semibold text-slate-200 sm:mb-8 sm:text-base">
            {/* the same portrait as on the start page */}
            <img
              src="/hannes-portrait.jpg"
              width={960}
              height={960}
              alt=""
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-teal/50 ring-offset-2 ring-offset-navy sm:h-12 sm:w-12"
            />
            {byline}
          </p>
        )}
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
        {/* on phones the buttons are stacked at full width, easy to hit */}
        <div className="mx-auto mt-8 flex max-w-xs flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <a
            href={cta.href}
            // external links (the booking page) open in a new tab
            {...(cta.href.startsWith("http") && {
              target: "_blank",
              rel: "noreferrer",
            })}
            className={primaryButton}
          >
            {cta.label}
          </a>
          {phone && (
            <a href={phone.href} className={secondaryButton}>
              <span className="sm:hidden">{phone.short}</span>
              <span className="hidden sm:inline">{phone.label}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
