import ColumnContainer from '@/components/containers/ColumnContainer';
import HeroButtons from '@/components/home/HeroButtons';
import HeroContainer from '../hero/HeroContainer';

export default function HeroHome() {
  return (
    <HeroContainer image="/hero_home.png">
      <ColumnContainer className="max-w-1/2">
        <h3 className="font-medium text-sm mt-5 text-accent text-center">
          INDUSTRIAL MACHINING & REPAIR
        </h3>
        <h1 className="font-bold text-5xl text-center text-text-primary mt-10">
          Precision Machining for Heavy Industry
        </h1>
        <p className="font-normal text-sm mt-10 text-text-secondary text-center">
          From gears and final drives to hydraulic cylinders and splined shafts
          — we repair and manufacture to spec, with welding and fabrication
          support where needed.
        </p>
        <HeroButtons />
      </ColumnContainer>
    </HeroContainer>
  );
}
