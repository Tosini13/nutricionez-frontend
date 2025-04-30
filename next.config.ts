import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    domains: [process.env.IMAGES_DOMAINS ?? ""],
  },
};

export default nextConfig;
