import Section from '@/components/section/Section';
import DetailedServiceItem from './DetailedServiceItem';
import { Zap, Cog, Settings, Layers3, Compass, Droplets } from 'lucide-react';

export default function DetailedServiceContainer() {
  return (
    <Section className="flex flex-col gap-40">
      <DetailedServiceItem
        icon={<Zap className="stroke-accent" size={32} />}
        imagePath="/images/tig_weld_example.jpg"
        title="TIG Welding"
        description="Tungsten Inert Gas welding offers precision for thinner materials and intricate designs. Best suited for stainless steel, aluminium, and cast iron."
        details={[
          'Stainless steel — food-grade, structural & decorative',
          'Aluminium — lightweight structures and enclosures',
          'Cast iron — repairs and fabrication',
          'Exceptional control over heat input and weld quality',
        ]}
        alt="Man welding"
      />
      <DetailedServiceItem
        icon={<Zap className="stroke-accent" size={32} />}
        imagePath="/images/mig_example.jpg"
        title="ARC & MIG Welding"
        description="Versatile welding solutions for structural work and heavy-duty applications. Ideal for carbon steel, site work, and high-deposition jobs."
        details={[
          'MIG welding for fast, clean production welds',
          'ARC welding for robust site and structural work',
          'Suitable for a wide range of material thicknesses',
          'On-site and workshop welding available',
        ]}
        isRight={false}
        alt="Man welding"
      />
      <DetailedServiceItem
        icon={<Cog className="stroke-accent" size={32} />}
        imagePath="/images/milling_example.jpg"
        title="Milling"
        description="From general-purpose milling to tight-tolerance precision work. We machine complex profiles, pockets, and flat surfaces in a range of materials."
        details={[
          'General and precision milling',
          'Keyway cutting to DIN/ISO standards',
          'Spline and gear cutting',
          'Multi-axis setups for complex geometries',
        ]}
        alt="Milling machine"
      />
      <DetailedServiceItem
        icon={<Settings className="stroke-accent" size={32} />}
        imagePath="/images/turning_example.jpg"
        title="Turning"
        description="CNC and manual turning for shafts, bushes, flanges, and custom components. Precision diameter tolerances achieved consistently."
        details={[
          'Shafts, spindles, and threaded components',
          'Tight tolerance turned parts',
          'Gear cutting and spline profiles',
          'Both prototype and production runs',
        ]}
        isRight={false}
        alt="Lathe"
      />
      <DetailedServiceItem
        icon={<Layers3 className="stroke-accent" size={32} />}
        imagePath="/images/paper_to_product.jpg"
        title="Fabrication"
        description="Custom metalwork fabrication for industrial and commercial applications. Designed and built to your specification."
        details={[
          'Specialized jigs and fixtures',
          'Structural frames and supports',
          'Small conveyors and material handling',
          'One-off and short-run production',
        ]}
        alt="Man welding on a large CNC"
      />
      <DetailedServiceItem
        icon={<Compass className="stroke-accent" size={32} />}
        imagePath="/images/cad_drawing.jpg"
        title="CAD Design"
        description="Professional CAD design for parts, assemblies, and fabrication drawings. From concept to production-ready documentation."
        details={[
          '2D technical drawings and schematics',
          '3D part and assembly modelling',
          'Design for manufacture (DFM)',
          'Revision management and drawing packages',
        ]}
        isRight={false}
        alt="Computer screen running CAD software"
      />
      <DetailedServiceItem
        icon={<Droplets className="stroke-accent" size={32} />}
        imagePath="/images/hydraulics_1.png"
        title="Hydraulics"
        description="Custom hydraulic solutions designed and built in-house. From individual components to complete power pack assemblies."
        details={[
          'Custom hydraulic cylinder design and manufacture',
          'Supply hoses, fittings, and manifolds',
          'Pumps, valves, and control blocks',
          'Complete power pack design and assembly',
        ]}
        alt="Man working on hydraulic systems"
      />
    </Section>
  );
}
