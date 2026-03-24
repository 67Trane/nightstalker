const fullscreenElement = document.getElementById("fullscreen");

/**
 * Toggles between fullscreen mode and normal mode.
 */
function toggleFullscreen() {
  if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    openFullscreen();
  } else {
    closeFullscreen();
  }
}

/**
 * Activates fullscreen mode on the provided element.
 */
function openFullscreen() {
  // Vollbildmodus aktivieren
  if (fullscreenElement.requestFullscreen) {
    fullscreenElement.requestFullscreen();
  } else if (fullscreenElement.webkitRequestFullscreen) {
    // Für Safari
    fullscreenElement.webkitRequestFullscreen();
  } else if (fullscreenElement.msRequestFullscreen) {
    // Für IE11
    fullscreenElement.msRequestFullscreen();
  }
}

/**
 * Exits fullscreen mode and returns to normal view.
 */
function closeFullscreen() {
  // Vollbildmodus verlassen
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    // Für Safari
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // Für IE11
    document.msExitFullscreen();
  }
}

/**
 * Mutes all sounds in the game by toggling the `allSoundsMute` flag and pausing all audio elements.
 */
function muteAllSounds() {
  allSoundsMute = !allSoundsMute;
  allSounds.forEach((audio) => {
    audio.pause();
  });
}

/**
 * Restarts the game by stopping all intervals and calling the `startGame` function.
 */
function restartGame() {
  loadingScreen();
  startGame();
}

/**
 * Unpauses the character and resumes the game if the game is paused, otherwise pauses the game.
 */
function unpauseCharacter() {
  if (gameIsPaused) {
    gameIsPaused = false;
    world.resumeGame();
  } else {
    pauseGame();
  }
}
