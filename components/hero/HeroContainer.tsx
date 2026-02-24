import Image from 'next/image';
import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';
import RevealSection from '../animator/RevealSection';

export default function HeroContainer({
  children,
  image,
  className,
}: {
  children: ReactNode;
  image: string;
  className?: string;
}) {
  return (
    <div className="relative w-full h-dvh ">
      <Image
        src={image}
        alt="Hero"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div
        className={twMerge(
          'absolute inset-0 flex items-center justify-center bg-black/85 backdrop-blur-xs px-4 py-16 md:p-20',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
