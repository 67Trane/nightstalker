/**
 * Class representing a character in the game.
 * @extends MoveableObject
 */
class Character extends MoveableObject {
  /**
   * Array of image paths for the walking animation.
   * @type {string[]}
   */
  IMAGES_WALKING = [
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_005.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_006.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_007.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_008.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_009.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_010.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_011.png",
  ];

  /**
   * Array of image paths for the jumping animation.
   * @type {string[]}
   */
  IMAGES_JUMPING = [
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Start/Jump Start_000.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Start/Jump Start_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Start/Jump Start_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Start/Jump Start_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Start/Jump Start_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Start/Jump Start_005.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Loop/Jump Loop_000.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Loop/Jump Loop_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Loop/Jump Loop_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Loop/Jump Loop_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Loop/Jump Loop_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Jump Loop/Jump Loop_005.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Falling Down/Falling Down_000.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Falling Down/Falling Down_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Falling Down/Falling Down_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Falling Down/Falling Down_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Falling Down/Falling Down_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Falling Down/Falling Down_005.png",
  ];

  /**
   * Array of image paths for the death animation.
   * @type {string[]}
   */
  IMAGES_ISDEAD = [
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_000.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_005.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_006.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_007.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_008.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_009.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_010.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_011.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_012.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_013.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Dying/Dying_014.png",
  ];

  /**
   * Array of image paths for the hurt animation.
   * @type {string[]}
   */
  IMAGES_HURT = [
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_000.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_005.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_006.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_007.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_008.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_009.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_010.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Hurt/Hurt_011.png",
  ];

  /**
   * Array of image paths for the idle animation.
   * @type {string[]}
   */
  IMAGES_IDLE = [
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_000.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_005.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_006.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_007.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_008.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_009.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_010.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_011.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_012.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_013.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_014.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_015.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_016.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Idle Blinking/Idle Blinking_017.png",
  ];

  /**
   * Array of image paths for the throwing animation.
   * @type {string[]}
   */
  IMAGES_THROW = [
    "img/chracter/black_ninja/PNG/PNG_sequences/Throwing/Throwing_000.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Throwing/Throwing_001.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Throwing/Throwing_002.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Throwing/Throwing_003.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Throwing/Throwing_004.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Throwing/Throwing_005.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Throwing/Throwing_006.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Throwing/Throwing_007.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Throwing/Throwing_008.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Throwing/Throwing_009.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Throwing/Throwing_010.png",
    "img/chracter/black_ninja/PNG/PNG_sequences/Throwing/Throwing_011.png",
  ];

  /**
   * Height of the character.
   * @type {number}
   */
  height = 120;

  /**
   * Width of the character.
   * @type {number}
   */
  width = 120;

  /**
   * Vertical position of the character.
   * @type {number}
   */
  y = 342.5;

  /**
   * Horizontal speed of the character.
   * @type {number}
   */
  speed = 10;

  /**
   * Reference to the game world.
   * @type {object}
   */
  world;

  /**
   * Audio object for the walking sound.
   * @type {HTMLAudioElement}
   */
  walking_sound = new Audio("./audio/steps.mp3");

  /**
   * Audio object for the jumping sound.
   * @type {HTMLAudioElement}
   */
  jump_sound = new Audio("./audio/jump.mp3");

  /**
   * Audio object for the death sound.
   * @type {HTMLAudioElement}
   */
  dead_sound = new Audio("./audio/dead.mp3");

  /**
   * Audio object for the hit sound.
   * @type {HTMLAudioElement}
   */
  hit_sound = new Audio("./audio/hit.mp3");

  /**
   * Creates an instance of Character.
   */
  constructor() {
    super().loadImage(
      "img/chracter/black_ninja/PNG/PNG_sequences/Running/Running_000.png"
    );
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_ISDEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_THROW);
    this.applyGravity();
    this.animate();
    this.cameraFollow();
    allSounds.push(this.walking_sound);
    allSounds.push(this.jump_sound);
    allSounds.push(this.dead_sound);
    allSounds.push(this.hit_sound);
  }

  /**
   * Moves the character to the right.
   */
  moveCharacterRight() {
    this.otherDirection = false;
    this.moveRight();
    this.playSoundIfNotMuted(this.walking_sound);
  }

  /**
   * Moves the character to the left.
   */
  moveCharacterLeft() {
    this.otherDirection = true;
    this.moveLeft();
    this.playSoundIfNotMuted(this.walking_sound);
  }

  /**
   * Sets the character to idle animation.
   */
  characterIsIdle() {
    this.intervalHelper(() => this.playAnimation(this.IMAGES_IDLE), 60);
  }

  /**
   * Initializes the character's animations.
   */
  animate() {
    this.characterIsIdle();
    this.intervalHelper(() => this.moveCharacter(), 1000 / 60);
    this.intervalHelper(() => this.playCharacterAnimation(), 60);
  }

  /**
   * Determines and plays the appropriate animation based on the character's state.
   */
  playCharacterAnimation() {
    if (this.isOutOfHealth()) {
      this.playAnimation(this.IMAGES_ISDEAD, true);
      this.playSoundIfNotMuted(this.dead_sound);
      registerGameTimeout(() => {
        window.stopAllIntervals();
      }, 400);
    } else if (this.isHurt()) {
      this.playAnimation(this.IMAGES_HURT);
      this.playSoundIfNotMuted(this.hit_sound);
    } else if (this.isAboveGround()) {
      this.playAnimation(this.IMAGES_JUMPING);
      this.playSoundIfNotMuted(this.jump_sound);
    } else {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }
  }

  /**
   * Plays the throw animation.
   */
  playThrowAnimation() {
    this.playAnimation(this.IMAGES_THROW);
  }

  /**
   * Moves the character based on keyboard input.
   */
  moveCharacter() {
    this.walking_sound.pause();
    if (this.world.keyboard.F) {
      if (this.world.canThrow) {
        this.playAnimation(this.IMAGES_THROW);
      }
    }
    if (
      this.world.keyboard.RIGHT &&
      this.x < this.world.level.level_end_x
    ) {
      this.moveCharacterRight();
    }
    if (this.world.keyboard.LEFT && this.x > 0) {
      this.moveCharacterLeft();
    }
    if (this.world.keyboard.SPACE && !this.isAboveGround()) {
      this.jump();
    }
    this.replacePosition();
  }

  /**
   * Updates the camera position to follow the character.
   */
  cameraFollow() {
    registerGameInterval(() => {
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);
  }

  /**
   * Makes the character jump.
   */
  jump() {
    this.speedY = 30;
  }

  /**
   * Ensures the character doesn't sink below the ground level.
   */
  replacePosition() {
    if (this.y > this.groundLevel) {
      this.y = this.groundLevel;
    }
  }

  /**
   * Applies a knockback effect to the character.
   */
  knockBack() {
    this.x -= 30;
  }
}
