import SectionHeading from "~/components/site/sectionHeading";

// slim version of the two service cards
const offers = [
  {
    eyebrow: "For companies",
    title: "Cloud & Integrations",
    items: [
      "Architecture & cloud review – 1,200 € plus VAT",
      "System integration & data flows",
      "AWS architecture & migrations",
      "CI/CD, testing & production operation",
    ],
    href: "/cloud",
    cta: "More about cloud & integrations",
  },
  {
    eyebrow: "For small businesses & clubs",
    title: "Website · Hosting · Maintenance",
    items: [
      "Website check-up – 119 € incl. VAT",
      "Website creation – from 699 € incl. VAT",
      "Hosting, updates & AI automation",
    ],
    href: "/websites",
    cta: "More about websites",
  },
];

export default function Offers() {
  return (
    <section id="offers" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading eyebrow="What I do">
          From cloud platforms to club websites.
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-navy-light p-8 transition hover:border-teal/40"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                {offer.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white">
                {offer.title}
              </h3>
              <ul className="mt-6 flex-1 space-y-2">
                {offer.items.map((item) => (
                  <li key={item} className="flex gap-3 text-white">
                    <span className="text-teal">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={offer.href}
                className="mt-8 font-semibold text-teal hover:text-teal-light"
              >
                {offer.cta} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
