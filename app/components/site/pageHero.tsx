import type { ReactNode } from "react";
import { primaryButton } from "~/components/site/buttons";
import Mountains from "~/components/site/mountains";

// the hero of about, stack and side projects: smaller than the one on the
// start page, with a low strip of mountains, so the content below starts early
// (on phones right after the button, without a full screen of hero)
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
      // from md up at least one screen high (minus the 69 px header), the text
      // centred above the mountains; on phones only as high as its content.
      // The bottom padding keeps room for the mountains (a bit more than their
      // height, so the peak never touches the buttons); -mb-px overlaps the next
      // section so no dark hairline shows at fractional pixel ratios
      className="relative -mb-px flex flex-col justify-center overflow-hidden pb-32 sm:pb-56 md:min-h-[calc(100svh-69px)]"
    >
      <Mountains compact />
      <div className="relative mx-auto max-w-4xl px-4 pt-10 text-center sm:px-6 sm:pt-20">
        <h1 className="text-4xl font-light leading-tight text-white sm:text-6xl sm:leading-[1.15]">
          {title}
          <br />
          <span className="font-semibold text-teal">{highlight}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg">{children}</p>
        {/* on phones the button is full width, easy to hit */}
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
        </div>
      </div>
    </section>
  );
}
