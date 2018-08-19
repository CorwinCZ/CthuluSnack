export default class BrainzDisplay {
  constructor(text) {
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
