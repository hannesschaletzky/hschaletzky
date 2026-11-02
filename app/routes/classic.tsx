import { Outlet } from "react-router";
import HomeLink from "~/components/classic/homeLink";

// layout of the hand-built original site (tag v1-handmade), reachable via the easter egg

export default function ClassicLayout() {
  return (
    // isolate keeps the diagonal rectangles (-z-10) above the white background
    <div className="isolate min-h-screen bg-white text-black font-roboto [text-shadow:0_1px_0_rgb(0_0_0/10%)] text-xl">
      <HomeLink />
      <Outlet />

      {/* diagonal rectangle from left bottom to top right */}
      <div
        className="fixed
                  top-[400px]
                  lg:top-[400px]
                  -left-32
                  w-14/7
                  h-150px
                  transform
                  -rotate-30
                  bg-gray-300
                  opacity-30
                  -z-10"
      ></div>
      {/* diagonal rectangle from left top to bottom right */}
      <div
        className="fixed
                  top-[200px]
                  lg:top-[400px]
                  -left-32
                  w-14/7
                  h-150px
                  transform
                  rotate-45
                  bg-gray-200
                  opacity-30
                  -z-10"
      ></div>
    </div>
  );
}
