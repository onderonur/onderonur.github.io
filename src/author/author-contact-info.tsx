import { ButtonLink } from '@/common/button-link';
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

export function AuthorContactInfo() {
  const iconClassName = 'h-6 w-6';

  return (
    <div className="flex gap-1">
      <ButtonLink
        variant="ghost"
        size="icon"
        href={`https://x.com/onderonur_`}
        aria-label="X profile"
      >
        <span className="text-xl">&#x1D54F;</span>
      </ButtonLink>
      <ButtonLink
        variant="ghost"
        size="icon"
        href={`https://github.com/onderonur`}
        aria-label="GitHub profile"
      >
        <GitHubLogoIcon className={iconClassName} />
      </ButtonLink>
      <ButtonLink
        variant="ghost"
        size="icon"
        href={`https://www.linkedin.com/in/onderonur/`}
        aria-label="LinkedIn profile"
      >
        <LinkedInLogoIcon className={iconClassName} />
      </ButtonLink>
      <ButtonLink
        variant="ghost"
        size="icon"
        href={`mailto:onuronder.onr@gmail.com`}
        aria-label="Send e-mail"
      >
        <EnvelopeClosedIcon className={iconClassName} />
      </ButtonLink>
    </div>
  );
}
