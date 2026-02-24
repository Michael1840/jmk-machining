import ColumnContainer from '@/components/containers/ColumnContainer';
import HeroContainer from '../../hero/HeroContainer';
import Section from '@/components/section/Section';

export default function HeroServices() {
  return (
    <HeroContainer
      image="/hero_services.png"
      className="justify-center sm:justify-start"
    >
      <ColumnContainer className="justify-start max-w-full lg:max-w-1/2">
        <h3 className="font-medium text-sm mt-5 text-accent text-center sm:text-start">
          OUR SERVICES
        </h3>
        <h1 className="font-bold text-4xl md:text-5xl text-center sm:text-start text-text-primary mt-10">
          Comprehensive Welding Solutions
        </h1>
        <p className="font-normal text-xs md:text-sm mt-10 text-text-secondary text-center sm:text-start">
          From precision TIG welding to heavy-duty structural repairs, we offer
          a complete range of welding services to meet your needs. Every project
          receives the same dedication to quality and craftsmanship.
        </p>
      </ColumnContainer>
    </HeroContainer>
  );
}
