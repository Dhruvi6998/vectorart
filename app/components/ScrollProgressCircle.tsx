'use client';

import { useEffect, useRef, useState } from 'react';

const containerStyle: React.CSSProperties = {
  position: 'fixed',
  right: '24px',
  bottom: '24px',
  zIndex: 9999,
  cursor: 'pointer',
};

export default function ScrollProgressCircle() {
  const [progress, setProgress] = useState(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const currentProgress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(currentProgress);

      requestRef.current = null; // allow next animation frame
    };

    const handleScroll = () => {
      if (requestRef.current === null) {
        requestRef.current = requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateProgress(); // initial progress

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={containerStyle} onClick={scrollToTop}>
      <svg width="64" height="64" viewBox="0 0 64 64">
        {/* Background Circle */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="#eee"
          strokeWidth="4"
          fill="none"
        />

        {/* Progress Stroke */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="#e82e31"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          strokeLinecap="round"
          style={{ transition: 'none' }} // remove lag, follow scroll instantly
        />

        {/* Filled Center */}
        <circle cx="32" cy="32" r="22" fill="#e82e31" />

        {/* Arrow */}
        <path
          d="M32 38 V20 M24 28 L32 20 L40 28"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
