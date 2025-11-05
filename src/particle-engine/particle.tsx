import Color from './color';
import Motion from './motion';

class Particle {
  private size: number;
  private life: number;
  private maxLife: number;
  private motion: Motion;
  private color: Color;

  constructor(
    size: number,
    life: number,
    motion: Motion,
    color: Color,
    maxLife?: number,
  ) {
    this.size = size;
    this.life = life;
    this.motion = motion;
    this.color = color;

    if (maxLife === undefined) this.maxLife = life;
    else this.maxLife = maxLife;
  }

  clone = () => {
    return new Particle(
      this.size,
      this.life,
      this.getMotion(),
      this.color,
      this.maxLife,
    );
  };

  getColor = () => {
    return this.color;
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
