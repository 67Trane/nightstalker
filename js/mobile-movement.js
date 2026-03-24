/**
 * Adds touchstart event listeners for mobile controls.
 * Sets keyboard.LEFT to true when the left button is pressed.
 * @param {TouchEvent} event - The touch event object.
 */
document.getElementById("left-btn").addEventListener("touchstart", function (event) {
  event.preventDefault();
  if (!window.loaded) return;
  keyboard.LEFT = true;
});

/**
 * Adds touchstart event listener for the right button.
 * Sets keyboard.RIGHT to true when the right button is pressed.
 * @param {TouchEvent} event - The touch event object.
 */
document.getElementById("right-btn").addEventListener("touchstart", function (event) {
  event.preventDefault();
  if (!window.loaded) return;
  keyboard.RIGHT = true;
});

/**
 * Adds touchstart event listener for the up button.
 * Sets keyboard.SPACE to true when the up button is pressed (for jumping).
 * @param {TouchEvent} event - The touch event object.
 */
document.getElementById("up-btn").addEventListener("touchstart", function (event) {
  event.preventDefault();
  if (!window.loaded) return;
  keyboard.SPACE = true;
});

/**
 * Adds touchstart event listener for the molotov button.
 * Sets keyboard.F to true when the molotov button is pressed (for throwing).
 * @param {TouchEvent} event - The touch event object.
 */
document.getElementById("molotov-btn").addEventListener("touchstart", function (event) {
  event.preventDefault();
  if (!window.loaded) return;
  keyboard.F = true;
});

/**
 * Adds touchend event listeners for mobile controls.
 * Sets keyboard.LEFT to false when the left button is released.
 * @param {TouchEvent} event - The touch event object.
 */
document.getElementById("left-btn").addEventListener("touchend", function (event) {
  event.preventDefault();
  keyboard.LEFT = false;
});

/**
 * Adds touchend event listener for the right button.
 * Sets keyboard.RIGHT to false when the right button is released.
 * @param {TouchEvent} event - The touch event object.
 */
document.getElementById("right-btn").addEventListener("touchend", function (event) {
  event.preventDefault();
  keyboard.RIGHT = false;
});

/**
 * Adds touchend event listener for the up button.
 * Sets keyboard.SPACE to false when the up button is released.
 * @param {TouchEvent} event - The touch event object.
 */
document.getElementById("up-btn").addEventListener("touchend", function (event) {
  event.preventDefault();
  keyboard.SPACE = false;
});

/**
 * Adds touchend event listener for the molotov button.
 * Sets keyboard.F to false when the molotov button is released.
 * @param {TouchEvent} event - The touch event object.
 */
document.getElementById("molotov-btn").addEventListener("touchend", function (event) {
  event.preventDefault();
  keyboard.F = false;
});

/**
 * Determines if the current device is mobile based on window dimensions.
 * If the device is in landscape mode with larger screen dimensions, hides the mobile controls.
 */
function isOnMobile() {
  if (window.innerWidth > window.innerHeight && window.innerHeight > 768) {
    document.getElementById("mobile-movement").classList.add("d-none");
  } else {
    document.getElementById("mobile-movement").classList.remove("d-none");
  }
}

/**
 * Adds a resize event listener to detect screen changes and check if the device is mobile.
 */
window.addEventListener("resize", () => {
  isOnMobile();
});
