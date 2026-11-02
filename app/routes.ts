import type { RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

// same file-based routes as with Remix (app/routes/*)
export default flatRoutes({ ignoredRouteFiles: ["**/.*"] }) satisfies RouteConfig;
