import ColumnContainer from '@/components/containers/ColumnContainer';
import HeroContainer from '../../hero/HeroContainer';
import Section from '@/components/section/Section';

export default function HeroContact() {
  return (
    <HeroContainer
      image="/hero_contact.png"
      className="justify-center sm:justify-start"
    >
      <ColumnContainer className="justify-start max-w-full lg:max-w-1/2">
        <h3 className="font-medium text-sm mt-5 text-accent text-center sm:text-start">
          CONTACT US
        </h3>
        <h1 className="font-bold text-4xl md:text-5xl text-center sm:text-start text-text-primary mt-10">
          Let's Talk — We're Ready to Help
        </h1>
        <p className="font-normal text-sm mt-10 text-text-secondary text-center sm:text-start">
          Have a project in mind or need a custom quote? Our team is available
          to answer your questions and get you started. Reach out to us and
          experience the JMK difference firsthand.
        </p>
      </ColumnContainer>
    </HeroContainer>
  );
}
