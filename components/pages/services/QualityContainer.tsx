import ImageWrapper from '@/components/containers/ImageWrapper';
import Section from '@/components/section/Section';
import { CircleCheck } from 'lucide-react';

export default function QualityContainer() {
  return (
    <Section className="flex flex-wrap-reverse gap-10 bg-app-container border-y border-border-secondary justify-center">
      <ImageWrapper
        src={'/images/quality.jpg'}
        alt="Welding mask and tig welder"
      />
      <div className="flex-1 min-w-1/2">
        <div className="flex flex-col gap-10">
          <h3 className="font-medium text-sm text-accent text-center md:text-left">
            OUR PROCESS
          </h3>
          <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left text-text-primary">
            Uncompromising Quality
          </h1>
          <p className="text-xs md:text-sm text-text-secondary text-center md:text-left">
            At JMK Machining, we guarantee that every project meets the highest
            standards of quality. From the first consultation to the final
            product, we focus on precision and durability.
          </p>
        </div>
        <ul className="flex flex-col gap-4 mt-10 items-center md:items-start">
          <li className="flex items-center gap-2">
            <CircleCheck className="stroke-accent w-4.5 md:w-8" />
            <p className="text-xs md:text-sm">
              Precise welds, completed efficiently
            </p>
          </li>
          <li className="flex items-center gap-2">
            <CircleCheck className="stroke-accent w-4.5 md:w-8" />
            <p className="text-xs md:text-sm">
              Durable welds that stand the test of time
            </p>
          </li>
          <li className="flex items-center gap-2">
            <CircleCheck className="stroke-accent w-4.5 md:w-8" />
            <p className="text-xs md:text-sm">
              Perfect for industrial and artistic applications
            </p>
          </li>
        </ul>
      </div>
    </Section>
  );
}
