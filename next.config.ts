import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable modern formats; Next.js serves WebP/AVIF automatically
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
