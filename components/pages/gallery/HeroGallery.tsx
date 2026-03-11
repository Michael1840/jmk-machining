import ColumnContainer from '@/components/containers/ColumnContainer';
import HeroContainer from '../../hero/HeroContainer';
import Section from '@/components/section/Section';

export default function HeroGallery() {
  return (
    <HeroContainer
      image="/images/hero_gallery.png"
      className="justify-center sm:justify-start"
    >
      <ColumnContainer className="justify-start max-w-full lg:max-w-1/2">
        <h3 className="font-medium text-sm mt-5 text-accent text-center sm:text-start">
          OUR WORK
        </h3>
        <h1 className="font-bold text-4xl md:text-5xl text-center sm:text-start text-text-primary mt-10">
          Product Gallery
        </h1>
        <p className="font-normal text-sm mt-10 text-text-secondary text-center sm:text-start">
          Explore our gallery of completed projects. From intricate decorative
          pieces to heavy-duty industrial work, see the quality and
          craftsmanship we bring to every job.
        </p>
      </ColumnContainer>
    </HeroContainer>
  );
}
