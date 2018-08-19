import Victim from './victim.js';

export default class BusinessManVictim extends Victim {
  constructor(sprite, rectangle, brainzDisplay) {
    super(sprite, rectangle, brainzDisplay);

    this.maximumVelocityX = 8;
    this.accelerationX = 2;

    this.maximumVelocityY = 8;
    this.accelerationY = 2;

    this.chanceToMove = 4;

    this.maxHP = 50;
    this.brainNutrition = 10;

    this.setInitValues();
  }
}
