import type { MetaFunction } from "@remix-run/node";
import type { ReactNode } from "react";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import Peak from "~/components/site/peak";
import { siteNav } from "~/components/site/siteNav";
import { pageMeta, personJsonLd } from "~/components/site/pageMeta";

export const meta: MetaFunction = () => [
  ...pageMeta({
    title: "About me | Hannes Schaletzky, Software Engineer in Berlin",
    description:
      "Hannes Schaletzky – freelance software engineer in Berlin, ski instructor and beach volleyball coach. How I work, what I believe and what I do besides code.",
    path: "/about",
  }),
  personJsonLd,
];

const facts = [
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
];

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

const beliefs = [
  "Honest communication is the best motivation.",
  "Written async project and company updates are underrated.",
];

const licenses = [
  {
    title: "Ski instructor",
    detail: "Austrian Landeslehrer 1",
    since: "2019",
    icon: <Peak className="h-6 w-auto text-navy" />,
  },
  {
    title: "Beach volleyball coach",
    detail: "DOSB B-license",
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

const interests = [
  "Weight training",
  "Cycling",
  "Sustainability",
  "Self-development",
  "Nutrition",
  "Private coding projects",
];

// newest first
const social = [
  {
    role: "Mentor in Berlin",
    years: "2020–2021",
    org: "Joblinge",
    href: "https://www.joblinge.de/",
  },
  {
    role: "Founding chairman",
    years: "2015–2017",
    org: "WINitiative – student initiative",
    href: "https://winitiative-augsburg.de/",
  },
  {
    role: "Tutor for an American international student",
    years: "2015",
    org: "Erasmus Student Network",
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
function AboutIntro() {
  return (
    <>
      <PageHero
        eyebrow="About me"
        title="Hi, I'm Hannes –"
        highlight="nice to meet you."
        cta={{ label: "Get in touch", href: "mailto:info@hschaletzky.com" }}
      >
        Engineer by trade, coach at heart. I explain things clearly, take
        ownership and stay around after go-live.
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
            <h2 className="mb-10 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              At a glance
            </h2>
            {/* same rows as the lists further down */}
            <dl className="border-t border-white/10">
              {facts.map((fact) => (
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
  return (
    <div className="min-h-screen">
      <Header links={siteNav} />
      <main>
        <AboutIntro />

        {/* how I work & beliefs */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <h2 className="mb-10 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              How I work
            </h2>
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
                What I believe
              </h3>
              <ul className="grid gap-8 md:grid-cols-2 md:gap-12">
                {beliefs.map((belief) => (
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
            <h2 className="mb-10 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              Off the clock
            </h2>
            <div className="grid gap-10 md:grid-cols-2 md:gap-8">
              {licenses.map((license) => (
                // a certificate: paper, double frame, ornament line and a seal
                <div
                  key={license.title}
                  className="rounded-xl bg-[#FBF8F1] p-2 text-navy shadow-2xl shadow-black/30"
                >
                  <div className="relative h-full rounded-lg border-2 border-navy/20 p-1">
                    <div className="h-full rounded-md border border-navy/20 px-6 pb-10 pt-8 text-center sm:px-10">
                      <h3 className="font-serif text-3xl text-navy sm:text-4xl">
                        {license.title}
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
                        {license.detail}
                      </p>
                      <p className="mt-1 text-sm text-navy/50">
                        since {license.since}
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
              <span className="text-slate-400">Besides that: </span>
              {interests.map((interest, i) => (
                <span key={interest}>
                  <span className="whitespace-nowrap text-white">
                    {interest}
                  </span>
                  {i < interests.length - 1 ? (
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
            <h2 className="mb-10 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              Social work
            </h2>
            <ul className="border-t border-white/10">
              {social.map((item) => (
                <li key={item.org} className="border-b border-white/10">
                  <ExternalLink
                    href={item.href}
                    className="group flex items-center justify-between gap-6 py-6"
                  >
                    <span>
                      <span className="block text-xl font-bold text-white group-hover:text-teal-light sm:text-2xl">
                        {item.org}
                      </span>
                      <span className="mt-1 block text-slate-400">
                        {item.role}
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
