/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.bayut.com",
      "bayut-production.s3.eu-central-1.amazonaws.com",
    ], // Allowed domains
  },
};

export default nextConfig;
