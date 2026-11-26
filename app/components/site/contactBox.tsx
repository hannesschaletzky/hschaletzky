import Peak from "~/components/site/peak";
import { useContactLinks } from "~/components/site/contactTopic";
import { mail, phone } from "~/components/site/siteNav";
import { localize, useLang } from "~/i18n";

// the closing box on every page: photo with the about link on the left, centred
// in the space before the text, the ways to get in touch on the right
// calm on the dark page: only the call button is teal
// the same gap above the box on every page: the section above ends with its
// own padding, the box adds the rest
export default function ContactBox({
  above,
}: {
  // the colour of the section above, e.g. "--color-navy-lighter": it then runs
  // on behind the gap and the upper half of the box, without a dark band
  above?: string;
}) {
  const lang = useLang();
  const de = lang === "de";
  // on an offer page the mail subject and the booking note name that offer
  const links = useContactLinks();
  // the box always sits right above the footer: its lower half lies on the
  // footer colour, so both belong together
  return (
    <section
      id="contact"
      style={above ? { background: `var(${above})` } : undefined}
      className="scroll-mt-20 pt-8 sm:pt-24"
    >
      {/* the colour changes exactly at the middle of the box */}
      <div
        style={{
          background: `linear-gradient(to bottom, ${above ? `var(${above})` : "transparent"} 50%, var(--color-navy-light) 50%)`,
        }}
        className="px-4 sm:px-6"
      >
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-10 sm:pr-12 border border-white/10 bg-navy-lighter md:pl-0">
          <Peak className="pointer-events-none absolute -bottom-16 -right-10 h-60 w-auto text-navy/60" />
          <div className="relative grid gap-10 md:grid-cols-[18.5rem_1fr] md:items-center md:gap-0">
            {/* photo and text are one link, so both share the hover */}
            <a
              href={localize("/about", lang)}
              className="group flex flex-col items-center gap-4 justify-self-center"
            >
              <img
                src="/hannes-portrait.jpg"
                width={960}
                height={960}
                loading="lazy"
                alt=""
                className="h-32 w-32 rounded-full object-cover ring-4 ring-white/15 transition group-hover:-translate-y-0.5 group-hover:ring-white/40"
              />
              <span className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.15em] text-slate-300 transition group-hover:text-white">
                {de ? "Mehr über mich" : "More about me"}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </a>
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white">
                {de ? "Lassen Sie uns sprechen." : "Let's talk."}
              </h2>
              <p className="mt-3 max-w-xl text-lg text-slate-300">
                {de
                  ? "Sie sprechen immer direkt mit mir. Das Erstgespräch ist kostenlos."
                  : "You always talk to me directly. The intro call is free."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {/* the free call is the main action, mail and phone second */}
                <a
                  href={links.cal}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-teal px-5 py-2.5 font-semibold text-navy transition hover:bg-teal-light"
                >
                  {de
                    ? "Kostenloses Erstgespräch buchen"
                    : "Book a free intro call"}
                </a>
                <a
                  href={links.mail}
                  className="rounded-full border px-5 py-2.5 font-semibold transition border-white/20 text-white hover:border-white/50"
                >
                  {mail}
                </a>
                <a
                  href={phone.href}
                  className="rounded-full border px-5 py-2.5 font-semibold transition border-white/20 text-white hover:border-white/50"
                >
                  {phone.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
