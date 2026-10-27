// numbered steps climbing a hill: on lg+ the circles sit on the ridge, the last one is
// the summit – on smaller screens a dashed trail runs down the left
// the container has a fixed height on lg+, so the ridge points (in % of it) match the
// top padding of each step

const layouts = {
  3: {
    height: "lg:h-[19rem]",
    heightPx: 304,
    pads: ["lg:pt-32", "lg:pt-16", "lg:pt-0"],
    padsPx: [128, 64, 0],
    cols: "lg:grid-cols-3",
  },
  4: {
    height: "lg:h-[22rem]",
    heightPx: 352,
    pads: ["lg:pt-36", "lg:pt-24", "lg:pt-12", "lg:pt-0"],
    padsPx: [144, 96, 48, 0],
    cols: "lg:grid-cols-4",
  },
};

export default function ClimbSteps({
  steps,
  hillClass = "fill-navy-light",
}: {
  steps: { title: string; text: string }[];
  hillClass?: string;
}) {
  const layout = layouts[steps.length as 3 | 4];
  const n = steps.length;

  // circle centers in % of the container (circle is 40px high)
  const points = layout.padsPx.map((pad, i) => [
    ((i + 0.5) / n) * 100,
    ((pad + 20) / layout.heightPx) * 100,
  ]);
  const slope = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]);
  const start = [0, points[0][1] - slope * points[0][0]];
  const end = [100, points[n - 1][1] + 10];
  const trail = [start, ...points].map(([x, y]) => `${x} ${y}`).join(" L");
  const ridge = `M${trail} L${end[0]} ${end[1]}`;

  return (
    <div className={`relative ${layout.height}`}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 hidden h-full w-full [mask-image:linear-gradient(to_bottom,black_55%,transparent)] lg:block"
        aria-hidden="true"
      >
        <path d={`${ridge} L100 100 L0 100Z`} className={hillClass} />
        <path
          d={`M${trail}`}
          fill="none"
          className="stroke-teal/60"
          strokeWidth="2"
          strokeDasharray="6 6"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <ol className={`relative grid gap-10 lg:gap-0 ${layout.cols}`}>
        {steps.map((step, i) => (
          <li
            key={step.title}
            className={`relative flex gap-5 lg:block lg:px-5 lg:text-center ${layout.pads[i]}`}
          >
            {i < n - 1 ? (
              <span
                aria-hidden="true"
                className="absolute -bottom-10 left-5 top-10 border-l-2 border-dashed border-teal/40 lg:hidden"
              />
            ) : null}
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-teal font-bold lg:mx-auto ${
                i === n - 1 ? "bg-teal text-navy" : "bg-navy text-teal"
              }`}
            >
              {i + 1}
            </span>
            <div>
              <h3 className="text-xl font-bold text-white lg:mt-4">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
