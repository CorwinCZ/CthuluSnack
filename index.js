import { gameInstance } from './src/game.js';
import Cthulu from './src/cthulu.js';
import Victim from './src/victim.js';
import Box from './src/box.js';
import BrainzDisplay from './src/brainzDisplay.js';

const brainzDisplay = new BrainzDisplay('0', '#ffffff');

gameInstance.addObjectText(brainzDisplay);

gameInstance.addObject(
  new Cthulu(
    new PIXI.Sprite.fromImage(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/780791/player-idle.png',
    ),
    new PIXI.Rectangle(window.innerWidth / 2, window.innerHeight / 2, 44, 56),
    brainzDisplay,
  ),
);

// Victims

gameInstance.addObject(
  new Victim(
    new PIXI.Sprite.fromImage('./src/assets/player-idle-2.png'),
    new PIXI.Rectangle(
      window.innerWidth / 2 + 100,
      window.innerHeight / 2 + 100,
      48,
      56,
    ),
  ),
);

gameInstance.addObject(
  new Victim(
    new PIXI.Sprite.fromImage('./src/assets/player-idle-2.png'),
    new PIXI.Rectangle(
      window.innerWidth / 2 + 100,
      window.innerHeight / 2 - 100,
      48,
      56,
    ),
  ),
);

gameInstance.addObject(
  new Victim(
    new PIXI.Sprite.fromImage('./src/assets/player-idle-2.png'),
    new PIXI.Rectangle(
      window.innerWidth / 2 - 100,
      window.innerHeight / 2 + 100,
      48,
      56,
    ),
  ),
);

gameInstance.addObject(
  new Victim(
    new PIXI.Sprite.fromImage('./src/assets/player-idle-2.png'),
    new PIXI.Rectangle(
      window.innerWidth / 2 - 100,
      window.innerHeight / 2 - 100,
      48,
      56,
    ),
  ),
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
