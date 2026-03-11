import ColumnContainer from '@/components/containers/ColumnContainer';
import HeroContainer from '../../hero/HeroContainer';
import Section from '@/components/section/Section';

export default function HeroAbout() {
  return (
    <HeroContainer
      image="/images/hero_about.png"
      className="justify-center sm:justify-start"
    >
      <ColumnContainer className="justify-start max-w-full lg:max-w-1/2">
        <h3 className="font-medium text-sm mt-5 text-accent text-center sm:text-start">
          ABOUT US
        </h3>
        <h1 className="font-bold text-4xl md:text-5xl text-center sm:text-start text-text-primary mt-10">
          Building Trust Through Quality Craftsmanship
        </h1>
        <p className="font-normal text-sm mt-10 text-text-secondary text-center sm:text-start">
          Established in 2003, JMK Machining began as a humble family venture
          and has since evolved into a premier machining and fabrication company
          in the region. Our unwavering dedication to quality has solidified our
          position as an industry leader.
        </p>
      </ColumnContainer>
    </HeroContainer>
  );
}
