/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const repo = 'studio'; // your repo name

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(isGithubPages && {
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
  }),
  // ...existing config...
};
