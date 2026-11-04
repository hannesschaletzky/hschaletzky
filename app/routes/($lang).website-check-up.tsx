import type { MetaFunction } from "react-router";
import ClimbSteps from "~/components/site/climbSteps";
import ContactBox from "~/components/site/contactBox";
import FaqSection from "~/components/site/faqSection";
import FeatureList from "~/components/site/featureList";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import PricingSection from "~/components/site/pricingSection";
import { pageMeta } from "~/components/site/pageMeta";
import SectionHeading from "~/components/site/sectionHeading";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

// landing page for the check-up (also the target of the check-up ads)
const text = {
  de: {
    title: "Website-Check-up für 250 € | Hannes Schaletzky",
    description:
      "Ich prüfe Ihre Website auf Sicherheit, Technik, Ladezeit, Auffindbarkeit bei Google und Rechtstexte. Bericht mit klaren Empfehlungen und 30 Minuten Besprechung, Festpreis 250 €.",
    hero: {
      eyebrow: "Website-Check-up",
      title: "Wie gut ist Ihre Website",
      highlight: "wirklich?",
      cta: "Kontakt aufnehmen",
      text: "Ich prüfe Sicherheit, Technik, Ladezeit, Auffindbarkeit bei Google und Rechtstexte. Sie bekommen einen verständlichen Bericht mit klaren Empfehlungen, und wir besprechen ihn gemeinsam.",
    },
    areasEyebrow: "Was ich prüfe",
    areasHeading: "Zehn Bereiche, ein klares Bild.",
    areas: [
      {
        title: "Sicherheit",
        text: "Schutzeinstellungen am Server und ob Google vor Ihrer Seite warnt.",
      },
      {
        title: "Verschlüsselung",
        text: "Ob die Verbindung zu Ihrer Website sicher verschlüsselt ist.",
      },
      {
        title: "E-Mail-Schutz",
        text: "Ob Ihre Domain gefälschte E-Mails in Ihrem Namen erschwert.",
      },
      {
        title: "Technik",
        text: "Erreichbarkeit der Seiten, defekte Links und Fehler im Quelltext.",
      },
      {
        title: "Ladezeit",
        text: "Wie schnell Ihre Seite lädt, am Computer und auf dem Handy.",
      },
      {
        title: "Auffindbarkeit",
        text: "Ob Google Ihre Seiten findet und wie sie beim Teilen aussehen.",
      },
      {
        title: "Rechtstexte",
        text: "Ob Impressum und Pflichtangaben vollständig und verlinkt sind.",
      },
      {
        title: "Datenschutz & Cookies",
        text: "Ob fremde Dienste laden, bevor Besucher zugestimmt haben.",
      },
      {
        title: "Barrierefreiheit",
        text: "Ob sich Ihre Seite gut lesen und mit der Tastatur bedienen lässt.",
      },
      {
        title: "Aktualität",
        text: "Veraltete Jahreszahlen, abgelaufene Termine und widersprüchliche Angaben.",
      },
    ],
    tools:
      "Gemessen wird von außen, so wie Besucher und Suchmaschinen Ihre Seite sehen, mit etablierten Werkzeugen wie Google PageSpeed Insights, Mozilla Observatory und dem W3C-Validator. Texte, Impressum und Darstellung sehe ich zusätzlich persönlich durch.",
    stepsEyebrow: "So läuft es ab",
    stepsHeading: "In drei Schritten zum Bericht.",
    steps: [
      {
        title: "Adresse schicken",
        text: "Sie nennen mir Ihre Website. Zugangsdaten brauche ich nicht, denn ich prüfe von außen.",
      },
      {
        title: "Prüfen & aufschreiben",
        text: "Ich messe mit etablierten Werkzeugen, sehe alles persönlich durch und schreibe Ihren Bericht.",
      },
      {
        title: "Besprechen",
        text: "Sie bekommen den Bericht als PDF, und wir gehen ihn in 30 Minuten per Video oder Telefon durch.",
      },
    ],
    reportEyebrow: "Der Bericht",
    reportHeading: "Jeder Vorschlag mit Dringlichkeit und Aufwand.",
    reportText:
      "Vorne steht auf einen Blick, was gut läuft und was dringend ist. Danach folgt jeder Vorschlag mit Befund, Begründung und Empfehlung, eingeordnet als dringend, sinnvoll oder optional und mit einer Schätzung des Aufwands. So wissen Sie, was Sie zuerst angehen sollten, ob mit mir oder mit jemand anderem.",
    reportFacts: [
      { value: "15", label: "Seiten geprüft" },
      { value: "9", label: "Prüfwerkzeuge" },
      { value: "30", label: "Vorschläge" },
    ],
    reportFactsNote:
      "Zahlen aus dem Beispielbericht, einer Demo-Website mit absichtlich eingebauten Mängeln.",
    reportCta: "Beispielbericht ansehen (PDF)",
    pages: [
      "Titelseite des Beispielberichts",
      "Zusammenfassung: was gut läuft und die wichtigsten Vorschläge",
      "Messwerte: Ladezeit, Auffindbarkeit, Barrierefreiheit und Sicherheit",
    ],
    pricingEyebrow: "Preis",
    pricingHeading: "Ein Paket, ein fester Preis.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Website-Check-up",
        price: "250 €",
        priceNote: "Festpreis, einmalig, inkl. 19 % MwSt.",
        features: [
          "Prüfung der ganzen Website in zehn Bereichen",
          "Persönliche Durchsicht von bis zu fünf wichtigen Seiten",
          "Bericht als PDF, jeder Vorschlag mit Dringlichkeit und Aufwand",
          "30 Minuten Besprechung per Video oder Telefon",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Brauchen Sie Zugang zu meiner Website?",
        answer:
          "Nein. Ich prüfe von außen, so wie Besucher und Suchmaschinen Ihre Seite sehen. Dafür brauche ich nur die Adresse.",
      },
      {
        question: "Funktioniert das auch mit WordPress, Wix oder Jimdo?",
        answer:
          "Ja. Weil ich von außen prüfe, ist es egal, womit Ihre Website gebaut ist.",
      },
      {
        question: "Wie viele Seiten prüfen Sie?",
        answer:
          "Technik, Sicherheit und Links prüfe ich für die ganze Website. Bis zu fünf wichtige Seiten sehe ich mir zusätzlich persönlich genau an, darunter immer Startseite, Impressum und Datenschutzerklärung.",
      },
      {
        question: "Beheben Sie die Probleme auch?",
        answer:
          "Gern, nach Aufwand zu 71,40 € pro Stunde (60 € netto). Im Beispielbericht brauchen 27 von 30 Vorschlägen jeweils höchstens etwa zwei Stunden. Sie können den Bericht aber genauso an Ihre Agentur oder Ihren bisherigen Dienstleister geben.",
      },
      {
        question: "Ist der Check-up eine Rechtsberatung?",
        answer:
          "Nein. Ich weise auf fehlende Angaben und Risiken bei Impressum, Datenschutz und Cookies hin. Rechtlich prüfen sollte das eine Fachperson.",
      },
      {
        question: "Garantieren Sie bessere Platzierungen bei Google?",
        answer:
          "Nein, das kann niemand seriös versprechen. Ich zeige Ihnen, was Google daran hindert, Ihre Seite gut zu finden, und wie Sie das beheben.",
      },
    ],
  },
  en: {
    title: "Website Check-up for 250 € | Hannes Schaletzky",
    description:
      "I check your website for security, technology, loading time, findability on Google and legal texts. A report with clear recommendations and a 30-minute call, fixed price 250 €.",
    hero: {
      eyebrow: "Website check-up",
      title: "How good is your website",
      highlight: "really?",
      cta: "Get in touch",
      text: "I check security, technology, loading time, findability on Google and legal texts. You get a report that is easy to understand, with clear recommendations, and we go through it together.",
    },
    areasEyebrow: "What I check",
    areasHeading: "Ten areas, one clear picture.",
    areas: [
      {
        title: "Security",
        text: "Protective settings on the server and whether Google warns about your site.",
      },
      {
        title: "Encryption",
        text: "Whether the connection to your website is securely encrypted.",
      },
      {
        title: "Email protection",
        text: "Whether your domain makes forged emails in your name harder.",
      },
      {
        title: "Technology",
        text: "Whether pages are reachable, broken links and errors in the source code.",
      },
      {
        title: "Loading time",
        text: "How fast your site loads, on a computer and on a phone.",
      },
      {
        title: "Findability",
        text: "Whether Google finds your pages and how they look when shared.",
      },
      {
        title: "Legal texts",
        text: "Whether the imprint and mandatory details are complete and linked.",
      },
      {
        title: "Privacy & cookies",
        text: "Whether third-party services load before visitors have agreed.",
      },
      {
        title: "Accessibility",
        text: "Whether your site is easy to read and works with a keyboard.",
      },
      {
        title: "Up to date",
        text: "Outdated years, expired dates and contradicting details.",
      },
    ],
    tools:
      "Everything is measured from the outside, the way visitors and search engines see your site, with established tools such as Google PageSpeed Insights, Mozilla Observatory and the W3C validator. I also go through texts, imprint and layout in person.",
    stepsEyebrow: "How it works",
    stepsHeading: "Three steps to your report.",
    steps: [
      {
        title: "Send the address",
        text: "You tell me your website. I don't need any logins, because I check from the outside.",
      },
      {
        title: "Check & write up",
        text: "I measure with established tools, go through everything in person and write your report.",
      },
      {
        title: "Talk it through",
        text: "You get the report as a PDF, and we go through it in a 30-minute video or phone call.",
      },
    ],
    reportEyebrow: "The report",
    reportHeading: "Every suggestion with urgency and effort.",
    reportText:
      "At the front you see at a glance what works well and what is urgent. Then every suggestion follows with the finding, the reason and a recommendation, rated as urgent, worthwhile or optional and with an estimate of the effort. So you know what to tackle first, with me or with someone else.",
    reportFacts: [
      { value: "15", label: "pages checked" },
      { value: "9", label: "testing tools" },
      { value: "30", label: "suggestions" },
    ],
    reportFactsNote:
      "Numbers from the sample report, a demo website with deliberately built-in flaws.",
    reportCta: "View a sample report (PDF, German)",
    pages: [
      "Cover of the sample report",
      "Summary: what works well and the most important suggestions",
      "Measurements: loading time, findability, accessibility and security",
    ],
    pricingEyebrow: "Price",
    pricingHeading: "One package, one fixed price.",
    featuresLabel: "Included",
    packages: [
      {
        name: "Website check-up",
        price: "250 €",
        priceNote: "Fixed price, one-off, incl. 19 % VAT.",
        features: [
          "A check of the whole website in ten areas",
          "A personal look at up to five important pages",
          "Report as a PDF, every suggestion with urgency and effort",
          "30-minute video or phone call",
        ],
        cta: { label: "Get in touch", href: "/en/contact" },
      },
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "Do you need access to my website?",
        answer:
          "No. I check from the outside, the way visitors and search engines see your site. All I need is the address.",
      },
      {
        question: "Does this work with WordPress, Wix or Jimdo too?",
        answer:
          "Yes. Because I check from the outside, it doesn't matter what your website is built with.",
      },
      {
        question: "How many pages do you check?",
        answer:
          "Technology, security and links I check for the whole website. I also take a close personal look at up to five important pages, always including the home page, imprint and privacy policy.",
      },
      {
        question: "Do you fix the problems too?",
        answer:
          "Happily, billed by effort at 71.40 € per hour (60 € net). In the sample report, 27 of 30 suggestions take at most about two hours each. You can just as well hand the report to your agency or your current provider.",
      },
      {
        question: "Is the check-up legal advice?",
        answer:
          "No. I point out missing details and risks in the imprint, privacy policy and cookies. A legal professional should review them.",
      },
      {
        question: "Do you guarantee better rankings on Google?",
        answer:
          "No, nobody can honestly promise that. I show you what keeps Google from finding your site and how to fix it.",
      },
    ],
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/website-check-up",
    lang,
  });
};

const reportPdf = "/website-check-up-beispiel.pdf";
// pages 1, 3 and 7 of the sample report, rendered from the PDF
const reportPages = [
  "/check-up/seite-1.jpg",
  "/check-up/seite-3.jpg",
  "/check-up/seite-7.jpg",
];

export default function WebsiteCheckUp() {
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

        {/* areas */}
        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.areasEyebrow}>
              {t.areasHeading}
            </SectionHeading>
            <FeatureList items={t.areas} />
            <p className="mt-8 max-w-3xl leading-relaxed text-slate-400">
              {t.tools}
            </p>
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

        {/* sample report: text left, three pages fanned out right */}
        <section className="bg-navy-light">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow={t.reportEyebrow}>
                {t.reportHeading}
              </SectionHeading>
              <p className="-mt-4 text-lg leading-relaxed">{t.reportText}</p>
              <dl className="mt-8 grid grid-cols-3 gap-4">
                {t.reportFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-white/10 px-4 py-3"
                  >
                    <dt className="sr-only">{fact.label}</dt>
                    <dd className="text-3xl font-bold text-white">
                      {fact.value}
                    </dd>
                    <dd className="text-sm">{fact.label}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-slate-400">{t.reportFactsNote}</p>
              <div className="mt-8">
                <a
                  href={reportPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-full bg-teal px-6 py-3 font-semibold text-navy transition hover:bg-teal-light"
                >
                  {t.reportCta}
                </a>
              </div>
            </div>
            <a
              href={reportPdf}
              target="_blank"
              rel="noreferrer"
              aria-label={t.reportCta}
              className="group relative mx-auto block aspect-[4/3] w-full max-w-lg"
            >
              {reportPages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  width={800}
                  height={1131}
                  loading="lazy"
                  alt={t.pages[i]}
                  className={`absolute top-1/2 w-[46%] -translate-y-1/2 rounded-md shadow-2xl shadow-black/40 transition-transform duration-300 ${
                    [
                      "left-0 -rotate-6 group-hover:-translate-x-2 group-hover:-rotate-8",
                      "left-[27%] z-10 group-hover:-translate-y-[54%]",
                      "right-0 rotate-6 group-hover:translate-x-2 group-hover:rotate-8",
                    ][i]
                  }`}
                />
              ))}
            </a>
          </div>
        </section>

        <PricingSection
          eyebrow={t.pricingEyebrow}
          heading={t.pricingHeading}
          packages={t.packages}
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
