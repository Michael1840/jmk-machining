import ReadyToStartContainer from '@/components/containers/ReadyToStartContainer';
import HeroServices from '@/components/pages/services/HeroService';
import QualityContainer from '@/components/pages/services/QualityContainer';

export default function Services() {
  return (
    <>
      <HeroServices />
      <QualityContainer />
      <ReadyToStartContainer />
    </>
  );
}
