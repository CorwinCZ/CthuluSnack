export default class Victim {
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

    this.chanceToMove = 1;
    this.move = false;
    this.moveDuration = 0;
    this.moveDirection = 0;

    this.maxMoveDuration = 33;

    this.maxHP = 100;
    this.currentHP = this.maxHP;
    this.isDead = false;

    this.brainNutrition = 2;
  }

  takeDamage() {
    this.currentHP -= 1;

    if (this.currentHP < 0) {
      console.log('DEAD');
      this.isDead = true;
    } else {
      return this.brainNutrition;
    }
    return 0;
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

  checkIfShouldMove() {
    if (this.isDead) return false;
    if (Math.floor(Math.random() * 100) < this.chanceToMove) {
      this.move = true;
      this.moveDuration = Math.floor(Math.random() * this.maxMoveDuration);
    }
  }

  animate(state) {
    // console.log('ANIMATE');
    if (this.moveDuration > 0) {
      this.moveDuration -= 1;
      switch (this.moveDirection) {
        case 0:
          this.moveLeft();
          break;
        case 1:
          this.moveRight();
          break;
        case 2:
          this.moveUp();
          break;
        case 3:
          this.moveDown();
          break;
      }
    } else {
      this.checkIfShouldMove();
    }

    if (this.move) {
      this.move = false;
      this.moveDirection = Math.floor(Math.random() * 100) % 4;
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
}
