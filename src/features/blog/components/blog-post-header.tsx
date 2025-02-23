import { ShareButtons } from '@/core/ui/components/share-buttons';
import { stripHtml } from '@/core/ui/utils';
import type { BlogPost } from '@/features/blog/schemas';
import { formatBlogPostDate } from '@/features/blog/utils';
import Image from 'next/image';

type BlogPostHeaderProps = {
  frontmatter: BlogPost;
};

export function BlogPostHeader({
  frontmatter: { title, publishedAt, updatedAt, url, heroPath, heroCaption },
}: BlogPostHeaderProps) {
  return (
    <header>
      <div className="text-center">
        <h1 className="to-primary !m-0 bg-linear-to-br from-rose-500 bg-clip-text pb-2 text-transparent">
          {title}
        </h1>
        <p className="text-muted-foreground !m-0">
          Published at {formatBlogPostDate(publishedAt)}.
          {updatedAt && ` Last updated at ${formatBlogPostDate(updatedAt)}.`}
        </p>
      </div>
      <div>
        <ShareButtons url={url} />
      </div>
      {heroPath && (
        <figure>
          <div className="relative aspect-video">
            <Image
              className="!m-0 rounded-md object-cover"
              src={heroPath}
              alt={heroCaption ? stripHtml(heroCaption) : ''}
              priority
              fill
            />
          </div>
          {heroCaption && (
            <figcaption
              className="text-center"
              dangerouslySetInnerHTML={{ __html: heroCaption }}
            />
          )}
        </figure>
      )}
    </header>
  );
}
