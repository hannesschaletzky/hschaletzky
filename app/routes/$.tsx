// catch-all for unknown addresses: without a matching route the root loader
// (with the redirects for moved pages) would not run; everything else is a 404
export function loader() {
  throw new Response("Not found", { status: 404 });
}

// a page route, so the 404 renders in the root error boundary
export default function NotFound() {
  return null;
}
