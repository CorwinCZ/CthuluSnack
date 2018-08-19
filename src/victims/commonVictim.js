import Victim from './victim.js';

export default class CommonVictim extends Victim {
  constructor(sprite, rectangle) {
    super(sprite, rectangle);
    this.sprite = sprite;
    this.rectangle = rectangle;

    this.maximumVelocityX = 8;
    this.accelerationX = 2;

    this.maximumVelocityY = 8;
    this.accelerationY = 2;

    this.maxHP = 100;
    this.currentHP = this.maxHP;
    this.brainNutrition = 2;
  }
}
