import type { MetaFunction } from "react-router";
import AboutMeSection from "~/components/site/aboutMeSection";
import ContactBox from "~/components/site/contactBox";
import FaqSection from "~/components/site/faqSection";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import OfferTiles from "~/components/site/offerTiles";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import SectionHeading from "~/components/site/sectionHeading";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

// overview of the website offers: one tile each, the details live on their own pages
const text = {
  de: {
    title:
      "Websites für kleine Unternehmen & Vereine in Berlin | Hannes Schaletzky",
    description:
      "Sichere Websites für kleine Unternehmen, Vereine und Selbstständige: Check-up für 250 €, neue Websites ab 599 €, Hosting ab 25 € im Monat. Persönlich und fair.",
    hero: {
      title: "Ihre Website,",
      highlight: "einfach gut betreut.",
      cta: "Kontakt aufnehmen",
      text: "Persönlich & fair. Vor Ort in Berlin oder remote. Für Selbstständige, kleine Unternehmen und Vereine.",
    },
    offersEyebrow: "Angebote & Preise",
    offersHeading: "Klare Preise, keine Überraschungen.",
    vat: "Alle Preise inkl. 19 % MwSt.",
    security: {
      eyebrow: "Website-Sicherheit",
      heading: "Ist Ihre Website sicher?",
      text: "Veraltetes WordPress, alte PHP-Versionen, keine Backups: Viele kleine Websites sind angreifbar, ohne dass es jemand merkt. Ich finde heraus, wo Ihre Seite steht, und sorge dafür, dass sie sicher bleibt.",
      steps: [
        { title: "Prüfen", text: "Check-up mit klarem Bericht" },
        { title: "Beheben", text: "Die dringenden Punkte zuerst" },
        { title: "Absichern", text: "Updates, Backups und Überwachung" },
      ],
      contact: "Kontakt aufnehmen",
      details: "So gehe ich vor",
    },
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Brauche ich technisches Wissen?",
        answer:
          "Nein. Ich kümmere mich um die Technik und erkläre Ihnen alles so, dass Sie es verstehen.",
      },
      {
        question: "Können Sie meine bestehende Website übernehmen?",
        answer:
          "Ja, und der Umzug zu mir ist kostenlos. Vorher sage ich Ihnen, ob ich sie so weiter betreuen kann oder ob ein Neuaufbau sinnvoller ist.",
      },
      {
        question: "Arbeiten Sie auch vor Ort?",
        answer:
          "Ja, gern. Ich komme vorbei oder wir arbeiten remote, ganz wie es Ihnen lieber ist.",
      },
    ],
  },
  en: {
    title: "Websites for Small Businesses & Clubs | Hannes Schaletzky",
    description:
      "Secure websites for small businesses, clubs and self-employed people: check-up for 250 €, new websites from 599 €, hosting from 25 € a month. Personal and fair.",
    hero: {
      title: "Your website,",
      highlight: "simply taken care of.",
      cta: "Get in touch",
      text: "Personal & fair. On-site in Berlin or remote. For self-employed people, small businesses and clubs.",
    },
    offersEyebrow: "Offers & prices",
    offersHeading: "Clear prices, no surprises.",
    vat: "All prices incl. 19 % VAT.",
    security: {
      eyebrow: "Website security",
      heading: "Is your website secure?",
      text: "Outdated WordPress, old PHP versions, no backups: many small websites are open to attacks without anyone noticing. I find out where your site stands and make sure it stays secure.",
      steps: [
        { title: "Check", text: "Check-up with a clear report" },
        { title: "Fix", text: "The urgent points first" },
        { title: "Secure", text: "Updates, backups and monitoring" },
      ],
      contact: "Get in touch",
      details: "How I go about it",
    },
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "Do I need any technical knowledge?",
        answer:
          "No. I take care of the technology and explain everything in a way that makes sense to you.",
      },
      {
        question: "Can you take over my existing website?",
        answer:
          "Yes, and moving it to me is free. Beforehand I tell you whether I can maintain it as it is or whether a rebuild makes more sense.",
      },
      {
        question: "Do you work on-site?",
        answer:
          "Yes, happily. I can come by or we work remotely, whatever you prefer.",
      },
    ],
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

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <PageHero
          title={t.hero.title}
          highlight={t.hero.highlight}
          cta={{ label: t.hero.cta, href: localize("/contact", lang) }}
        >
          {t.hero.text}
        </PageHero>

        {/* security first: the main selling point, details on its own page */}
        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="grid items-center gap-10 rounded-2xl border border-teal/40 p-6 sm:p-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                  {t.security.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {t.security.heading}
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  {t.security.text}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={localize("/contact", lang)}
                    className="rounded-full bg-teal px-6 py-3 font-semibold text-navy transition hover:bg-teal-light"
                  >
                    {t.security.contact}
                  </a>
                  <a
                    href={localize("/website-sicherheit", lang)}
                    className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-teal hover:text-teal"
                  >
                    {t.security.details}
                  </a>
                </div>
              </div>
              <ol className="space-y-4">
                {t.security.steps.map((step, i) => (
                  <li
                    key={step.title}
                    className="flex items-center gap-5 rounded-xl border border-white/10 px-5 py-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/15 font-semibold text-teal">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* offers: equal tiles, each one links to its own page */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.offersEyebrow}>
              {t.offersHeading}
            </SectionHeading>
            <OfferTiles />
            {/* final prices incl. VAT, required when consumers may order (PAngV) */}
            <p className="mt-6 text-sm text-slate-400">{t.vat}</p>
          </div>
        </section>

        <AboutMeSection className="bg-navy-lighter" />

        <FaqSection
          heading={t.faqHeading}
          faqs={t.faqs}
          className="bg-navy-light"
        />

        {/* the faq has its own background, so the box needs its own gap */}
        <div className="pt-16 sm:pt-24">
          <ContactBox />
        </div>
      </main>

      <Footer />
    </div>
  );
}
