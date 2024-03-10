import NextLink from 'next/link';

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

export function Link(props: LinkProps) {
  let { href, target, rel } = props;

  if (typeof href === 'string') {
    if (!href.startsWith('/')) {
      // Adding `target` and `rel` to external links.
      target = '_blank';
      rel = 'noopener noreferrer';
    } else if (!href.endsWith('/')) {
      // Adding trailing slash to internal links.
      href = `${href}/`;
    }
  }

  return (
    <NextLink
      {...props}
      href={href}
      target={target}
      rel={rel}
      prefetch={false}
    />
  );
}
