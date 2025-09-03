// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        "pino-pretty": false,
        stream: false,
      },
    };
    return config;
  },
};

export default nextConfig;
