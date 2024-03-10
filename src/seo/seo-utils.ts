import { getAuthor } from '@/author/author-utils';
import { getSite } from '@/site/site-utils';
import type { Metadata } from 'next';
import type { MetaImages } from './seo-types';

export async function getMetadata({
  title,
  description,
  pathname,
  images,
}: {
  title?: string;
  description?: string;
  pathname: string;
  images?: MetaImages;
}): Promise<Metadata> {
  const [site, author] = await Promise.all([getSite(), getAuthor()]);

  const metaTitle = title
    ? site.titleTemplate.replace('%s', title)
    : site.title;
  const metaDescription = description || site.description;
  const metaImages = images || [{ url: site.image, alt: site.title }];
  const formattedPathname = pathname.endsWith('/') ? pathname : `${pathname}/`;

  return {
    title: metaTitle,
    description: metaDescription,
    creator: author.data.name,
    metadataBase: new URL(site.baseUrl),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: metaImages,
      url: formattedPathname,
      type: 'website',
      siteName: site.title,
      locale: 'en_US',
    },
    twitter: {
      title: metaTitle,
      description: metaDescription,
      images: metaImages,
      card: 'summary_large_image',
      creator: author.data.xUsername,
    },
    alternates: {
      canonical: formattedPathname,
    },
    verification: {
      google: site.googleSiteVerification,
    },
  };
}
