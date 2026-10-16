import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output powers the sandbox production server.
  // On Vercel the platform handles the server itself, so we use the default output.
  ...(process.env.VERCEL ? {} : { output: "standalone" as const }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
