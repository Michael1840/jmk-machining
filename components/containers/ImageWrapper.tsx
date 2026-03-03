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
    <RevealSection>
      <div
        className={twMerge(
          'relative flex-1 min-w-75 md:min-w-100 lg:min-w-125 max-w-125 self-stretch rounded-xl overflow-hidden min-h-64 md:aspect-square',
          className,
        )}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </RevealSection>
  );
}
