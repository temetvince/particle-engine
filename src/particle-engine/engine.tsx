import Particles from './particles';
import Populator from './populator';
import Rules from './rules';
import Painters from './painters';

class Engine {
  private populator: Populator;
  private rules: Rules;
  private painters: Painters;
  private particles!: Particles;

  constructor(
    populator: Populator,
    rules: Rules,
    painters: Painters,
    particles: Particles = new Particles(),
  ) {
    this.populator = populator;
    this.rules = rules;
    this.painters = painters;
    this.particles = particles;
  }

  clone = () => {
    return new Engine(
      this.populator.clone(),
      this.rules.clone(),
      this.painters.clone(),
      this.particles.clone(),
    );
  };

  run = () => {
    this.populate();
    this.update();
    this.paint();
  };

  populate = () => {
    this.particles.populate(this.populator);
  };

  update = () => {
    this.rules.applyTo(this.particles);

    this.particles.update();

    this.particles.prune();
  };

  paint = () => {
    this.painters.paintBackground();

    this.painters.paintParticles(this.particles);
  };
}

export default Engine;
