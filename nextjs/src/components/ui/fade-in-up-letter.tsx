'use client';

import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

type FadeInUpLetterProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  stagger?: number;
  duration?: number;
  animate?: boolean;
};

export default function FadeInUpLetter({
  text,
  className,
  style,
  delay = 0,
  stagger = 0.018,
  duration = 0.38,
  animate = true,
}: FadeInUpLetterProps) {
  const words = text.split(' ');

  return (
    <motion.h2
      className={className}
      style={style}
      initial="hidden"
      animate={animate ? 'show' : 'hidden'}
      aria-label={text}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="mr-[0.28em] inline-block whitespace-nowrap">
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span
              key={`${word}-${letter}-${letterIndex}`}
              aria-hidden="true"
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
}
