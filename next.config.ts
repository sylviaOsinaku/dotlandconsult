import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify: true, ❌ Remove this line
  images: {
    domains: ["unsplash.com"],
  },
  experimental: {
    scrollRestoration: true,
  },
  output: "standalone",
};

export default nextConfig;
