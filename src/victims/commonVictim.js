import Victim from './victim.js';

export default class CommonVictim extends Victim {
  constructor(sprite, rectangle, brainzDisplay) {
    super(sprite, rectangle, brainzDisplay);

    this.maximumVelocityX = 8;
    this.accelerationX = 2;

    this.maximumVelocityY = 8;
    this.accelerationY = 2;

    this.maxHP = 100;
    this.brainNutrition = 2;

    this.setInitValues();
  }
}
