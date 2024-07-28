/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: 'export',
  // This is enabled since the previous site built with Gatsby had trailing slashes.
  // Also, if we don't enable this, image `src`s of blog posts gets built as
  // `/blog/image-name.jpg`, instead of `/blog/{slug}/image-name.jpg`.
  // `Link` component from `next/link`, internal URL usages in metadata etc. are all behaves
  // according to this config. So, there is no need to manually add trailing slashes to them.
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'picsum.photos',
        protocol: 'https',
      },
    ],
  },
  eslint: {
    // To make `next lint` check files and folders besides the default folders (`src`, `app` etc.):
    // https://nextjs.org/docs/app/building-your-application/configuring/eslint#linting-custom-directories-and-files
    dirs: [
      'src',
      'scripts',
      'lint-staged.config.mjs',
      'postcss.config.js',
      'prettier.config.js',
      'tailwind.config.ts',
    ],
  },
};

export default nextConfig;
