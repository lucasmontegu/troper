/** @type {import('next').NextConfig} */
const nextConfig = {
/*   reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  transpilePackages: [], */
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [],
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
