import { ButtonLink } from '@/core/ui/components/button-link';
import { FaXTwitter } from 'react-icons/fa6';
import { RxEnvelopeClosed, RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';

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
        <FaXTwitter className={iconClassName} />
      </ButtonLink>
      <ButtonLink
        variant="ghost"
        size="icon"
        href={`https://github.com/onderonur`}
        aria-label="GitHub profile"
      >
        <RxGithubLogo className={iconClassName} />
      </ButtonLink>
      <ButtonLink
        variant="ghost"
        size="icon"
        href={`https://www.linkedin.com/in/onderonur/`}
        aria-label="LinkedIn profile"
      >
        <RxLinkedinLogo className={iconClassName} />
      </ButtonLink>
      <ButtonLink
        variant="ghost"
        size="icon"
        href={`mailto:onuronder.onr@gmail.com`}
        aria-label="Send e-mail"
      >
        <RxEnvelopeClosed className={iconClassName} />
      </ButtonLink>
    </div>
  );
}
