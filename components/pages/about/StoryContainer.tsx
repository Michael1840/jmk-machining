import Section from '@/components/section/Section';

export default function StoryContainer() {
  return (
    <Section className="flex flex-wrap-reverse gap-10 bg-app-container border-y border-border-secondary justify-center">
      <img
        src={'/drill.png'}
        alt="Drill image"
        className="flex-1 min-w-75 max-w-125 self-stretch object-cover rounded-xl"
      />
      <div className="flex-1 min-w-1/2">
        <div className="flex flex-col gap-10">
          <h3 className="font-medium text-sm text-accent text-center md:text-left">
            WHY CHOOSE US
          </h3>
          <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left text-text-primary">
            Our Story
          </h1>
          <p className="text-xs md:text-sm text-text-secondary text-center md:text-left">
            What began as a passion in a home garage has grown into a
            comprehensive machining and fabrication facility. Founder and red
            seal certified fitter and turner, James Kruger, inherited the trade
            from his father and has devoted himself to perfecting the craft of
            metalwork.
            <br />
            <br />
            Over the years, we've invested in cutting-edge technology and
            assembled a team of certified machinists who share our commitment to
            excellence. Today, we serve a diverse clientele, from individual
            clients to major industrial firms.
            <br />
            <br />
            Our mission is clear: to provide superior machining services with
            honesty, accuracy, and a personalized approach that sets us apart.
          </p>
        </div>
      </div>
    </Section>
  );
}
