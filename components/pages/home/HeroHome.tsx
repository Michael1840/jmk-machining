import ColumnContainer from '@/components/containers/ColumnContainer';
import HeroButtons from '@/components/pages/home/HeroButtons';
import HeroContainer from '../../hero/HeroContainer';
import Section from '@/components/section/Section';

export default function HeroHome() {
  return (
    <HeroContainer image="/images/hero_home.png">
      <ColumnContainer className="md:max-w-200">
        <h3 className="font-medium text-sm mt-5 text-accent text-center">
          INDUSTRIAL MACHINING & REPAIR
        </h3>
        <h1 className="font-bold text-4xl md:text-5xl text-center text-text-primary mt-10">
          Precision Machining for Heavy Industry
        </h1>
        <p className="font-normal text-xs md:text-sm mt-10 text-text-secondary text-center">
          From gears and final drives to hydraulic cylinders and splined shafts
          — we repair and manufacture to spec, with welding and fabrication
          support where needed.
        </p>
        <HeroButtons />
      </ColumnContainer>
    </HeroContainer>
  );
}
