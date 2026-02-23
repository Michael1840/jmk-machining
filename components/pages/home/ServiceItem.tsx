import { ReactNode } from 'react';

export default function ServiceItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col rounded-xl bg-app-container items-center md:items-start border-2 border-border-secondary gap-4 p-8 min-w-0 h-full">
      <span className="rounded-full bg-accent-dark p-4 w-fit">{icon}</span>
      <h3 className="font-medium text-m text-text-primary text-center md:text-left">
        {title}
      </h3>
      <p className="font-medium text-sm text-text-secondary text-wrap text-center md:text-left wrap-break-words">
        {description}
      </p>
    </div>
  );
}
