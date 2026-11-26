type Item = { title: string; text: string };

// the titles as big headlines with a thin line running to the edge, the text
// quiet underneath; for a few short titles.
// On phones that takes a lot of height, so there title and text run in one
// paragraph ("Für jedes Gerät: Ihre Website sieht …"): same words, half the space
export default function FeatureHeadlines({ items }: { items: Item[] }) {
  return (
    <ol className="space-y-3 sm:space-y-8">
      {items.map((item, i) => (
        <li key={item.title} className="leading-relaxed">
          <div className="inline sm:flex sm:items-center sm:gap-5">
            <span
              aria-hidden="true"
              className="hidden w-6 shrink-0 text-sm font-semibold tabular-nums text-teal sm:block"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="inline font-bold text-white after:content-[':'] sm:block sm:text-3xl sm:after:content-none">
              {item.title}
            </h3>
            <span className="hidden h-px min-w-8 flex-1 bg-white/15 sm:block" />
          </div>{" "}
          <p className="inline max-w-4xl sm:mt-2 sm:block sm:pl-11">
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
