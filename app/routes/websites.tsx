import type { MetaFunction } from "@remix-run/node";
import ClimbSteps from "~/components/site/climbSteps";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import SectionHeading from "~/components/site/sectionHeading";
import { siteNav } from "~/components/site/siteNav";

export const meta: MetaFunction = () =>
  pageMeta({
    title: "Websites for Small Businesses & Clubs | Hannes Schaletzky",
    description:
      "Website check-up from 150 €, new websites from 990 €, hosting from 49 € a month – personal and fair, for small businesses, clubs and freelancers.",
    path: "/websites",
  });

const mail = "mailto:info@hschaletzky.com?subject=Website%20inquiry";

const offers = [
  {
    title: "Website check-up",
    price: "from 150 €",
    text: "I check your existing website for technology, security and how well it can be found – and tell you in plain words what to improve. The price depends on the scope, e.g. number of pages, languages or a shop.",
  },
  {
    title: "Website creation",
    price: "from 990 €",
    text: "A modern, fast website that looks good on every device and that you can understand. Includes up to 5 pages in one language, imprint and privacy policy – bigger sites, shops or more languages depending on the effort.",
  },
  {
    title: "Hosting & maintenance",
    price: "from 49 € / month",
    text: "Updates, security and technical help when something gets stuck – so you don't have to think about it. Includes hosting, SSL, backups and small changes up to 30 minutes a month – anything beyond that depending on the effort.",
  },
  {
    title: "AI & automation",
    price: "on request",
    text: "Automate recurring work such as mails, appointments and routines. We start by looking at where you lose the most time – and I only build what really saves you work.",
  },
];

const steps = [
  {
    title: "Get in touch",
    text: "Write me or book a call and tell me what you need.",
  },
  {
    title: "Clear offer",
    text: "You get a proposal with a fair price before any work starts.",
  },
  {
    title: "Online & cared for",
    text: "Your website goes live – and I stay your contact afterwards.",
  },
];

const references = [
  {
    name: "Deutsch-Französische Gesellschaft Augsburg und Schwaben e.\u00a0V.",
    work: "Technical update & maintenance",
    year: "2024",
    url: "https://dfg-augsburg.eu/",
  },
  {
    name: "Freundeskreis Peutinger-Gymnasium Augsburg e.\u00a0V.",
    work: "Technical maintenance",
    year: "since 2023",
    url: "https://freundeskreis-peutinger.de/",
  },
];

const faqs = [
  {
    question: "Do I need any technical knowledge?",
    answer:
      "No. I take care of the technology and explain everything in plain words.",
  },
  {
    question: "Can you take over my existing website?",
    answer:
      "Yes. After a check-up I'll tell you whether I can maintain it as it is or whether a rebuild makes more sense.",
  },
  {
    question: "How long does a new website take?",
    answer:
      "Usually 2–4 weeks, depending on how quickly texts and images are ready.",
  },
  {
    question: "Do you work on-site?",
    answer: "Yes – on-site or remote, whatever suits you best.",
  },
];

export default function Websites() {
  return (
    <div className="min-h-screen">
      <Header links={siteNav} />

      <main>
        <PageHero
          eyebrow="For small businesses & clubs"
          title="Your website,"
          highlight="simply taken care of."
          cta={{ label: "Ask for a website", href: mail }}
        >
          Personal, fair, on-site or remote – for self-employed people, small
          businesses and clubs.
        </PageHero>

        {/* offers */}
        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow="Offers & prices">
              Clear prices, no surprises.
            </SectionHeading>
            <div className="grid gap-6 sm:grid-cols-2">
              {offers.map((offer) => (
                <div
                  key={offer.title}
                  className="flex flex-col rounded-2xl border border-white/10 p-6"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-bold text-white">
                      {offer.title}
                    </h3>
                    <p className="shrink-0 font-semibold text-teal">
                      {offer.price}
                    </p>
                  </div>
                  <p className="mt-3 leading-relaxed">{offer.text}</p>
                </div>
              ))}
            </div>
            {/* final prices incl. VAT, required when consumers may order (PAngV) */}
            <p className="mt-6 text-sm text-slate-400">
              All prices incl. 19 % VAT.
            </p>
          </div>
        </section>

        {/* process */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow="How it works">
              Three steps to your website.
            </SectionHeading>
            <ClimbSteps steps={steps} />
          </div>
        </section>

        {/* reference */}
        <section className="bg-navy-light">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow="References">
              Websites I look after.
            </SectionHeading>
            <div className="grid gap-6 md:grid-cols-2">
              {references.map((reference) => (
                <a
                  key={reference.url}
                  href={reference.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-white/10 p-6 transition hover:border-teal/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                      {reference.work}
                    </p>
                    <p className="shrink-0 rounded-full border border-white/10 px-3 py-0.5 text-sm font-semibold text-white">
                      {reference.year}
                    </p>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {reference.name}
                  </h3>
                  <p className="mt-4 font-semibold text-white group-hover:text-teal">
                    {reference.url.replace("https://", "").replace(/\/$/, "")} →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* faq */}
        <section>
          <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
            <SectionHeading eyebrow="FAQ">Good to know.</SectionHeading>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-5">
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-2 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
