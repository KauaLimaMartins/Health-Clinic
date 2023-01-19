/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx"],
  compiler: {
    styledComponents: true,
  },
  webpack: (config, _) => {
    config.module.rules.push({
      test: /\.ttf?$/i,
      type: "asset/resource",
      dependency: { not: ["url"] },
    });

    return config;
  },
};

module.exports = nextConfig;
