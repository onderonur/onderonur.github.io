import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type BlogPostImageProps = ImageProps;

export function BlogPostImage({ className, alt, ...rest }: BlogPostImageProps) {
  return (
    <Image
      alt={alt}
      className={twMerge('w-full rounded-md', className)}
      {...rest}
    />
  );
}
