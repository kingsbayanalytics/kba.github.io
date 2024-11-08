/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kba_site',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  trailingSlash: false,
}

module.exports = nextConfig 