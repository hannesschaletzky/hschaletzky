import type { MetaFunction } from "@remix-run/node";
import type { ReactNode } from "react";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import SectionHeading from "~/components/site/sectionHeading";
import { siteNav } from "~/components/site/siteNav";

export const meta: MetaFunction = () => [
  { title: "About | Hannes Schaletzky" },
  {
    name: "description",
    content:
      "Hannes Schaletzky – freelance software engineer in Berlin. Values, beliefs, coaching licenses and what I do besides code.",
  },
];

const facts = [
  { label: "Freelance since", value: "2024" },
  { label: "Experience", value: `${new Date().getFullYear() - 2019}+ years` },
  { label: "Education", value: "B.Sc. business informatics, University of Augsburg" },
  { label: "Languages", value: "German (native), English (fluent), French (basic)" },
];

const values = [
  { title: "Focus on impact", text: "Build what moves the project forward." },
  { title: "Take ownership", text: "From the first analysis to production – and after." },
  { title: "Open by default", text: "Clear, honest communication and visible progress." },
];

const beliefs = [
  "Honest communication is the best motivation.",
  "Written async project and company updates are underrated.",
];

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-teal underline underline-offset-4 hover:text-teal-light"
    >
      {children}
    </a>
  );
}

export default function Portrait() {
  return (
    <div className="min-h-screen">
      <Header links={siteNav} />

      <main>
        <PageHero
          eyebrow="About me"
          title="Hi, I'm Hannes –"
          highlight="nice to meet you."
          cta={{ label: "Get in touch", href: "mailto:info@hschaletzky.com" }}
        >
          Freelance software engineer in Berlin. I care about software that
          works – and about the people who use it.
        </PageHero>

        {/* photo & facts */}
        <section className="bg-navy-lighter">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-[18rem_1fr]">
            <img
              src="/hannes.jpg"
              alt="Hannes Schaletzky"
              className="mx-auto aspect-square w-56 rounded-3xl object-cover md:w-72"
            />
            <dl className="grid gap-6 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-lg text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* values & beliefs */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow="How I work">
              Values I bring to every project.
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-navy-light p-6"
                >
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  <p className="mt-2 leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 grid gap-10 md:grid-cols-2">
              {beliefs.map((belief) => (
                <figure key={belief} className="relative pl-10">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 font-serif text-5xl leading-none text-teal"
                  >
                    “
                  </span>
                  <blockquote className="text-xl font-light leading-relaxed text-white">
                    {belief}
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* off the clock */}
        <section className="bg-navy-light">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Off the clock">
                Coaching & licenses.
              </SectionHeading>
              <ul className="space-y-3 text-lg text-white">
                <li>
                  Ski instructor{" "}
                  <span className="text-slate-400">(Landeslehrer 1)</span>
                </li>
                <li>
                  Beach volleyball coach{" "}
                  <span className="text-slate-400">(B-license)</span>
                </li>
              </ul>
              <p className="mt-6 leading-relaxed">
                Besides that: weight training, cycling, sustainability,
                self-development, nutrition – and private coding projects.
              </p>
            </div>
            <div>
              <SectionHeading eyebrow="Social work">
                Giving back.
              </SectionHeading>
              <ul className="space-y-3 leading-relaxed">
                <li>
                  Website support for the{" "}
                  <ExternalLink href="https://freundeskreis-peutinger.de/">
                    Freundeskreis Peutinger-Gymnasium Augsburg e. V.
                  </ExternalLink>
                </li>
                <li>
                  Founding chairman of the student initiative{" "}
                  <ExternalLink href="https://winitiative-augsburg.de/">
                    WINitiative
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://www.joblinge.de/">Joblinge</ExternalLink>{" "}
                  mentor in Berlin
                </li>
                <li>
                  <ExternalLink href="https://www.erasmusplus.de/">Erasmus</ExternalLink>{" "}
                  tutor for a US student
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="pt-24">
          <ContactBox />
        </div>
      </main>

      <Footer />
    </div>
  );
}
