import type { ReactNode } from "react";
import { logos } from "~/components/site/logos";
import SectionHeading from "~/components/site/sectionHeading";
import { useLang } from "~/i18n";

type Project = { title: string; text: string; facts: string[] };

// client projects from the CV, shown as cards on /cloud and on the offer pages
export const projects = {
  platform: {
    client: "blu Systems GmbH",
    logo: logos.blu,
    de: {
      title: "Integrationsplattform für Xurrent",
      text: "Mandantenfähige AWS-Plattform, die Datenimporte und Prozesslogik für jeden Kunden in einer eigenen, getrennten Umgebung ausführt. Sie verbindet Xurrent mit MDM-Systemen und läuft produktiv auf echten Kundendaten.",
      facts: [
        "7 Kunden live",
        "~500 Integrationen / Woche",
        "Intune, ACMP & Mobivisor",
      ],
    },
    en: {
      title: "Integration platform for Xurrent",
      text: "Multi-tenant AWS platform that runs data imports and process logic for each customer in a separate environment of its own. It connects Xurrent with MDM systems and runs in production on real customer data.",
      facts: [
        "7 customers live",
        "~500 integrations / week",
        "Intune, ACMP & Mobivisor",
      ],
    },
  },
  bridge: {
    client: "blu Systems GmbH",
    logo: logos.blu,
    de: {
      title: "Hybrid-Cloud-Bridge zu On-Prem",
      text: "Ein Jump-Server als sicheres Bindeglied zwischen Xurrent und den On-Prem-Systemen der Kunden. Er führt die Prozesslogik direkt in ihren Umgebungen aus, etwa in Entra und Exchange, und aktualisiert seine Docker-Images selbst.",
      facts: [
        "Asynchron über SQS & S3",
        "Pro Mandant getrennt",
        "Linux & PowerShell",
      ],
    },
    en: {
      title: "Hybrid cloud bridge to on-prem",
      text: "A jump server as the secure link between Xurrent and the on-prem systems of customers. It runs the process logic right inside their environments, for example in Entra and Exchange, and updates its Docker images itself.",
      facts: [
        "Async via SQS & S3",
        "Separated per tenant",
        "Linux & PowerShell",
      ],
    },
  },
  vorsorge: {
    client: "tilde ventures GmbH",
    logo: logos.tilde,
    de: {
      title: "Migration von Vercel zu AWS",
      text: "Umzug einer digitalen Vorsorge-Plattform von Vercel in eine eigene, produktive AWS-Umgebung. Dazu kamen getrennte Umgebungen für Test und Produktion, eine CI/CD-Pipeline und eine automatisierte Testsuite.",
      facts: [
        "Eigene AWS-Umgebung",
        "Staging & Produktion",
        "CI/CD & Testsuite",
      ],
    },
    en: {
      title: "Migration from Vercel to AWS",
      text: "Moving a digital health care directive platform from Vercel into its own production AWS environment, with separate environments for testing and production, a CI/CD pipeline and an automated test suite.",
      facts: [
        "Own AWS environment",
        "Staging & production",
        "CI/CD & test suite",
      ],
    },
  },
  bundesident: {
    client: "DigitalService GmbH des Bundes",
    logo: logos.digitalservice,
    de: {
      title: "BundesIdent: eID-Backend",
      text: "Skalierbares Backend, das digitale Identitäten in der bundesweiten eID-Infrastruktur prüft, mit sicheren APIs und Rufbereitschaft. Entstanden 2022–2023, als ich bei DigitalService angestellt war, heute Open Source.",
      facts: [
        "Öffentlicher Sektor",
        "Kotlin & Spring Boot",
        "SAML, SOAP & Kubernetes",
      ],
    },
    en: {
      title: "BundesIdent: eID backend",
      text: "Scalable backend that authenticates digital identities within the German federal eID infrastructure, with secure APIs and on-call duty. Built 2022–2023 while I was employed at DigitalService, open source today.",
      facts: [
        "Public sector",
        "Kotlin & Spring Boot",
        "SAML, SOAP & Kubernetes",
      ],
    },
  },
};

export type ProjectId = keyof typeof projects;

// cards with logo, title, text and three facts; `links` adds something above the
// line (on /cloud: the architecture diagrams)
export function ProjectCards({
  ids,
  links,
}: {
  ids: ProjectId[];
  links?: (id: ProjectId) => ReactNode;
}) {
  const lang = useLang();
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {ids.map((id) => {
        const project = projects[id];
        const item: Project = project[lang];
        return (
          <article
            key={id}
            className="flex flex-col rounded-2xl border border-white/10 bg-navy-light p-8"
          >
            <div className="flex items-center gap-4">
              <img
                src={project.logo.src}
                width={project.logo.width}
                height={project.logo.height}
                loading="lazy"
                alt=""
                className="h-10 w-auto rounded-lg"
              />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                {project.client}
              </p>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 leading-relaxed">{item.text}</p>
            {/* the links sit above the line, so the checks stay level in all cards */}
            <div className="mt-5 flex flex-1 flex-wrap content-start gap-2">
              {links?.(id)}
            </div>
            <ul className="mt-8 grid gap-3 border-t border-white/10 pt-6">
              {item.facts.map((fact) => (
                <li
                  key={fact}
                  className="flex items-start gap-2 font-semibold text-white"
                >
                  <span aria-hidden="true" className="text-teal">
                    ✓
                  </span>
                  {fact}
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}

// the matching client projects on an offer page
export default function ProjectsSection({
  ids,
  className,
}: {
  ids: ProjectId[];
  className?: string;
}) {
  const lang = useLang();
  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow={
            lang === "de"
              ? ids.length > 1
                ? "Kundenprojekte"
                : "Kundenprojekt"
              : ids.length > 1
                ? "Client projects"
                : "Client project"
          }
        >
          {lang === "de" ? "Aus der Praxis." : "From practice."}
        </SectionHeading>
        <ProjectCards ids={ids} />
      </div>
    </section>
  );
}
