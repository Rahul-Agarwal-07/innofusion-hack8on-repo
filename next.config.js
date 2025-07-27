/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',         // root path
        destination: '/home', // target path
        permanent: true,     // use `true` for 308 redirect (good for SEO)
      },
    ];
  },
};

module.exports = nextConfig;