import { MDXContent } from '@/core/ui/components/mdx-content';
import { promises as fs } from 'node:fs';

type CodeBlockProps = {
  slug: string;
  title?: string;
  fileName: string;
};

export async function CodeBlock({ slug, title, fileName }: CodeBlockProps) {
  const fileContent = await fs.readFile(
    `${process.cwd()}/public/blog/${slug}/${fileName}`,
  );

  let source = '```';

  const extension = fileName.split('.').pop();

  if (extension) {
    source = `${source}${extension}`;
  }

  if (title) {
    source = `${source} title="${title}"`;
  }

  source = `${source}\n${fileContent.toString()}`;
  source = `${source}\`\`\``;

  return <MDXContent source={source} />;
}
