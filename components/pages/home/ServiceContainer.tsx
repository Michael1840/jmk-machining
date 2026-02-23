import { Zap, Flame, Layers, Drill } from 'lucide-react';
import ServiceItem from './ServiceItem';
import RegularButton from '../../buttons/RegularButton';
import ServiceContainerButton from './ServiceContainerButton';

export default function ServiceContainer() {
  return (
    <div className="flex flex-col px-4 py-16 md:p-40 bg-app-background">
      <div className="gap-20">
        <h3 className="font-medium text-sm mt-5 text-accent text-center">
          WHAT WE DO
        </h3>
        <h1 className="font-bold text-3xl md:text-4xl text-center text-text-primary mt-10">
          Professional Welding Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 md:gap-20 mt-20">
        <ServiceItem
          icon={<Zap size={32} className="stroke-accent" />}
          title="MIG Welding"
          description="A fast welding process using a continuous wire feed."
        />
        <ServiceItem
          icon={<Flame size={32} className="stroke-accent" />}
          title="Stick Welding"
          description="A versatile technique suitable for outdoor and windy conditions."
        />
        <ServiceItem
          icon={<Layers size={32} className="stroke-accent" />}
          title="Flux-Cored Arc Welding"
          description="Ideal for thick materials, providing high penetration."
        />
        <ServiceItem
          icon={<Drill size={32} className="stroke-accent" />}
          title="Submerged Arc Welding"
          description="Used for heavy-duty applications, delivering deep welds with minimal spatter."
        />
      </div>
      <ServiceContainerButton />
    </div>
  );
}
