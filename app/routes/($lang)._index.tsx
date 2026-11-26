import type { MetaFunction } from "react-router";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import Mountains from "~/components/site/mountains";
import Offers from "~/components/site/offers";
import { businessJsonLd, pageMeta } from "~/components/site/pageMeta";
import Testimonials from "~/components/site/testimonials";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";
import { primaryButton } from "~/components/site/buttons";

// index: hero with the mountains, testimonials, the two offers and contact

export const loader = langLoader;

const text = {
  de: {
    title: "Hannes Schaletzky | Cloud, Integrationen & Websites",
    description:
      "Software Engineer aus Berlin, im DACH-Raum remote oder vor Ort: Cloud- und Integrationslösungen mit Node.js/TypeScript und AWS, dazu Websites und Hosting.",
    heading: "Cloud, Integrationen &\u00a0Websites,",
    highlight: "die zuverlässig laufen.",
    intro:
      "Ich bin Hannes, freiberuflicher Software Engineer. Ich begleite Sie vom ersten Konzept bis zum laufenden Betrieb.",
    contact: "Kontakt aufnehmen",
    offers: "Was ich mache",
  },
  en: {
    title: "Hannes Schaletzky | Freelance Software Engineer",
    description:
      "Software engineer from Berlin, remote or on-site in the DACH region: cloud and integration solutions with Node.js/TypeScript and AWS, plus websites.",
    heading: "Cloud, integrations &\u00a0websites",
    highlight: "that just keep running.",
    intro:
      "I'm Hannes, a freelance software engineer. I work with you from the first concept to day-to-day operation.",
    contact: "Get in touch",
    offers: "See what I do",
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return [
    ...pageMeta({
      title: text[lang].title,
      description: text[lang].description,
      path: "/",
      lang,
    }),
    businessJsonLd(lang),
  ];
};

export default function Index() {
  const lang = useLang();
  const t = text[lang];
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* hero – at least one screen high (minus the header), text centred above
            the mountains; the bottom padding keeps room for the
            mountains (slightly taller than them, so the peak never touches the
            buttons); -mb-px overlaps the next section so no dark hairline shows */}
        <section className="relative -mb-px flex min-h-[calc(100svh-77px)] flex-col md:min-h-[calc(100svh-69px)] justify-center overflow-hidden pb-82 sm:pb-[max(26.5rem,calc(100vw/5.5+2rem))]">
          <Mountains heightClass="h-76 sm:h-100" />
          <div className="relative mx-auto max-w-4xl px-4 pt-14 text-center sm:px-6 sm:pt-20">
            {/* who – what – next step, nothing else */}
            <img
              src="/hannes-portrait.jpg"
              width={960}
              height={960}
              alt="Hannes Schaletzky"
              className="mx-auto mb-10 h-28 w-28 rounded-full object-cover ring-2 ring-teal/50 ring-offset-4 ring-offset-navy sm:h-36 sm:w-36"
            />
            <h1 className="text-4xl font-light leading-tight text-white sm:text-6xl sm:leading-none">
              {t.heading}
              <br />
              <span className="font-semibold text-teal">{t.highlight}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg">{t.intro}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={localize("/contact", lang)} className={primaryButton}>
                {t.contact}
              </a>
              <a
                href="#offers"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-teal hover:text-teal-light"
              >
                {t.offers}
              </a>
            </div>
          </div>
        </section>

        <Testimonials className="bg-navy-lighter" centered />
        <Offers />

        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
