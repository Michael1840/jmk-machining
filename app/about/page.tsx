import HeroAbout from '@/components/pages/about/HeroAbout';
import StoryContainer from '@/components/pages/about/StoryContainer';
import ValuesContainer from '@/components/pages/about/ValuesContainer';
import ReadyToStartContainer from '@/components/containers/ReadyToStartContainer';

export default function About() {
  return (
    <>
      <HeroAbout />
      <StoryContainer />
      <ValuesContainer />
      <ReadyToStartContainer />
    </>
  );
}
