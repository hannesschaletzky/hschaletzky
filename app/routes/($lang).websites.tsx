import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { useLoaderData } from "react-router";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import GuideSection from "~/components/site/guideList";
import Header from "~/components/site/header";
import OfferTiles from "~/components/site/offerTiles";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import SectionHeading from "~/components/site/sectionHeading";
import Testimonials from "~/components/site/testimonials";
import { getByline, phone } from "~/components/site/siteNav";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";
import { teasers } from "~/ratgeber.server";

// the three newest guide articles, German only (the guide has no English version)
export function loader(args: LoaderFunctionArgs) {
  langLoader(args);
  if (args.params.lang) return { articles: [] };
  return {
    articles: teasers().slice(0, 3),
  };
}

// overview of the website offers: one tile each, the details live on their own pages
const text = {
  de: {
    title: "Websites für Betriebe & Vereine in Berlin | Hannes Schaletzky",
    description:
      "Sichere Websites für kleine Unternehmen, Vereine und Selbstständige: Check-up für 250 €, neue Websites ab 599 €, Hosting ab 25 € im Monat.",
    hero: {
      title: "Rund um Ihre Website,",
      highlight: "ein Ansprechpartner.",
      cta: "Kontakt aufnehmen",
      text: "Vor Ort in Berlin oder per Video. Für Selbstständige, kleine Unternehmen und Vereine.",
    },
    offersEyebrow: "Angebote & Preise",
    offersHeading: "Jedes Angebot mit Preis.",
    vat: "Alle Preise inkl. 19 % MwSt.",
    emergency: {
      label: "Notfall?",
      text: "Website gehackt, plötzlich offline oder der Browser warnt? Rufen Sie mich an:",
    },
  },
  en: {
    title: "Websites for Small Businesses & Clubs | Hannes Schaletzky",
    description:
      "Secure websites for small businesses, clubs and self-employed people: check-up for 250 €, new websites from 599 €, hosting from 25 € a month.",
    hero: {
      title: "Everything around your website,",
      highlight: "one person to talk to.",
      cta: "Get in touch",
      text: "On-site in Berlin or by video. For self-employed people, small businesses and clubs.",
    },
    offersEyebrow: "Offers & prices",
    offersHeading: "Every offer with its price.",
    vat: "All prices incl. 19 % VAT.",
    emergency: {
      label: "Emergency?",
      text: "Website hacked, suddenly offline or the browser shows a warning? Call me:",
    },
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/websites",
    lang,
    image: "websites",
  });
};

export default function Websites() {
  const lang = useLang();
  const t = text[lang];
  const { articles } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <PageHero
          title={t.hero.title}
          highlight={t.hero.highlight}
          byline={getByline("websites", lang)}
          cta={{ label: t.hero.cta, href: localize("/contact", lang) }}
        >
          {t.hero.text}
        </PageHero>

        <Testimonials group="websites" className="bg-navy-lighter" centered />

        {/* offers: equal tiles, each one links to its own page */}
        <section id="angebote" className="scroll-mt-20">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.offersEyebrow}>
              {t.offersHeading}
            </SectionHeading>
            <OfferTiles />
            {/* no tile for emergencies: in a crisis people call, they don't compare */}
            <p className="mt-6 border-l-2 border-teal py-1 pl-4 leading-relaxed">
              <span className="font-semibold text-white">
                {t.emergency.label}
              </span>{" "}
              {t.emergency.text}{" "}
              <a
                href={phone.href}
                className="whitespace-nowrap font-semibold text-teal hover:text-teal-light"
              >
                {phone.label}
              </a>
            </p>
            {/* final prices incl. VAT, required when consumers may order (PAngV) */}
            <p className="mt-6 text-sm text-slate-400">{t.vat}</p>
          </div>
        </section>

        {/* the guide belongs to the website offers, so it lives here instead of the header */}
        <GuideSection articles={articles} className="bg-navy-light" />

        <ContactBox
          above={articles.length > 0 ? "--color-navy-light" : undefined}
        />
      </main>

      <Footer />
    </div>
  );
}
