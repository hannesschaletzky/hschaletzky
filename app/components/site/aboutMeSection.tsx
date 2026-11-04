import { localize, useLang } from "~/i18n";

// who is behind the offer: photo and a few sentences, for the website pages
export default function AboutMeSection({ className }: { className?: string }) {
  const lang = useLang();
  const de = lang === "de";
  return (
    <section className={className}>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 sm:py-24 md:flex-row md:text-left">
        <img
          src="/hannes.jpg"
          width={512}
          height={512}
          loading="lazy"
          alt="Hannes Schaletzky"
          className="h-40 w-40 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            {de ? "Ihr Ansprechpartner" : "Your contact"}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            {de
              ? "Sie sprechen immer direkt mit mir."
              : "You always talk to me directly."}
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            {de
              ? "Ich bin Hannes, Software Engineer aus Berlin, seit 2019 im Beruf und seit 2024 selbstständig. Neben Cloud-Projekten für Unternehmen baue und betreue ich Websites für kleine Betriebe und Vereine, ohne Hotline und ohne Warteschleife."
              : "I'm Hannes, a software engineer from Berlin, in the job since 2019 and freelance since 2024. Besides cloud projects for companies, I build and look after websites for small businesses and clubs, with no hotline and no waiting line."}
          </p>
          <a
            href={localize("/about", lang)}
            className="mt-4 inline-block font-semibold text-teal hover:text-teal-light"
          >
            {de ? "Mehr über mich" : "More about me"} →
          </a>
        </div>
      </div>
    </section>
  );
}
