import Peak from "~/components/site/peak";
import { calUrl } from "~/components/site/siteNav";

const mail = "info@hschaletzky.com";

export default function ContactBox() {
  return (
    <section id="contact" className="scroll-mt-20 px-4 pb-24 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-teal px-8 py-16 text-navy sm:px-16">
        <Peak className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-auto text-navy/10" />
        <h2 className="relative max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
          Let&apos;s talk about your project.
        </h2>
        <p className="relative mt-4 max-w-xl text-lg">
          Whether it&apos;s a cloud platform or your club&apos;s website – drop
          me a line or book a call.
        </p>
        <div className="relative mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${mail}`}
            className="rounded-full bg-navy px-6 py-3 font-semibold text-white transition hover:bg-navy-lighter"
          >
            {mail}
          </a>
          <a
            href={calUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-navy/30 px-6 py-3 font-semibold transition hover:border-navy"
          >
            Book an intro call
          </a>
          <a
            href="https://linkedin.com/in/hannesschaletzky/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-navy/30 px-6 py-3 font-semibold transition hover:border-navy"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
