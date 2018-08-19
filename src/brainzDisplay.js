import { gameInstance } from './game.js';

export default class BrainzDisplay {
  constructor(initialValue = '', color = '#ffffff') {
    const style = new PIXI.TextStyle({
      fill: color,
    });

    const text = new PIXI.Text(initialValue, style);

    this.text = text;
    this.text.x = 0;
    this.text.y = 0;

    gameInstance.addObjectText(this);
  }

  setText(newText) {
    this.text.text = newText;
  }

  setPosition(newX, newY) {
    this.text.x = newX;
    this.text.y = newY;
  }
}
