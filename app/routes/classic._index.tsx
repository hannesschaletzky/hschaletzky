import type { MetaFunction } from "@remix-run/node";
import ContactIcons from "~/components/classic/contactIcons";
import useSecretClicks from "~/components/useSecretClicks";

export const meta: MetaFunction = () => {
  return [
    { title: "Hannes Schaletzky | Classic" },
    { name: "robots", content: "noindex" },
  ];
};

export default function Index() {
  const experience = new Date().getFullYear() - 2019;
  // easter egg: click the photo three times to get back to the new design
  const secret = useSecretClicks("/");

  return (
    <div className="flex flex-col gap-1 justify-center items-center text-center p-6">
      {/* image */}
      <button
        type="button"
        onClick={secret.onClick}
        className="my-4 w-32 h-32 cursor-default"
      >
        <img
          key={secret.clicks}
          className={`rounded-full w-full h-full object-cover ${
            secret.clicks > 0 ? "motion-safe:animate-wiggle" : ""
          } ${
            secret.clicks >= 2
              ? "drop-shadow-[0_0_14px_rgba(255,225,0,0.9)]"
              : ""
          }`}
          src="/hannes.jpg"
          alt="Hannes Schaletzky"
        />
      </button>

      {/* hero */}
      <div>👋 I am Hannes</div>
      <div>
        freelance <mark>integration & cloud</mark> engineer
      </div>
      <div>Berlin 🇩🇪 · {experience}+ years of experience</div>
      <br />
      <div>backend & integration solutions</div>
      <div>Node.js/TypeScript · AWS · on-prem</div>
      <div>reliable software, from idea to production</div>
      <br />

      {/* proof */}
      <div>{"> "}built a data integration platform for 7 customers</div>
      <div>{"> "}migrated a web platform from Vercel to AWS</div>
      <div>{"> "}built a test suite for a security-critical system</div>
      <div>{"> "}formerly at DigitalService des Bundes & KPMG</div>
      <div>
        {"> "}more client work on{" "}
        <a
          href="https://linkedin.com/in/hannesschaletzky/"
          target="_blank"
          rel="noreferrer"
        >
          <u>LinkedIn</u>
        </a>
      </div>
      <br />

      {/* navigation */}
      <div className="flex flex-wrap justify-center gap-x-2">
        <a href="/classic/portrait">
          <u>portrait</u>
        </a>
        ·
        <a href="/classic/stack">
          <u>stack</u>
        </a>
        ·
        <a href="/classic/side-projects">
          <u>side projects</u>
        </a>
        ·
        <a href="/classic/contact">
          <u>contact</u>
        </a>
      </div>
      <ContactIcons />
      <a
        href="/impressum"
        className="text-sm"
      >
        <div>Imprint</div>
      </a>
      <a
        href="/datenschutz"
        className="text-sm"
      >
        <div>Data Privacy Policy</div>
      </a>
    </div>
  );
}
