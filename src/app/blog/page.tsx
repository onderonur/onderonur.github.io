import { getMetadata } from '@/core/seo/utils';
import { PageHeader, PageHeaderTitle } from '@/core/ui/components/page-header';
import { BlogPosts } from '@/features/blog/components/blog-posts';

const PAGE_TITLE = 'Blog';
const PAGE_DESCRIPTION = 'Software Development Journey: Explore My Blog';

export async function generateMetadata() {
  return await getMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    pathname: '/blog',
  });
}

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
