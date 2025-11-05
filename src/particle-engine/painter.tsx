import Particle from './particle';

interface PaintBackground {
  (): void;
}

interface PaintParticle {
  (particle: Particle): void;
}

class Painter {
  private _paintBackground: PaintBackground;
  private _paintParticle: PaintParticle;

  constructor(paintBackground: PaintBackground, paintParticle: PaintParticle) {
    this._paintBackground = paintBackground;
    this._paintParticle = paintParticle;
  }

  clone = () => {
    return new Painter(this._paintBackground, this._paintParticle);
  };

  paintBackground = () => {
    this._paintBackground();
  };

  paintParticle = (particle: Particle) => {
    this._paintParticle(particle);
  };
}

export default Painter;
