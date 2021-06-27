import Painter from "./painter";
import Particle from "./particle";
import Populator from "./populator";
import Rule from "./rule";

const Engine = class engine {
   private populator: Populator;
   private rules: Array<Rule>;
   private painters: Array<Painter>;
   private particles: Array<Particle>;

   constructor(
      populator: Populator,
      rules: Array<Rule>,
      painters: Array<Painter>
   ) {
      this.populator = populator;
      this.rules = rules;
      this.painters = painters;
      this.particles = [];
   }

   run = () => {
      this.populate();
      this.update();
      this.paint();
   };

   populate = () => {
      this.populator.populate(this.particles);
   };

   update = () => {
      const particleIsDead = (particle: Particle) => {
         return particle.getLife() < 0;
      };

      const removeParticle = (index: number) => {
         return this.particles.splice(index, 1);
      };

      this.particles.forEach((particle, index) => {
         this.rules.forEach((rule) => {
            rule.applyTo(particle);
         });

         particle.update();

         if (particleIsDead(particle)) {
            removeParticle(index);
         }
      });
   };

   paint = () => {
      this.painters[0].paintBackground();

      this.painters.forEach((painter) => {
         painter.paintParticles(this.particles);
      });
   };
};

export default Engine;
