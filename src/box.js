export default class Box {
  get collides() {
    return true;
  }

  constructor(sprite, rectangle) {
    this.sprite = sprite;
    this.rectangle = rectangle;
  }

  animate(state) {
    this.sprite.x = this.rectangle.x;
    this.sprite.y = this.rectangle.y;
  }
}
