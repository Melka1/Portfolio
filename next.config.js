/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    // Keeps server/client generated class names in sync so the SSR'd
    // styled-components CSS matches on hydration.
    styledComponents: true,
  },
}

module.exports = nextConfig
