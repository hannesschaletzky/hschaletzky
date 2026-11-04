import SectionHeading from "~/components/site/sectionHeading";

type Package = {
  name: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: { label: string; href: string };
};

// prices of an offer page: one package as a wide card, several side by side
export default function PricingSection({
  eyebrow,
  heading,
  packages,
  notes,
  featuresLabel,
}: {
  eyebrow: string;
  heading: string;
  packages: Package[];
  // small print below the cards, e.g. VAT or hourly rates
  notes?: string[];
  featuresLabel: string;
}) {
  const single = packages.length === 1;
  return (
    <section id="preis" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading eyebrow={eyebrow}>{heading}</SectionHeading>
        <div className={single ? "" : "grid gap-6 md:grid-cols-2"}>
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border border-white/10 bg-navy-light p-6 sm:p-8 ${
                single ? "grid gap-8 md:grid-cols-[2fr_3fr] md:gap-12" : ""
              }`}
            >
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                <p className="mt-4 text-5xl font-bold text-white">
                  {pkg.price}
                </p>
                <p className="mt-2 text-sm text-slate-400">{pkg.priceNote}</p>
                <a
                  href={pkg.cta.href}
                  // external links (the booking page) open in a new tab
                  {...(pkg.cta.href.startsWith("http") && {
                    target: "_blank",
                    rel: "noreferrer",
                  })}
                  className="mt-8 inline-block rounded-full bg-teal px-6 py-3 font-semibold text-navy transition hover:bg-teal-light"
                >
                  {pkg.cta.label}
                </a>
              </div>
              <div className={single ? "" : "mt-8"}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                  {featuresLabel}
                </p>
                <ul className="mt-4 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3 leading-relaxed">
                      <span aria-hidden="true" className="text-teal">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {notes && (
          <div className="mt-6 space-y-1 text-sm text-slate-400">
            {notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
