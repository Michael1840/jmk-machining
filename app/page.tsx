import RegularButton from '@/components/buttons/RegularButton';
import ColumnContainer from '@/components/containers/ColumnContainer';
import RowContainer from '@/components/containers/RowContainer';
import HeroButtons from '@/components/home/HeroButtons';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full items-center justify-between bg-white dark:bg-black sm:items-start">
        {/* Hero - relative wrapper is key */}
        <div className="relative w-full">
          <Image
            src="/hero_home.png"
            alt="Hero"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
          {/* Overlay sits on top of image only */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/75 backdrop-blur-xs">
            <ColumnContainer className="max-w-1/2">
              <h3 className="font-medium text-sm mt-5 text-accent text-center">
                PROFESSIONAL WELDING SERVICES
              </h3>
              <h1 className="font-bold text-5xl text-center text-text-primary mt-10">
                Forging Excellence in Every Weld
              </h1>
              <p className="font-normal text-sm mt-10 text-text-secondary text-center">
                From custom fabrication to industrial repairs, we deliver
                superior welding solutions with precision, reliability, and over
                two decades of expertise.
              </p>
              <HeroButtons />
            </ColumnContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
