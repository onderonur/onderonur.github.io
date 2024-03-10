import Image from 'next/image';

export function GlowingImage01() {
  return (
    <Image
      className="rounded-[inherit] object-cover"
      src="https://picsum.photos/230/345?random=0"
      alt="Glowing Image"
      width={230}
      height={345}
    />
  );
}
