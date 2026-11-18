type Item = { title: string; text: string };

// two columns, each point opens with a teal check mark; reads as
// "all of this is included"
export default function FeatureChecks({ items }: { items: Item[] }) {
  return (
    <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="flex gap-4">
          <span
            aria-hidden="true"
            className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-sm font-bold text-teal"
          >
            ✓
          </span>
          <div>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-1 leading-relaxed">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
