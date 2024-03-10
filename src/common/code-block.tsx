import { promises as fs } from 'node:fs';
import { MDXContent } from './mdx-content';

type CodeBlockProps = {
  slug: string;
  title?: string;
  fileName: string;
};

export async function CodeBlock({ slug, title, fileName }: CodeBlockProps) {
  const fileContent = await fs.readFile(
    `${process.cwd()}/public/blog/${slug}/${fileName}`,
  );
  const extension = fileName.split('.').pop();

  let source = `\`\`\`${extension}`;

  if (title) {
    source += ` title="${title}"`;
  }

  source += `\n${fileContent.toString()}`;
  source += `\`\`\``;

  return <MDXContent source={source} />;
}
