import { useEffect, useRef } from 'react';

const Snow = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Clear existing snowflakes
        container.innerHTML = '';

        const createSnowflake = () => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';

            // Random properties
            const size = Math.random() * 3 + 2; // Size between 2px and 5px
            const startLeft = Math.random() * 100; // Start horizontal position 0-100%
            const drift = Math.random() * 200 - 100; // Drift -100px to 100px
            const duration = Math.random() * 10 + 5; // Fall duration 5s-15s
            const delay = Math.random() * -20; // Start immediately at random progress
            const opacity = Math.random() * 0.5 + 0.3; // Opacity 0.3-0.8

            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            snowflake.style.left = `${startLeft}%`;
            snowflake.style.opacity = opacity;
            snowflake.style.setProperty('--drift', `${drift}px`);
            snowflake.style.animation = `snow-fall ${duration}s linear infinite`;
            snowflake.style.animationDelay = `${delay}s`;

            container.appendChild(snowflake);
        };

        // Create 100 snowflakes
        for (let i = 0; i < 150; i++) {
            createSnowflake();
        }

        return () => {
            container.innerHTML = '';
        };
    }, []);

    return <div ref={containerRef} className="stars-container" />;
};

export default Snow;
