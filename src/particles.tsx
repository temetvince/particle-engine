import * as React from "react";
import { useRef, useEffect } from "react";
import { ReactElement } from "react";

import getBoxEngine from "./impl/box/boxEngine";

const Particles: React.FC = (): ReactElement => {
   const canvasReference = useRef(null);

   useEffect(() => {
      const NUMBER_OF_PARTICLES = 1000;
      const REDRAW_SPEED = 1;

      const canvas = canvasReference.current;
      const context = canvas.getContext("2d");

      const resizeCanvas = () => {
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;

         setInterval(engine.run, REDRAW_SPEED);
      };

      window.addEventListener("resize", resizeCanvas, false);

      document.body.appendChild(canvas);

      const engine = getBoxEngine(NUMBER_OF_PARTICLES, canvas, context);

      resizeCanvas();
   });

   return <canvas ref={canvasReference} />;
};

export default Particles;
