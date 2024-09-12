'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/core/shadcn-ui/ui/tooltip';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  XIcon,
  TwitterShareButton as XShareButton,
} from 'react-share';

type ShareButtonTooltipProps = {
  name: string;
  children: React.ReactNode;
};

function ShareButtonTooltip({ name, children }: ShareButtonTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <p>Share on {name}</p>
      </TooltipContent>
    </Tooltip>
  );
}

type ShareButtonsProps = {
  url: string;
};

export function ShareButtons({ url }: ShareButtonsProps) {
  if (!url) {
    return null;
  }

  const shareButtonProps = { url };
  const shareIconSize = '2rem';

  return (
    <div className="flex flex-wrap justify-end gap-1 py-2">
      <ShareButtonTooltip name="Facebook">
        <FacebookShareButton {...shareButtonProps}>
          <FacebookIcon size={shareIconSize} />
        </FacebookShareButton>
      </ShareButtonTooltip>
      <ShareButtonTooltip name="X">
        <XShareButton {...shareButtonProps}>
          <XIcon size={shareIconSize} />
        </XShareButton>
      </ShareButtonTooltip>
      <ShareButtonTooltip name="LinkedIn">
        <LinkedinShareButton {...shareButtonProps}>
          <LinkedinIcon size={shareIconSize} />
        </LinkedinShareButton>
      </ShareButtonTooltip>
      <ShareButtonTooltip name="Reddit">
        <RedditShareButton {...shareButtonProps}>
          <RedditIcon size={shareIconSize} />
        </RedditShareButton>
      </ShareButtonTooltip>
    </div>
  );
}
