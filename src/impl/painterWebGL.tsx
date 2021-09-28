import Painter from "../particle-engine/painter";
import Painters from "../particle-engine/painters";
import Particle from "../particle-engine/particle";

const PainterWebGL = (
   canvas: HTMLCanvasElement,
   context: CanvasRenderingContext2D
) => {
   const paintBackground = () => {
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);
   };

   const paintParticle = (particle: Particle) => {
      context.beginPath();
      context.fillStyle =
         "rgb(" +
         Math.random() * 255 +
         "," +
         Math.random() * 255 +
         "," +
         Math.random() * 255 +
         ")";
      context.globalAlpha = particle.getLife() / particle.getMaxLife();
      context.arc(
         particle.getMotion().getPosition().getX(),
         particle.getMotion().getPosition().getY(),
         particle.getSize(),
         0,
         Math.PI * 2,
         true
      );
      context.closePath();
      context.fill();
   };

   return new Painters([new Painter(paintBackground, paintParticle)]);
};

export default PainterWebGL;
