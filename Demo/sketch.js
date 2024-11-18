// Set up the canvas
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

let score = 0;
let gameRunning = true;

// Player object
const player = {
  x: canvas.width / 2 - 25,
  y: canvas.height - 50,
  width: 50,
  height: 50,
  speed: 5,
  dx: 0
};

// Bullet object
const bullets = [];

// Asteroids object
const asteroids = [];
const asteroidSpeed = 2;

// Keyboard input tracking
const keys = {
  left: false,
  right: false,
  space: false
};

// Event listeners for keyboard input
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') keys.left = true;
  if (e.key === 'ArrowRight') keys.right = true;
  if (e.key === ' ') keys.space = true;
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft') keys.left = false;
  if (e.key === 'ArrowRight') keys.right = false;
  if (e.key === ' ') keys.space = false;
});

// Player movement
function movePlayer() {
  if (keys.left && player.x > 0) {
    player.dx = -player.speed;
  } else if (keys.right && player.x + player.width < canvas.width) {
    player.dx = player.speed;
  } else {
    player.dx = 0;
  }
  player.x += player.dx;
}

// Bullet movement
function moveBullets() {
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].y -= 5; // Move bullets up
    if (bullets[i].y < 0) {
      bullets.splice(i, 1); // Remove bullets that are out of the screen
    }
  }
}

// Asteroid movement
function moveAsteroids() {
  for (let i = 0; i < asteroids.length; i++) {
    asteroids[i].y += asteroidSpeed;
    if (asteroids[i].y > canvas.height) {
      asteroids.splice(i, 1); // Remove asteroids that move off the screen
    }
  }
}

// Generate new asteroids
function createAsteroid() {
  const x = Math.random() * (canvas.width - 50);
  const y = -50; // Start above the screen
  asteroids.push({ x, y, width: 50, height: 50 });
}

// Collision detection
function checkCollisions() {
  // Check if any bullet hits an asteroid
  for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < asteroids.length; j++) {
      if (
        bullets[i].x < asteroids[j].x + asteroids[j].width &&
        bullets[i].x + 10 > asteroids[j].x &&
        bullets[i].y < asteroids[j].y + asteroids[j].height &&
        bullets[i].y + 10 > asteroids[j].y
      ) {
        // Collision detected
        bullets.splice(i, 1);
        asteroids.splice(j, 1);
        score += 10; // Increase score
        break;
      }
    }
  }

  // Check if the player collides with any asteroid
  for (let i = 0; i < asteroids.length; i++) {
    if (
      player.x < asteroids[i].x + asteroids[i].width &&
      player.x + player.width > asteroids[i].x &&
      player.y < asteroids[i].y + asteroids[i].height &&
      player.y + player.height > asteroids[i].y
    ) {
      // Collision detected, end game
      gameRunning = false;
      alert('Game Over! Score: ' + score);
      break;
    }
  }
}

// Draw the player
function drawPlayer() {
  ctx.fillStyle = 'blue';
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Draw the bullets
function drawBullets() {
  ctx.fillStyle = 'red';
  for (let i = 0; i < bullets.length; i++) {
    ctx.fillRect(bullets[i].x, bullets[i].y, 10, 20);
  }
}

// Draw the asteroids
function drawAsteroids() {
  ctx.fillStyle = 'gray';
  for (let i = 0; i < asteroids.length; i++) {
    ctx.fillRect(asteroids[i].x, asteroids[i].y, asteroids[i].width, asteroids[i].height);
  }
}

// Draw the score
function drawScore() {
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText('Score: ' + score, 10, 30);
}

// Game loop
function gameLoop() {
  if (gameRunning) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movePlayer();
    moveBullets();
    moveAsteroids();
    checkCollisions();
    drawPlayer();
    drawBullets();
    drawAsteroids();
    drawScore();
    requestAnimationFrame(gameLoop);
  }
}

// Shoot a bullet
function shootBullet() {
  if (keys.space) {
    bullets.push({ x: player.x + player.width / 2 - 5, y: player.y });
  }
}

// Create new asteroids at intervals
setInterval(createAsteroid, 1000);

// Start the game loop
gameLoop();

// Shoot bullets when space is pressed
setInterval(shootBullet, 100);
