import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { siteNav } from "~/components/site/siteNav";

export const meta: MetaFunction = () => [
  { title: "Contact | Hannes Schaletzky" },
  {
    name: "description",
    content:
      "Get in touch with Hannes Schaletzky – freelance software engineer in Berlin.",
  },
];

const mail = "info@hschaletzky.com";

const channels = [
  {
    title: "Mail",
    text: "The fastest way to reach me.",
    label: mail,
    href: `mailto:${mail}`,
  },
  {
    title: "LinkedIn",
    text: "Client work and recommendations.",
    label: "linkedin.com/in/hannesschaletzky",
    href: "https://linkedin.com/in/hannesschaletzky/",
  },
  {
    title: "GitHub",
    text: "Code and side projects.",
    label: "github.com/hannesschaletzky",
    href: "https://github.com/hannesschaletzky",
  },
  {
    title: "CV",
    text: "Happy to send it on request.",
    label: "Ask for my CV",
    href: `mailto:${mail}?subject=CV%20request`,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header links={siteNav} />

      <main>
        <PageHero
          eyebrow="Contact"
          title="Let's talk"
          highlight="about your project."
          cta={{ label: "Write me", href: `mailto:${mail}` }}
        >
          Whether it&apos;s a cloud platform or your
          club&apos;s website – drop me a line and I&apos;ll get back to you.
        </PageHero>

        <section className="bg-navy-lighter">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-24 sm:px-6 md:grid-cols-2">
            {channels.map((channel) => {
              const external = channel.href.startsWith("http");
              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  {...(external && { target: "_blank", rel: "noreferrer" })}
                  className="group rounded-2xl border border-white/10 p-6 transition hover:border-teal/50"
                >
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                    {channel.title}
                  </h2>
                  <p className="mt-2">{channel.text}</p>
                  <p className="mt-4 break-all text-lg font-semibold text-white group-hover:text-teal">
                    {channel.label} →
                  </p>
                </a>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
