// numbered points in two columns, e.g. the areas of the check-up
export default function FeatureList({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <ol className="grid gap-x-12 border-t border-white/10 md:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={item.title}
          className="flex gap-5 border-b border-white/10 py-5"
        >
          <span className="w-6 shrink-0 font-semibold tabular-nums text-teal">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-semibold text-white">{item.title}</h3>
            <p className="mt-1 leading-relaxed">{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
