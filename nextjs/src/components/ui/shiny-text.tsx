'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

interface ShinyTextProps {
  text: string;
  className?: string;
  shineColor?: string;
  duration?: number;
  angle?: number;
  shimmerWidth?: number;
  trigger?: 'hover' | 'loop' | 'inView';
  disabled?: boolean;
}

export const ShinyText = ({
  text,
  className = '',
  shineColor = 'rgba(255, 255, 255, 1)',
  duration = 3,
  angle = 120,
  shimmerWidth = 200,
  trigger = 'loop',
  disabled = false,
}: Readonly<ShinyTextProps>) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (disabled || prefersReducedMotion) {
      setShouldAnimate(false);
      return;
    }

    switch (trigger) {
      case 'loop':
        setShouldAnimate(true);
        break;
      case 'inView':
        setShouldAnimate(isInView);
        break;
      case 'hover':
        setShouldAnimate(isHovering);
        break;
    }
  }, [trigger, isInView, isHovering, disabled, prefersReducedMotion]);

  // Enhanced shimmer gradient with brighter, wider shine
  const shimmerGradient = useMemo(
    () => `linear-gradient(
    ${angle}deg,
    transparent 0%,
    transparent ${50 - shimmerWidth / 2}%,
    rgba(255, 255, 255, 0.1) ${50 - shimmerWidth / 3}%,
    ${shineColor} ${50 - shimmerWidth / 6}%,
    #ffffff 50%,
    ${shineColor} ${50 + shimmerWidth / 6}%,
    rgba(255, 255, 255, 0.1) ${50 + shimmerWidth / 3}%,
    transparent ${50 + shimmerWidth / 2}%,
    transparent 100%
  )`,
    [angle, shimmerWidth, shineColor],
  );

  const shineAnimation = shouldAnimate
    ? `brandexa-shiny-text-sweep ${duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite`
    : undefined;

  return (
    <motion.span
      ref={containerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        position: 'relative',
      }}
    >
      {/* Base text with subtle metallic look */}
      <span
        className="relative z-10"
        style={{
          background: `linear-gradient(
            180deg,
            #ffffff 0%,
            rgba(255, 255, 255, 0.92) 50%,
            rgba(220, 220, 220, 0.88) 100%
          )`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        }}
      >
        {text}
      </span>

      {/* Primary shine layer - bright and prominent */}
      <motion.span
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background: shimmerGradient,
          backgroundSize: '300% 100%',
          backgroundPosition: '-150% 0',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          animation: shineAnimation,
        }}
      >
        {text}
      </motion.span>

      {/* Glow layer - creates the bloom effect */}
      <motion.span
        className="pointer-events-none absolute inset-0 z-30"
        style={{
          background: shimmerGradient,
          backgroundSize: '300% 100%',
          backgroundPosition: '-150% 0',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          filter: 'blur(8px)',
          opacity: 0.9,
          animation: shineAnimation,
        }}
      >
        {text}
      </motion.span>

      {/* Extra bright center line */}
      <motion.span
        className="pointer-events-none absolute inset-0 z-40"
        style={{
          background: `linear-gradient(
            ${angle}deg,
            transparent 0%,
            transparent 48%,
            rgba(255, 255, 255, 0.9) 50%,
            transparent 52%,
            transparent 100%
          )`,
          backgroundSize: '300% 100%',
          backgroundPosition: '-150% 0',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          animation: shineAnimation,
        }}
      >
        {text}
      </motion.span>
    </motion.span>
  );
};

export default ShinyText;
