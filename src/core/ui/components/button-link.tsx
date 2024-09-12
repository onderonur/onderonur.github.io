import type { LinkProps } from '@/core/routing/components/link';
import { Link } from '@/core/routing/components/link';
import type { ButtonProps } from '@/core/shadcn-ui/ui/button';
import { Button } from '@/core/shadcn-ui/ui/button';

type ButtonLinkProps = LinkProps & Pick<ButtonProps, 'variant' | 'size'>;

export function ButtonLink({ variant, size, ...rest }: ButtonLinkProps) {
  return (
    <Button variant={variant} size={size} asChild>
      <Link {...rest} />
    </Button>
  );
}
