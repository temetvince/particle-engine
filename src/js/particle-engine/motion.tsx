import Vector from "./vector";

class Motion {
   public position: Vector;
   public velocity: Vector;
   public acceleration: Vector;

   constructor(position: Vector, velocity: Vector, acceleration: Vector) {
      this.position = position;
      this.velocity = velocity;
      this.acceleration = acceleration;
   }

   getPosition = () => {
      return this.position;
   };

   getVelocity = () => {
      return this.velocity;
   };

   getAcceleration = () => {
      return this.acceleration;
   };

   update = () => {
      this.velocity.shift(this.acceleration);
      this.position.shift(this.velocity);
   };
}

export default Motion;
