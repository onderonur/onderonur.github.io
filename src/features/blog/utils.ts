import { format } from 'date-fns';
import type { BlogPost } from './schemas';

export function formatBlogPostDate(date: Date) {
  return format(date, 'MMMM dd, yyyy');
}

export function getBlogPostDate(
  blogPost: Pick<BlogPost, 'publishedAt' | 'updatedAt'>,
) {
  return blogPost.updatedAt ?? blogPost.publishedAt;
}
