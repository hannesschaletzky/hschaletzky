// the three sample sites, overlapping like browser windows, next to the hero of
// the website pages. Loaded only from lg up (picture with a media query), so
// phones download nothing for it; they see the examples further down
const slugs = ["physio-musterfrau", "sv-musterstadt", "tischlerei-mustermann"];
const place = [
  "left-0 top-0 z-10",
  "right-0 top-16 z-20",
  "bottom-0 left-[10%] z-30",
];

export default function ExampleStack() {
  return (
    // isolate: the order of the three pictures stays inside this box, so the
    // header menu always opens above them
    <div className="relative isolate h-[26rem]">
      {slugs.map((slug, i) => (
        <picture key={slug}>
          <source
            media="(min-width: 1024px)"
            srcSet={`/beispiele/${slug}.jpg`}
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            width={1440}
            height={900}
            alt=""
            className={`absolute w-[78%] rounded-xl border border-white/15 shadow-2xl shadow-black/40 ${place[i]}`}
          />
        </picture>
      ))}
    </div>
  );
}
