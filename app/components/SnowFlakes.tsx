'use client';
import React, { useEffect } from 'react';

const Snowflakes: React.FC = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = Math.random() * window.innerWidth + 'px';
      
      // Slow animation: 8-15 seconds
      snowflake.style.animationDuration = 8 + Math.random() * 7 + 's';
      
      // Random size
      snowflake.style.fontSize = 10 + Math.random() * 20 + 'px';
      
      // Slightly visible to fully visible
      snowflake.style.opacity = String(0.5 + Math.random() * 0.5);
      
      // Random slant / drift left or right
      const driftX = (Math.random() - 0.5) * 200; // -100px to +100px
      snowflake.style.setProperty('--drift-x', `${driftX}px`);
      
      snowflake.textContent = '❄';
      document.body.appendChild(snowflake);

      setTimeout(() => snowflake.remove(), 15000); // remove after animation
    };

    const interval = setInterval(createSnowflake, 300); // frequency

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default Snowflakes;
