import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
  },
  eslint: {
    // To make `next lint` check files and folders besides the default folders (`src`, `app` etc.):
    // https://nextjs.org/docs/app/building-your-application/configuring/eslint#linting-custom-directories-and-files
    dirs: [
      'config',
      'src',
      'eslint.config.mjs',
      'lint-staged.config.mjs',
      'next.config.ts',
      'postcss.config.mjs',
      'prettier.config.mjs',
    ],
  },
};

export default nextConfig;
