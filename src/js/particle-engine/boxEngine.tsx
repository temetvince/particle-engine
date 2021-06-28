import Engine from "./engine";
import DefaultPainter from "./defaultPainter";
import DefaultPopulator from "./defaultPopulator";
import BoxRules from "./boxRules";

const getBoxEngine = (
   numberOfParticles: number,
   canvas: HTMLCanvasElement,
   context: CanvasRenderingContext2D
) => {
   return new Engine(
      DefaultPopulator(numberOfParticles, canvas),
      BoxRules(canvas),
      DefaultPainter(canvas, context)
   );
};

export default getBoxEngine;
