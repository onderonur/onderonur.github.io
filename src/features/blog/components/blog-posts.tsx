import { getBlogPosts } from '@/features/blog/blog.data';
import { BlogPostCard } from '@/features/blog/components/blog-post-card';

export async function BlogPosts() {
  const blogPosts = await getBlogPosts();

  return (
    <ul className="grid gap-4 grid-cols-autofill-64">
      {blogPosts.map((blogPost) => {
        return (
          <li key={blogPost.slug}>
            <BlogPostCard frontmatter={blogPost.data} />
          </li>
        );
      })}
    </ul>
  );
}
