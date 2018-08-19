import Victim from './victim.js';

export default class ElderyVictim extends Victim {
  constructor(sprite, rectangle) {
    super(sprite, rectangle);
    this.sprite = sprite;
    this.rectangle = rectangle;

    this.maximumVelocityX = 4;
    this.accelerationX = 0.5;

    this.maximumVelocityY = 4;
    this.accelerationY = 0.5;

    this.maxHP = 20;
    this.currentHP = this.maxHP;
    this.brainNutrition = 1;
  }
}
