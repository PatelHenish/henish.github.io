// Your Names
// The Date

// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

function keyReleased() {
  enterprise.handleKeyRelease();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    // Ship's position
    this.x = x;
    this.y = y;
    // Speed and direction
    this.speed = 5;
    this.xDir = 0;
    this.yDir = 0;
    // Image
    this.image = theImage;
    // To keep track of key presses for smooth movement
    this.movingUp = false;
    this.movingDown = false;
    this.movingLeft = false;
    this.movingRight = false;
    // Bullet array for extra for experts
    this.bullets = [];
  }

  update() {
    // Update the ship's position based on which keys are pressed
    if (this.movingUp) this.y -= this.speed;
    if (this.movingDown) this.y += this.speed;
    if (this.movingLeft) this.x -= this.speed;
    if (this.movingRight) this.x += this.speed;

    // Update bullets
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      this.bullets[i].update();
      if (!this.bullets[i].isOnScreen()) {
        this.bullets.splice(i, 1); // Remove bullet if off screen
      }
    }
  }

  display() {
    // Draw the ship
    image(this.image, this.x, this.y);

    // Display bullets
    for (let bullet of this.bullets) {
      bullet.display();
    }
  }

  handleKeyPress() {
    // Check for movement keys
    if (keyCode === UP_ARROW) this.movingUp = true;
    if (keyCode === DOWN_ARROW) this.movingDown = true;
    if (keyCode === LEFT_ARROW) this.movingLeft = true;
    if (keyCode === RIGHT_ARROW) this.movingRight = true;

    // Create a bullet when space is pressed
    if (keyCode === 32) {
      this.shoot();
    }
  }

  handleKeyRelease() {
    // Stop movement when the keys are released
    if (keyCode === UP_ARROW) this.movingUp = false;
    if (keyCode === DOWN_ARROW) this.movingDown = false;
    if (keyCode === LEFT_ARROW) this.movingLeft = false;
    if (keyCode === RIGHT_ARROW) this.movingRight = false;
  }

  shoot() {
    // Create a new bullet and add it to the bullets array
    let bullet = new Bullet(this.x + this.image.width / 2, this.y, 0, -10, bulletImage);
    this.bullets.push(bullet);
  }
}

// ------------------------------------------------------------------------- //
// Extra for Experts

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.image = theImage;
  }

  update() {
    // Move the bullet
    this.x += this.dx;
    this.y += this.dy;
  }

  display() {
    // Show the bullet
    image(this.image, this.x, this.y);
  }

  isOnScreen() {
    // Check if the bullet is off screen
    return this.x >= 0 && this.x <= width && this.y >= 0 && this.y <= height;
  }
}
