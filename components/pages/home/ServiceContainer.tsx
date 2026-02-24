import { Zap, Flame, Layers, Drill } from 'lucide-react';
import ServiceItem from './ServiceItem';
import RegularButton from '../../buttons/RegularButton';
import ServiceContainerButton from './ServiceContainerButton';
import Section from '@/components/section/Section';
import RevealSection from '@/components/animator/RevealSection';

export default function ServiceContainer() {
  return (
    <Section className="flex flex-col bg-app-background">
      <div className="gap-20">
        <RevealSection>
          <h3 className="font-medium text-sm mt-5 text-accent text-center">
            WHAT WE DO
          </h3>
        </RevealSection>

        <RevealSection>
          <h1 className="font-bold text-3xl md:text-4xl text-center text-text-primary mt-10">
            Professional Welding Services
          </h1>
        </RevealSection>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 md:gap-20 mt-20">
        <RevealSection>
          <ServiceItem
            icon={<Zap size={32} className="stroke-accent" />}
            title="MIG Welding"
            description="A fast welding process using a continuous wire feed."
          />
        </RevealSection>
        <RevealSection>
          <ServiceItem
            icon={<Flame size={32} className="stroke-accent" />}
            title="Stick Welding"
            description="A versatile technique suitable for outdoor and windy conditions."
          />
        </RevealSection>
        <RevealSection>
          <ServiceItem
            icon={<Layers size={32} className="stroke-accent" />}
            title="Flux-Cored Arc Welding"
            description="Ideal for thick materials, providing high penetration."
          />
        </RevealSection>
        <RevealSection>
          <ServiceItem
            icon={<Drill size={32} className="stroke-accent" />}
            title="Submerged Arc Welding"
            description="Used for heavy-duty applications, delivering deep welds with minimal spatter."
          />
        </RevealSection>
      </div>
      <ServiceContainerButton />
    </Section>
  );
}
