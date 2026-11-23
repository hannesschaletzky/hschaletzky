import type { MetaFunction } from "react-router";
import OfferPage from "~/components/site/offerPage";
import Section from "~/components/site/section";
import ClimbSteps from "~/components/site/climbSteps";
import FeatureHeadlines from "~/components/site/featureHeadlines";
import { pageMeta } from "~/components/site/pageMeta";
import { calUrl } from "~/components/site/siteNav";
import Testimonials from "~/components/site/testimonials";
import PricingSection from "~/components/site/pricingSection";
import { langFromParams, localize, useLang } from "~/i18n";
import { offerLoader } from "~/ratgeber.server";

export const loader = offerLoader("/websites/neue-website");

// landing page for new websites (also the target of the website ads)
const text = {
  de: {
    title: "Website erstellen lassen in Berlin ab 599 € | Hannes Schaletzky",
    description:
      "Moderne Website aus Berlin für kleine Unternehmen, Selbstständige und Vereine: eine Seite 599 €, bis 5 Seiten 990 €. Meist in ein bis zwei Wochen fertig, bezahlt wird erst, wenn sie online ist.",
    hero: {
      title: "Ihre neue Website,",
      highlight: "modern und persönlich.",
      cta: "Kostenloses Erstgespräch buchen",
      ctaHref: calUrl,
      text: "Webdesign aus Berlin für Selbstständige, kleine Betriebe und Vereine. Ab 599 €. Sie zahlen erst, wenn die Website online ist.",
    },
    examplesEyebrow: "Beispiele",
    examplesHeading: "Für Praxen, Vereine und Handwerk.",
    examplesNote:
      "Alle drei sind Beispielprojekte: Praxis, Verein und Tischlerei gibt es nicht, die Websites habe ich aber selbst gestaltet und gebaut.",
    examples: [
      { name: "Physiotherapie-Praxis", slug: "physio-musterfrau" },
      { name: "Sportverein", slug: "sv-musterstadt" },
      { name: "Tischlerei", slug: "tischlerei-mustermann" },
    ],
    stepsEyebrow: "So läuft es ab",
    stepsHeading: "In drei Schritten zu Ihrer Website.",
    steps: [
      {
        title: "Kennenlernen",
        text: "Sie erzählen mir in einem kostenlosen Gespräch, was Sie vorhaben. Danach wissen Sie, welches Paket passt und was es kostet.",
      },
      {
        title: "Entwurf & Feinschliff",
        text: "Meist nach wenigen Tagen sehen Sie einen ersten Entwurf. Sie sagen mir, was Ihnen gefällt, und in zwei Korrekturrunden passen wir ihn an.",
      },
      {
        title: "Online & betreut",
        text: "Ihre Website geht online, und erst dann zahlen Sie. Danach bin ich weiter für Sie da.",
      },
    ],
    includedEyebrow: "Immer dabei",
    includedHeading: "Was jede Website mitbringt.",
    included: [
      {
        title: "Für jedes Gerät",
        text: "Ihre Website sieht auf Handy, Tablet und Computer gut aus.",
      },
      {
        title: "Schnell geladen",
        text: "Schlanke Technik, damit Ihre Besucher nicht warten müssen.",
      },
      {
        title: "Impressum & Datenschutz",
        text: "Erstellt mit anerkannten Werkzeugen, passend zu Ihrer Website. Die Angaben zu Ihrem Betrieb liefern Sie.",
      },
      {
        title: "Bei Google auffindbar",
        text: "Klare Seitentitel und Beschreibungen, damit Google Ihre Seiten richtig einordnet.",
      },
      {
        title: "Ein Ansprechpartner",
        text: "Sie sprechen immer direkt mit mir, von der ersten Idee bis nach dem Start.",
      },
      {
        title: "Zahlung zum Schluss",
        text: "Sie zahlen erst, wenn die Website online ist.",
      },
    ],
    pricingEyebrow: "Pakete & Preise",
    pricingHeading: "Zwei Pakete, feste Preise.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Einseitig",
        price: "599 €",
        priceNote: "einmalig, inkl. 19 % MwSt.",
        features: [
          "Eine Seite mit allem Wichtigen: Leistungen, Über uns, Kontakt",
          "Kontaktformular",
          "Dazu Impressum und Datenschutzerklärung",
          "Zwei Korrekturrunden",
          "Meist nach einer Woche fertig",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
      {
        name: "Mehrseitig",
        price: "990 €",
        priceNote: "einmalig, inkl. 19 % MwSt.",
        features: [
          "Bis zu 5 Seiten, zum Beispiel Leistungen, Team, Termine und Kontakt",
          "Kontaktformular",
          "Dazu Impressum und Datenschutzerklärung",
          "Zwei Korrekturrunden",
          "Meist nach etwa zwei Wochen fertig",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
    ],
    pricingNotes: [
      "Weitere Korrekturrunden, größere Websites, Shops oder weitere Sprachen nach Aufwand: 71,40 € pro Stunde (60 € netto).",
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Wie lange dauert eine neue Website?",
        answer:
          "Eine einseitige Website ist meist nach einer Woche fertig, eine mehrseitige Website nach etwa zwei Wochen. Wichtig ist nur, dass Texte und Bilder bereitliegen.",
      },
      {
        question: "Wer liefert Texte und Bilder?",
        answer:
          "Am besten Sie, denn Sie kennen Ihr Geschäft. Ich helfe gern beim Formulieren und suche bei Bedarf passende lizenzfreie Bilder.",
      },
      {
        question:
          "Ich habe noch kein Logo oder Corporate Design. Ist das ein Problem?",
        answer:
          "Nein. Auf Wunsch entwerfe ich Ihnen ein Logo und lege Farben und Schriften fest, die Sie auch für Flyer und Visitenkarten nutzen können. Gibt es schon Drucksachen oder ein Logo, übernehme ich den Stil, damit alles zusammenpasst. Arbeiten Sie mit einer Agentur, setze ich deren Vorgaben um.",
      },
      {
        question:
          "Können Sie auch eine Seite für ein einzelnes Angebot oder eine Aktion bauen?",
        answer:
          "Ja. Für eine Aktion, einen Kurs oder ein Angebot, das Sie auf Instagram, Facebook oder per Flyer bewerben, baue ich eine eigene Seite nur für dieses Angebot (Landingpage) mit Anmeldung oder Kontaktformular. Links zu Ihren Social-Media-Kanälen sind auf jeder Website dabei. Was das kostet, hängt vom Umfang ab. Den Preis nenne ich Ihnen vorher.",
      },
      {
        question: "Kann ich Inhalte selbst ändern?",
        answer:
          "Ja. Auf Wunsch richte ich Ihnen einen einfachen Zugang ein, mit dem Sie Texte und Bilder selbst pflegen können. Das rechne ich nach Aufwand ab. Sie können mir Änderungen aber auch einfach schicken.",
      },
      {
        question: "Welche laufenden Kosten kommen dazu?",
        answer:
          "Das hängt davon ab, wo Ihre Website läuft. Ich empfehle Hosting & Wartung bei mir ab 25 € im Monat, eine .de-Domain, also Ihre Adresse wie ihr-betrieb.de, ist dabei. Sie können die Website aber auch bei einem anderen Anbieter betreiben, dann übergebe ich sie Ihnen fertig eingerichtet.",
      },
      {
        question: "Wer ist für Impressum und Datenschutz verantwortlich?",
        answer:
          "Ich erstelle beide Texte mit anerkannten Werkzeugen, passend zu dem, was Ihre Website technisch macht. Die Angaben zu Ihrem Betrieb liefern Sie, und Sie prüfen die Texte vor dem Start. Eine Rechtsberatung ist das nicht.",
      },
      {
        question: "Wie läuft die Bezahlung?",
        answer:
          "Sie zahlen erst, wenn Ihre Website online ist. Hosting und Wartung rechne ich monatlich ab.",
      },
      {
        question: "Wem gehören die Website und die Domain?",
        answer:
          "Die Website gehört Ihnen, und die Domain läuft auf Ihren Namen. Bei Hosting & Wartung ist eine .de-Domain enthalten, ich verwalte sie technisch für Sie. Wenn Sie wechseln möchten, übergebe ich Ihnen alles.",
      },
    ],
  },
  en: {
    title: "Website Creation from 599 € | Hannes Schaletzky",
    description:
      "A modern website for small businesses, self-employed people and clubs: single page 599 €, up to 5 pages 990 €. Usually ready in one to two weeks, you only pay once it's online.",
    hero: {
      title: "Your new website,",
      highlight: "modern and personal.",
      cta: "Book a free intro call",
      ctaHref: calUrl,
      text: "Web design from Berlin for the self-employed, small businesses and clubs. From 599 €. You only pay once the website is online.",
    },
    examplesEyebrow: "Examples",
    examplesHeading: "For practices, clubs and trades.",
    examplesNote:
      "All three are sample projects: the practice, the club and the carpentry workshop don't exist, but I designed and built the websites myself.",
    examples: [
      { name: "Physiotherapy practice", slug: "physio-musterfrau" },
      { name: "Sports club", slug: "sv-musterstadt" },
      { name: "Carpentry", slug: "tischlerei-mustermann" },
    ],
    stepsEyebrow: "How it works",
    stepsHeading: "Three steps to your website.",
    steps: [
      {
        title: "Get to know each other",
        text: "You tell me in a free call what you have in mind. Afterwards you know which package fits and what it costs.",
      },
      {
        title: "Draft & polish",
        text: "Usually after a few days you see a first draft. You tell me what you like, and we adjust it in two rounds of changes.",
      },
      {
        title: "Online & cared for",
        text: "Your website goes live, and only then do you pay. After that I'm still there for you.",
      },
    ],
    includedEyebrow: "Always included",
    includedHeading: "What every website comes with.",
    included: [
      {
        title: "For every device",
        text: "Your website looks good on phones, tablets and computers.",
      },
      {
        title: "Loads fast",
        text: "Lean technology, so your visitors don't have to wait.",
      },
      {
        title: "Imprint & privacy policy",
        text: "Created with established tools to match your website. You provide the details about your business.",
      },
      {
        title: "Findable on Google",
        text: "Clear page titles and descriptions, so Google can place your pages correctly.",
      },
      {
        title: "One contact person",
        text: "You always talk to me directly, from the first idea to after the launch.",
      },
      {
        title: "Pay at the end",
        text: "You only pay once the website is online.",
      },
    ],
    pricingEyebrow: "Packages & prices",
    pricingHeading: "Two packages, fixed prices.",
    featuresLabel: "Included",
    packages: [
      {
        name: "Single page",
        price: "599 €",
        priceNote: "one-off, incl. 19 % VAT",
        features: [
          "One page with everything important: services, about, contact",
          "Contact form",
          "Plus imprint and privacy policy",
          "Two rounds of changes",
          "Usually ready after a week",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
      {
        name: "Multi-page",
        price: "990 €",
        priceNote: "one-off, incl. 19 % VAT",
        features: [
          "Up to 5 pages, for example services, team, dates and contact",
          "Contact form",
          "Plus imprint and privacy policy",
          "Two rounds of changes",
          "Usually ready after about two weeks",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
    ],
    pricingNotes: [
      "More rounds of changes, bigger sites, shops or more languages billed by effort: 71.40 € per hour (60 € net).",
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "How long does a new website take?",
        answer:
          "A single-page website is usually ready after a week, a multi-page website after about two weeks. All it needs is for the texts and images to be ready.",
      },
      {
        question: "Who provides texts and images?",
        answer:
          "Ideally you, because you know your business. I'm happy to help with the wording and can find suitable royalty-free images if needed.",
      },
      {
        question:
          "I don't have a logo or corporate design yet. Is that a problem?",
        answer:
          "No. If you like, I design a logo and choose colours and fonts that you can also use for flyers and business cards. If you already have printed material or a logo, I adopt its style so everything fits together. If you work with an agency, I implement their guidelines.",
      },
      {
        question: "Can you also build a page for a single offer or campaign?",
        answer:
          "Yes. For a campaign, a course or an offer you promote on Instagram, Facebook or with flyers, I build a dedicated landing page with a sign-up or contact form. Links to your social media channels are part of every website. The cost depends on the scope. I tell you the price beforehand.",
      },
      {
        question: "Can I change content myself?",
        answer:
          "Yes. If you like, I set up simple access so you can edit texts and images yourself. I bill that by effort. You can also just send me your changes.",
      },
      {
        question: "What running costs come on top?",
        answer:
          "That depends on where your website runs. I recommend hosting & maintenance with me from 25 € a month, a .de domain included. You can also run the website with another provider; in that case I hand it over to you fully set up.",
      },
      {
        question: "Who is responsible for the imprint and privacy policy?",
        answer:
          "I create both texts with established tools, matching what your website does technically. You provide the details about your business and review the texts before launch. This is not legal advice.",
      },
      {
        question: "How does payment work?",
        answer:
          "You only pay once your website is online. Hosting and maintenance are billed monthly.",
      },
      {
        question: "Who owns the website and the domain?",
        answer:
          "The website is yours, and the domain is registered in your name. Hosting & maintenance includes a .de domain, which I manage technically for you. If you ever want to switch, I hand everything over.",
      },
    ],
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/websites/neue-website",
    lang,
    image: "website-erstellen",
  });
};

export default function WebsiteErstellen() {
  const lang = useLang();
  const t = text[lang];

  return (
    <OfferPage
      area="websites"
      current="/websites/neue-website"
      hero={t.hero}
      faq={{ heading: t.faqHeading, faqs: t.faqs }}
    >
      {/* a real client voice right under the hero, for visitors from the ads */}
      <Testimonials
        group="websites"
        only="Lucas Thiel"
        short
        className="bg-navy-lighter"
        centered
      />

      {/* examples: screenshots of the demo sites */}
      <Section eyebrow={t.examplesEyebrow} heading={t.examplesHeading}>
        <div className="grid gap-6 md:grid-cols-3">
          {t.examples.map((example) => (
            <a
              key={example.slug}
              href={`https://${example.slug}.hschaletzky.com/`}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-white/10 transition hover:-translate-y-0.5 hover:border-teal/50"
            >
              <img
                src={`/beispiele/${example.slug}.jpg`}
                width={1440}
                height={900}
                loading="lazy"
                alt={example.name}
                className="aspect-[16/10] w-full object-cover object-top"
              />
              <div className="p-5">
                <h3 className="font-bold text-white">{example.name}</h3>
                <p className="mt-1 text-sm font-semibold text-teal group-hover:text-teal-light">
                  {example.slug}.hschaletzky.com{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-400">{t.examplesNote}</p>
      </Section>

      {/* included in every website */}
      <Section
        eyebrow={t.includedEyebrow}
        heading={t.includedHeading}
        className="bg-navy-lighter"
      >
        <FeatureHeadlines items={t.included} />
      </Section>

      {/* process */}
      <Section
        eyebrow={t.stepsEyebrow}
        heading={t.stepsHeading}
        className="bg-navy-light"
      >
        <ClimbSteps steps={t.steps} hillClass="fill-navy-lighter" />
      </Section>

      <PricingSection
        eyebrow={t.pricingEyebrow}
        heading={t.pricingHeading}
        packages={t.packages}
        notes={t.pricingNotes}
        featuresLabel={t.featuresLabel}
        more={{
          label:
            lang === "de"
              ? "Alle Website-Leistungen im Überblick"
              : "All website services at a glance",
          href: `${localize("/websites", lang)}#angebote`,
        }}
      />
    </OfferPage>
  );
}
