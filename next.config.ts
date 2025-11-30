import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const config: NextConfig = {
  output: 'export',
  basePath: isProd ? '/epigram' : '',
  assetPrefix: isProd ? '/epigram/' : '',
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
};

export default config;
