/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.xml$/i,
      loader: "raw-loader",
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
