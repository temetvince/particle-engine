import Vector from "./vector";
import Motion from "./motion";
import Particle from "./particle";
import Populator from "./populator";
import Rule from "./rule";
import Painter from "./painter";
import Engine from "./engine";
import Law from "./law";
import Effect from "./effect";

const getRules = (canvas: HTMLCanvasElement) => {
   const getRule = (law: Law, effect: Effect) => {
      return new Rule(law, effect);
   };

   const getRuleFloor = (canvas: HTMLCanvasElement) => {
      return getRule(
         (particle: Particle) => {
            return particle.motion.position.y > canvas.height * 1;
         },
         (particle: Particle) => {
            particle.motion.velocity.y *= -0.7;
            particle.motion.position.y = canvas.height * 1;
         }
      );
   };

   const getRuleCeiling = (canvas: HTMLCanvasElement) => {
      return getRule(
         (particle: Particle) => {
            return particle.motion.position.y < canvas.height * 0;
         },
         (particle: Particle) => {
            particle.motion.velocity.y *= -0.7;
            particle.motion.position.y = canvas.height * 0;
         }
      );
   };

   const getRuleLeft = (canvas: HTMLCanvasElement) => {
      return getRule(
         (particle: Particle) => {
            return particle.motion.position.x < canvas.width * 0;
         },
         (particle: Particle) => {
            particle.motion.velocity.x *= -1;
            particle.motion.position.x = canvas.width * 0;
         }
      );
   };

   const getRuleRight = (canvas: HTMLCanvasElement) => {
      return getRule(
         (particle: Particle) => {
            return particle.motion.position.x > canvas.width * 1;
         },
         (particle: Particle) => {
            particle.motion.velocity.x *= -1;
            particle.motion.position.x = canvas.width * 1;
         }
      );
   };

   return [
      getRuleFloor(canvas),
      getRuleCeiling(canvas),
      getRuleLeft(canvas),
      getRuleRight(canvas),
   ];
};

const getPopulator = (numberOfParticles: number, canvas: HTMLCanvasElement) => {
   const generator = () => {
      const position = new Vector(canvas.width / 2, canvas.height / 2);
      const velocity = new Vector(
         Math.random() * 3 - 1.5,
         Math.random() * -2 - 1
      );
      const acceleration = new Vector(0, 0.01);
      const motion = new Motion(position, velocity, acceleration);
      const size = 1;
      const life = Math.random() * 1500 + 1500;

      return new Particle(size, life, motion);
   };

   return new Populator(numberOfParticles, generator);
};

const getPainters = (
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
      context.globalAlpha = particle.life / particle.maxLife;
      context.arc(
         particle.motion.position.x,
         particle.motion.position.y,
         particle.size,
         0,
         Math.PI * 2,
         true
      );
      context.closePath();
      context.fill();
   };

   return [new Painter(paintBackground, paintParticle)];
};

const getBoxEngine = (
   numberOfParticles: number,
   canvas: HTMLCanvasElement,
   context: CanvasRenderingContext2D
) => {
   return new Engine(
      getPopulator(numberOfParticles, canvas),
      getRules(canvas),
      getPainters(canvas, context)
   );
};

export default getBoxEngine;
