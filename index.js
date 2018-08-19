import { gameInstance } from './src/game.js';
import Cthulu from './src/cthulu.js';
import Victim from './src/victim.js';

gameInstance.addObject(
  new Cthulu(
    new PIXI.Sprite.fromImage(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/780791/player-idle.png',
    ),
    new PIXI.Rectangle(window.innerWidth / 2, window.innerHeight / 2, 44, 56),
  ),
);

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
/*
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
);*/

gameInstance.addEventListenerTo(window);
gameInstance.addRendererTo(document.body);
gameInstance.animate();
