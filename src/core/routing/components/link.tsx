import NextLink from 'next/link';

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

export function Link({ href, ...rest }: LinkProps) {
  let { target, rel } = rest;

  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const hrefString = href.toString();

  if (!hrefString.startsWith('/')) {
    // Adding `target` and `rel` to external links.
    target = '_blank';
    rel = 'noopener noreferrer';
  }

  return (
    <NextLink
      {...rest}
      href={hrefString}
      target={target}
      rel={rel}
      prefetch={false}
    />
  );
}
