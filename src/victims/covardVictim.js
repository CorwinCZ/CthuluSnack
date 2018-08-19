import Victim from './victim.js';

export default class CovardVictim extends Victim {
  constructor(sprite, rectangle, brainzDisplay) {
    super(sprite, rectangle, brainzDisplay);

    this.maximumVelocityX = 21;
    this.accelerationX = 4;

    this.maximumVelocityY = 21;
    this.accelerationY = 4;

    this.chanceToMove = 3;
    this.maxMoveDuration = 50;

    this.maxHP = 100;
    this.brainNutrition = 1;

    this.setInitValues();
  }
}
