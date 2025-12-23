'use client';

import { useEffect, useState } from 'react';

/* ✅ DEFINE STYLES FIRST */
const containerStyle: React.CSSProperties = {
  position: 'fixed',
  right: '24px',
  bottom: '24px',
  zIndex: 9999,
  cursor: 'pointer',
};

export default function ScrollProgressCircle() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scrollTop / height) * 100);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  /* ✅ Scroll to top function */
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
          strokeDashoffset={
            circumference - (progress / 100) * circumference
          }
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.2s ease-out' }}
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
