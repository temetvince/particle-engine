import Particle from "./particle";

// PaintBackground is a zero arg function that renders the background image.
interface PaintBackground {
   (): void;
}

// paintParticle SHALL NOT call particle.update().
interface PaintParticle {
   (particle: Particle): void;
}

class Painter {
   private _paintBackground: PaintBackground;
   private _paintParticle: PaintParticle;

   constructor(paintBackground: PaintBackground, paintParticle: PaintParticle) {
      this._paintBackground = paintBackground;
      this._paintParticle = paintParticle;
   }

   paint = (particles: Array<Particle>) => {
      this.paintBackground();
      this.paintParticles(particles);
   };

   paintBackground = () => {
      this._paintBackground();
   };

   paintParticles = (particles: Array<Particle>) => {
      particles.forEach((particle) => {
         this._paintParticle(particle);
      });
   };
}

export default Painter;
