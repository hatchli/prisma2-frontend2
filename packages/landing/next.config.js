const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules");
const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");

const nextConfig = {
  env: {
    STRIPE_PUBLIC_KEY: "your_stripe_public_key_here",
    BACKEND_URL_MYO: "https://myodesign-backend.now.sh/api",
    BACKEND: "https://myodesign-backend.now.sh/",
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ["reusecore", "common", "react-flexbox-grid"],
      },
    ],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: "default",
          quality: 90,
        },
      },
    ],
    withFonts,
    withCSS,
  ],
  nextConfig,
  {
    distDir: "../../dist/functions/next",
  }
);
