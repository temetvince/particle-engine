import Engine from '../../particle-engine/engine';
import PainterCanvas from '../painterCanvas';
import PopulatorDefault from '../populatorDefault';
import BoxRules from './boxRules';

const getBoxEngine = (
  numberOfParticles: number,
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
) => {
  return new Engine(
    PopulatorDefault(numberOfParticles, canvas),
    BoxRules(canvas),
    PainterCanvas(canvas, context),
  );
};

export default getBoxEngine;
