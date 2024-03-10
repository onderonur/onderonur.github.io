import { BlogPosts } from '@/blog/blog-posts';
import { PageHeader, PageHeaderTitle } from '@/common/page-header';
import { getMetadata } from '@/seo/seo-utils';

const PAGE_TITLE = 'Blog';
const PAGE_DESCRIPTION = 'Software Development Journey: Explore My Blog';

export const metadata = getMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  pathname: '/blog',
});

export default function BlogPage() {
  return (
    <main className="flex flex-col gap-4">
      <PageHeader>
        <PageHeaderTitle>{PAGE_TITLE}</PageHeaderTitle>
      </PageHeader>
      <BlogPosts />
    </main>
  );
}
