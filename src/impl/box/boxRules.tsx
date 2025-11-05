import Effect from '../../particle-engine/effect';
import Law from '../../particle-engine/law';
import Particle from '../../particle-engine/particle';
import Rule from '../../particle-engine/rule';
import Rules from '../../particle-engine/rules';

const BoxRules = (canvas: HTMLCanvasElement) => {
  const getRule = (law: Law, effect: Effect) => {
    return new Rule(law, effect);
  };

  const getRuleFloor = (canvas: HTMLCanvasElement) => {
    return getRule(
      (particle: Particle) => {
        return particle.getMotion().getPosition().getY() > canvas.height;
      },
      (particle: Particle) => {
        const velocity = particle.getMotion().getVelocity();
        velocity.setY(velocity.getY() * -0.7);

        particle.getMotion().getPosition().setY(canvas.height);
      },
    );
  };

  const getRuleCeiling = () => {
    return getRule(
      (particle: Particle) => {
        return particle.getMotion().getPosition().getY() < 0;
      },
      (particle: Particle) => {
        const velocity = particle.getMotion().getVelocity();
        velocity.setY(velocity.getY() * -0.7);

        particle.getMotion().getPosition().setY(0);
      },
    );
  };

  const getRuleLeft = () => {
    return getRule(
      (particle: Particle) => {
        return particle.getMotion().getPosition().getX() < 0;
      },
      (particle: Particle) => {
        const velocity = particle.getMotion().getVelocity();
        velocity.setX(velocity.getX() * -1);

        particle.getMotion().getPosition().setX(0);
      },
    );
  };

  const getRuleRight = (canvas: HTMLCanvasElement) => {
    return getRule(
      (particle: Particle) => {
        return particle.getMotion().getPosition().getX() > canvas.width;
      },
      (particle: Particle) => {
        const velocity = particle.getMotion().getVelocity();
        velocity.setX(velocity.getX() * -1);

        particle.getMotion().getPosition().setX(canvas.width);
      },
    );
  };

  return new Rules([
    getRuleFloor(canvas),
    getRuleCeiling(),
    getRuleLeft(),
    getRuleRight(canvas),
  ]);
};

export default BoxRules;
