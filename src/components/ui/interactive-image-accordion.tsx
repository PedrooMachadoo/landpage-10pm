'use client';

import React, { useState } from 'react';

interface AccordionItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItem;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionPanel = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[480px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0
        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isActive ? 'w-[380px]' : 'w-[64px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
        style={{ transform: isActive ? 'scale(1.03)' : 'scale(1)' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Accent line at top when active */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-accent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundColor: '#4361ee' }}
      />

      {/* Caption */}
      <div
        className={`absolute transition-all duration-500 text-white ${
          isActive
            ? 'bottom-6 left-6 right-6 rotate-0 opacity-100'
            : 'bottom-20 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap opacity-70'
        }`}
      >
        {isActive && (
          <span
            className="inline-block text-[10px] uppercase tracking-[0.25em] font-semibold mb-2 opacity-70"
            style={{ color: '#6c82f5' }}
          >
            {item.category}
          </span>
        )}
        <p className="text-base font-bold leading-snug">{item.title}</p>
      </div>
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
