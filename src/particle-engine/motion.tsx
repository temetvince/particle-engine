import Vector from "./vector";

class Motion {
   private position: Vector;
   private velocity: Vector;
   private acceleration: Vector;

   constructor(position: Vector, velocity: Vector, acceleration: Vector) {
      this.position = position;
      this.velocity = velocity;
      this.acceleration = acceleration;
   }

   clone = () => {
      return new Motion(
         this.getPosition(),
         this.getVelocity(),
         this.getAcceleration()
      );
   };

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

      return this;
   };
}

export default Motion;
