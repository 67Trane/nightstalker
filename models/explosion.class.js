/**
 * Class representing an explosion effect in the game.
 * The explosion is animated by cycling through a set of images.
 * @extends MoveableObject
 */
class Explosion extends MoveableObject {
  /**
   * The horizontal position of the explosion.
   * @type {number}
   */
  x;

  /**
   * The vertical position of the explosion.
   * @type {number}
   */
  y;

  /**
   * The width of the explosion.
   * @type {number}
   */
  width = 300;

  /**
   * The height of the explosion.
   * @type {number}
   */
  height = 300;

  /**
   * Array of image paths for the explosion animation.
   * @type {string[]}
   */
  IMAGES_EXPLOSIONS = [
    "img/explosioneffect/PNG/9/1.png",
    "img/explosioneffect/PNG/9/2.png",
    "img/explosioneffect/PNG/9/3.png",
    "img/explosioneffect/PNG/9/4.png",
    "img/explosioneffect/PNG/9/5.png",
    "img/explosioneffect/PNG/9/6.png",
    "img/explosioneffect/PNG/9/7.png",
    "img/explosioneffect/PNG/9/8.png",
    "img/explosioneffect/PNG/9/9.png",
  ];

  /**
   * Indicates whether the explosion animation has finished.
   * @type {boolean}
   */
  done = false;

  /**
   * Creates an instance of Explosion.
   * 
   * @param {number} x - The x-coordinate where the explosion will occur.
   * @param {number} y - The y-coordinate where the explosion will occur.
   */
  constructor(x, y) {
    super();
    this.loadImages(this.IMAGES_EXPLOSIONS);
    this.x = x;
    this.y = y;
    this.playAnimation(this.IMAGES_EXPLOSIONS);
    this.animateOnce();
  }

  /**
   * Animates the explosion, playing the animation once and marking it as done when finished.
   */
  animateOnce() {
    const interval = registerGameInterval(() => {
      this.playAnimation(this.IMAGES_EXPLOSIONS);
      if (this.currentImage >= this.IMAGES_EXPLOSIONS.length) {
        clearInterval(interval);
        this.done = true;
      }
    }, 60);
  }
}
