import RevealSection from '@/components/animator/RevealSection';
import ImageWrapper from '@/components/containers/ImageWrapper';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

export default function DetailedServiceItem({
  icon,
  title,
  description,
  details,
  imagePath,
  alt,
  isRight = true,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  details: string[];
  imagePath: string;
  isRight?: boolean;
  alt: string;
}) {
  return (
    <div
      className={`flex flex-col-reverse ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center justify-center`}
    >
      <div className="flex-1 min-w-1/2">
        <div className="flex flex-col gap-10 ">
          <span className="hidden md:visible rounded-full bg-accent-dark p-4 w-fit">
            {icon}
          </span>
          <RevealSection>
            <h1 className="font-bold text-2xl md:text-3xl text-center md:text-left text-text-primary">
              {title}
            </h1>
          </RevealSection>
          <RevealSection>
            <p className="text-xs md:text-sm text-text-secondary text-center md:text-left">
              {description}
            </p>
          </RevealSection>
        </div>
        <ul className="flex flex-col gap-2 mt-10 items-center md:items-start">
          {details.map((detail, index) => (
            <RevealSection key={index}>
              <li className="flex items-center gap-2">
                <ArrowRight className="stroke-accent w-2 md:w-4" />
                <p className="text-xs md:text-sm">{detail}</p>
              </li>
            </RevealSection>
          ))}
        </ul>
        {/* <Request */}
      </div>
      <ImageWrapper src={imagePath} alt={alt} />
    </div>
  );
}
