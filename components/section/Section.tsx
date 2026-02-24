import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Section({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <section className={twMerge('px-4 py-16 md:p-20', className)}>
      {children}
    </section>
  );
}
