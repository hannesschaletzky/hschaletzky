import type { MetaFunction } from "@remix-run/node";
import type { ReactNode } from "react";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import SectionHeading from "~/components/site/sectionHeading";
import Peak from "~/components/site/peak";
import { pageMeta, personJsonLd } from "~/components/site/pageMeta";
import { langFromParams, langLoader, useLang, type Lang } from "~/i18n";

export const loader = langLoader;

const text = {
  de: {
    title: "Über mich | Hannes Schaletzky, Software Engineer",
    description:
      "Hannes Schaletzky – freiberuflicher Software Engineer aus Berlin, Skilehrer und Beachvolleyball-Trainer. Wie ich arbeite, woran ich glaube und was ich neben dem Code mache.",
    hero: {
      eyebrow: "Über mich",
      title: "Hallo, ich bin Hannes –",
      highlight: "im Beruf Engineer, im\u00a0Herzen\u00a0Coach.",
      cta: "Kontakt aufnehmen",
      text: "Was ich als Skilehrer gelernt habe, hilft mir auch im Projekt: zuhören, verständlich erklären und dranbleiben, bis es sitzt.",
    },
    glance: "Auf einen Blick",
    work: "So arbeite ich",
    believe: "Woran ich glaube",
    clock: "Abseits vom Code",
    besides: "Außerdem: ",
    since: "seit",
    social: "Ehrenamt",
    headings: {
      glance: "Kurz & knapp.",
      work: "Drei Prinzipien.",
      clock: "Schnee & Sand.",
      social: "Zurückgeben.",
    },
  },
  en: {
    title: "About me | Hannes Schaletzky, Software Engineer",
    description:
      "Hannes Schaletzky – freelance software engineer from Berlin, ski instructor and beach volleyball coach. How I work, what I believe and what I do besides code.",
    hero: {
      eyebrow: "About me",
      title: "Hi, I'm Hannes –",
      highlight: "engineer by trade, coach\u00a0at\u00a0heart.",
      cta: "Get in touch",
      text: "What I learned as a ski instructor helps me in projects too: listen, explain things clearly and keep at it until it clicks.",
    },
    glance: "At a glance",
    work: "How I work",
    believe: "What I believe",
    clock: "Off the clock",
    besides: "Besides that: ",
    since: "since",
    social: "Social work",
    headings: {
      glance: "The short version.",
      work: "Three principles.",
      clock: "Snow & sand.",
      social: "Giving back.",
    },
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return [
    ...pageMeta({
      title: text[lang].title,
      description: text[lang].description,
      path: "/about",
      lang,
    }),
    personJsonLd,
  ];
};

const facts = {
  de: [
    { label: "Freiberuflich seit", value: "2024" },
    { label: "Erfahrung", value: `${new Date().getFullYear() - 2019}+ Jahre` },
    {
      label: "Ausbildung",
      value: "B.Sc. Wirtschaftsinformatik, Universität Augsburg",
    },
    {
      label: "Sprachen",
      value:
        "Deutsch (Muttersprache), Englisch (fließend), Französisch (Grundkenntnisse)",
    },
  ],
  en: [
    { label: "Freelance since", value: "2024" },
    { label: "Experience", value: `${new Date().getFullYear() - 2019}+ years` },
    {
      label: "Education",
      value: "B.Sc. business informatics, University of Augsburg",
    },
    {
      label: "Languages",
      value: "German (native), English (fluent), French (basic)",
    },
  ],
};

// icons from Lucide (ISC license): target, shield-check, eye
const values = [
  {
    title: "Focus on impact",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
  },
  {
    title: "Take ownership",
    icon: (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Open by default",
    icon: (
      <>
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
];

const beliefs = {
  de: [
    "Ehrlichkeit motiviert mehr als jedes Lob.",
    "Gute schriftliche Updates sparen mehr Zeit als jedes Meeting.",
  ],
  en: [
    "Honesty motivates more than any praise.",
    "Good written updates save more time than any meeting.",
  ],
};

const licenses = [
  {
    title: { de: "Landesskilehrer", en: "Ski instructor" },
    detail: {
      de: "Österreich",
      en: "Austrian Landeslehrer 1",
    },
    since: "2019",
    icon: <Peak className="h-6 w-auto text-navy" />,
  },
  {
    title: { de: "Beachvolleyball-Trainer", en: "Beach volleyball coach" },
    detail: { de: "DOSB B-Lizenz", en: "DOSB B-license" },
    since: "2023",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-navy"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden="true"
      >
        {/* volleyball icon from Lucide (ISC license) */}
        <circle cx="12" cy="12" r="10" />
        <path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4" />
        <path d="M12 12a12.6 12.6 0 0 1-8.7 5" />
        <path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5" />
        <path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" />
        <path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" />
      </svg>
    ),
  },
];

const interests = {
  de: [
    "Krafttraining",
    "Radfahren",
    "Nachhaltigkeit",
    "Persönliche Weiterentwicklung",
    "Ernährung",
    "Private Coding-Projekte",
  ],
  en: [
    "Weight training",
    "Cycling",
    "Sustainability",
    "Self-development",
    "Nutrition",
    "Private coding projects",
  ],
};

// newest first
const social = [
  {
    role: { de: "Mentor in Berlin", en: "Mentor in Berlin" },
    years: "2020–2021",
    org: { de: "Joblinge", en: "Joblinge" },
    href: "https://www.joblinge.de/",
  },
  {
    role: { de: "Gründungsvorsitzender", en: "Founding chairman" },
    years: "2015–2017",
    org: {
      de: "WINitiative – Studierendeninitiative",
      en: "WINitiative – student initiative",
    },
    href: "https://winitiative-augsburg.de/",
  },
  {
    role: {
      de: "Tutor für einen amerikanischen Austauschstudenten",
      en: "Tutor for an American international student",
    },
    years: "2015",
    org: { de: "Erasmus Student Network", en: "Erasmus Student Network" },
    href: "https://esn.org/",
  },
];

function ExternalLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

// hero + photo & facts – identical in every variant
function AboutIntro({ lang }: { lang: Lang }) {
  const t = text[lang];
  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        highlight={t.hero.highlight}
        cta={{ label: t.hero.cta, href: "mailto:info@hschaletzky.com" }}
      >
        {t.hero.text}
      </PageHero>
      <section className="bg-navy-lighter">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-[18rem_1fr]">
          <img
            src="/hannes.jpg"
            width={512}
            height={512}
            alt="Hannes Schaletzky"
            className="mx-auto aspect-square w-56 rounded-3xl object-cover md:w-72"
          />
          <div>
            <SectionHeading eyebrow={t.glance}>
              {t.headings.glance}
            </SectionHeading>
            {/* same rows as the lists further down */}
            <dl className="border-t border-white/10">
              {facts[lang].map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-1 border-b border-white/10 py-4 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6"
                >
                  <dt className="text-slate-400">{fact.label}</dt>
                  <dd className="text-lg font-semibold text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

export default function About() {
  const lang = useLang();
  const t = text[lang];
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutIntro lang={lang} />

        {/* how I work & beliefs */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow={t.work}>
              {t.headings.work}
            </SectionHeading>
            <ul className="grid gap-10 sm:grid-cols-3 sm:gap-6">
              {values.map((value) => (
                <li key={value.title}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {value.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                    {value.title}
                  </h3>
                </li>
              ))}
            </ul>
            <div className="mt-16 rounded-3xl bg-navy-light p-8 sm:p-12">
              <h3 className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                {t.believe}
              </h3>
              <ul className="grid gap-8 md:grid-cols-2 md:gap-12">
                {beliefs[lang].map((belief) => (
                  <li key={belief} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="text-5xl font-bold leading-[0.8] text-teal"
                    >
                      “
                    </span>
                    <p className="text-xl font-semibold leading-snug text-white sm:text-2xl sm:leading-snug">
                      {belief}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* licenses as certificates */}
        <section className="bg-navy-light">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow={t.clock}>
              {t.headings.clock}
            </SectionHeading>
            <div className="grid gap-10 md:grid-cols-2 md:gap-8">
              {licenses.map((license) => (
                // a certificate: paper, double frame, ornament line and a seal
                <div
                  key={license.since}
                  className="rounded-xl bg-[#FBF8F1] p-2 text-navy shadow-2xl shadow-black/30"
                >
                  <div className="relative h-full rounded-lg border-2 border-navy/20 p-1">
                    <div className="h-full rounded-md border border-navy/20 px-6 pb-10 pt-8 text-center sm:px-10">
                      <h3 className="font-serif text-3xl text-navy sm:text-4xl">
                        {license.title[lang]}
                      </h3>
                      <div
                        aria-hidden="true"
                        className="mx-auto mt-4 flex max-w-[12rem] items-center gap-3 text-teal"
                      >
                        <span className="h-px flex-1 bg-navy/20" />
                        <span className="text-sm">✦</span>
                        <span className="h-px flex-1 bg-navy/20" />
                      </div>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-navy/70">
                        {license.detail[lang]}
                      </p>
                      <p className="mt-1 text-sm text-navy/50">
                        {t.since} {license.since}
                      </p>
                    </div>
                    {/* seal */}
                    <span className="absolute -bottom-5 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal shadow-lg ring-4 ring-[#FBF8F1]">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-navy/40">
                        {license.icon}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-16 text-lg leading-relaxed">
              <span className="text-slate-400">{t.besides}</span>
              {interests[lang].map((interest, i, all) => (
                <span key={interest}>
                  <span className="whitespace-nowrap text-white">
                    {interest}
                  </span>
                  {i < all.length - 1 ? (
                    <span className="mx-2 text-teal">·</span>
                  ) : null}{" "}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* giving back – same rows as the values */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow={t.social}>
              {t.headings.social}
            </SectionHeading>
            <ul className="border-t border-white/10">
              {social.map((item) => (
                <li key={item.href} className="border-b border-white/10">
                  <ExternalLink
                    href={item.href}
                    className="group flex items-center justify-between gap-6 py-6"
                  >
                    <span>
                      <span className="block text-xl font-bold text-white group-hover:text-teal-light sm:text-2xl">
                        {item.org[lang]}
                      </span>
                      <span className="mt-1 block text-slate-400">
                        {item.role[lang]}
                        {item.years ? ` · ${item.years}` : null}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-teal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactBox />
      </main>
      <Footer />
    </div>
  );
}
