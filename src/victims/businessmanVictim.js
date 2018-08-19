import Victim from './victim.js';

export default class ElderyVictim extends Victim {
  constructor(sprite, rectangle, brainzDisplay) {
    super(sprite, rectangle, brainzDisplay);
    this.sprite = sprite;
    this.rectangle = rectangle;
    this.brainzDisplay = brainzDisplay;

    this.maximumVelocityX = 8;
    this.accelerationX = 2;

    this.maximumVelocityY = 8;
    this.accelerationY = 2;

    this.chanceToMove = 4;

    this.maxHP = 50;
    this.currentHP = this.maxHP;
    this.brainNutrition = 10;

    this.setInitValues();
  }
}
