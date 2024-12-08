'use client';

import { Link } from '@/core/routing/components/link';
import { ensureTrailingSlash } from '@/core/routing/utils';
import { ButtonLink } from '@/core/ui/components/button-link';
import { usePathname } from 'next/navigation';
import { RxCode, RxGlobe, RxPencil2, RxRocket } from 'react-icons/rx';
import { twJoin } from 'tailwind-merge';

const navigationLinks = [
  { title: 'Skills', href: ensureTrailingSlash('/skills'), icon: RxRocket },
  {
    title: 'Experiences',
    href: ensureTrailingSlash('/experiences'),
    icon: RxGlobe,
  },
  { title: 'Projects', href: ensureTrailingSlash('/projects'), icon: RxCode },
  { title: 'Blog', href: ensureTrailingSlash('/blog'), icon: RxPencil2 },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-6">
        {navigationLinks.map((link) => {
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={twJoin(
                  'hover:text-accent-foreground',
                  link.href !== pathname && 'text-muted-foreground',
                )}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 border-t bg-background p-1 sm:hidden">
      <ul className="flex w-full sm:gap-6">
        {navigationLinks.map((link) => {
          return (
            <li key={link.href} className="w-1/4">
              <ButtonLink
                href={link.href}
                variant="ghost"
                className={twJoin(
                  'h-auto w-full flex-col gap-1',
                  link.href !== pathname && 'text-muted-foreground',
                  // When there is a `background-color` for `hover`, that color stays until user clicks
                  // somewhere else after clicking this link on a mobile device.
                  // To prevent that color persistence after a navigation, we added this.
                  'hover:bg-transparent',
                )}
              >
                <link.icon />
                {link.title}
              </ButtonLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
