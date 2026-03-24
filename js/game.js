let canvas;
let world;
let keyboard = new Keyboard();
let loadingScreenIntervalId = null;

/**
 * Initializes the game by checking if the start button has been pressed and starting the game.
 */
function init() {
  isOnMobile();
  let checkStart = setInterval(() => {
    if (gameStart) {
      loadingScreen();
      clearInterval(checkStart);
      startGame();
    }
  }, 500);
}

/**
 * Hides the start screen and sets the gameStart flag to true.
 */
function startButton() {
  document.getElementById("start-screen").classList.add("d-none");
  gameStart = true;
}

/**
 * Displays the loading screen and starts loading the game.
 */
function loadingScreen() {
  const loadingScreenDiv = document.getElementById("loading-screen");
  const loadingScreenImg = document.getElementById("loading-screen-img");
  loadingScreenDiv.classList.remove("d-none");
  let count = 0;
  const amountOfPics = 26;

  loadingScreenIntervalId = setInterval(() => {
    count = loadLoadingScreen(loadingScreenImg, count, amountOfPics);
    if (loaded) {
      removeLoadingScreen(loadingScreenDiv);
    }
  }, 60);
}

/**
 * Updates the loading screen with the next image in the sequence.
 */
function loadLoadingScreen(loadingScreenImg, count, amountOfPics) {
  const i = (count % amountOfPics) + 1;
  const formatedNumber = smallerThenTen(i);
  loadingScreenImg.src = `./img/text-animation/PNG/LoadGame/LoadGame_${formatedNumber}.png`;
  return count + 1;
}

/**
 * Removes the loading screen after the game has loaded.
 */
function removeLoadingScreen(loadingScreenDiv) {
  loadingScreenDiv.classList.add("d-none");
  clearInterval(loadingScreenIntervalId);
  loadingScreenIntervalId = null;
  gameIsPaused = false;
  if (world) {
    world.resumeGame();
  }
}

/**
 * Formats numbers less than 10 with a leading zero.
 * @param {number} number - The number to format.
 * @returns {string} The formatted number.
 */
function smallerThenTen(number) {
  return number < 10 ? `0${number}` : number;
}

/**
 * Starts the game by initializing the world and attaching it to the canvas.
 */
function startGame() {
  stopAllIntervals();
  resetAssetLoadingState();
  resetKeyboardState(keyboard);
  allSounds.forEach((audio) => audio.pause());
  allSounds = [];
  gameIsPaused = true;
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

/**
 * Pauses gameplay without destroying the active world state.
 * Registered gameplay intervals stay alive but stop executing until resumed.
 */
function pauseGame() {
  gameIsPaused = true;
  allSounds.forEach((audio) => audio.pause());
}

/**
 * Adds event listeners for keydown events to control the character and game.
 */
document.addEventListener("keydown", (event) => {
  if (!window.loaded) return;
  if (event.keyCode == 80) {
    unpauseCharacter();
  }

  if (event.keyCode == 82) {
    restartGame();
  }

  if (event.keyCode == 70) {
    keyboard.F = true;
  }
  if (event.keyCode == 39) {
    keyboard.RIGHT = true;
  }

  if (event.keyCode == 37) {
    keyboard.LEFT = true;
  }

  if (event.keyCode == 38) {
    keyboard.UP = true;
  }

  if (event.keyCode == 40) {
    keyboard.DOWN = true;
  }

  if (event.keyCode == 32) {
    keyboard.SPACE = true;
  }
});

/**
 * Adds event listeners for keyup events to stop the character's movement.
 */
document.addEventListener("keyup", (event) => {
  if (event.keyCode == 39) {
    keyboard.RIGHT = false;
  }

  if (event.keyCode == 70) {
    keyboard.F = false;
  }

  if (event.keyCode == 37) {
    keyboard.LEFT = false;
  }

  if (event.keyCode == 38) {
    keyboard.UP = false;
  }

  if (event.keyCode == 40) {
    keyboard.DOWN = false;
  }

  if (event.keyCode == 32) {
    keyboard.SPACE = false;
  }
});

/**
 * Stops and clears all registered gameplay loops for a full teardown.
 */
function stopAllIntervals() {
  window.gameIsPaused = true;
  clearGameRuntime();
}

/**
 * Displays the rotation message for mobile devices if the screen is in portrait mode.
 */
function isMobileRotate() {
  let rotate = document.getElementById("rotate");
  if (window.innerWidth < window.innerHeight) {
    rotate.style.display = "flex";
  } else {
    rotate.style.display = "none";
  }
}

window.addEventListener("resize", isMobileRotate);
window.addEventListener("load", isMobileRotate);

/**
 * Checks if the current device is a mobile device based on the user agent.
 * @returns {boolean} True if the device is mobile, false otherwise.
 */
function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

window.isMobile = isMobileDevice();

/**
 * Shows or hides an element by toggling the d-none class.
 * @param {string} id - The element ID.
 * @param {boolean} visible - True to show, false to hide.
 */
function setElementVisibility(id, visible) {
  document.getElementById(id).classList.toggle("d-none", !visible);
}

function closeInfo()      { setElementVisibility("info-field-wrapper", false); }
function openInfo()       { setElementVisibility("info-field-wrapper", true); }
function closeImpressum() { setElementVisibility("impressum-field", false); }
function openImpressum()  { setElementVisibility("impressum-field", true); }
