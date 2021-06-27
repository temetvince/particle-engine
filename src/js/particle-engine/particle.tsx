import Motion from "./motion";

class Particle {
   public size: number;
   public maxLife: number;
   public life: number;
   public motion: Motion;

   constructor(size: number, life: number, motion: Motion) {
      this.size = size;
      this.maxLife = life;
      this.life = life;
      this.motion = motion;
   }

   getLife = () => {
      return this.life;
   };

   getMotion = () => {
      return this.motion;
   };

   update = () => {
      this.motion.update();
      this.life--;
   };
}

export default Particle;
