import Color from '../particle-engine/color';
import Motion from '../particle-engine/motion';
import Particle from '../particle-engine/particle';
import Populator from '../particle-engine/populator';
import Vector from '../particle-engine/vector';

const PopulatorDefault = (
  numberOfParticles: number,
  canvas: HTMLCanvasElement,
) => {
  const generator = () => {
    const position = new Vector(canvas.width / 2, canvas.height / 2);
    const velocity = new Vector(
      Math.random() * 3 - 1.5,
      Math.random() * -2 - 1,
    );
    const acceleration = new Vector(0, 0.01);
    const motion = new Motion(position, velocity, acceleration);
    const size = 2 + Math.random() * 3;
    const life = Math.random() * 1500 + 1500;
    const color = new Color(
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    );

    return new Particle(size, life, motion, color);
  };

  return new Populator(numberOfParticles, generator);
};

export default PopulatorDefault;
