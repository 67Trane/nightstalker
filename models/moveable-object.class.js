/**
 * Class representing a moveable object in the game.
 * This class handles movement, gravity, animations, and collision detection.
 * @extends DrawableObject
 */
class MoveableObject extends DrawableObject {
  /**
   * Speed of the object when moving.
   * @type {number}
   */
  speed = 0.15;

  /**
   * Direction of the object, when true the object moves to the left.
   * @type {boolean}
   */
  otherDirection = false;

  /**
   * Vertical speed of the object (used for jumping or falling).
   * @type {number}
   */
  speedY = 0;

  /**
   * Acceleration of the object when affected by gravity.
   * @type {number}
   */
  acceleration = 2.5;

  /**
   * The ground level for the object.
   * @type {number}
   */
  groundLevel = 342;

  /**
   * The object's energy (health).
   * @type {number}
   */
  energy = 100;

  /**
   * Timestamp of the last hit taken by the object.
   * @type {number}
   */
  lastHit = 0;

  /**
   * The number of throwable items (e.g., molotovs) the object has.
   * @type {number}
   */
  throws = 100;

  /**
   * The number of coins the object has collected.
   * @type {number}
   */
  coins = 0;

  /**
   * Array to store interval IDs used for animations or physics.
   * @type {number[]}
   */
  intervalIds = [];

  /**
   * Plays the given sound if sounds are not muted.
   * @param {HTMLAudioElement} sound - The sound to play.
   */
  playSoundIfNotMuted(sound) {
    if (!allSoundsMute) {
      if (sound && typeof sound.play === "function" && sound.paused) {
        sound.play();
      }
    }
  }

  /**
   * Applies gravity to the object, updating its vertical position and speed.
   */
  applyGravity() {
    this.intervalHelper(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /**
   * Determines if the object is above the ground.
   * @returns {boolean} True if the object is above ground.
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true; // Throwable objects should always fall
    }
    return this.y < this.groundLevel;
  }

  /**
   * Plays an animation by cycling through an array of images.
   * @param {string[]} images - Array of image paths.
   * @param {boolean} [once=false] - If true, plays through once and stops at the last frame.
   */
  playAnimation(images, once = false) {
    if (once) {
      if (this.currentImage < images.length) {
        this.img = this.imageCache[images[this.currentImage]];
        this.currentImage++;
      }
    } else {
      super.playAnimation(images);
    }
  }

  /**
   * Helper function to run an action repeatedly at specified intervals.
   * @param {Function} fn - The function to run.
   * @param {number} time - The interval time in milliseconds.
   * @returns {number} The interval ID.
   */
  intervalHelper(fn, time) {
    const id = registerGameInterval(fn, time);
    this.intervalIds.push(id);
    return id;
  }

  /**
   * Moves the object to the right by its speed.
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * Moves the object to the left by its speed.
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Checks if this object is colliding with another moveable object.
   * @param {MoveableObject} mo - The other moveable object.
   * @returns {boolean} True if the objects are colliding.
   */
  isColliding(mo) {
    let tolerance = 40;
    return (
      this.x + this.width - tolerance > mo.x &&
      this.x + tolerance < mo.x + mo.width &&
      this.y + this.height - tolerance > mo.y &&
      this.y + tolerance < mo.y + mo.height
    );
  }

  /**
   * Checks if this object is jumping on another object.
   * @param {MoveableObject} mo - The other moveable object.
   * @returns {boolean} True if this object is jumping on the other object.
   */
  isJumpingOn(mo) {
    let xTolerance = -70;
    let yTolerance = 5;
    return (
      this.x + this.width + xTolerance > mo.x &&
      this.x - xTolerance < mo.x + mo.width &&
      this.y + this.height - yTolerance > mo.y &&
      this.y < mo.y &&
      this.speedY < 0
    );
  }

  /**
   * Reduces the object's energy by 5 when hit.
   * Plays a sound if the object is still alive.
   */
  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Checks if the object is out of health.
   * @returns {boolean} True if the object has no energy left.
   */
  isOutOfHealth() {
    return this.energy == 0;
  }

  /**
   * Checks if the object is hurt based on the last hit time.
   * @returns {boolean} True if the object was hit recently.
   */
  isHurt() {
    let timepass = new Date().getTime() - this.lastHit; // Difference in ms
    timepass = timepass / 1000; // Difference in s
    return timepass < 0.5;
  }

  /**
   * Handles the death animation of a skull character.
   * Plays the animation and stops the movement when the character dies.
   */
  skullIsDying() {
    let speed = this.setDyingSpeed();
    this.currentImage = 0;
    const interval = registerGameInterval(() => {
      clearInterval(this.moveId);
      this.playAnimation(this.IMAGES_DYING, true);
      this.updateSkullSize();
      if (this.currentImage >= this.IMAGES_DYING.length) {
        clearInterval(interval);
        this.isDead = true;
      }
    }, speed);
  }

  /**
   * Updates the size of the skull or end boss when dying.
   */
  updateSkullSize() {
    if (this instanceof Skull) {
      this.width = 150;
      this.height = 130;
      this.y = 342.5 - 13;
    } else if (this instanceof Endboss) {
      this.height = 500;
      this.width = 400;
      this.y = 10;
    }
  }

  /**
   * Determines the speed of the dying animation for different character types.
   * @returns {number} The speed of the dying animation in milliseconds.
   */
  setDyingSpeed() {
    if (this instanceof Skull) {
      return 40;
    } else if (this instanceof Endboss) {
      return 80;
    }
  }
}
