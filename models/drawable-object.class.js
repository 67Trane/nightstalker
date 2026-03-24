/**
 * Class representing a drawable object in the game.
 * This class provides basic functionality for loading and drawing images on the canvas.
 */
class DrawableObject {
  /**
   * The current image to be drawn.
   * @type {HTMLImageElement}
   */
  img;

  /**
   * Cache to store preloaded images.
   * @type {Object.<string, HTMLImageElement>}
   */
  imageCache = {};

  /**
   * The index of the current image being displayed.
   * @type {number}
   */
  currentImage = 0;

  /**
   * The horizontal position of the object.
   * @type {number}
   */
  x = 100;

  /**
   * The vertical position of the object.
   * @type {number}
   */
  y = 330;

  /**
   * The height of the object.
   * @type {number}
   */
  height = 150;

  /**
   * The width of the object.
   * @type {number}
   */
  width = 150;

  /**
   * Loads an image from a given path and sets it as the object's image.
   * @param {string} path - The path to the image file.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Draws the object's image on the canvas at its current position.
   * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
   */
  draw(ctx) { 
    try {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } catch (_) {}
  }

  /**
   * Loads multiple images and stores them in the image cache.
   * @param {string[]} arr - Array of image paths to load.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      totalImages++;
      this.img = new Image();
      this.img.src = path;
      this.imageCache[path] = this.img;
      this.img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
          loaded = true;
        }
      };
    });
  }

  /**
   * Plays an animation by cycling through an array of images.
   * @param {string[]} images - Array of image paths.
   */
  playAnimation(images) {
    const i = this.currentImage % images.length;
    this.img = this.imageCache[images[i]];
    this.currentImage++;
  }

  /**
   * Draws a red frame around the object on the canvas.
   * This method only applies to certain objects like Character, Button, Skull, Bottle, Coin, Endboss, and MobileGui.
   * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
   */
  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Button || this instanceof Skull || this instanceof Bottle || this instanceof Coin || this instanceof Endboss || this instanceof MobileGui) {
      ctx.beginPath();
      ctx.lineWidth = "3";
      ctx.strokeStyle = "red";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
}
