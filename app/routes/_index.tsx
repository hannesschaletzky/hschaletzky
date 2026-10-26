import type { MetaFunction } from "@remix-run/node";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import Mountains from "~/components/site/mountains";
import Offers from "~/components/site/offers";
import { businessJsonLd, pageMeta } from "~/components/site/pageMeta";
import { siteNav } from "~/components/site/siteNav";
import StackSection from "~/components/site/stackSection";
import Testimonials from "~/components/site/testimonials";

// index: hero with the mountains, testimonials, the two offers, stack and contact

const description =
  "Freelance software engineer in Berlin – backend, integration and cloud solutions with Node.js/TypeScript and AWS, plus websites, hosting and maintenance for small businesses and clubs.";

export const meta: MetaFunction = () => [
  ...pageMeta({
    title: "Hannes Schaletzky | Software Engineer in Berlin",
    description,
    path: "/",
  }),
  businessJsonLd,
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header links={siteNav} />

      <main>
        {/* hero – -mb-px: overlaps the next section so no dark hairline shows */}
        <section className="relative -mb-px h-[56rem] overflow-hidden sm:h-[60rem]">
          <Mountains heightClass="h-[35%] sm:h-[42%]" />
          <div className="relative mx-auto max-w-4xl px-4 pt-14 text-center sm:px-6 sm:pt-20">
            {/* who – what – next step, nothing else */}
            <img
              src="/hannes.jpg"
              alt="Hannes Schaletzky"
              className="mx-auto mb-10 h-28 w-28 rounded-full object-cover ring-2 ring-teal/50 ring-offset-4 ring-offset-navy sm:h-36 sm:w-36"
            />
            <h1 className="text-4xl font-light leading-tight text-white sm:text-6xl">
              Reliable software,
              <br />
              <span className="font-semibold text-teal">
                from idea to production.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg">
              I&apos;m Hannes, a freelance software engineer in Berlin – for
              cloud platforms and websites.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@hschaletzky.com"
                className="rounded-full bg-teal px-6 py-3 font-semibold text-navy transition hover:bg-teal-light"
              >
                Get in touch
              </a>
              <a
                href="#offers"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/50"
              >
                See what I do
              </a>
            </div>
          </div>
        </section>

        <Testimonials className="bg-navy-lighter" />
        <Offers />
        <StackSection />

        <ContactBox />
      </main>

      <Footer />
    </div>
  );
}
