/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: 'export',
  // This is enabled since the previous site built with Gatsby had trailing slashes.
  // Also, if we don't enable this, image `src`s of blog posts gets built as
  // `/blog/image-name.jpg`, instead of `/blog/{slug}/image-name.jpg`.
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
};

module.exports = nextConfig;
