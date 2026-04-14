import RevealSection from '@/components/animator/RevealSection';
import ImageWrapper from '@/components/containers/ImageWrapper';
import Section from '@/components/section/Section';

export default function StoryContainer() {
  return (
    <Section className="flex flex-wrap-reverse gap-10 bg-app-container border-y border-border-secondary justify-center">
      <ImageWrapper alt="Drill image" src="/images/drill.png" />
      <div className="flex-1 min-w-1/2">
        <div className="flex flex-col gap-10">
          <RevealSection>
            <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left text-text-primary">
              Our Story
            </h1>
          </RevealSection>
          <RevealSection>
            <p className="text-xs md:text-sm text-text-secondary text-center md:text-left">
              What began as a passion project in his garage, has grown into a
              fully equipped machining and fabrication workshop, still proudly
              operating from that same space today. Founder and red seal
              certified fitter and turner, Joshua Kiggen, developed his hands-on
              passion early on, inspired by his grandfather’s woodwork. He first
              crafted high-quality wooden spearguns before naturally progressing
              into machining and metalwork.
              <br />
              <br />
              Over time, the workshop has been outfitted to handle everything
              from one-off repairs to complex fabrication projects. Today, JMK
              Machining serves both individuals and industrial clients with
              demanding specifications.
              <br />
              <br />
              Our mission is simple: to deliver quality workmanship with
              honesty, precision, and a personal touch larger workshops can’t
              match.
            </p>
          </RevealSection>
        </div>
      </div>
    </Section>
  );
}
