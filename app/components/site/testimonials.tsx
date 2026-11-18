import { logos } from "~/components/site/logos";
import SectionHeading from "~/components/site/sectionHeading";
import { useLang } from "~/i18n";

// only quotes with permission to publish them
// "cloud" ones show on the home and cloud pages, "websites" ones on the websites page
type Testimonial = {
  group: "cloud" | "websites";
  quote: { de: string; en: string };
  name: string;
  role: { de: string; en: string };
  // link and logo only where the client agreed to it
  href?: string;
  logo?: { src: string; width: number; height: number; onWhite?: boolean };
};

const testimonials: Testimonial[] = [
  {
    quote: {
      de: "Hannes hat unsere App von Vercel in eine eigene, sichere AWS-Umgebung überführt. Mit Staging-System und automatisierten Tests sind wir für den Umgang mit sensiblen Vorsorgedaten heute deutlich besser aufgestellt.",
      en: "Hannes moved our app from Vercel to its own secure AWS environment. With a staging system and automated tests, we are now much better prepared to handle sensitive health care directive data.",
    },
    group: "cloud",
    name: "Dr. Katharina Eller",
    role: {
      de: "Co-Founder & CTO, tilde ventures GmbH",
      en: "Co-Founder & CTO, tilde ventures GmbH",
    },
    href: "https://www.linkedin.com/in/dr-katharina-eller-a20988101/",
    logo: logos.tilde,
  },
  {
    quote: {
      de: "Unsere Integrationsplattform wurde von Hannes eigenständig aufgebaut und wird bis heute von ihm betreut. Sie verarbeitet jede Woche Hunderte Integrationen auf echten Kundendaten – zuverlässig und ohne dass wir uns darum Sorgen machen müssen.",
      en: "Hannes built our integration platform on his own and still looks after it today. It processes hundreds of integrations every week on real customer data – reliably, and without us having to worry about it.",
    },
    group: "cloud",
    name: "Tien Hào Vu",
    role: {
      de: "Head of Service & Management Consulting, blu Systems GmbH",
      en: "Head of Service & Management Consulting, blu Systems GmbH",
    },
    href: "https://www.linkedin.com/in/tien-h%C3%A0o-vu-89a447122/",
    logo: logos.blu,
  },
  // Google reviews, shortened at the […]
  {
    group: "websites",
    quote: {
      de: "Ich bin sehr zufrieden mit Hannes! Als Kunde kann ich sagen, dass die Server zuverlässig laufen und das Hosting einwandfrei funktioniert. Auch beim Aufbau meiner Website wurde ich super unterstützt. Schneller Service, kompetente Hilfe und insgesamt eine klare Empfehlung!",
      en: "I'm very happy with Hannes! As a client I can say that the servers run reliably and the hosting works flawlessly. I also got great support building my website. Fast service, competent help and overall a clear recommendation!",
    },
    name: "Lucas Thiel",
    role: { de: "Beach Factory", en: "Beach Factory" },
    href: "https://www.beach-factory.com/",
    logo: logos.beachFactory,
  },
  {
    group: "websites",
    quote: {
      de: "Hannes hat mir bei meiner bestehenden Website-Lösung komplett remote geholfen. Nach Rücksprache mit mir hat er die Website optimiert (UX, Performance, Sicherheit). Sie ist jetzt übersichtlicher, schneller, besser auffindbar und das Erscheinungsbild wirkt professioneller. […] Hannes erklärt alles verständlich, auf Augenhöhe und beantwortet Nachfragen schnell und gewissenhaft.",
      en: "Hannes helped me with my existing website entirely remotely. After talking it through with me, he optimised the website (UX, performance, security). It is now clearer, faster, easier to find, and looks more professional. […] Hannes explains everything clearly, as an equal, and answers follow-up questions quickly and conscientiously.",
    },
    name: "Lena Z.",
    role: { de: "Google-Rezension", en: "Google review" },
  },
];

// stacked rows without boxes – who on the left, the quote on the right
// (on phones the name comes below the quote)
export default function Testimonials({
  group = "cloud",
  className = "",
}: {
  group?: Testimonial["group"];
  className?: string;
}) {
  const lang = useLang();

  return (
    <section aria-labelledby="testimonials" className={className}>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading eyebrow={lang === "de" ? "Stimmen" : "Kind words"}>
          <span id="testimonials">
            {lang === "de" ? "Was Kunden sagen." : "What clients say."}
          </span>
        </SectionHeading>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {testimonials
            .filter((x) => x.group === group)
            .map((testimonial) => (
            <figure
              key={testimonial.name}
              className="grid gap-6 py-10 md:grid-cols-[18rem_1fr] md:gap-12"
            >
              <figcaption className="order-last flex items-center gap-4 md:order-first md:flex-col md:items-start">
                {testimonial.logo ? (
                  <img
                    src={testimonial.logo.src}
                    width={testimonial.logo.width}
                    height={testimonial.logo.height}
                    loading="lazy"
                    alt=""
                    className={`h-10 w-auto rounded-lg ${testimonial.logo.onWhite ? "bg-white px-2 py-1" : ""}`}
                  />
                ) : (
                  // no logo: the initial in a circle, like on Google
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/15 font-bold text-teal"
                  >
                    {testimonial.name[0]}
                  </span>
                )}
                {testimonial.href ? (
                  <a
                    href={testimonial.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <span className="flex items-center gap-1.5 font-semibold text-white transition-colors group-hover:text-teal-light">
                      {testimonial.name}
                      <span
                        aria-hidden="true"
                        className="text-teal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </span>
                    <span className="block text-sm text-slate-400">
                      {testimonial.role[lang]}
                    </span>
                  </a>
                ) : (
                  <span className="block">
                    <span className="block font-semibold text-white">
                      {testimonial.name}
                    </span>
                    <span className="block text-sm text-slate-400">
                      {testimonial.role[lang]}
                    </span>
                  </span>
                )}
              </figcaption>
              <blockquote className="border-l border-teal pl-6 text-lg leading-relaxed text-slate-100 sm:text-xl sm:leading-relaxed">
                {lang === "de" ? "„" : "“"}
                {testimonial.quote[lang]}
                {lang === "de" ? "“" : "”"}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
