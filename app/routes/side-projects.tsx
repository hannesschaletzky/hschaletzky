import type { MetaFunction } from "@remix-run/node";
import ContactBox from "~/components/site/contactBox";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { siteNav } from "~/components/site/siteNav";
import { pageMeta } from "~/components/site/pageMeta";
import privateProjects from "~/projects/unpaid.json";

export const meta: MetaFunction = () =>
  pageMeta({
    title: "Side Projects | Hannes Schaletzky",
    description:
      "Side projects by Hannes Schaletzky – web apps, tools and experiments built for friends, clubs and myself.",
    path: "/side-projects",
  });

// titles are stored in lower case for the classic site – capitalize the first
// word, unless it is a name with its own casing like "iOS"
function capitalize(title: string) {
  const firstWord = title.split(" ")[0];
  if (/[A-Z]/.test(firstWord)) return title;
  return title.charAt(0).toUpperCase() + title.slice(1);
}

const projects = privateProjects.map((project) => ({
  ...project,
  year: project.from.split(".")[1],
  title: capitalize(project.title),
  stack: project.stack.filter((item) => item !== ""),
}));

export default function SideProjects() {
  return (
    <div className="min-h-screen">
      <Header links={siteNav} />

      <main>
        <PageHero
          eyebrow="Side projects"
          title="Built for fun,"
          highlight="and to learn something new."
          cta={{
            label: "See them on GitHub",
            href: "https://github.com/hannesschaletzky",
          }}
        >
          Web apps, tools and experiments I built besides client work – some
          serious, some just for a Christmas party.
        </PageHero>

        <section className="bg-navy-lighter">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-24 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-white/10 p-6"
              >
                <p className="text-sm text-slate-400">
                  {project.year} · {project.employer}
                </p>
                <h2 className="mt-2 text-lg font-bold leading-snug text-white">
                  {project.title}
                </h2>
                <ul className="mt-4 flex flex-1 flex-wrap content-start gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs"
                    >
                      {item}
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
                        Website →
                      </a>
                    )}
                    {project.repo !== "" && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-teal hover:text-teal-light"
                      >
                        Code →
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <div className="pt-24">
          <ContactBox />
        </div>
      </main>

      <Footer />
    </div>
  );
}
