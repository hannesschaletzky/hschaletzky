import type { MetaFunction } from "react-router";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import { langFromParams, langLoader, useLang } from "~/i18n";
import privateProjects from "~/projects/unpaid.json";

export const loader = langLoader;

const text = {
  de: {
    title: "Hobbyprojekte | Hannes Schaletzky",
    description:
      "Hobbyprojekte von Hannes Schaletzky: Web-Apps, Tools und Experimente für Freunde, Vereine und mich selbst.",
    eyebrow: "Hobbyprojekte",
    title1: "Gebaut aus Spaß",
    highlight: "und um Neues zu lernen.",
    cta: "Auf GitHub ansehen",
    intro:
      "Web-Apps, Tools und Experimente, die ich neben der Kundenarbeit gebaut habe. Manche ernst gemeint, manche nur für eine Weihnachtsfeier.",
    website: "Website",
    code: "Code",
  },
  en: {
    title: "Side Projects | Hannes Schaletzky",
    description:
      "Side projects by Hannes Schaletzky: web apps, tools and experiments built for friends, clubs and myself.",
    eyebrow: "Side projects",
    title1: "Built for fun,",
    highlight: "and to learn something new.",
    cta: "See them on GitHub",
    intro:
      "Web apps, tools and experiments I built besides client work. Some serious, some just for a Christmas party.",
    website: "Website",
    code: "Code",
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/side-projects",
    lang,
  });
};

// German titles, by repository – the JSON holds the English ones for both sites
const germanTitles: Record<string, string> = {
  "physio-musterfrau": "Beispiel-Website für eine Physiotherapie-Praxis",
  "sv-musterstadt": "Beispiel-Website für einen Sportverein",
  "tischlerei-mustermann": "Beispiel-Website für eine Tischlerei",
  hschaletzky: "Meine Website auf eigenem Server",
  ugly_sweater:
    "Abstimmungs-Tool für den hässlichsten Weihnachtspulli als Web-App",
  "terraform-digitalocean-droplet":
    "DigitalOcean-Droplet mit Terraform und cloud-init bereitstellen",
  beachstats_scraper:
    "Web-Scraper für Ergebnisse deutscher Beachvolleyball-Turniere",
  quarantine_list: "Eine Einkaufsliste für Menschen in Corona-Quarantäne",
  "rent-a-techy": "Eine Plattform, um Tech-Leute zu mieten: rent-a-techy",
  surfeasy: "Eine Web-App, um gute Surfspots in Portugal zu finden: surf-easy",
  citefight: "citefight, ein Multiplayer-Ratespiel mit Tweets",
  CycleLogVC: "Eine iOS-App, die Ihre 🚲-Touren per GPS aufzeichnet",
  nightlive: "iOS-App, um Bars und Clubs zum Feiern zu finden",
};

const germanTags: Record<string, string> = {
  Cycling: "Radfahren",
};

const germanEmployers: Record<string, string> = {
  myself: "für mich",
  "christmas party": "Weihnachtsfeier",
};

// titles are stored in lower case for the classic site – capitalize the first
// word, unless it is a name with its own casing like "iOS"
function capitalize(title: string) {
  const firstWord = title.split(" ")[0];
  if (/[A-Z]/.test(firstWord)) return title;
  return title.charAt(0).toUpperCase() + title.slice(1);
}

const projects = privateProjects.map((project) => {
  const repo = project.repo.split("/").pop() ?? "";
  return {
    ...project,
    year: project.from.split(".")[1],
    title: {
      en: capitalize(project.title),
      de: germanTitles[repo] ?? capitalize(project.title),
    },
    employer: {
      en: project.employer,
      de: germanEmployers[project.employer] ?? project.employer,
    },
    stack: project.stack
      .filter((item) => item !== "")
      .map((item) => ({ en: item, de: germanTags[item] ?? item })),
  };
});

export default function SideProjects() {
  const lang = useLang();
  const t = text[lang];
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <PageHero
          eyebrow={t.eyebrow}
          title={t.title1}
          highlight={t.highlight}
          cta={{
            label: t.cta,
            href: "https://github.com/hannesschaletzky",
          }}
        >
          {t.intro}
        </PageHero>

        <section className="bg-navy-lighter">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              // on hover the card lifts, a teal line grows along the top edge
              // and the title lights up
              <article
                key={project.repo}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 p-6 transition duration-300 hover:border-teal/40 hover:bg-navy-light hover:shadow-2xl hover:shadow-black/30 motion-safe:hover:-translate-y-1"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-teal transition-transform duration-500 group-hover:scale-x-100"
                />
                <p className="text-sm text-slate-400">
                  {project.year} · {project.employer[lang]}
                </p>
                <h2 className="mt-2 text-lg font-bold leading-snug text-white transition-colors group-hover:text-teal-light">
                  {project.title[lang]}
                </h2>
                <ul className="mt-4 flex flex-1 flex-wrap content-start gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item.en}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs transition-colors group-hover:bg-white/10 group-hover:text-white"
                    >
                      {item[lang]}
                    </li>
                  ))}
                </ul>
                {(project.url !== "" || project.repo !== "") && (
                  <div className="mt-6 flex gap-4 text-sm font-semibold">
                    {project.url !== "" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-teal hover:text-teal-light"
                      >
                        {t.website} →
                      </a>
                    )}
                    {project.repo !== "" && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-teal hover:text-teal-light"
                      >
                        {t.code} →
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <div className="pt-16 sm:pt-24">
          <ContactBox />
        </div>
      </main>

      <Footer />
    </div>
  );
}
