import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Firebase Hosting (output goes to /out).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
