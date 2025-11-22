'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'rgba(99, 230, 190, 0.2)',
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
          width: `${progress}%`,
          transition: 'width 0.1s ease-out',
        }}
      />
    </div>
  );
}
