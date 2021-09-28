import Motion from "./motion";

class Particle {
   private size: number;
   private life: number;
   private maxLife: number;
   private motion: Motion;

   constructor(
      size: number,
      life: number,
      motion: Motion,
      maxLife: number = null
   ) {
      this.size = size;
      this.life = life;
      this.motion = motion;

      if (!maxLife) this.maxLife = life;
      else this.maxLife = maxLife;
   }

   clone = () => {
      return new Particle(this.size, this.life, this.getMotion());
   };

   getSize = () => {
      return this.size;
   };

   getLife = () => {
      return this.life;
   };

   setLife = (life: number) => {
      this.life = life;

      return this;
   };

   getMaxLife = () => {
      return this.maxLife;
   };

   getMotion = () => {
      return this.motion.clone();
   };

   setMotion = (motion: Motion) => {
      this.motion = motion;

      return this;
   };

   update = () => {
      this.motion.update();
      this.life--;

      return this;
   };
}

export default Particle;
