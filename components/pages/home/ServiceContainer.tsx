import {
  Zap,
  Flame,
  Layers,
  Drill,
  Settings,
  Hammer,
  PenTool,
} from 'lucide-react';
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
            Professional Machining Services
          </h1>
        </RevealSection>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 md:gap-20 mt-20">
        <RevealSection>
          <ServiceItem
            icon={<Zap size={32} className="stroke-accent" />}
            title="Welding"
            description="Precision joining of metal components using MIG, TIG, and stick welding techniques for structural and custom fabrication work."
          />
        </RevealSection>
        <RevealSection>
          <ServiceItem
            icon={<Settings size={32} className="stroke-accent" />}
            title="Machining"
            description="CNC and manual machining for tight-tolerance parts, including turning, milling, drilling, and surface finishing."
          />
        </RevealSection>
        <RevealSection>
          <ServiceItem
            icon={<Hammer size={32} className="stroke-accent" />}
            title="Fabrication"
            description="Custom metal fabrication from concept to completion — cutting, bending, forming, and assembling steel, aluminium, and stainless."
          />
        </RevealSection>
        <RevealSection>
          <ServiceItem
            icon={<PenTool size={32} className="stroke-accent" />}
            title="CAD Design"
            description="Technical 2D drawings and 3D modelling to engineer precise components and assemblies before production begins."
          />
        </RevealSection>
      </div>
      <ServiceContainerButton />
    </Section>
  );
}
