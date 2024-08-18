'use client';

import '@/styles/globals.css';
import { usePathname } from 'next/navigation';
import { RxCode, RxGlobe, RxPencil2, RxRocket } from 'react-icons/rx';
import { twJoin } from 'tailwind-merge';
import { Link } from '../routing/link';
import { ButtonLink } from './button-link';

const navigationLinks = [
  { title: 'Skills', href: '/skills', icon: RxRocket },
  { title: 'Experiences', href: '/experiences', icon: RxGlobe },
  { title: 'Projects', href: '/projects', icon: RxCode },
  { title: 'Blog', href: '/blog', icon: RxPencil2 },
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
                )}
              >
                <link.icon className="h-5 w-5" />
                {link.title}
              </ButtonLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
