/**
 * Class representing a cloud in the game.
 * Clouds are part of the background and move slowly across the screen.
 * @extends MoveableObject
 */
class Cloud extends MoveableObject {
  /**
   * The vertical position of the cloud.
   * @type {number}
   */
  y = -100;

  /**
   * The height of the cloud.
   * @type {number}
   */
  height = 250;

  /**
   * The width of the cloud.
   * @type {number}
   */
  width = 500;

  /**
   * Creates an instance of Cloud.
   * The cloud's position is randomly initialized on the x-axis.
   */
  constructor() {
    super().loadImage("img/background/PNG/3_game_background/layers/5.png");
    this.x = Math.random() * 2000; // Random x-position for the cloud.
    this.animate();
  }

  /**
   * Starts the cloud animation, moving it slowly to the left.
   * The cloud moves left at regular intervals, giving a scrolling effect.
   */
  animate() {
    this.intervalHelper(() => {
      this.moveLeft();
    }, 60);
  }
}
