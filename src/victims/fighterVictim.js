import Victim from './victim.js';

export default class FighterVictim extends Victim {
  constructor(sprite, rectangle, brainzDisplay) {
    super(sprite, rectangle, brainzDisplay);

    this.maximumVelocityX = 10;
    this.accelerationX = 3;

    this.maximumVelocityY = 10;
    this.accelerationY = 3;

    this.maxHP = 200;
    this.brainNutrition = 1;

    this.setInitValues();
  }
}
