import Particle from "./particle";

// effect SHALL NOT call particle.update().
interface Effect {
   (particle: Particle): void;
}

export default Effect;
