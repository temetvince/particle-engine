class Vector {
   private x: number;
   private y: number;

   constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
   }

   clone() {
      return new Vector(this.getX(), this.getY());
   }

   getX = () => {
      return this.x;
   };

   setX = (x: number) => {
      this.x = x;

      return this;
   };

   getY = () => {
      return this.y;
   };

   setY = (y: number) => {
      this.y = y;

      return this;
   };

   shift = (vector: Vector) => {
      this.setX(this.getX() + vector.getX());
      this.setY(this.getY() + vector.getY());

      return this;
   };
}

export default Vector;
