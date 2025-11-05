import * as React from 'react';
import { useRef, useEffect } from 'react';

import getBoxEngine from './impl/box/boxEngine';

const Particles = () => {
  const canvasReference = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const NUMBER_OF_PARTICLES = 50;
    const REDRAW_SPEED = 5;

    const canvas = canvasReference.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      setInterval(engine.run, REDRAW_SPEED);
    };

    window.addEventListener('resize', resizeCanvas, false);

    document.body.appendChild(canvas);

    const engine = getBoxEngine(NUMBER_OF_PARTICLES, canvas, context);

    resizeCanvas();
  });

  return <canvas ref={canvasReference} />;
};

export default Particles;
