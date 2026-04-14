import Section from '@/components/section/Section';
import ScrollRow from './ScrollRow';

export default function GalleryRows() {
  return (
    <Section className="flex flex-col gap-16">
      <ScrollRow
        title="Machining"
        items={[
          {
            image: '/images/planetary-gearbox.jpg',
            label: 'Planetary Gearbox',
          },
          {
            image: '/images/gearbox-1.jpeg',
            label: 'Planetary Gearbox',
          },
          {
            image: '/images/bearing.png',
            label: 'Final drive gearbox for Civils2000',
          },
          {
            image: '/images/machining-1.jpg',
            label: 'Hydraulic cylinder trunnion block',
          },
          {
            image: '/images/machining-2.jpg',
            label: 'Helical Gears',
          },
          {
            image: '/images/machining-3.jpg',
            label: 'Low precision geared hinges',
          },
          {
            image: '/images/spline-cutting-1.jpeg',
            label: 'Spline Cutting',
          },
          {
            image: '/images/milling_example.jpg',
            label: 'Special splined shaft repair for hydraulic piston motor',
          },
          {
            image: '/images/turning-1.jpeg',
            label: 'Turning',
          },
          {
            image: '/images/turning-2.jpeg',
            label: 'Turning',
          },
          {
            image: '/images/turning-3.jpg',
            label: 'Turning',
          },
        ]}
      />
      <ScrollRow
        title="Welding"
        items={[
          {
            image: '/images/stick-welding.jpeg',
            label: 'Stick Welding',
          },
          {
            image: '/images/welding-gallery-2.jpeg',
            label: 'Aluminium Tig',
          },
          {
            image: '/images/welding-gallery-3.jpeg',
            label: 'Stainless Tig',
          },
        ]}
      />
      <ScrollRow
        title="Fabrication"
        items={[
          {
            image: '/images/cad-result-1.jpg',
            label: '90° milling head',
          },
          {
            image: '/images/paper_to_product.jpg',
            label: '60T 0.8Mod gear',
          },
          {
            image: '/images/welding-gallery-4.jpeg',
            label: 'Custom air intake',
          },
          {
            image: '/images/fabrication-1.jpg',
            label: 'record player parts',
          },
          {
            image: '/images/fabrication-2.jpg',
            label: 'Low precision geared hinges',
          },
        ]}
      />
      <ScrollRow
        title="CAD Design"
        items={[
          {
            image: '/images/cad-design-1.jpg',
            label: '90° milling head',
          },
          {
            image: '/images/cad_drawing.jpg',
            label: '90° milling head',
          },
        ]}
      />
      <ScrollRow
        title="Hydraulics"
        items={[
          {
            image: '/images/hydraulics-1.jpg',
            label:
              'Stainless manifold for spray bars and deck wash on Kraken fishing',
          },
          {
            image: '/images/hydraulic-2.jpg',
            label:
              'Stainless manifold for spray bars and deck wash on Kraken fishing',
          },
        ]}
      />
    </Section>
  );
}
