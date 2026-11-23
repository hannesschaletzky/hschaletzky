type Item = { title: string; text: string };

// the titles as big headlines with a thin line running to the edge, the text
// quiet underneath; for a few short titles
export default function FeatureHeadlines({ items }: { items: Item[] }) {
  return (
    <ol className="space-y-8">
      {items.map((item, i) => (
        <li key={item.title}>
          <div className="flex items-center gap-5">
            <span className="w-6 shrink-0 text-sm font-semibold tabular-nums text-teal">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              {item.title}
            </h3>
            <span className="hidden h-px min-w-8 flex-1 bg-white/15 sm:block" />
          </div>
          <p className="mt-2 max-w-4xl leading-relaxed sm:pl-11">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
