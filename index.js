import Box from './src/box.js';
import BrainzDisplay from './src/brainzDisplay.js';
import Cthulu from './src/cthulu.js';
import { gameInstance } from './src/game.js';

import ElderyVictim from './src/victims/elderyVictim.js';
import BusinessManVictim from './src/victims/businessmanVictim.js';
import CommonVictim from './src/victims/commonVictim.js';
import CovardVictim from './src/victims/covardVictim.js';
import FighterVictim from './src/victims/fighterVictim.js';
import PoliticianTarget from './src/victims/politicianTarget.js';

import createNewVictim from './src/victims/index.js';

gameInstance.addObject(
  new Cthulu(
    new PIXI.Sprite.fromImage(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/780791/player-idle.png',
    ),
    new PIXI.Rectangle(window.innerWidth / 2, window.innerHeight / 2, 44, 56),
    new BrainzDisplay('0', '#ffffff'),
  ),
);

// Victims

createNewVictim(
  ElderyVictim,
  3,
  window.innerWidth / 2 + 100,
  window.innerHeight / 2 + 100,
  'brown',
);

createNewVictim(
  BusinessManVictim,
  14,
  window.innerWidth / 2 - 100,
  window.innerHeight / 2 + 100,
  'green',
);

createNewVictim(
  CommonVictim,
  5,
  window.innerWidth / 2 - 100,
  window.innerHeight / 2 + 100,
  'yellow',
);

createNewVictim(
  CovardVictim,
  11,
  window.innerWidth / 2 - 100,
  window.innerHeight / 2 - 100,
  'blue',
);

createNewVictim(
  FighterVictim,
  10,
  window.innerWidth / 2 - 150,
  window.innerHeight / 2 - 100,
  'red',
);

createNewVictim(
  PoliticianTarget,
  19,
  window.innerWidth / 2 - 100,
  window.innerHeight / 2 - 150,
  'gold',
);

// Borders
// Bottom
gameInstance.addObject(
  new Box(
    new PIXI.extras.TilingSprite.fromImage(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/780791/floor-tile.png',
      window.innerWidth,
      64,
    ),
    new PIXI.Rectangle(0, window.innerHeight - 64, window.innerWidth, 64),
  ),
);

// Top
gameInstance.addObject(
  new Box(
    new PIXI.extras.TilingSprite.fromImage(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/780791/floor-tile.png',
      window.innerWidth,
      64,
    ),
    new PIXI.Rectangle(0, 0, window.innerWidth, 64),
  ),
);

// Left
gameInstance.addObject(
  new Box(
    new PIXI.extras.TilingSprite.fromImage(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/780791/floor-tile.png',
      64,
      window.innerHeight,
    ),
    new PIXI.Rectangle(0, 0, 64, window.innerHeight),
  ),
);

// Right
gameInstance.addObject(
  new Box(
    new PIXI.extras.TilingSprite.fromImage(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/780791/floor-tile.png',
      64,
      window.innerHeight,
    ),
    new PIXI.Rectangle(window.innerWidth - 64, 0, 64, window.innerHeight),
  ),
);

gameInstance.addEventListenerTo(window);
gameInstance.addRendererTo(document.body);
gameInstance.animate();
