/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> ./out, uploaded straight to Hostinger. No Node process needed on the server.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
