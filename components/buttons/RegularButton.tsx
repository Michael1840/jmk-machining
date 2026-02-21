'use client';

import { twMerge } from 'tailwind-merge';

const RegularButton = ({
  title,
  onClick,
  className,
}: {
  title: string;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'rounded-lg bg-app-container py-1.5 px-8 border-2 border-border-secondary shadow-white hover:shadow-2xl hover:bg-buttonHover hover:scale-105 transition-all transition-discrete',
        className,
      )}
    >
      {title}
    </button>
  );
};

export default RegularButton;
