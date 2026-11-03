import { logos } from "~/components/site/logos";
import SectionHeading from "~/components/site/sectionHeading";
import { useLang } from "~/i18n";

// only quotes with permission to publish them
const testimonials: {
  quote: { de: string; en: string };
  name: string;
  role: string;
  href: string;
  logo: { src: string; width: number; height: number };
}[] = [
  {
    quote: {
      de: "Hannes hat unsere App von Vercel in eine eigene, sichere AWS-Umgebung überführt. Mit Staging-System und automatisierten Tests sind wir für den Umgang mit sensiblen Vorsorgedaten heute deutlich besser aufgestellt.",
      en: "Hannes moved our app from Vercel to its own secure AWS environment. With a staging system and automated tests, we are now much better prepared to handle sensitive health care directive data.",
    },
    name: "Dr. Katharina Eller",
    role: "Co-Founder & CTO, tilde ventures GmbH",
    href: "https://www.linkedin.com/in/dr-katharina-eller-a20988101/",
    logo: logos.tilde,
  },
  {
    quote: {
      de: "Unsere Integrationsplattform wurde von Hannes eigenständig aufgebaut und wird bis heute von ihm betreut. Sie verarbeitet jede Woche Hunderte Integrationen auf echten Kundendaten – zuverlässig und ohne dass wir uns darum Sorgen machen müssen.",
      en: "Hannes built our integration platform on his own and still looks after it today. It processes hundreds of integrations every week on real customer data – reliably, and without us having to worry about it.",
    },
    name: "Tien Hào Vu",
    role: "Head of Service & Management Consulting, blu Systems GmbH",
    href: "https://www.linkedin.com/in/tien-h%C3%A0o-vu-89a447122/",
    logo: logos.blu,
  },
];

// stacked rows without boxes – who on the left, the quote on the right
// (on phones the name comes below the quote)
export default function Testimonials({
  className = "",
}: {
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
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="grid gap-6 py-10 md:grid-cols-[18rem_1fr] md:gap-12"
            >
              <figcaption className="order-last flex items-center gap-4 md:order-first md:flex-col md:items-start">
                <img
                  src={testimonial.logo.src}
                  width={testimonial.logo.width}
                  height={testimonial.logo.height}
                  loading="lazy"
                  alt=""
                  className="h-10 w-auto rounded-lg"
                />
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
                    {testimonial.role}
                  </span>
                </a>
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
