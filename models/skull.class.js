/**
 * Class representing a Skull enemy in the game.
 * The Skull moves left and animates between walking and dying states.
 * @extends MoveableObject
 */
class Skull extends MoveableObject {
  /**
   * The vertical position of the Skull.
   * @type {number}
   */
  y = 342.5;

  /**
   * The height of the Skull.
   * @type {number}
   */
  height = 100;

  /**
   * The width of the Skull.
   * @type {number}
   */
  width = 100;

  /**
   * Array of image paths for the walking animation.
   * @type {string[]}
   */
  IMAGES_WALKING = [
    "img/skull/PNG/Wariors/Walk/Warior_walk_001.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_001.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_002.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_003.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_004.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_005.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_006.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_007.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_008.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_009.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_010.png",
    "img/skull/PNG/Wariors/Walk/Warior_walk_011.png",
  ];

  /**
   * Array of image paths for the dying animation.
   * @type {string[]}
   */
  IMAGES_DYING = [
    "img/skull/PNG/Wariors/Die/Warior_Die_000.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_001.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_002.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_003.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_004.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_005.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_006.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_007.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_008.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_009.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_010.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_011.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_012.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_013.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_014.png",
    "img/skull/PNG/Wariors/Die/Warior_Die_015.png",
  ];

  /**
   * Interval ID for moving the Skull.
   * @type {number}
   */
  moveId;

  /**
   * Interval ID for animating the Skull's idle state.
   * @type {number}
   */
  idleId;

  /**
   * Indicates whether the Skull is dead.
   * @type {boolean}
   */
  isDead = false;

  /**
   * The health points of the Skull.
   * @type {number}
   */
  hp = 10;

  /**
   * Creates an instance of Skull.
   * Initializes the Skull with random starting position and speed.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DYING);
    this.x = 500 + Math.random() * 1500; // Random starting position on the x-axis
    this.speed = 0.15 + Math.random() * 0.5; // Random speed between 0.15 and 0.65
  }

  /**
   * Initializes the Skull, starting its animations and registering intervals.
   */
  initialize() {
    this.animate();
  }

  /**
   * Animates the Skull by moving it left and playing the walking animation.
   */
  animate() {
    let moveSkullId = this.intervalHelper(() => {
      this.moveId = moveSkullId;
      this.moveLeft();
    }, 1000 / 60);

    let idle = this.intervalHelper(() => {
      this.idleId = idle;
      this.playAnimation(this.IMAGES_WALKING);
    }, 200);
  }
}
