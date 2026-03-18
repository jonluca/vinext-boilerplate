import type { NextConfig } from "next";
import "./src/env";

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: true,
  devIndicators: false,
  reactCompiler: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
};

export default config;
