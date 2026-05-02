'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AccordionItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  link?: string;
}

interface AccordionItemProps {
  item: AccordionItem;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionPanel = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  const handleClick = () => {
    if (isActive && item.link) {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`
        relative h-[480px] rounded-2xl overflow-hidden flex-shrink-0
        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isActive ? 'w-[380px]' : 'w-[64px]'}
        ${isActive && item.link ? 'cursor-pointer' : 'cursor-default'}
      `}
      onMouseEnter={onMouseEnter}
      onClick={handleClick}
    >
      {/* Background image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
        style={{ transform: isActive ? 'scale(1.03)' : 'scale(1)' }}
      />

      {/* Gradient overlay — stronger at bottom for legibility */}
      <div className="absolute inset-0" style={{
        background: isActive
          ? 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 100%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 100%)',
      }} />

      {/* Accent line at top when active */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundColor: '#4361ee' }}
      />

      {/* Inactive label — horizontal, centered, no rotation */}
      {!isActive && (
        <div className="absolute inset-0 flex items-end justify-center pb-5 px-2">
          <p
            className="text-white text-[11px] font-semibold leading-tight text-center"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              letterSpacing: '0.05em',
              textShadow: '0 1px 4px rgba(0,0,0,0.8)',
            }}
          >
            {item.title}
          </p>
        </div>
      )}

      {/* Active caption */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span
            className="inline-block text-[10px] uppercase tracking-[0.25em] font-bold mb-2"
            style={{ color: '#818cf8' }}
          >
            {item.category}
          </span>
          <div className="flex items-end justify-between gap-3">
            <p className="text-white text-base font-bold leading-snug" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
              {item.title}
            </p>
            {item.link && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <ArrowUpRight size={14} className="text-white" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

interface ImageAccordionProps {
  items: AccordionItem[];
  defaultActive?: number;
}

export function ImageAccordion({ items, defaultActive = 0 }: ImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <div className="flex flex-row items-center gap-3 overflow-x-auto">
      {items.map((item, index) => (
        <AccordionPanel
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}
