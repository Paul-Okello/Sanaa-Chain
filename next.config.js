/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_CLIENT_ID: "670277383012-sv7odtoslh4d8a9gkvjevc1nf3l1l1vk.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    domains: ["https://oaidalleapiprodscus.blob.core.windows.net"],
  },
};

module.exports = nextConfig;
