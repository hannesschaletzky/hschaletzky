import type { MetaFunction } from "react-router";
import AboutMeSection from "~/components/site/aboutMeSection";
import ContactBox from "~/components/site/contactBox";
import FaqSection from "~/components/site/faqSection";
import FeatureList from "~/components/site/featureList";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import SectionHeading from "~/components/site/sectionHeading";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

// landing page for the security ads: the risks, then check-up and maintenance
// as the three steps
const text = {
  de: {
    title:
      "Website-Sicherheit für kleine Betriebe & Vereine | Hannes Schaletzky",
    description:
      "Veraltetes WordPress, alte PHP-Versionen, keine Backups: Ich prüfe, wie sicher Ihre Website ist, und halte sie danach aktuell. Check-up 250 €, Wartung ab 25 € im Monat.",
    hero: {
      eyebrow: "Website-Sicherheit aus Berlin",
      title: "Ist Ihre Website",
      highlight: "sicher?",
      cta: "Kontakt aufnehmen",
      text: "Sicherheitslücken in PHP und WordPress machen regelmäßig Schlagzeilen. Ich finde heraus, wo Ihre Website steht, und sorge danach dafür, dass sie sicher und aktuell bleibt.",
    },
    risksEyebrow: "Die häufigsten Risiken",
    risksHeading: "Woran es meistens liegt.",
    risks: [
      {
        title: "Veraltete Software",
        text: "Alte Versionen von WordPress, Plugins oder PHP haben bekannte Lücken, nach denen Angreifer gezielt suchen.",
      },
      {
        title: "Automatische Angriffe",
        text: "Programme durchsuchen rund um die Uhr das Internet nach verwundbaren Seiten. KI-Werkzeuge machen das noch einfacher.",
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
    stepsEyebrow: "So gehen wir vor",
    stepsHeading: "Erst prüfen, dann absichern.",
    steps: [
      {
        label: "Schritt 1",
        title: "Website-Check-up",
        price: "250 €",
        text: "Ich prüfe Ihre Website von außen auf Sicherheit, Verschlüsselung, E-Mail-Schutz und Technik. Sie bekommen einen Bericht, in dem jeder Vorschlag nach Dringlichkeit eingeordnet ist.",
        href: "/website-check-up",
        link: "Zum Check-up",
      },
      {
        label: "Schritt 2",
        title: "Maßnahmen umsetzen",
        text: "Die dringenden Punkte aus dem Bericht behebe ich zuerst. Wie lange jeder Punkt ungefähr dauert, steht schon im Bericht.",
        href: "/contact",
        link: "Anfragen",
      },
      {
        label: "Schritt 3",
        title: "Hosting & Wartung",
        price: "ab 25 € / Monat",
        text: "Ich halte Ihre Website aktuell, sichere sie täglich und werde alarmiert, wenn etwas nicht stimmt. Den Umzug zu mir übernehme ich kostenlos.",
        href: "/hosting-wartung",
        link: "Zu Hosting & Wartung",
      },
    ],
    stepsNote:
      "Jeden Schritt gibt es auch einzeln. Den Bericht können Sie genauso Ihrem bisherigen Dienstleister geben.",
    protectionEyebrow: "Was ich in der Wartung übernehme",
    protectionHeading: "Damit Sie sich nicht kümmern müssen.",
    protection: [
      {
        title: "Updates",
        text: "WordPress, Plugins und Server-Software bleiben aktuell, auch PHP.",
      },
      {
        title: "Tägliche Backups",
        text: "Jeden Tag eine Sicherung, 30 Tage aufbewahrt. Geht etwas schief, ist die Seite schnell wieder da.",
      },
      {
        title: "Überwachung",
        text: "Fällt Ihre Website aus, werde ich automatisch alarmiert, meist bevor Sie es merken.",
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
        text: "Bei Problemen erreichen Sie mich per E-Mail oder Telefon, meist mit Antwort innerhalb eines Werktags.",
      },
    ],
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question:
          "Ist meine Website von der aktuellen PHP-Sicherheitslücke betroffen?",
        answer:
          "Das hängt davon ab, welche PHP-Version Ihr Anbieter einsetzt und ob er die Updates schon eingespielt hat. Im Check-up sehe ich mir an, was von außen erkennbar ist, und sage Ihnen, was zu tun ist. Liegt Ihre Website bei mir, spiele ich solche Updates selbst ein.",
      },
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
          "Nein. Den Bericht aus dem Check-up können Sie auch Ihrem bisherigen Dienstleister geben. Wenn Sie möchten, übernehme ich Hosting und Wartung, der Umzug ist kostenlos.",
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
    title: "Website Security for Small Businesses & Clubs | Hannes Schaletzky",
    description:
      "Outdated WordPress, old PHP versions, no backups: I check how secure your website is and keep it up to date afterwards. Check-up 250 €, maintenance from 25 € a month.",
    hero: {
      eyebrow: "Website security from Berlin",
      title: "Is your website",
      highlight: "secure?",
      cta: "Get in touch",
      text: "Security holes in PHP and WordPress make the headlines again and again. I find out where your website stands and then make sure it stays secure and up to date.",
    },
    risksEyebrow: "The most common risks",
    risksHeading: "Where it usually goes wrong.",
    risks: [
      {
        title: "Outdated software",
        text: "Old versions of WordPress, plugins or PHP have known holes that attackers look for on purpose.",
      },
      {
        title: "Automated attacks",
        text: "Programs scan the internet around the clock for vulnerable sites. AI tools make this even easier.",
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
        text: "Without protective records on your domain, fraudsters can send emails in your name.",
      },
      {
        title: "Nobody is watching",
        text: "If the site goes down or gets changed, often nobody notices for weeks.",
      },
    ],
    stepsEyebrow: "How we go about it",
    stepsHeading: "Check first, then secure.",
    steps: [
      {
        label: "Step 1",
        title: "Website check-up",
        price: "250 €",
        text: "I check your website from the outside for security, encryption, email protection and technology. You get a report with every suggestion ranked by urgency.",
        href: "/website-check-up",
        link: "To the check-up",
      },
      {
        label: "Step 2",
        title: "Fix the issues",
        text: "I fix the urgent points from the report first. The report already says roughly how long each point takes.",
        href: "/contact",
        link: "Ask me",
      },
      {
        label: "Step 3",
        title: "Hosting & maintenance",
        price: "from 25 € / month",
        text: "I keep your website up to date, back it up daily and get an alert when something is wrong. Moving it to me is free.",
        href: "/hosting-wartung",
        link: "To hosting & maintenance",
      },
    ],
    stepsNote:
      "Each step is also available on its own. You can just as well give the report to your current provider.",
    protectionEyebrow: "What I take care of in maintenance",
    protectionHeading: "So you don't have to.",
    protection: [
      {
        title: "Updates",
        text: "WordPress, plugins and server software stay up to date, PHP included.",
      },
      {
        title: "Daily backups",
        text: "A backup every day, kept for 30 days. If something goes wrong, the site is back quickly.",
      },
      {
        title: "Monitoring",
        text: "If your website goes down, I get an automatic alert, usually before you notice.",
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
        text: "With problems you reach me by email or phone, usually with an answer within one working day.",
      },
    ],
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "Is my website affected by the current PHP security hole?",
        answer:
          "That depends on which PHP version your provider runs and whether they have already installed the updates. In the check-up I look at what can be seen from the outside and tell you what to do. If your website is hosted with me, I install such updates myself.",
      },
      {
        question: "My website is small. Is it even worth attacking?",
        answer:
          "Unfortunately, yes. Most attacks aren't targeted but run automatically against every site with known holes. A hacked site is then used for spam or fraud, for example, no matter how small it is.",
      },
      {
        question: "My website has already been hacked. Can you help?",
        answer:
          "Best give me a call. I'll tell you honestly whether and how quickly I can help. I don't offer around-the-clock standby.",
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
    path: "/website-sicherheit",
    lang,
    image: "website-sicherheit",
  });
};

export default function WebsiteSicherheit() {
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

        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.risksEyebrow}>
              {t.risksHeading}
            </SectionHeading>
            <FeatureList items={t.risks} />
          </div>
        </section>

        {/* check-up, fixes and maintenance as steps, styled like the offer tiles */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.stepsEyebrow}>
              {t.stepsHeading}
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-3">
              {t.steps.map((step) => (
                <a
                  key={step.title}
                  href={localize(step.href, lang)}
                  className="group flex flex-col rounded-2xl border border-white/10 p-6 transition hover:border-teal/50"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                    {step.label}
                  </p>
                  <div className="mt-3 flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    {step.price && (
                      <p className="shrink-0 font-semibold text-teal">
                        {step.price}
                      </p>
                    )}
                  </div>
                  <p className="mt-3 leading-relaxed">{step.text}</p>
                  <p className="mt-auto pt-6 font-semibold text-teal group-hover:text-teal-light">
                    {step.link}{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </p>
                </a>
              ))}
            </div>
            <p className="mt-8 max-w-3xl leading-relaxed text-slate-400">
              {t.stepsNote}
            </p>
          </div>
        </section>

        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.protectionEyebrow}>
              {t.protectionHeading}
            </SectionHeading>
            <FeatureList items={t.protection} />
          </div>
        </section>

        <AboutMeSection />

        <FaqSection
          heading={t.faqHeading}
          faqs={t.faqs}
          className="bg-navy-light"
        />

        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
