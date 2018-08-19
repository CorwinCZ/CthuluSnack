import { gameInstance } from '../game.js';
import { loadAnimations } from '../Unity/MetaFile.js';
import BrainzDisplay from '../brainzDisplay.js';

export default async (className, animationId, startX, startY, textColor) => {
  const animationSet = await loadAnimations(animationId);
  gameInstance.addObject(
    new className(
      animationSet,
      new PIXI.Rectangle(startX, startY, 96, 96),
      new BrainzDisplay('', textColor),
    ),
  );
};
