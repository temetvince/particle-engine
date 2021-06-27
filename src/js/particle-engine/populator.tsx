import Particle from "./particle";

interface Generator {
   (): Particle;
}

class Populator {
   private numberOfParticles: number;
   private generator: Generator;

   // numberOfParticles is an integer telling how many particles should exist at once
   constructor(numberOfParticles: number, generator: Generator) {
      this.numberOfParticles = numberOfParticles;
      this.generator = generator;
   }

   // particles is an array of Particle
   // if particles length is less than number of particles, new particles are added.
   populate = (particles: Array<Particle>) => {
      const shortage = this.numberOfParticles - particles.length;

      for (let i = 0; i < shortage; ++i) {
         particles.push(this.generator());
      }
   };
}

export default Populator;
