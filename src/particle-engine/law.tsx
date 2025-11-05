import Particle from './particle';

interface Law {
  (particle: Particle): boolean;
}

export default Law;
