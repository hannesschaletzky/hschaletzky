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

type L = { de: string; en: string };
type Project = {
  // repositories in unpaid.json: links and year come from there
  repos: string[];
  title: L;
  text: L;
  // a few telling tools, the full list stays in the JSON (classic site)
  stack: string[];
  // several live sites in one row get their own link labels
  linkLabels?: L[];
};

// grouped by kind instead of one long list; inside a group, live ones first
const groups: { title: L; projects: Project[] }[] = [
  {
    title: { de: "Websites", en: "Websites" },
    projects: [
      {
        repos: ["hschaletzky"],
        title: {
          de: "Diese Website auf eigenem Server",
          en: "This website on its own server",
        },
        text: {
          de: "Die Seite, auf der Sie gerade sind: eigener Server bei Hetzner, Infrastruktur als Code und ein automatisches Deployment bei jeder Änderung.",
          en: "The site you're on right now: its own server at Hetzner, infrastructure as code and an automatic deployment on every change.",
        },
        stack: ["React Router", "TypeScript", "Hetzner", "OpenTofu"],
      },
      {
        repos: ["physio-musterfrau", "sv-musterstadt", "tischlerei-mustermann"],
        title: { de: "Drei Beispiel-Websites", en: "Three sample websites" },
        text: {
          de: "Für eine Physiopraxis, einen Sportverein und eine Tischlerei, damit Kunden sehen, wie ihre Website aussehen könnte.",
          en: "For a physiotherapy practice, a sports club and a carpentry workshop, so clients can see what their website could look like.",
        },
        stack: ["Astro", "TypeScript", "Docker"],
        linkLabels: [
          { de: "Physiopraxis", en: "Physiotherapy" },
          { de: "Sportverein", en: "Sports club" },
          { de: "Tischlerei", en: "Carpentry" },
        ],
      },
    ],
  },
  {
    title: { de: "Web-Apps & Spiele", en: "Web apps & games" },
    projects: [
      {
        repos: ["focusgame"],
        title: { de: "Focus", en: "Focus" },
        text: {
          de: "Ein Reaktionsspiel: in fünf Sekunden alle Felder in Ihrer Farbe antippen.",
          en: "A reaction game: tap all the squares of your colour within five seconds.",
        },
        stack: ["Next.js", "TypeScript", "SQLite"],
      },
      {
        repos: ["quarantine_list"],
        title: { de: "Corona-Einkaufsliste", en: "Covid shopping list" },
        text: {
          de: "Eine Einkaufsliste für Menschen in Corona-Quarantäne.",
          en: "A shopping list for people in Covid quarantine.",
        },
        stack: ["Next.js", "TypeScript", "SQLite"],
      },
      {
        repos: ["ugly_sweater"],
        title: {
          de: "Abstimmung zum hässlichsten Weihnachtspulli",
          en: "Ugly Christmas sweater vote",
        },
        text: {
          de: "Eine kleine Web-App für eine Weihnachtsfeier, bei der alle per Handy abstimmen.",
          en: "A small web app for a Christmas party where everyone votes by phone.",
        },
        stack: ["Next.js", "TypeScript", "Tailwind"],
      },
      {
        repos: ["citefight"],
        title: { de: "citefight", en: "citefight" },
        text: {
          de: "Ein Ratespiel für mehrere Spieler rund um Tweets.",
          en: "A multiplayer guessing game around tweets.",
        },
        stack: ["Node.js", "React", "Pusher"],
      },
      {
        repos: ["surfeasy"],
        title: { de: "surf-easy", en: "surf-easy" },
        text: {
          de: "Findet gute Surfspots in Portugal. Entstanden im Coding-Bootcamp Le Wagon.",
          en: "Finds good surf spots in Portugal. Built at the Le Wagon coding bootcamp.",
        },
        stack: ["Ruby", "Redis"],
      },
      {
        repos: ["rent-a-techy"],
        title: { de: "rent-a-techy", en: "rent-a-techy" },
        text: {
          de: "Eine Plattform, um Tech-Leute zu mieten. Entstanden im Coding-Bootcamp Le Wagon.",
          en: "A platform to rent tech people. Built at the Le Wagon coding bootcamp.",
        },
        stack: ["Ruby", "HTML", "CSS"],
      },
    ],
  },
  {
    title: { de: "Tools & Infrastruktur", en: "Tools & infrastructure" },
    projects: [
      {
        repos: ["beachstats_scraper"],
        title: {
          de: "Beachvolleyball-Ergebnisse",
          en: "Beach volleyball results",
        },
        text: {
          de: "Sammelt automatisch die Ergebnisse deutscher Beachvolleyball-Turniere.",
          en: "Automatically collects the results of German beach volleyball tournaments.",
        },
        stack: ["Node.js", "TypeScript", "Jest"],
      },
      {
        repos: ["terraform-digitalocean-droplet"],
        title: { de: "Server mit Terraform", en: "Server with Terraform" },
        text: {
          de: "Ein DigitalOcean-Server, der sich per Terraform und cloud-init von selbst einrichtet.",
          en: "A DigitalOcean server that sets itself up with Terraform and cloud-init.",
        },
        stack: ["Terraform", "DigitalOcean", "cloud-init"],
      },
    ],
  },
  {
    title: { de: "iOS-Apps", en: "iOS apps" },
    projects: [
      {
        repos: ["CycleLogVC"],
        title: { de: "Radtouren-Tracker", en: "Cycling tracker" },
        text: {
          de: "Eine iOS-App, die Radtouren per GPS aufzeichnet.",
          en: "An iOS app that records bike rides by GPS.",
        },
        stack: ["Swift", "GPS"],
      },
      {
        repos: ["nightlive"],
        title: { de: "nightlive", en: "nightlive" },
        text: {
          de: "Eine iOS-App, um Bars und Clubs zum Feiern zu finden.",
          en: "An iOS app to find bars and clubs to go out to.",
        },
        stack: ["Swift", "Google API"],
      },
    ],
  },
];

const byRepo = new Map(
  privateProjects.map((p) => [p.repo.split("/").pop() ?? "", p]),
);

function details(project: Project) {
  const entries = project.repos.map((r) => byRepo.get(r)!);
  return {
    year: entries[0].from.split(".")[1],
    sites: entries.map((e) => e.url).filter((u) => u !== ""),
    // the sample sites share one row, their code links would only repeat
    code: entries.length === 1 ? entries[0].repo : "",
  };
}

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      ↗
    </span>
  );
}

export default function SideProjects() {
  const lang = useLang();
  const t = text[lang];
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <PageHero
          title={t.title1}
          highlight={t.highlight}
          cta={{
            label: t.cta,
            href: "https://github.com/hannesschaletzky",
          }}
        >
          {t.intro}
        </PageHero>

        {/* chapters with a timeline: title, a dashed line to the tools, text and links */}
        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            {groups.map((group, g) => (
              // one thin line per chapter, the projects inside are held together
              // by whitespace only
              <div
                key={group.title.en}
                className="border-t border-white/15 pb-14 pt-10 last:pb-0"
              >
                {/* numbered like chapters: 1 Websites, then 1.1, 1.2 … */}
                <h2 className="flex items-baseline gap-4 text-2xl font-bold text-white sm:text-3xl">
                  <span
                    aria-hidden="true"
                    className="text-4xl font-bold tabular-nums text-teal/40 sm:text-5xl"
                  >
                    {g + 1}
                  </span>{" "}
                  {group.title[lang]}
                </h2>
                {/* the projects hang off one teal line per chapter */}
                <div className="mt-8 ml-1.5 space-y-12 border-l-2 border-teal/30 pl-8">
                  {group.projects.map((project, i) => {
                    const d = details(project);
                    const title = (
                      <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                        <span
                          aria-hidden="true"
                          className="mr-2 font-semibold tabular-nums text-teal/40"
                        >
                          {g + 1}.{i + 1}
                        </span>{" "}
                        {project.title[lang]}
                      </h3>
                    );
                    const pills = (
                      <ul className="flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-white/10 bg-navy-light px-3 py-1 text-sm text-white"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                    const links = (
                      <div className="mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-2 font-semibold">
                        <span className="text-sm font-normal text-slate-400">
                          {d.year}
                        </span>
                        {d.sites.map((url, j) => (
                          <a
                            key={url}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="group text-teal hover:text-teal-light"
                          >
                            {project.linkLabels?.[j][lang] ?? t.website}{" "}
                            <Arrow />
                          </a>
                        ))}
                        {d.code !== "" && (
                          <a
                            href={d.code}
                            target="_blank"
                            rel="noreferrer"
                            className="group text-teal hover:text-teal-light"
                          >
                            {t.code} <Arrow />
                          </a>
                        )}
                      </div>
                    );
                    const dot = (
                      <span
                        aria-hidden="true"
                        className="absolute -left-[calc(2rem+8px)] top-2.5 h-3.5 w-3.5 rounded-full border-2 border-teal bg-navy-lighter"
                      />
                    );
                    return (
                      <article key={project.repos[0]} className="relative">
                        {dot}
                        {/* a dashed line runs from the title to the tools */}
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                          {title}
                          <span
                            aria-hidden="true"
                            className="hidden min-w-8 flex-1 border-t border-dashed border-teal/30 md:block"
                          />
                          <div className="shrink-0">{pills}</div>
                        </div>
                        <p className="mt-2 max-w-2xl text-lg leading-relaxed">
                          {project.text[lang]}
                        </p>
                        {links}
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContactBox above="--color-navy-lighter" />
      </main>

      <Footer />
    </div>
  );
}
