import { withSentryConfig } from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/Satyam_Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Satyam_Portfolio/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This ensures all files in public are copied to out directory
  distDir: 'out',
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: "javascript-mastery",
  project: "javascript-nextjs",
}, {
  widenClientFileUpload: true,
  transpileClientSDK: true,
});