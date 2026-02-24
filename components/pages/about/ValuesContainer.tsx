import ValueItem from './ValueItem';

import Section from '@/components/section/Section';

import { Medal, Target, Clock3 } from 'lucide-react';

export default function ValuesContainer() {
  return (
    <Section className="flex flex-col gap-10 bg-app-background">
      <div className="gap-20">
        <h3 className="font-medium text-sm mt-5 text-accent text-center">
          OUR VALUES
        </h3>
        <h1 className="font-bold text-3xl md:text-4xl text-center text-text-primary mt-10">
          What Drives Us Forward
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row">
        <ValueItem
          icon={<Medal size={32} className="stroke-accent" />}
          title="Quality"
          description="We achieve superior quality through rigorous testing and continuous improvement."
        />
        <ValueItem
          icon={<Target size={32} className="stroke-accent" />}
          title="Precision"
          description="We achieve unparalleled precision through advanced techniques and rigorous attention to detail."
        />
        <ValueItem
          icon={<Clock3 size={32} className="stroke-accent" />}
          title="Reliability"
          description="We ensure consistent reliability through proactive maintenance and transparent communication."
        />
      </div>
    </Section>
  );
}
