'use client';

import { useState } from 'react';

interface GlossaryTermProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

export default function GlossaryTerm({ term, definition, children }: GlossaryTermProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="glossary-term relative"
        data-term={term}
      >
        {children}
        
        {isOpen && (
          <span className="glossary-tooltip-wrapper">
            <span className="glossary-tooltip-content">
              <span className="glossary-tooltip-term">{term}</span>
              <span className="glossary-tooltip-definition">{definition}</span>
            </span>
          </span>
        )}
      </span>
    </>
  );
}
