import Particle from "./particle";

interface Effect {
   (particle: Particle): void;
}

export default Effect;
