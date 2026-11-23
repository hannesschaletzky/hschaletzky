import { useContactLinks } from "~/components/site/contactTopic";
import SectionHeading from "~/components/site/sectionHeading";
import { localize, useLang } from "~/i18n";
import ArrowLink from "~/components/site/arrowLink";
import { primaryButton } from "~/components/site/buttons";

type Package = {
  name: string;
  // who the package is for, one short line under the name
  description?: string;
  // without a price (fixed price only after a call) the card shows no price rows
  price?: string;
  priceNote?: string;
  features: string[];
  // what a bigger package adds on top, marked with a plus instead of a tick
  extras?: string[];
  cta: { label: string; href: string };
};

function Cta({ cta }: { cta: Package["cta"] }) {
  const lang = useLang();
  // internal links get the language prefix, unless the text already has it
  const local = cta.href.startsWith("/en")
    ? cta.href
    : localize(cta.href, lang);
  // the way to /contact carries the offer of this page as topic
  const links = useContactLinks();
  const href = local === localize("/contact", lang) ? links.contact : local;
  return (
    <a
      href={href}
      // external links (the booking page) open in a new tab
      {...(href.startsWith("http") && {
        target: "_blank",
        rel: "noreferrer",
      })}
      className={`inline-block ${primaryButton}`}
    >
      {cta.label}
    </a>
  );
}

function Features({
  label,
  items,
  extras = [],
}: {
  label: string;
  items: string[];
  extras?: string[];
}) {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
        {label}
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((feature) => (
          <li key={feature} className="flex gap-3 text-left leading-relaxed">
            <span aria-hidden="true" className="w-3 shrink-0 text-teal">
              ✓
            </span>
            {feature}
          </li>
        ))}
        {extras.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-left leading-relaxed text-white"
          >
            <span
              aria-hidden="true"
              className="w-3 shrink-0 font-bold text-teal"
            >
              +
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </>
  );
}

// prices of an offer page: one package as a wide card, several side by side.
// Side by side, the cards share their rows (subgrid), so name, price, button and
// list start at the same height in every card, however long the description is
export default function PricingSection({
  eyebrow,
  heading,
  packages,
  notes,
  more,
  featuresLabel,
}: {
  eyebrow: string;
  heading: string;
  packages: Package[];
  // small print below the cards, e.g. VAT or hourly rates
  notes?: string[];
  // a link below the card, e.g. back to all services of the area
  more?: { label: string; href: string };
  featuresLabel: string;
}) {
  const single = packages.length === 1;
  const three = packages.length === 3;
  return (
    <section id="preis" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading eyebrow={eyebrow}>{heading}</SectionHeading>
        {single ? (
          packages.map((pkg) => (
            <div
              key={pkg.name}
              className="grid gap-8 rounded-2xl border border-white/10 bg-navy-light p-6 sm:p-8 md:grid-cols-[2fr_3fr] md:gap-12"
            >
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                {pkg.description && (
                  <p className="mt-2 leading-relaxed text-slate-400">
                    {pkg.description}
                  </p>
                )}
                {pkg.price && (
                  <>
                    <p className="mt-4 text-5xl font-bold text-white">
                      {pkg.price}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      {pkg.priceNote}
                    </p>
                  </>
                )}
                <div className="mt-8">
                  <Cta cta={pkg.cta} />
                </div>
              </div>
              <div>
                <Features
                  label={featuresLabel}
                  items={pkg.features}
                  extras={pkg.extras}
                />
              </div>
            </div>
          ))
        ) : (
          <div
            className={`grid gap-6 ${
              three ? "lg:grid-cols-3 lg:gap-y-0" : "md:grid-cols-2 md:gap-y-0"
            }`}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl border border-white/10 bg-navy-light p-6 text-center sm:p-8 ${
                  three
                    ? "lg:row-span-4 lg:grid lg:grid-rows-subgrid"
                    : "md:row-span-4 md:grid md:grid-rows-subgrid"
                }`}
              >
                <div>
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  {pkg.description && (
                    <p className="mx-auto mt-2 max-w-xs leading-relaxed text-slate-400">
                      {pkg.description}
                    </p>
                  )}
                </div>
                <div className="mt-6">
                  <p className="text-5xl font-bold text-white">{pkg.price}</p>
                  <p className="mt-2 text-sm text-slate-400">{pkg.priceNote}</p>
                </div>
                <div className="mt-8">
                  <Cta cta={pkg.cta} />
                </div>
                {/* the list stays left-aligned for reading, as a centred block */}
                <div className="mx-auto mt-10 w-full max-w-xs border-t border-white/10 pt-8">
                  <Features
                    label={featuresLabel}
                    items={pkg.features}
                    extras={pkg.extras}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        {notes && (
          <div
            className={`mt-6 space-y-1 text-sm text-slate-400 ${single ? "" : "text-center"}`}
          >
            {notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        )}
        {more && <ArrowLink href={more.href}>{more.label}</ArrowLink>}
      </div>
    </section>
  );
}
