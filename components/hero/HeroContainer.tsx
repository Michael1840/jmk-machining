import Image from 'next/image';
import { ReactNode } from 'react';

export default function HeroContainer({
  children,
  image,
}: {
  children: ReactNode;
  image: string;
}){
    return (
        <div className="relative w-full" style={{height: "100dvh"}}>
        <Image
          src={image}
          alt="Hero"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        
        <div className="absolute inset-0 flex items-center justify-center bg-black/85 backdrop-blur-xs">
          {children}
        </div>
      </div>
    );
}