/**
 * Class representing a coin in the game.
 * Coins are collectible objects that the character can pick up.
 * The coin animates by cycling through a set of images to give a spinning effect.
 * @extends Collectible
 */
class Coin extends Collectible {
  /**
   * The horizontal position of the coin.
   * @type {number}
   */
  x;

  /**
   * The vertical position of the coin.
   * @type {number}
   */
  y;

  /**
   * The width of the coin.
   * @type {number}
   */
  width = 20;

  /**
   * The height of the coin.
   * @type {number}
   */
  height = 30;

  /**
   * Array of image paths used to animate the coin.
   * @type {string[]}
   */
  IMAGES_COIN = [
    "img/coins/Coin_01.png",
    "img/coins/Coin_02.png",
    "img/coins/Coin_03.png",
    "img/coins/Coin_04.png",
    "img/coins/Coin_05.png",
    "img/coins/Coin_06.png",
  ];

  /**
   * Creates an instance of Coin.
   * 
   * @param {number} x - The x-coordinate where the coin will be placed.
   * @param {number} y - The y-coordinate where the coin will be placed.
   */
  constructor(x, y) {
    super();
    this.loadImages(this.IMAGES_COIN);
    this.x = x;
    this.y = y;
    this.img = this.imageCache[this.IMAGES_COIN[0]];
    this.animate();
  }

  /**
   * Animates the coin by cycling through its images to create a spinning effect.
   */
  animate() {
    registerGameInterval(() => {
      this.playAnimation(this.IMAGES_COIN);
    }, 60);
  }

}
