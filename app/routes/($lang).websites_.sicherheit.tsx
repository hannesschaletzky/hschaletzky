import type { MetaFunction } from "react-router";
import ClimbSteps from "~/components/site/climbSteps";
import { useContactLinks } from "~/components/site/contactTopic";
import OfferPage from "~/components/site/offerPage";
import Section from "~/components/site/section";
import FeatureNumbers from "~/components/site/featureNumbers";
import { pageMeta } from "~/components/site/pageMeta";
import PricingSection from "~/components/site/pricingSection";
import { calUrl } from "~/components/site/siteNav";
import SectionHeading from "~/components/site/sectionHeading";
import { langFromParams, useLang } from "~/i18n";
import { offerLoader } from "~/ratgeber.server";
import { primaryButton } from "~/components/site/buttons";

export const loader = offerLoader("/websites/sicherheit");

// landing page for the security ads: the risks, then check-up, fixes and
// maintenance as the three steps
const text = {
  de: {
    title: "Website-Sicherheit für Betriebe & Vereine | Hannes Schaletzky",
    description:
      "Veraltetes WordPress, alte PHP-Versionen, keine Backups: Ich prüfe, wie sicher Ihre Website ist, und halte sie aktuell. Check-up 250 €, Wartung ab 25 €.",
    hero: {
      title: "Ist Ihre Website",
      highlight: "sicher?",
      cta: "Kostenloses Erstgespräch buchen",
      ctaHref: calUrl,
      text: "Lücken in PHP und WordPress machen regelmäßig Schlagzeilen. Ich prüfe, wo Ihre Website steht. Der Check-up kostet 250 €.",
    },
    risksEyebrow: "Die häufigsten Risiken",
    risksHeading: "Woran es meistens liegt.",
    risks: [
      {
        title: "Veraltete Software",
        text: "Alte Versionen von WordPress, seinen Erweiterungen (Plugins) oder der Programmiersprache PHP haben bekannte Lücken.",
      },
      {
        title: "Automatische Angriffe",
        text: "Programme suchen rund um die Uhr nach verwundbaren Seiten, KI hilft dabei.",
      },
      {
        title: "Keine Backups",
        text: "Ohne aktuelle Sicherung ist nach einem Angriff oder einem Fehler oft alles weg.",
      },
      {
        title: "Fehlende Verschlüsselung",
        text: "Ohne gültiges SSL-Zertifikat warnen Browser Ihre Besucher vor Ihrer Seite.",
      },
      {
        title: "Gefälschte E-Mails",
        text: "Ohne Schutzeinträge an Ihrer Domain können Betrüger E-Mails in Ihrem Namen verschicken.",
      },
      {
        title: "Niemand schaut hin",
        text: "Fällt die Seite aus oder wird sie verändert, merkt das oft wochenlang niemand.",
      },
    ],
    php: {
      eyebrow: "PHP-Sicherheitslücken",
      heading: "Ist Ihre Website betroffen?",
      text: "PHP ist die Programmiersprache, auf der WordPress und die meisten kleinen Websites laufen. Wird darin eine Lücke bekannt, hängt es von zwei Dingen ab, ob Sie handeln müssen: welche PHP-Version Ihre Website nutzt und ob Ihr Anbieter die Updates einspielt.",
      checkHeading: "So prüfen Sie es selbst.",
      check: [
        "In WordPress unter Werkzeuge → Website-Zustand → Bericht → Server.",
        "Oder im Kundenbereich Ihres Hosting-Anbieters, meist in den Einstellungen zu PHP.",
        "Steht Ihre Version nicht mehr in der Liste der unterstützten Versionen, bekommt sie keine Sicherheitsupdates mehr.",
      ],
      versionsLink: "Unterstützte PHP-Versionen auf php.net",
      helpHeading: "Das übernehme ich.",
      help: [
        "Ich prüfe im Check-up, welche Version läuft und was von außen angreifbar ist.",
        "Ich aktualisiere PHP mit Vorsicht: erst ein Backup, dann der Test, ob Theme und Plugins mitspielen.",
        "In der Wartung spiele ich Updates dauerhaft selbst ein.",
      ],
      cta: "Kontakt aufnehmen",
      note: "Ein PHP-Update kann ältere Plugins oder Themes stören. Deshalb nie ohne Backup.",
    },
    stepsEyebrow: "So läuft es ab",
    stepsHeading: "Prüfen, beheben, absichern.",
    steps: [
      {
        title: "Prüfen",
        text: "Ich prüfe Ihre Website von außen und ordne jeden Vorschlag nach Dringlichkeit.",
      },
      {
        title: "Beheben",
        text: "Die dringenden Punkte behebe ich zuerst, den Aufwand kennen Sie aus dem Bericht.",
      },
      {
        title: "Absichern",
        text: "Danach halte ich Ihre Website aktuell, mit Updates, täglichen Backups und Alarm bei Ausfällen.",
      },
    ],
    pricingEyebrow: "Preis",
    pricingHeading: "Drei Schritte, jeder auch einzeln.",
    featuresLabel: "Enthalten",
    packages: [
      {
        name: "Check-up",
        description: "Der Einstieg: Sie wissen danach, wo Ihre Website steht.",
        price: "250 €",
        priceNote: "Festpreis, einmalig, inkl. 19 % MwSt.",
        features: [
          "Prüfung in zehn Bereichen",
          "Bericht als PDF innerhalb von 5 Werktagen",
          "30-minütige Besprechung per Video oder Telefon",
        ],
        cta: { label: "Zum Check-up", href: "/websites/check-up" },
      },
      {
        name: "Maßnahmen umsetzen",
        description:
          "Ich behebe, was der Bericht zeigt, die dringenden Punkte zuerst.",
        price: "71,40 €",
        priceNote: "pro Stunde, inkl. 19 % MwSt. (60 € netto)",
        features: [
          "Den Aufwand je Vorschlag kennen Sie aus dem Bericht",
          "Sie entscheiden, was ich umsetze",
        ],
        cta: { label: "Kontakt aufnehmen", href: "/contact" },
      },
      {
        name: "Hosting & Wartung",
        description: "Für WordPress & Co. 60 € im Monat.",
        price: "ab 25 €",
        priceNote: "pro Monat, inkl. 19 % MwSt.",
        features: [
          "Updates von Technik und Software",
          "Tägliche Backups, 30 Tage aufbewahrt",
          "Überwachung mit Alarm bei Ausfall",
          "Monatlich kündbar",
        ],
        cta: {
          label: "Zu Hosting & Wartung",
          href: "/websites/hosting-wartung",
        },
      },
    ],
    protectionEyebrow: "Was ich in der Wartung übernehme",
    protectionHeading: "Darum kümmere ich mich.",
    protection: [
      {
        title: "Updates",
        text: "WordPress, Plugins, Server-Software und PHP halte ich regelmäßig aktuell.",
      },
      {
        title: "Tägliche Backups",
        text: "Jeden Tag eine Sicherung, 30 Tage aufbewahrt. Geht etwas schief, lässt sich die Seite meist zurückholen.",
      },
      {
        title: "Überwachung",
        text: "Fällt Ihre Website aus, bekomme ich einen Alarm und kann oft früh reagieren.",
      },
      {
        title: "SSL-Zertifikat",
        text: "Eine verschlüsselte Verbindung, die sich automatisch verlängert.",
      },
      {
        title: "Server in Deutschland",
        text: "Ihre Daten bleiben unter deutschem Datenschutz.",
      },
      {
        title: "Direkter Draht",
        text: "Bei Problemen erreichen Sie mich per E-Mail oder Telefon und bekommen eine persönliche Antwort.",
      },
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Meine Website ist klein. Lohnt sich ein Angriff überhaupt?",
        answer:
          "Leider ja. Die meisten Angriffe sind nicht gezielt, sondern laufen automatisch gegen alle Seiten mit bekannten Lücken. Eine gehackte Seite wird dann zum Beispiel für Spam oder Betrug genutzt, egal wie klein sie ist.",
      },
      {
        question: "Meine Website wurde schon gehackt. Können Sie helfen?",
        answer:
          "Melden Sie sich am besten telefonisch. Ich sage Ihnen ehrlich, ob und wie schnell ich helfen kann. Eine Bereitschaft rund um die Uhr biete ich nicht an.",
      },
      {
        question:
          "Muss ich zu Ihnen wechseln, damit meine Website sicher wird?",
        answer:
          "Nein. Den Bericht aus dem Check-up können Sie auch Ihrem bisherigen Dienstleister geben. Wenn Sie möchten, übernehme ich Hosting & Wartung, der Umzug ist kostenlos.",
      },
      {
        question:
          "Wir sind ein Verein und niemand kennt sich mit Technik aus. Geht das trotzdem?",
        answer:
          "Gerade dann. Sie brauchen keine Technikkenntnisse. Ich erkläre alles verständlich, und um die Technik kümmere ich mich.",
      },
    ],
  },
  en: {
    title: "Website Security for Businesses & Clubs | Hannes Schaletzky",
    description:
      "Outdated WordPress, old PHP versions, no backups: I check how secure your website is and keep it up to date. Check-up 250 €, maintenance from 25 €.",
    hero: {
      title: "Is your website",
      highlight: "secure?",
      cta: "Book a free intro call",
      ctaHref: calUrl,
      text: "Holes in PHP and WordPress make the headlines again and again. I check where your website stands. The check-up costs 250 €.",
    },
    risksEyebrow: "The most common risks",
    risksHeading: "Where it usually goes wrong.",
    risks: [
      {
        title: "Outdated software",
        text: "Old versions of WordPress, its extensions (plugins) or the programming language PHP have known holes.",
      },
      {
        title: "Automated attacks",
        text: "Programs scan around the clock for vulnerable sites, helped by AI.",
      },
      {
        title: "No backups",
        text: "Without a recent backup, everything is often gone after an attack or a mistake.",
      },
      {
        title: "Missing encryption",
        text: "Without a valid SSL certificate, browsers warn your visitors about your site.",
      },
      {
        title: "Forged emails",
        text: "Without protective entries on your domain, fraudsters can send emails in your name.",
      },
      {
        title: "Nobody is watching",
        text: "If the site goes down or gets changed, often nobody notices for weeks.",
      },
    ],
    php: {
      eyebrow: "Security holes in PHP",
      heading: "Is your website affected?",
      text: "PHP is the programming language that WordPress and most small websites run on. When a hole in it becomes known, two things decide whether you need to act: which PHP version your website uses and whether your provider installs the updates.",
      checkHeading: "How to check it yourself.",
      check: [
        "In WordPress under Tools → Site Health → Info → Server.",
        "Or in your hosting provider's customer area, usually in the PHP settings.",
        "If your version is no longer on the list of supported versions, it gets no more security updates.",
      ],
      versionsLink: "Supported PHP versions on php.net",
      helpHeading: "What I take care of.",
      help: [
        "In the check-up I find out which version runs and what is open to attack from the outside.",
        "I update PHP carefully: a backup first, then a test of whether theme and plugins still work.",
        "With maintenance I keep installing updates for you on an ongoing basis.",
      ],
      cta: "Get in touch",
      note: "A PHP update can break older plugins or themes. So never without a backup.",
    },
    stepsEyebrow: "How it works",
    stepsHeading: "Check, fix, secure.",
    steps: [
      {
        title: "Check",
        text: "I check your website from the outside and rank every suggestion by urgency.",
      },
      {
        title: "Fix",
        text: "I fix the urgent points first; the report already shows the effort.",
      },
      {
        title: "Secure",
        text: "After that I keep your website up to date, with updates, daily backups and alerts on outages.",
      },
    ],
    pricingEyebrow: "Price",
    pricingHeading: "Three steps, each available on its own.",
    featuresLabel: "Included",
    packages: [
      {
        name: "Check-up",
        description:
          "The starting point: afterwards you know where your website stands.",
        price: "250 €",
        priceNote: "fixed price, one-off, incl. 19 % VAT",
        features: [
          "A check in ten areas",
          "Report as a PDF within 5 working days",
          "30-minute video or phone call",
        ],
        cta: { label: "To the check-up", href: "/websites/check-up" },
      },
      {
        name: "Fix the issues",
        description: "I fix what the report shows, the urgent points first.",
        price: "71.40 €",
        priceNote: "per hour, incl. 19 % VAT (60 € net)",
        features: [
          "The report shows the effort for every suggestion",
          "You decide what I work on",
        ],
        cta: { label: "Get in touch", href: "/contact" },
      },
      {
        name: "Hosting & maintenance",
        description: "For WordPress & Co. 60 € a month.",
        price: "from 25 €",
        priceNote: "per month, incl. 19 % VAT",
        features: [
          "Updates for technology and software",
          "Daily backups, kept for 30 days",
          "Monitoring with an alert on outages",
          "Cancel any month",
        ],
        cta: {
          label: "To hosting & maintenance",
          href: "/websites/hosting-wartung",
        },
      },
    ],
    protectionEyebrow: "What I take care of in maintenance",
    protectionHeading: "That's what I take care of.",
    protection: [
      {
        title: "Updates",
        text: "I update WordPress, plugins, server software and PHP regularly.",
      },
      {
        title: "Daily backups",
        text: "A backup every day, kept for 30 days. If something goes wrong, the site can usually be restored.",
      },
      {
        title: "Monitoring",
        text: "If your website goes down, I get an alert and can often react early.",
      },
      {
        title: "SSL certificate",
        text: "An encrypted connection that renews itself automatically.",
      },
      {
        title: "Servers in Germany",
        text: "Your data stays under German data protection.",
      },
      {
        title: "A direct line",
        text: "If you have problems, you can reach me by email or phone and get a personal answer.",
      },
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "My website is small. Is it even worth attacking?",
        answer:
          "Unfortunately, yes. Most attacks aren't targeted but run automatically against every site with known holes. A hacked site is then used for spam or fraud, for example, no matter how small it is.",
      },
      {
        question: "My website has already been hacked. Can you help?",
        answer:
          "It's best to give me a call. I'll tell you honestly whether and how quickly I can help. I don't offer around-the-clock standby.",
      },
      {
        question: "Do I have to switch to you to make my website secure?",
        answer:
          "No. You can also give the check-up report to your current provider. If you like, I take over hosting and maintenance, and the move is free.",
      },
      {
        question:
          "We're a club and nobody knows much about technology. Does that work?",
        answer:
          "Especially then. You don't need any technical knowledge. I explain everything clearly and take care of the technology.",
      },
    ],
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/websites/sicherheit",
    lang,
    image: "website-sicherheit",
  });
};

export default function WebsiteSicherheit() {
  const lang = useLang();
  const links = useContactLinks();
  const t = text[lang];

  return (
    <OfferPage
      area="websites"
      current="/websites/sicherheit"
      // both are already in the price section of this page
      relatedHidden={["/websites/check-up", "/websites/hosting-wartung"]}
      hero={t.hero}
      faq={{ heading: t.faqHeading, faqs: t.faqs }}
    >
      <Section
        eyebrow={t.risksEyebrow}
        heading={t.risksHeading}
        className="bg-navy-lighter"
      >
        <FeatureNumbers items={t.risks} />
      </Section>

      {/* own anchor for the PHP ads: how to check the version yourself, and what I take over */}
      <section id="php" className="scroll-mt-20 bg-navy-light">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading eyebrow={t.php.eyebrow}>
            {t.php.heading}
          </SectionHeading>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed">{t.php.text}</p>
              <h3 className="mt-8 font-semibold text-white">
                {t.php.checkHeading}
              </h3>
              <ol className="mt-4 space-y-3">
                {t.php.check.map((step, i) => (
                  <li key={step} className="flex gap-4 leading-relaxed">
                    <span className="w-5 shrink-0 font-semibold tabular-nums text-teal">
                      {i + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <a
                href="https://www.php.net/supported-versions.php"
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-block font-semibold text-teal hover:text-teal-light"
              >
                {t.php.versionsLink}{" "}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            </div>
            <div className="rounded-2xl border border-teal/40 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white">
                {t.php.helpHeading}
              </h3>
              <ul className="mt-6 space-y-4">
                {t.php.help.map((item) => (
                  <li key={item} className="flex gap-4 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal/15 text-sm font-semibold text-teal"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={links.contact}
                className={`mt-8 inline-block ${primaryButton}`}
              >
                {t.php.cta}
              </a>
              <p className="mt-6 text-sm text-slate-400">{t.php.note}</p>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow={t.protectionEyebrow}
        heading={t.protectionHeading}
        className="bg-navy-lighter"
      >
        {/* a list with checks, so it doesn't repeat the numbered risks */}
        <ul className="max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {t.protection.map((item) => (
            <li key={item.title} className="flex gap-5 py-5">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal/15 font-semibold text-teal"
              >
                ✓
              </span>
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-1 leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* check-up, fixes and maintenance as steps, styled like the offer tiles */}
      <Section
        eyebrow={t.stepsEyebrow}
        heading={t.stepsHeading}
        className="bg-navy-light"
      >
        <ClimbSteps steps={t.steps} />
      </Section>

      <PricingSection
        eyebrow={t.pricingEyebrow}
        heading={t.pricingHeading}
        packages={t.packages}
        featuresLabel={t.featuresLabel}
      />
    </OfferPage>
  );
}
