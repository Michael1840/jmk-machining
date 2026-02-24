// components/ImageWrapper.tsx
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import RevealSection from '../animator/RevealSection';

export default function ImageWrapper({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <RevealSection
      className={twMerge(
        'relative flex-1 min-w-75 max-w-125 self-stretch rounded-xl overflow-hidden',
        className,
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </RevealSection>
  );
}
