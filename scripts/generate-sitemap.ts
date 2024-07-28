import { getBlogPosts } from '@/blog/blog-utils';
import { ensureTrailingSlash } from '@/routing/routing-utils';
import { getSite } from '@/site/site-utils';
import { promises as fs } from 'node:fs';
import { create } from 'xmlbuilder2';

export default async function generateSitemap() {
  const [site, blogPosts] = await Promise.all([getSite(), getBlogPosts()]);
  const pathnames = ['/', '/experiences', '/skills', '/projects', '/blog'];

  const pages = [
    ...pathnames.map((pathname) => ({
      url: ensureTrailingSlash(`${site.baseUrl}${pathname}`),
    })),
    ...blogPosts.map((blogPost) => ({
      url: ensureTrailingSlash(blogPost.data.url),
    })),
  ];

  const obj: {
    urlset: {
      '@xmlns': string;
      '@xmlns:news': string;
      '@xmlns:xhtml': string;
      '@xmlns:image': string;
      '@xmlns:video': string;
      url: Array<{ loc: string }>;
    };
  } = {
    urlset: {
      '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
      '@xmlns:news': 'http://www.google.com/schemas/sitemap-news/0.9',
      '@xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
      '@xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',
      '@xmlns:video': 'http://www.google.com/schemas/sitemap-video/1.1',
      url: [],
    },
  };

  for (const page of pages) {
    obj.urlset.url.push({ loc: page.url });
  }

  const doc = create(obj);
  const xml = doc.end({ prettyPrint: false });
  await fs.writeFile(`${process.cwd()}/src/app/sitemap.xml`, xml.toString());
}

// eslint-disable-next-line unicorn/prefer-top-level-await
generateSitemap().catch((error: unknown) => {
  // eslint-disable-next-line no-console
  console.log(
    'Error happened while generating sitemap:',
    error instanceof Error ? error.message : error,
  );
});
