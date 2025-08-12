import { useEffect, useRef } from 'react';

/**
 * A completely rewritten and robust component to render a starfield background effect.
 * This includes both stationary twinkling stars and shooting stars (meteors) that
 * are dynamically created and removed to ensure performance and prevent animation bugs.
 */
const Stars = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Ensure the container is empty before we start.
    container.innerHTML = '';

    // --- 1. Create the stationary, twinkling stars ---
    const createTwinklingStars = () => {
      const starCount = 200; // The number of stars to render
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 2 + 1; // Random size from 1px to 3px
        const duration = Math.random() * 3 + 2; // Random animation duration from 2s to 5s

        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--twinkle-duration', `${duration}s`);
        
        container.appendChild(star);
      }
    };

    // --- 2. Create a single shooting star (meteor) ---
    const createMeteor = () => {
      const meteor = document.createElement('div');
      meteor.className = 'shooting-star';

      // **Fix**: Force spawn location to be off-screen at the top-left.
      meteor.style.top = `${Math.random() * 60 - 20}%`;
      meteor.style.left = `${Math.random() * 60 - 20}%`;

      // **Fix**: Set CSS variables for angle, distance, and other properties.
      const angle = 40 + Math.random() * 10; // Angle between 40-50 degrees.
      const duration = Math.random() * 1.5 + 1; // Travel time from 1s to 2.5s.
      const length = Math.random() * 100 + 100; // Trail length.
      const distance = Math.random() * 500 + 1000; // Travel distance.

      meteor.style.setProperty('--meteor-angle', `${angle}deg`);
      meteor.style.setProperty('--meteor-duration', `${duration}s`);
      meteor.style.setProperty('--meteor-length', `${length}px`);
      meteor.style.setProperty('--meteor-distance', `${distance}px`);

      container.appendChild(meteor);

      // Reliably remove the meteor after its animation is finished.
      setTimeout(() => {
        meteor.remove();
      }, duration * 1000 + 200);
    };

    // --- Execution ---
    createTwinklingStars();
    
    // Use a recurring timer to spawn meteors at random intervals.
    const meteorInterval = setInterval(() => {
      // Don't run animations if the user isn't looking at the tab.
      if (document.hidden) return; 
      createMeteor();
    }, 2500); // Spawns a new meteor on average every 2.5 seconds.

    // The cleanup function is critical. It runs when the component is removed.
    return () => {
      clearInterval(meteorInterval);
      container.innerHTML = ''; // Clear all stars
    };
  }, []); // The empty array `[]` ensures this effect runs only once.

  return <div ref={containerRef} className="stars-container" />;
};

export default Stars;