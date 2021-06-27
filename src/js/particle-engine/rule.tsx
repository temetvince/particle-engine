import Effect from "./effect";
import Law from "./law";
import Particle from "./particle";

class Rule {
   private law: Law;
   private effect: Effect;

   constructor(law: Law, effect: Effect) {
      this.law = law;
      this.effect = effect;
   }

   applyTo = (particle: Particle) => {
      if (this.law(particle)) {
         this.effect(particle);
      }
   };
}

export default Rule;
