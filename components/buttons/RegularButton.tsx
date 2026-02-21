'use client';

import { twMerge } from 'tailwind-merge';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

export default function RegularButton({
  title,
  onClick,
  className,
  prefixIcon,
  hasIcon = false,
}: {
  title: string;
  onClick: () => void;
  prefixIcon?: ReactNode;
  className?: string;
  hasIcon?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'relative bg-app-container overflow-hidden group rounded-lg text-sm font-medium border-2 border-border-secondary py-1.5 px-8',
        className,
      )}
    >
      {/* Hover background */}
      <div
        className={`absolute -inset-0.5 bg-white/15 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out`}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {prefixIcon && prefixIcon} {title} {hasIcon && <ArrowRight size={16} />}
      </span>
    </button>
  );
}
