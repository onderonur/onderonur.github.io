import { Link } from '@/core/routing/components/link';
import { JsonLd } from '@/core/seo/components/json-ld';
import { TooltipProvider } from '@/core/shadcn-ui/ui/tooltip';
import '@/core/styles/globals.css';
import { ButtonLink } from '@/core/ui/components/button-link';
import { MobileNavigation, Navigation } from '@/core/ui/components/navigation';
import { AuthorContactInfo } from '@/features/author/components/author-contact-info';
import { getSite } from '@/features/site/site.data';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';
import { RxGithubLogo } from 'react-icons/rx';
import type { WebSite } from 'schema-dts';
import { twJoin } from 'tailwind-merge';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#020817',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const site = await getSite();

  return (
    <html
      lang="en"
      className={twJoin(
        inter.variable,
        'font-sans',
        'dark [color-scheme:dark]',
        // fluid font-size:
        // 14px - 16px for 640px - 1024px viewport
        'text-[clamp(0.875rem,0.667rem+0.52vw,1rem)]',
      )}
    >
      <body
        className={twJoin(
          'grid min-h-screen grid-rows-[auto_1fr_auto] bg-background text-foreground',
          // To prevent content to overflow screen horizontally.
          // Since `<body>` is `grid`, this is needed.
          '[&>*]:min-w-0',
        )}
      >
        <JsonLd<WebSite>
          content={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: site.baseUrl,
            name: site.title,
          }}
        />
        <TooltipProvider>
          <header className="fixed z-10 flex min-h-16 w-full items-center gap-2 bg-background/60 px-4 backdrop-blur sm:gap-6">
            <Link href="/" className="text-xl font-black">
              {site.title}
            </Link>
            <Navigation />
            <ButtonLink
              variant="outline"
              size="icon"
              href="https://github.com/onderonur/onderonur.github.io"
              className="ml-auto"
              aria-label="Source code on GitHub"
            >
              <RxGithubLogo className="size-4" />
            </ButtonLink>
          </header>
          <div className="mx-auto mt-16 w-full max-w-screen-lg px-4 py-8">
            {children}
          </div>
          <footer className="flex flex-col items-center gap-4 px-4 pb-32 pt-12 sm:pb-12">
            <AuthorContactInfo />
            <p className="text-sm">
              &copy; 2020 - {new Date().getFullYear()} All rights reserved
            </p>
            <MobileNavigation />
          </footer>
        </TooltipProvider>
      </body>
    </html>
  );
}
