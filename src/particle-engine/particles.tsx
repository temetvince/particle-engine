import Painter from "./painter";
import Particle from "./particle";
import Populator from "./populator";
import Rule from "./rule";

class Particles {
   private particles: Array<Particle>;

   constructor(particles: Array<Particle> = Array<Particle>()) {
      this.particles = particles;
   }

   clone = () => {
      const particlesNew = this.particles.map((particle: Particle) => {
         return particle.clone();
      });

      return new Particles(particlesNew);
   };

   applyRule = (rule: Rule) => {
      this.particles.forEach((particle: Particle) => {
         rule.applyTo(particle);
      });
   };

   update = () => {
      this.particles.forEach((particle: Particle) => {
         particle.update();
      });
   };

   paint = (painter: Painter) => {
      this.particles.forEach((particle: Particle) => {
         painter.paintParticle(particle);
      });
   };

   populate = (populator: Populator) => {
      populator.populate(this.particles);
   };

   prune = () => {
      const particleIsDead = (particle: Particle) => {
         return particle.getLife() < 0;
      };

      this.particles.forEach((particle: Particle, index: number) => {
         if (particleIsDead(particle)) this.particles.splice(index, 1);
      });
   };
}

export default Particles;
