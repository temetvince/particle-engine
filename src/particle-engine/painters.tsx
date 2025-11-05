import Painter from './painter';
import Particles from './particles';

class Painters {
  private painters: Array<Painter>;

  constructor(painters: Array<Painter> = Array<Painter>()) {
    this.painters = painters;
  }

  clone = () => {
    const paintersNew = this.painters.map((painter: Painter) => {
      return painter.clone();
    });

    return new Painters(paintersNew);
  };

  paintBackground = () => {
    if (this.painters.length > 0) this.painters[0].paintBackground();
  };

  paintParticles = (particles: Particles) => {
    this.painters.forEach((painter: Painter) => {
      particles.paint(painter);
    });
  };
}

export default Painters;
