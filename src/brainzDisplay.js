export default class BrainzDisplay {
  constructor(initialValue = '0', color = '#ffffff') {
    const style = new PIXI.TextStyle({
      fill: color,
    });

    const text = new PIXI.Text(initialValue, style);

    this.text = text;
    this.text.x = 500;
    this.text.y = 500;
  }

  setText(newText) {
    this.text.text = newText;
  }

  setPosition(newX, newY) {
    this.text.x = newX;
    this.text.y = newY;
  }
}
