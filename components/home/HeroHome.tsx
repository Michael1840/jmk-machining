import ColumnContainer from '@/components/containers/ColumnContainer';
import HeroButtons from '@/components/home/HeroButtons';
import HeroContainer from '../hero/HeroContainer';

export default function HeroHome() {
  return (
      <HeroContainer image='/hero_home.png'>
        <ColumnContainer className="max-w-1/2">
            <h3 className="font-medium text-sm mt-5 text-accent text-center">
              PROFESSIONAL WELDING SERVICES
            </h3>
            <h1 className="font-bold text-5xl text-center text-text-primary mt-10">
              Forging Excellence<br/>in Every Weld
            </h1>
            <p className="font-normal text-sm mt-10 text-text-secondary text-center">
              From custom fabrication to industrial repairs, we deliver
              superior welding solutions with precision, reliability, and over
              two decades of expertise.
            </p>
            <HeroButtons />
          </ColumnContainer>
      </HeroContainer>
  );
}