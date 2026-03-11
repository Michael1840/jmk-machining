import ReadyToStartContainer from '@/components/containers/ReadyToStartContainer';
import GalleryRows from '@/components/pages/gallery/GalleryRows';
import HeroGallery from '@/components/pages/gallery/HeroGallery';
import ScrollRow from '@/components/pages/gallery/ScrollRow';

export default function Gallery() {
  return (
    <>
      <HeroGallery />
      <GalleryRows />
      <ReadyToStartContainer />
    </>
  );
}
