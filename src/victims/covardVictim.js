import Victim from './victim.js';

export default class ElderyVictim extends Victim {
  constructor(sprite, rectangle) {
    super(sprite, rectangle);
    this.sprite = sprite;
    this.rectangle = rectangle;

    this.maximumVelocityX = 21;
    this.accelerationX = 4;

    this.maximumVelocityY = 21;
    this.accelerationY = 4;

    this.chanceToMove = 3;
    this.maxMoveDuration = 50;

    this.maxHP = 100;
    this.currentHP = this.maxHP;
    this.brainNutrition = 1;
  }
}
