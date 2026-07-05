'use client';

import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { cn } from '@/lib/utils';

interface EarthProps {
  className?: string;
  theta?: number;
  dark?: number;
  scale?: number;
  diffuse?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  markerColor?: [number, number, number];
  glowColor?: [number, number, number];
}
const Earth: React.FC<EarthProps> = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 40000,
  mapBrightness = 6,
  baseColor = [0.4, 0.6509, 1],
  markerColor = [1, 0, 0],
  glowColor = [0.2745, 0.5765, 0.898],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    let width = canvas.offsetWidth;
    let phi = 0;
    let frameId = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: theta,
      dark: dark,
      scale: scale,
      diffuse: diffuse,
      mapSamples: mapSamples,
      mapBrightness: mapBrightness,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 1,
      offset: [0, 0],
      markers: [],
    });

    const resizeObserver = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      globe.update({
        width: width * 2,
        height: width * 2,
      });
    });

    resizeObserver.observe(canvas);

    const rotate = () => {
      phi += 0.004;
      globe.update({ phi });
      frameId = window.requestAnimationFrame(rotate);
    };

    frameId = window.requestAnimationFrame(rotate);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      globe.destroy();
    };
  }, [
    baseColor[0],
    baseColor[1],
    baseColor[2],
    dark,
    diffuse,
    glowColor[0],
    glowColor[1],
    glowColor[2],
    mapBrightness,
    mapSamples,
    markerColor[0],
    markerColor[1],
    markerColor[2],
    scale,
    theta,
  ]);

  return (
    <div
      className={cn(
        'z-[10] mx-auto flex w-full max-w-[350px] items-center justify-center',
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          aspectRatio: '1',
        }}
      />
    </div>
  );
};

export default Earth;
