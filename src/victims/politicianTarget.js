import Victim from './victim.js';

export default class PoliticianTarget extends Victim {
  constructor(sprite, rectangle) {
    super(sprite, rectangle);
    this.sprite = sprite;
    this.rectangle = rectangle;

    this.maximumVelocityX = 12;
    this.accelerationX = 1;

    this.maximumVelocityY = 12;
    this.accelerationY = 1;

    this.chanceToMove = 2;

    this.maxHP = 50;
    this.currentHP = this.maxHP;
    this.brainNutrition = 2;
  }
}
