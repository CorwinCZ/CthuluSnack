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

import { loadAnimations } from './src/Unity/MetaFile.js';

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

loadAnimations('3').then(data =>
  gameInstance.addObject(
    new ElderyVictim(
      data,
      new PIXI.Rectangle(
        window.innerWidth / 2 + 100,
        window.innerHeight / 2 + 100,
        96,
        96,
      ),
      new BrainzDisplay('', 'brown'),
    ),
  ),
);

createNewVictim(
  BusinessManVictim,
  5,
  window.innerWidth / 2 + 100,
  window.innerHeight / 2 + 100,
  'green',
);
/*
gameInstance.addObject(
  new CommonVictim(
    new PIXI.Sprite.fromImage('./src/assets/player-idle-2.png'),
    new PIXI.Rectangle(
      window.innerWidth / 2 - 100,
      window.innerHeight / 2 + 100,
      48,
      56,
    ),
    new BrainzDisplay('', 'yellow'),
  ),
);

gameInstance.addObject(
  new CovardVictim(
    new PIXI.Sprite.fromImage('./src/assets/player-idle-2.png'),
    new PIXI.Rectangle(
      window.innerWidth / 2 - 100,
      window.innerHeight / 2 - 100,
      48,
      56,
    ),
    new BrainzDisplay('', 'blue'),
  ),
);

gameInstance.addObject(
  new FighterVictim(
    new PIXI.Sprite.fromImage('./src/assets/player-idle-2.png'),
    new PIXI.Rectangle(
      window.innerWidth / 2 - 100,
      window.innerHeight / 2 - 100,
      48,
      56,
    ),
    new BrainzDisplay('', 'red'),
  ),
);

gameInstance.addObject(
  new PoliticianTarget(
    new PIXI.Sprite.fromImage('./src/assets/player-idle-2.png'),
    new PIXI.Rectangle(
      window.innerWidth / 2 - 100,
      window.innerHeight / 2 - 100,
      48,
      56,
    ),
    new BrainzDisplay('', 'gold'),
  ),
);
*/
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
