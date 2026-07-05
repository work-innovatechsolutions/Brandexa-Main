'use client';
import React, { useId } from 'react';
import { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { tsParticles } from '@tsparticles/engine';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { cn } from '@/lib/utils';

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};
export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  useEffect(() => {
    loadSlim(tsParticles).then(() => {
      setInit(true);
    });
  }, []);

  const generatedId = useId();
  return (
    <div className={cn('opacity-100', className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn('h-full w-full')}
          options={{
            background: {
              color: {
                value: background || 'transparent',
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: 'push',
                },
                onHover: {
                  enable: false,
                  mode: 'repulse',
                },
                resize: true as any,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: particleColor || '#ffffff',
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'out',
                },
                random: false,
                speed: 0.35,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 260,
                  height: 120,
                },
                value: particleDensity || 120,
              },
              opacity: {
                value: {
                  min: 0.25,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: speed || 4,
                  sync: false,
                  startValue: 'random',
                },
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 3,
                },
                animation: {
                  enable: false,
                },
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.08,
                  opacity: 1,
                },
              },
            },
            detectRetina: true,
          } as ISourceOptions}
        />
      )}
    </div>
  );
};
