import { useEffect, useRef } from 'react';

/**
 * Renders an animated background of gently drifting pastel particles for the light theme.
 * This component is designed to be lightweight and performant.
 */
const DayParticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = ''; // Clear previous particles on re-render

    const particleCount = 35; // A nice, subtle number of particles
    const pastelColors = [
      '#a8dadc', // Light Blue
      '#f1faee', // Off-white (very subtle)
      '#e63946', // A pop of muted red
      '#457b9d'  // Deeper Blue
    ];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      const size = Math.random() * 3 + 1.5; // Size from 1.5px to 4.5px
      const duration = Math.random() * 25 + 20; // Drift time from 20s to 45s
      const delay = Math.random() * 25; // Staggered start times

      // Define a random journey for each particle across the screen
      const startX = `${Math.random() * 100}vw`;
      const startY = `${Math.random() * 100}vh`;
      const endX = `${Math.random() * 100}vw`;
      const endY = `${Math.random() * 100}vh`;

      // Set styles and CSS variables for the animation
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
      
      particle.style.setProperty('--x-start', startX);
      particle.style.setProperty('--y-start', startY);
      particle.style.setProperty('--x-end', endX);
      particle.style.setProperty('--y-end', endY);
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `-${delay}s`; // Use negative delay to start mid-animation

      container.appendChild(particle);
    }
  }, []);

  return <div ref={containerRef} className="day-particles-container" />;
};

export default DayParticles;
