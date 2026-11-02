import type { Config } from "@react-router/dev/config";

// server-rendered on our own server (Docker, react-router-serve)
export default {
  ssr: true,
} satisfies Config;
