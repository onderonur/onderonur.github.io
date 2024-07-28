import { BlogPostImage } from '@/blog/blog-post-image';
import { Link } from '@/routing/link';
import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import { CodeBlock } from './code-block';
import { Showcase } from './showcase';

type RehypePlugins = NonNullable<
  NonNullable<MDXRemoteProps['options']>['mdxOptions']
>['rehypePlugins'];

type MDXContentProps = Pick<
  MDXRemoteProps,
  'source' | 'components' | 'options'
>;

export function MDXContent({ components, options, ...rest }: MDXContentProps) {
  return (
    <MDXRemote
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        a: Link as any,
        Image: BlogPostImage,
        CodeBlock,
        Showcase,
        ...components,
      }}
      options={{
        ...options,
        mdxOptions: {
          ...options?.mdxOptions,
          useDynamicImport: true,
          rehypePlugins: [rehypePrettyCode] as RehypePlugins,
        },
      }}
      {...rest}
    />
  );
}
