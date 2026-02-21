import ReadyToStartContainer from '@/components/containers/ReadyToStartContainer';
import ChooseUsContainer from '@/components/home/ChooseUsContainer';
import HeroHome from '@/components/home/HeroHome';
import ServiceContainer from '@/components/home/ServiceContainer';
import StatContainer from '@/components/home/StatContainer';

export default function Home() {
  return (
    <>
      <HeroHome />
      <StatContainer />
      <ServiceContainer />
      <ChooseUsContainer />
      <ReadyToStartContainer />
    </>
  );
}
