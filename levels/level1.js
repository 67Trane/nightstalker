/**
 * Creates a fresh instance of level 1 with all enemies, clouds and background layers.
 * Called on every game start and restart so each run gets independent object instances.
 *
 * @returns {Level}
 */
function createLevel1() {
  return new Level(
    [
      new Skull(), new Skull(), new Skull(), new Skull(),
      new Skull(), new Skull(), new Skull(), new Skull(),
      new Endboss(),
    ],
    [new Cloud(), new Cloud(), new Cloud(), new Cloud()],
    [
      new BackgroundObject("img/background/PNG/3_game_background/layers/1.png", -719, 1),
      new BackgroundObject("img/background/PNG/3_game_background/layers/1.png", 0, 0.1),
      new BackgroundObject("img/background/PNG/3_game_background/layers/2.png", 0, 0.1),
      new BackgroundObject("img/background/PNG/3_game_background/layers/3.png", 0, 0.1),
      new BackgroundObject("img/background/PNG/3_game_background/layers/4.png", 0, 0.1),
      new BackgroundObject("img/background/PNG/3_game_background/layers/5.png", 0, 0.1),
      new BackgroundObject("img/background/PNG/3_game_background/layers/6.png", 0, 0.1),
      new BackgroundObject("img/background/PNG/3_game_background/layers/7.png", 0, 0.1),
      new BackgroundObject("img/background/PNG/3_game_background/layers/8.png", 0, 1),
      new BackgroundObject("img/background/PNG/3_game_background/layers/8.png", -719, 1),
      new BackgroundObject("img/background/PNG/3_game_background/layers/8.png", 720, 1),
      new BackgroundObject("img/background/PNG/3_game_background/layers/8.png", 720 * 2, 1),
      new BackgroundObject("img/background/PNG/3_game_background/layers/8.png", 720 * 3, 1),
    ]
  );
}
