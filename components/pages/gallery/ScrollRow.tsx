'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollRowItem {
  image: string;
  label: string;
}

interface ScrollRowProps {
  title: string;
  items: ScrollRowItem[];
}

export default function ScrollRow({ title, items }: ScrollRowProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const itemWidth =
      scrollRef.current.querySelector('div')?.offsetWidth ?? 300;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -itemWidth - 16 : itemWidth + 16,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-accent rounded-full" />
          <h2 className="text-text-primary font-bold text-lg sm:text-2xl tracking-wide">
            {title}
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-1.5 rounded-lg border border-border-primary text-text-secondary hover:text-text-primary hover:border-border-secondary transition-colors duration-200"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-1.5 rounded-lg border border-border-primary text-text-secondary hover:text-text-primary hover:border-border-secondary transition-colors duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="
              relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer border border-border-primary
              w-full
              sm:w-[calc((100%-3rem)/4)] sm:min-w-56
            "
            style={{ aspectRatio: '1 / 1' }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-500 ease-out"
              style={{
                transform: hoveredIndex === i ? 'scale(1.08)' : 'scale(1)',
              }}
            />
            <div
              className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300"
              style={{
                opacity: hoveredIndex === i ? 1 : 0,
                background:
                  'linear-gradient(to top, rgba(5,8,11,0.92) 0%, rgba(5,8,11,0.5) 60%, transparent 100%)',
              }}
            >
              <p className="text-accent font-semibold text-xs uppercase tracking-widest">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
