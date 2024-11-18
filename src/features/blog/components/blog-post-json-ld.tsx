import { JsonLd } from '@/core/seo/components/json-ld';
import { getAuthor } from '@/features/author/data';
import type { BlogPost } from '@/features/blog/schemas';
import { getSite } from '@/features/site/data';
import type { BlogPosting } from 'schema-dts';

type BlogPostJsonLd = {
  frontmatter: BlogPost;
};

export async function BlogPostJsonLd({
  frontmatter: { title, description, heroUrl, publishedAt, updatedAt },
}: BlogPostJsonLd) {
  const [site, author] = await Promise.all([getSite(), getAuthor()]);

  return (
    <JsonLd<BlogPosting>
      content={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        image: heroUrl,
        description,
        datePublished: publishedAt.toISOString(),
        dateModified: updatedAt?.toISOString(),
        author: [
          {
            '@type': 'Person',
            name: author.data.name,
            url: site.baseUrl,
          },
        ],
      }}
    />
  );
}
