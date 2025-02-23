import Image from 'next/image';
import { twJoin } from 'tailwind-merge';

export function GlowingImage02() {
  return (
    <div
      className={twJoin(
        'relative rounded-[0.6rem]',
        "before:absolute before:inset-0 before:rounded-[inherit] before:bg-[url('https://picsum.photos/230/345?random=0')] before:bg-cover before:bg-center before:bg-no-repeat before:blur-[0.6rem] before:saturate-2",
      )}
    >
      <Image
        className="relative z-1 rounded-[inherit] object-cover"
        src="https://picsum.photos/230/345?random=0"
        alt="Glowing Image"
        width={230}
        height={345}
      />
    </div>
  );
}
