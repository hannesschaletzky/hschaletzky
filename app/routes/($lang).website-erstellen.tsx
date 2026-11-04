import type { MetaFunction } from "react-router";
import ClimbSteps from "~/components/site/climbSteps";
import ContactBox from "~/components/site/contactBox";
import FaqSection from "~/components/site/faqSection";
import FeatureList from "~/components/site/featureList";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import PricingSection from "~/components/site/pricingSection";
import SectionHeading from "~/components/site/sectionHeading";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

// landing page for new websites (also the target of the website ads)
const text = {
  de: {
    title: "Website erstellen lassen ab 599 € | Hannes Schaletzky",
    description:
      "Moderne Website für kleine Unternehmen, Selbstständige und Vereine: Onepager 599 €, bis 5 Seiten 990 €. Fertig in ein bis zwei Wochen, bezahlt wird erst, wenn sie online ist.",
    hero: {
      eyebrow: "Website-Erstellung",
      title: "Ihre neue Website,",
      highlight: "in ein bis zwei Wochen online.",
      cta: "Kontakt aufnehmen",
      text: "Modern, schnell und auf jedem Handy gut lesbar. Gestaltung und Technik übernehme ich, Sie kümmern sich nur um Ihre Inhalte.",
    },
    examplesEyebrow: "Beispiele",
    examplesHeading: "So kann Ihre Website aussehen.",
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
        text: "Nach wenigen Tagen sehen Sie einen ersten Entwurf. Sie sagen mir, was Ihnen gefällt, und wir passen an, bis alles stimmt.",
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
        text: "Die Pflichtangaben sind immer dabei und überall verlinkt.",
      },
      {
        title: "Bei Google auffindbar",
        text: "Saubere Titel, Beschreibungen und eine Sitemap, damit Google Ihre Seiten versteht.",
      },
      {
        title: "Ein Ansprechpartner",
        text: "Sie sprechen immer direkt mit mir, von der ersten Idee bis nach dem Start.",
      },
      {
        title: "Zahlung zum Schluss",
        text: "Sie zahlen erst, wenn die Website online ist und Ihnen gefällt.",
      },
    ],
    pricingEyebrow: "Pakete & Preise",
    pricingHeading: "Zwei Pakete, feste Preise.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Onepager",
        price: "599 €",
        priceNote: "einmalig, inkl. 19 % MwSt.",
        features: [
          "Eine Seite mit allem Wichtigen: Leistungen, Über uns, Kontakt",
          "Impressum und Datenschutzerklärung",
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
          "Impressum und Datenschutzerklärung",
          "Meist nach etwa zwei Wochen fertig",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
    ],
    pricingNotes: [
      "Größere Websites, Shops oder weitere Sprachen nach Aufwand: 71,40 € pro Stunde (60 € netto).",
      "Hosting & Wartung gibt es auf Wunsch ab 25 € im Monat dazu.",
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Wie lange dauert eine neue Website?",
        answer:
          "Ein Onepager ist meist nach einer Woche fertig, eine mehrseitige Website nach etwa zwei Wochen. Wichtig ist nur, dass Texte und Bilder bereitliegen.",
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
          "Ja. Für eine Aktion, einen Kurs oder ein Angebot, das Sie auf Instagram, Facebook oder per Flyer bewerben, baue ich eine eigene Landingpage mit Anmeldung oder Kontaktformular. Links zu Ihren Social-Media-Kanälen sind auf jeder Website dabei. Was das kostet, hängt vom Umfang ab. Den Preis nenne ich Ihnen vorher.",
      },
      {
        question: "Kann ich Inhalte selbst ändern?",
        answer:
          "Ja. Auf Wunsch baue ich ein einfaches Redaktionssystem ein, mit dem Sie Texte und Bilder selbst pflegen können. Das rechne ich nach Aufwand ab. Sie können mir Änderungen aber auch einfach schicken.",
      },
      {
        question: "Wie läuft die Bezahlung?",
        answer:
          "Sie zahlen erst, wenn Ihre Website online ist und Ihnen gefällt. Hosting und Wartung rechne ich monatlich ab.",
      },
      {
        question: "Wem gehören die Website und die Domain?",
        answer:
          "Die Website gehört Ihnen. Die Domain läuft am besten auf Ihren Namen, ich kann sie aber auch für Sie verwalten. Wenn Sie wechseln möchten, übergebe ich Ihnen alles.",
      },
    ],
  },
  en: {
    title: "Website Creation from 599 € | Hannes Schaletzky",
    description:
      "A modern website for small businesses, self-employed people and clubs: one-pager 599 €, up to 5 pages 990 €. Ready in one to two weeks, you only pay once it's online.",
    hero: {
      eyebrow: "Website creation",
      title: "Your new website,",
      highlight: "online in one to two weeks.",
      cta: "Get in touch",
      text: "Modern, fast and easy to read on every phone. I take care of design and technology, you only take care of your content.",
    },
    examplesEyebrow: "Examples",
    examplesHeading: "This is what your website could look like.",
    examplesNote:
      "All three are sample projects: the practice, the club and the carpentry don't exist, but I designed and built the websites myself.",
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
        text: "After a few days you see a first draft. You tell me what you like, and we adjust until everything is right.",
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
        text: "The mandatory details are always included and linked everywhere.",
      },
      {
        title: "Findable on Google",
        text: "Clean titles, descriptions and a sitemap, so Google understands your pages.",
      },
      {
        title: "One contact person",
        text: "You always talk to me directly, from the first idea to after the launch.",
      },
      {
        title: "Pay at the end",
        text: "You only pay once the website is online and you like it.",
      },
    ],
    pricingEyebrow: "Packages & prices",
    pricingHeading: "Two packages, fixed prices.",
    featuresLabel: "Included",
    packages: [
      {
        name: "One-pager",
        price: "599 €",
        priceNote: "one-off, incl. 19 % VAT",
        features: [
          "One page with everything important: services, about, contact",
          "Imprint and privacy policy",
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
          "Imprint and privacy policy",
          "Usually ready after about two weeks",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
    ],
    pricingNotes: [
      "Bigger sites, shops or more languages billed by effort: 71.40 € per hour (60 € net).",
      "Hosting & maintenance can be added from 25 € a month.",
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "How long does a new website take?",
        answer:
          "A one-pager is usually ready after a week, a multi-page website after about two weeks. All it needs is for the texts and images to be ready.",
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
          "Yes. For a campaign, a course or an offer you promote on Instagram, Facebook or with flyers, I build a dedicated landing page with sign-up or a contact form. Links to your social media channels are part of every website. The cost depends on the scope. I tell you the price beforehand.",
      },
      {
        question: "Can I change content myself?",
        answer:
          "Yes. If you like, I add a simple content management system so you can edit texts and images yourself. I bill that by effort. You can also just send me your changes.",
      },
      {
        question: "How does payment work?",
        answer:
          "You only pay once your website is online and you like it. Hosting and maintenance are billed monthly.",
      },
      {
        question: "Who owns the website and the domain?",
        answer:
          "The website is yours. The domain is best registered in your name, but I can also manage it for you. If you ever want to switch, I hand everything over.",
      },
    ],
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/website-erstellen",
    lang,
  });
};

export default function WebsiteErstellen() {
  const lang = useLang();
  const t = text[lang];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <PageHero
          eyebrow={t.hero.eyebrow}
          title={t.hero.title}
          highlight={t.hero.highlight}
          cta={{ label: t.hero.cta, href: localize("/contact", lang) }}
        >
          {t.hero.text}
        </PageHero>

        {/* examples: screenshots of the demo sites */}
        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.examplesEyebrow}>
              {t.examplesHeading}
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-3">
              {t.examples.map((example) => (
                <a
                  key={example.slug}
                  href={`https://${example.slug}.hschaletzky.com/`}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-2xl border border-white/10 transition hover:border-teal/50"
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
                      {example.slug}.hschaletzky.com →
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-400">{t.examplesNote}</p>
          </div>
        </section>

        {/* process */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.stepsEyebrow}>
              {t.stepsHeading}
            </SectionHeading>
            <ClimbSteps steps={t.steps} />
          </div>
        </section>

        {/* included in every website */}
        <section className="bg-navy-light">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.includedEyebrow}>
              {t.includedHeading}
            </SectionHeading>
            <FeatureList items={t.included} />
          </div>
        </section>

        <PricingSection
          eyebrow={t.pricingEyebrow}
          heading={t.pricingHeading}
          packages={t.packages}
          notes={t.pricingNotes}
          featuresLabel={t.featuresLabel}
        />

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
