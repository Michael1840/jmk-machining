import ReadyToStartContainer from '@/components/containers/ReadyToStartContainer';
import ChooseUsContainer from '@/components/pages/home/ChooseUsContainer';
import HeroHome from '@/components/pages/home/HeroHome';
import ServiceContainer from '@/components/pages/home/ServiceContainer';
import StatContainer from '@/components/pages/home/StatContainer';

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
