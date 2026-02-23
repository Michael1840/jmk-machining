import { ReactNode } from 'react';

export default function ValueItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 p-8 min-w-0 h-full items-center">
      <span className="rounded-full bg-accent-dark p-4 w-fit">{icon}</span>
      <h3 className="font-medium text-m text-text-primary text-center">
        {title}
      </h3>
      <p className="font-medium text-xs md:text-sm text-text-secondary text-wrap text-center wrap-break-words">
        {description}
      </p>
    </div>
  );
}
