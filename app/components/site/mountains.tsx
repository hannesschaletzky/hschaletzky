// layered mountain range around the HASC peak – the range keeps its proportions;
// min-h (a sixth of the screen width) makes it tall enough on wide screens that
// its peaks are never cut off into a flat edge,
// the summit keeps its own aspect ratio so its tip is never cut off, and grows a bit
// faster than the range so it always stays the highest peak
// -bottom-px: at fractional heights the svg edge would leave a dark hairline
export default function Mountains({
  heightClass = "h-[45%] sm:h-1/2",
}: {
  heightClass?: string;
}) {
  return (
    <>
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMax slice"
        className={`absolute inset-x-0 -bottom-px min-h-[calc(100vw/6)] w-full ${heightClass}`}
        aria-hidden="true"
      >
        <path
          d="M0 400 L180 260 L300 320 L460 220 L600 290 L760 200 L900 280 L1050 240 L1200 300 L1200 400Z"
          className="fill-navy-light"
        />
        <path
          d="M0 400 L240 320 L420 350 L600 300 L780 350 L960 310 L1200 370 L1200 400Z"
          className="fill-navy-lighter"
        />
      </svg>
      <svg
        viewBox="380 130 440 270"
        className={`absolute -bottom-px left-1/2 min-h-[calc(100vw/5.5)] w-auto -translate-x-1/2 ${heightClass}`}
        aria-hidden="true"
      >
        <path d="M380 400 L600 140 L820 400Z" className="fill-navy-lighter" />
        {/* the "A" of the HASC wordmark in the header */}
        <path
          d="M469.5 400 L600 160 L730.5 400 L704 400 L600 208.7 L496 400Z"
          className="fill-teal"
        />
      </svg>
    </>
  );
}
