import type { LinkProps } from '@/core/routing/components/link';
import { Link } from '@/core/routing/components/link';
import { Button } from '@/core/shadcn-ui/components/button';

type ButtonLinkProps = LinkProps &
  Pick<React.ComponentProps<typeof Button>, 'variant' | 'size'>;

export function ButtonLink({ variant, size, ...rest }: ButtonLinkProps) {
  return (
    <Button variant={variant} size={size} asChild>
      <Link {...rest} />
    </Button>
  );
}
