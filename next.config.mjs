import { withSentryConfig } from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Satyam_Portfolio',
  assetPrefix: '/Satyam_Portfolio/',
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: "javascript-mastery",
  project: "javascript-nextjs",
}, {
  widenClientFileUpload: true,
  transpileClientSDK: true,
});