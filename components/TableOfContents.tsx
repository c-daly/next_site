'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -35% 0%' }
    );

    const headings = document.querySelectorAll('h2, h3');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <nav className="toc">
      <h4 className="text-base font-semibold mb-4 text-zinc-300">Contents</h4>
      <ul className="space-y-3 text-[17px]">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? 'ml-4' : ''}
          >
            <a
              href={`#${item.id}`}
              className={`block transition-colors ${
                activeId === item.id
                  ? 'text-accent font-medium'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
