import { BlogPostCard } from './blog-post-card';
import { getBlogPosts } from './blog-utils';

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
