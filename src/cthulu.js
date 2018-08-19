export default class Cthulu {
  constructor(sprite, rectangle, brainzDisplay) {
    this.sprite = sprite;
    this.rectangle = rectangle;
    this.brainzDisplay = brainzDisplay;

    this.velocityX = 0;
    this.maximumVelocityX = 8;
    this.accelerationX = 2;
    this.frictionX = 0.9;

    this.velocityY = 0;
    this.maximumVelocityY = 8;
    this.accelerationY = 2;
    this.frictionY = 0.9;

    this.isAttacking = false;
    this.attackDurationMax = 15;
    this.attackDuration = 0;

    this.brainzEaten = 0;
  }

  animate(state) {
    if (state.keys[37]) {
      this.moveLeft();
    }

    if (state.keys[39]) {
      this.moveRight();
    }

    if (state.keys[38]) {
      this.moveUp();
    }

    if (state.keys[40]) {
      this.moveDown();
    }

    if (state.keys[32] && !this.isAttacking) {
      this.isAttacking = true;
      this.attackDuration = this.attackDurationMax;
    }

    if (this.isAttacking) {
      this.attackDuration -= 1;
      if (this.attackDuration < 0) {
        this.isAttacking = false;
      }
    }

    this.velocityX *= this.frictionX;
    this.velocityY *= this.frictionY;

    // Object colision detection
    state.objects.forEach(object => {
      if (object === this) {
        return;
      }

      const me = this.rectangle;
      const you = object.rectangle;
      const collides = object.collides;

      // Detects if I'm inside object
      if (
        me.x < you.x + you.width &&
        me.x + me.width > you.x &&
        me.y < you.y + you.height &&
        me.y + me.height > you.y
      ) {
        if (object.brainNutrition) {
          if (this.isAttacking) {
            this.brainzEaten += object.takeDamage();
            this.brainzDisplay.setText(this.brainzEaten);
          }
        }

        // Klesání
        if (collides && this.velocityY > 0 && you.y >= me.y) {
          this.velocityY = 0;
          return;
        }

        // Stoupání
        if (collides && this.velocityY < 0 && you.y <= me.y) {
          this.velocityY = this.accelerationY;
          return;
        }

        // Colision detection X direction
        if (collides && this.velocityX < 0 && you.x <= me.x) {
          this.velocityX = 0;
          return;
        }
        // Colision detection X direction
        if (collides && this.velocityX > 0 && you.x >= me.x) {
          this.velocityX = 0;
          return;
        }
      }
    });

    this.rectangle.x += this.velocityX;
    this.rectangle.y += this.velocityY;

    this.sprite.x = this.rectangle.x;
    this.sprite.y = this.rectangle.y;

    this.brainzDisplay.setPosition(this.sprite.x, this.sprite.y - 30);
  }

  moveLeft() {
    this.velocityX = Math.max(
      this.velocityX - this.accelerationX,
      this.maximumVelocityX * -1,
    );
  }

  moveRight() {
    this.velocityX = Math.min(
      this.velocityX + this.accelerationX,
      this.maximumVelocityX,
    );
  }

  moveUp() {
    this.velocityY = Math.max(
      this.velocityY - this.accelerationY,
      this.maximumVelocityY * -1,
    );
  }

  moveDown() {
    this.velocityY = Math.min(
      this.velocityY + this.accelerationY,
      this.maximumVelocityY,
    );
  }
}
