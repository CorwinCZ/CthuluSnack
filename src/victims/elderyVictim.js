import Victim from './victim.js';

export default class ElderyVictim extends Victim {
  constructor(sprite, rectangle, brainzDisplay) {
    super(sprite, rectangle, brainzDisplay);
    this.sprite = sprite;
    this.rectangle = rectangle;
    this.brainzDisplay = brainzDisplay;

    this.maximumVelocityX = 4;
    this.accelerationX = 0.5;

    this.maximumVelocityY = 4;
    this.accelerationY = 0.5;

    this.maxHP = 20;
    this.currentHP = this.maxHP;
    this.brainNutrition = 1;
  }
}
