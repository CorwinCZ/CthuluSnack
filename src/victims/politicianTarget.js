import Victim from './victim.js';

export default class PoliticianTarget extends Victim {
  constructor(sprite, rectangle, brainzDisplay) {
    super(sprite, rectangle, brainzDisplay);

    this.maximumVelocityX = 12;
    this.accelerationX = 1;

    this.maximumVelocityY = 12;
    this.accelerationY = 1;

    this.chanceToMove = 2;

    this.maxHP = 50;
    this.brainNutrition = 2;

    this.setInitValues();
  }
}
