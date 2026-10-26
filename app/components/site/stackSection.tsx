import SectionHeading from "~/components/site/sectionHeading";

const stack = [
  "AWS ECS/Fargate",
  "SQS · S3 · IAM",
  "DynamoDB",
  "PostgreSQL",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Remix",
  "Docker",
  "GitHub Actions",
  "Terraform",
  "Playwright",
  "Jest",
  "Grafana",
];

export default function StackSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading eyebrow="Stack">
          Tools I trust in production.
        </SectionHeading>
        <ul className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-navy-light px-4 py-2 text-white"
            >
              {item}
            </li>
          ))}
        </ul>
        <a
          href="/stack"
          className="mt-8 inline-block text-teal hover:text-teal-light"
        >
          Full stack →
        </a>
      </div>
    </section>
  );
}
