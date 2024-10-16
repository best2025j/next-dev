// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = {
  target: "server",
  output: "export",
};

module.exports = { nextConfig };
