import path from "path";

/** @type {import('next').NextConfig}  */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
  experimental: {
    ppr: "incremental",
    // ppr: means partial prerendering
  },
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
