import type { NextConfig } from "next";

// Static export: the site has no server-side needs, so it deploys as plain files.
const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
