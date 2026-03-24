/**
 * Class representing the end boss in the game.
 * The end boss has animations for walking, dying, and health updates.
 * @extends MoveableObject
 */
class Endboss extends MoveableObject {
  /**
   * Array of image paths for the dying animation.
   * @type {string[]}
   */
  IMAGES_DYING = [
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_000.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_001.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_002.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_003.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_004.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_005.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_006.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_007.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_008.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_009.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_010.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_011.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_012.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_013.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_014.png",
    "img/skull/PNG/YetiSkull/Die/SkullYeti_Death_015.png",
  ];

  /**
   * Array of image paths for the walking animation.
   * @type {string[]}
   */
  IMAGES_WALKING = [
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_000.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_001.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_002.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_003.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_004.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_005.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_006.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_007.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_008.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_009.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_010.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_011.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_012.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_013.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_014.png",
    "img/skull/PNG/YetiSkull/Walk/SkullYeti_Walk_015.png",
  ];

  /**
   * Array of image paths for the health bar states.
   * @type {string[]}
   */
  IMAGES_HP = [
    "img/statusbar/0.png",
    "img/statusbar/20.png",
    "img/statusbar/40.png",
    "img/statusbar/60.png",
    "img/statusbar/80.png",
    "img/statusbar/100.png",
  ];

  /**
   * The height of the end boss.
   * @type {number}
   */
  height = 400;

  /**
   * The width of the end boss.
   * @type {number}
   */
  width = 200;

  /**
   * The vertical position of the end boss.
   * @type {number}
   */
  y = 50;

  /**
   * The horizontal position of the end boss.
   * @type {number}
   */
  x = 2400;

  /**
   * Indicates whether the end boss is dead.
   * @type {boolean}
   */
  isDead = false;

  /**
   * The interval ID for the end boss movement.
   * @type {number}
   */
  moveId;

  /**
   * The speed at which the end boss moves.
   * @type {number}
   */
  speed = 2;

  /**
   * The health points of the end boss.
   * @type {number}
   */
  hp = 100;

  /**
   * Creates an instance of the Endboss.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DYING);
    this.loadImages(this.IMAGES_HP);
    this.healthbar = new StatusBar();
    this.updateHealthbar();
  }

  /**
   * Initializes the end boss, starting its animations and registering intervals.
   */
  initialize() {
    this.animate();
  }

  /**
   * Updates the position of the health bar to follow the end boss.
   */
  updateHealthbar() {
    registerGameInterval(() => {
      this.healthbar.x = this.x;
      this.healthbar.y = this.y;
    }, 60);
  }

  /**
   * Draws the end boss and its health bar on the canvas.
   * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
   */
  draw(ctx) {
    super.draw(ctx);
    this.healthbar.draw(ctx);
  }

  /**
   * Animates the end boss, making it walk and move left across the screen.
   */
  animate() {
    let moveId = this.intervalHelper(() => {
      this.moveId = moveId;
      this.playAnimation(this.IMAGES_WALKING);
      this.moveLeft();
    }, 60);
  }
}
