export default class Cthulu {
  constructor(sprite, rectangle) {
    this.sprite = sprite;
    this.rectangle = rectangle;

    this.velocityX = 0;
    this.maximumVelocityX = 8;
    this.accelerationX = 2;
    this.frictionX = 0.9;

    this.velocityY = 0;
    this.maximumVelocityY = 30;
    this.accelerationY = 3;
    this.jumpVelocity = -30;

    this.climbingSpeed = 10;

    this.isOnGround = false;
    this.isOnLadder = false;
  }

  animate(state) {
    if (state.keys[37]) {
      // left
      this.velocityX = Math.max(
        this.velocityX - this.accelerationX,
        this.maximumVelocityX * -1,
      );
    }

    if (state.keys[39]) {
      // right
      this.velocityX = Math.min(
        this.velocityX + this.accelerationX,
        this.maximumVelocityX,
      );
    }

    this.velocityX *= this.frictionX;

    this.velocityY = Math.min(
      this.velocityY + this.accelerationY,
      this.maximumVelocityY,
    );

    state.objects.forEach(object => {
      if (object === this) {
        return;
      }

      const me = this.rectangle;
      const you = object.rectangle;
      const collides = object.collides;

      if (
        me.x < you.x + you.width &&
        me.x + me.width > you.x &&
        me.y < you.y + you.height &&
        me.y + me.height > you.y
      ) {
        if (object.constructor.name === 'Ladder') {
          if (state.keys[38] || state.keys[40]) {
            this.isOnLadder = true;
            this.isOnGround = false;
            this.velocityY = 0;
            this.velocityX = 0;
          }
          if (state.keys[38]) {
            this.rectangle.y -= this.climbingSpeed;
          }
          if (state.keys[40] && me.y + me.height < you.y + you.height) {
            this.rectangle.y += this.climbingSpeed;
          }
          if (me.y <= you.x - me.height) {
            this.isOnLadder = false;
          }
        }

        // Klesání
        if (collides && this.velocityY > 0 && you.y >= me.y) {
          this.isOnGround = true;
          this.velocityY = 0;
          return;
        }

        // Stoupání
        if (collides && this.velocityY < 0 && you.y <= me.y) {
          this.velocityY = this.accelerationY;
          return;
        }

        if (collides && this.velocityX < 0 && you.x <= me.x) {
          this.velocityX = 0;
          return;
        }
        if (collides && this.velocityX > 0 && you.x >= me.x) {
          this.velocityX = 0;
          return;
        }
      }
    });

    if (state.keys[32] && this.isOnGround) {
      this.velocityY = this.jumpVelocity;
      this.isOnGround = false;
    }

    this.rectangle.x += this.velocityX;
    if (!this.isOnLadder) {
      this.rectangle.y += this.velocityY;
    }

    this.sprite.x = this.rectangle.x;
    this.sprite.y = this.rectangle.y;
  }
}
