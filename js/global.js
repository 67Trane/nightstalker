/**
 * Registered interval IDs that belong to the active game session.
 * Every long-running gameplay loop must be created through the helpers below.
 * @type {number[]}
 */
window.gameIntervalIds = [];

/**
 * Registered timeout IDs that belong to the active game session.
 * @type {number[]}
 */
window.gameTimeoutIds = [];

/**
 * Registered animation-frame IDs that belong to the active game session.
 * @type {number[]}
 */
window.gameAnimationFrameIds = [];

/**
 * Flag indicating if the current device should use the mobile HUD.
 * @type {boolean}
 */
window.isMobile = false;

/**
 * Flag indicating if gameplay is currently paused.
 * @type {boolean}
 */
window.gameIsPaused = false;

/**
 * Flag to mute or unmute all registered sounds.
 * @type {boolean}
 */
window.allSoundsMute = true;

/**
 * Collection of active audio elements used by the current game session.
 * @type {HTMLAudioElement[]}
 */
window.allSounds = [];

/**
 * Flag indicating if the user has started the game from the start screen.
 * @type {boolean}
 */
window.gameStart = false;

/**
 * Flag indicating whether the currently requested assets are fully loaded.
 * @type {boolean}
 */
window.loaded = false;

/**
 * Counter for the number of images that have completed loading.
 * @type {number}
 */
window.imagesLoaded = 0;

/**
 * Total number of images requested during the current loading pass.
 * @type {number}
 */
window.totalImages = 0;

/**
 * Registers an interval so restart/pause can clear it deterministically.
 *
 * @param {Function} callback - Repeating task.
 * @param {number} delay - Interval duration in milliseconds.
 * @returns {number} The registered interval ID.
 */
window.registerGameInterval = function (callback, delay) {
  const id = window.setInterval(() => {
    if (!window.gameIsPaused) {
      callback();
    }
  }, delay);
  window.gameIntervalIds.push(id);
  return id;
};

/**
 * Registers a timeout so restart/pause can clear deferred work as well.
 *
 * @param {Function} callback - Deferred task.
 * @param {number} delay - Timeout duration in milliseconds.
 * @returns {number} The registered timeout ID.
 */
window.registerGameTimeout = function (callback, delay) {
  const id = window.setTimeout(() => {
    window.gameTimeoutIds = window.gameTimeoutIds.filter((timeoutId) => timeoutId !== id);
    callback();
  }, delay);
  window.gameTimeoutIds.push(id);
  return id;
};

/**
 * Registers a requestAnimationFrame callback for the active game session.
 *
 * @param {FrameRequestCallback} callback - Animation callback.
 * @returns {number} The registered animation-frame ID.
 */
window.registerGameAnimationFrame = function (callback) {
  const id = window.requestAnimationFrame(() => {
    window.gameAnimationFrameIds = window.gameAnimationFrameIds.filter((frameId) => frameId !== id);
    callback();
  });
  window.gameAnimationFrameIds.push(id);
  return id;
};

/**
 * Stops all registered intervals, timeouts, and animation frames.
 * This is the single cleanup path for restart, win, and game-over teardown.
 */
window.clearGameRuntime = function () {
  window.gameIntervalIds.forEach((id) => clearInterval(id));
  window.gameTimeoutIds.forEach((id) => clearTimeout(id));
  window.gameAnimationFrameIds.forEach((id) => cancelAnimationFrame(id));

  window.gameIntervalIds = [];
  window.gameTimeoutIds = [];
  window.gameAnimationFrameIds = [];
};

/**
 * Resets transient asset-loading state before a fresh world is created.
 */
window.resetAssetLoadingState = function () {
  window.loaded = false;
  window.imagesLoaded = 0;
  window.totalImages = 0;
};

/**
 * Clears one-frame input state so restart/pause never inherits stuck keys.
 */
window.resetKeyboardState = function (keyboard) {
  keyboard.LEFT = false;
  keyboard.RIGHT = false;
  keyboard.UP = false;
  keyboard.DOWN = false;
  keyboard.SPACE = false;
  keyboard.F = false;
};
