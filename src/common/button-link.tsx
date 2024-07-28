import type { ButtonProps } from '@/shadcn-ui/ui/button';
import { Button } from '@/shadcn-ui/ui/button';
import type { LinkProps } from '../routing/link';
import { Link } from '../routing/link';

type ButtonLinkProps = LinkProps & Pick<ButtonProps, 'variant' | 'size'>;

export function ButtonLink({ variant, size, ...rest }: ButtonLinkProps) {
  return (
    <Button variant={variant} size={size} asChild>
      <Link {...rest} />
    </Button>
  );
}
