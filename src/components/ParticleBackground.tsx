import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create stars
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      
      // Different star sizes and colors
      const size = Math.random() * 3 + 1;
      const brightness = Math.random() * 0.8 + 0.2;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.opacity = brightness.toString();
      
      container.appendChild(star);
    };

    // Create shooting stars
    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.left = Math.random() * 100 + '%';
      shootingStar.style.top = Math.random() * 50 + '%';
      shootingStar.style.animationDelay = Math.random() * 5 + 's';
      
      container.appendChild(shootingStar);

      // Remove shooting star after animation
      setTimeout(() => {
        if (container.contains(shootingStar)) {
          container.removeChild(shootingStar);
        }
      }, 3000);
    };

    // Create floating particles (cosmic dust)
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'cosmic-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (15 + Math.random() * 10) + 's';
      
      // Cosmic colors - blues, purples, whites
      const colors = [
        'rgba(135, 206, 250, 0.8)', // Light blue
        'rgba(147, 112, 219, 0.8)', // Medium purple
        'rgba(255, 255, 255, 0.9)', // White
        'rgba(173, 216, 230, 0.7)', // Light blue
        'rgba(238, 130, 238, 0.6)'  // Violet
      ];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      container.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 25000);
    };

    // Create initial stars (static background)
    for (let i = 0; i < 200; i++) {
      createStar();
    }

    // Create initial cosmic particles
    for (let i = 0; i < 30; i++) {
      setTimeout(() => createParticle(), i * 500);
    }

    // Continue creating cosmic particles and shooting stars
    const particleInterval = setInterval(createParticle, 2000);
    const shootingStarInterval = setInterval(createShootingStar, 8000);

    return () => {
      clearInterval(particleInterval);
      clearInterval(shootingStarInterval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="space-bg">
      {/* Nebula background layers */}
      <div className="nebula-layer nebula-1"></div>
      <div className="nebula-layer nebula-2"></div>
      <div className="nebula-layer nebula-3"></div>
    </div>
  );
};

export default ParticleBackground;