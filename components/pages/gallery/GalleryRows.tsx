import Section from '@/components/section/Section';
import ScrollRow from './ScrollRow';

export default function GalleryRows() {
  return (
    <Section className="flex flex-col gap-16">
      <ScrollRow
        title="Welding"
        items={[
          {
            image: '/images/welding-gallery-1.jpeg',
            label: 'Structural Welding',
          },
          {
            image: '/images/welding-gallery-2.jpeg',
            label: 'Precision Parts',
          },
          {
            image: '/images/welding-gallery-3.jpeg',
            label: 'MIG & TIG Welding',
          },
          {
            image: '/images/welding-gallery-4.jpeg',
            label: 'MIG & TIG Welding',
          },
        ]}
      />
      <ScrollRow
        title="Machining"
        items={[
          {
            image: '/images/welding-gallery-1.jpeg',
            label: 'Structural Welding',
          },
          {
            image: '/images/welding-gallery-2.jpeg',
            label: 'Precision Parts',
          },
          {
            image: '/images/welding-gallery-3.jpeg',
            label: 'MIG & TIG Welding',
          },
          {
            image: '/images/welding-gallery-4.jpeg',
            label: 'MIG & TIG Welding',
          },
        ]}
      />
      <ScrollRow
        title="Fabrication"
        items={[
          {
            image: '/images/welding-gallery-1.jpeg',
            label: 'Structural Welding',
          },
          {
            image: '/images/welding-gallery-2.jpeg',
            label: 'Precision Parts',
          },
          {
            image: '/images/welding-gallery-3.jpeg',
            label: 'MIG & TIG Welding',
          },
          {
            image: '/images/welding-gallery-4.jpeg',
            label: 'MIG & TIG Welding',
          },
        ]}
      />
      <ScrollRow
        title="CAD Design"
        items={[
          {
            image: '/images/welding-gallery-1.jpeg',
            label: 'Structural Welding',
          },
          {
            image: '/images/welding-gallery-2.jpeg',
            label: 'Precision Parts',
          },
          {
            image: '/images/welding-gallery-3.jpeg',
            label: 'MIG & TIG Welding',
          },
          {
            image: '/images/welding-gallery-4.jpeg',
            label: 'MIG & TIG Welding',
          },
        ]}
      />
      <ScrollRow
        title="Hydraulics"
        items={[
          {
            image: '/images/welding-gallery-1.jpeg',
            label: 'Structural Welding',
          },
          {
            image: '/images/welding-gallery-2.jpeg',
            label: 'Precision Parts',
          },
          {
            image: '/images/welding-gallery-3.jpeg',
            label: 'MIG & TIG Welding',
          },
          {
            image: '/images/welding-gallery-4.jpeg',
            label: 'MIG & TIG Welding',
          },
        ]}
      />
    </Section>
  );
}
