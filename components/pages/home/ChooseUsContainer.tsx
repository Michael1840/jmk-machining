import RevealSection from '@/components/animator/RevealSection';
import ImageWrapper from '@/components/containers/ImageWrapper';
import Section from '@/components/section/Section';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';

export default function ChooseUsContainer() {
  return (
    <Section className="flex flex-wrap-reverse gap-10 bg-app-container border-y border-border-secondary justify-center">
      <div className="flex-1 min-w-1/2">
        <div className="flex flex-col gap-10">
          <RevealSection>
            <h3 className="font-medium text-sm text-accent text-center md:text-left">
              WHY CHOOSE US
            </h3>
          </RevealSection>
          <RevealSection>
            <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left text-text-primary">
              Trusted by industry leaders for over 2 decades.
            </h1>
          </RevealSection>

          <RevealSection>
            <p className="text-xs md:text-sm text-text-secondary text-center md:text-left">
              Lorem ipsum forem absum, lorem ipsum forem absum, lorem ipsum
              forem absum,lorem ipsum forem absum,lorem ipsum forem absum,lorem
              ipsum forem absum,lorem ipsum forem absum,lorem ipsum forem absum.
            </p>
          </RevealSection>
        </div>
        <ul className="flex flex-col gap-4 mt-10 items-center md:items-start">
          <RevealSection>
            <li className="flex items-center gap-2">
              <CircleCheck className="stroke-accent w-4.5 md:w-8" />
              <p className="text-xs md:text-sm">
                Red seal qualified Fitter and Turner.
              </p>
            </li>
          </RevealSection>
          <RevealSection>
            <li className="flex items-center gap-2">
              <CircleCheck className="stroke-accent w-4.5 md:w-8" />
              <p className="text-xs md:text-sm">
                Competitive pricing and free quotations.
              </p>
            </li>
          </RevealSection>
          <RevealSection>
            <li className="flex items-center gap-2">
              <CircleCheck className="stroke-accent w-4.5 md:w-8" />
              <p className="text-xs md:text-sm">
                Over 10 years of industry experience.
              </p>
            </li>
          </RevealSection>
          <RevealSection>
            <li className="flex items-center gap-2">
              <CircleCheck className="stroke-accent w-4.5 md:w-8" />
              <p className="text-xs md:text-sm">Quick turnaround times.</p>
            </li>
          </RevealSection>
        </ul>
      </div>
      <ImageWrapper src={'/images/bearing.png'} alt="Bearing image" />
    </Section>
  );
}
