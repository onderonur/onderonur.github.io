import { ButtonLink } from '@/core/ui/components/button-link';
import { FaXTwitter } from 'react-icons/fa6';
import { RxEnvelopeClosed, RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';
import { SiBluesky } from 'react-icons/si';

const links = [
  {
    href: 'https://github.com/onderonur',
    ariaLabel: 'GitHub profile',
    icon: RxGithubLogo,
  },
  {
    href: 'https://www.linkedin.com/in/onderonur/',
    ariaLabel: 'LinkedIn profile',
    icon: RxLinkedinLogo,
  },
  {
    href: 'https://bsky.app/profile/onderonur.bsky.social',
    ariaLabel: 'Bluesky profile',
    icon: SiBluesky,
  },
  {
    href: 'https://x.com/onderonur_',
    ariaLabel: 'X profile',
    icon: FaXTwitter,
  },
  {
    href: 'mailto:onuronder.onr@gmail.com',
    ariaLabel: 'Send e-mail',
    icon: RxEnvelopeClosed,
  },
];

export function AuthorContactInfo() {
  return (
    <div className="flex gap-1">
      {links.map((link) => {
        return (
          <ButtonLink
            key={link.href}
            variant="ghost"
            size="icon"
            href={link.href}
            aria-label={link.ariaLabel}
          >
            <link.icon />
          </ButtonLink>
        );
      })}
    </div>
  );
}
