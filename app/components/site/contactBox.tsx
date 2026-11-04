import Peak from "~/components/site/peak";
import { calUrl, phone } from "~/components/site/siteNav";
import { useLang } from "~/i18n";

const mail = "info@hschaletzky.com";

export default function ContactBox() {
  const de = useLang() === "de";
  return (
    <section id="contact" className="scroll-mt-20 px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-teal px-8 py-16 text-navy sm:px-16">
        <Peak className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-auto text-navy/10" />
        <h2 className="relative max-w-xl text-3xl font-bold leading-tight sm:text-4xl sm:leading-10">
          {de
            ? "Lassen Sie uns über Ihr Projekt sprechen."
            : "Let's talk about your project."}
        </h2>
        <p className="relative mt-4 max-w-xl text-lg">
          {de
            ? "Ob Cloud-Plattform oder Vereinswebsite: Schreiben Sie mir, rufen Sie an oder buchen Sie ein kostenloses Erstgespräch."
            : "Whether it's a cloud platform or your club's website, drop me a line, give me a call or book a free intro call."}
        </p>
        <div className="relative mt-8 flex flex-wrap gap-4">
          {/* the free call is the main action, mail and phone second */}
          <a
            href={calUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-navy px-6 py-3 font-semibold text-white transition hover:bg-navy-lighter"
          >
            {de ? "Kostenloses Erstgespräch buchen" : "Book a free intro call"}
          </a>
          <a
            href={`mailto:${mail}`}
            className="rounded-full border border-navy/30 px-6 py-3 font-semibold transition hover:border-navy"
          >
            {mail}
          </a>
          <a
            href={phone.href}
            className="rounded-full border border-navy/30 px-6 py-3 font-semibold transition hover:border-navy"
          >
            {phone.label}
          </a>
        </div>
      </div>
    </section>
  );
}
