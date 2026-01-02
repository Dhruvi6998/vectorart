// components/BottomLeftLoader.tsx
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function BottomLeftLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Hide loader when route changes
  useEffect(() => {
    setLoading(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    // Intercept all link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href) {
        // Skip if link opens in new tab
        if (link.target === '_blank' || e.ctrlKey || e.metaKey) {
          return;
        }

        try {
          const url = new URL(link.href);
          // Only show loader for same-origin links that are different from current page
          if (url.origin === window.location.origin && url.pathname !== pathname) {
            setLoading(true);
          }
        } catch (e) {
          // Invalid URL, ignore
        }
      }
    };

    // Handle browser back/forward
    const handlePopState = () => {
      setLoading(true);
    };

    document.addEventListener('click', handleClick, true);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [pathname]);

  // Safety timeout to hide loader
  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => setLoading(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="loader-container">
      <div className="loader"></div>

      <style jsx>{`
        .loader-container {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 1000;
        }

        .loader {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(255, 0, 0, 0.3);
          border-top-color: #ff0000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .loader::after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
          opacity: 0;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}