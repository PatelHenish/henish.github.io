// Project Title
// Your Name
// sept 11 2024
//
// 2d primitives, color, anmation, mouse/keyboard events

// Create the canvas and add to the document
// Create canvas dynamically
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mario-Style Platformer</title>
</head>
<body>
  <canvas id="gameCanvas"></canvas>
  <script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;

    let gravity = 0.5;
    let score = 0;
    let gameRunning = true;

    // Player object
    const player = {
      x: 100,
      y: 200,
      width: 30,
      height: 30,
      color: 'red',
      dx: 0,
      dy: 0,
      speed: 5,
      jumpPower: 12,
      grounded: false
    };

    // Platforms
    const platforms = [
      { x: 0, y: 370, width: canvas.width, height: 30 },
      { x: 150, y: 300, width: 100, height: 20 },
      { x: 350, y: 250, width: 100, height: 20 },
      { x: 550, y: 200, width: 100, height: 20 },
    ];

    // Coins (collectibles)
    const coins = [
      { x: 160, y: 270, collected: false },
      { x: 360, y: 220, collected: false },
      { x: 560, y: 170, collected: false }
    ];

    // Keyboard input tracking
    const keys = {
      right: false,
      left: false,
      up: false
    };

    // Event listeners for keyboard input
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') keys.right = true;
      if (e.key === 'ArrowLeft') keys.left = true;
      if (e.key === 'ArrowUp') keys.up = true;
    });

    document.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowRight') keys.right = false;
      if (e.key === 'ArrowLeft') keys.left = false;
      if (e.key === 'ArrowUp') keys.up = false;
    });

    // Game loop
    function gameLoop() {
      if (gameRunning) {
        update();
        render();
        requestAnimationFrame(gameLoop);
      }
    }

    // Update function for game logic
    function update() {
      // Horizontal movement
      if (keys.right) player.dx = player.speed;
      else if (keys.left) player.dx = -player.speed;
      else player.dx = 0;

      // Jumping
      if (keys.up && player.grounded) {
        player.dy = -player.jumpPower;
        player.grounded = false;
      }

      // Apply gravity
      player.dy += gravity;
      player.x += player.dx;
      player.y += player.dy;

      // Collision detection with platforms
      player.grounded = false;
      platforms.forEach(platform => {
        if (
          player.x < platform.x + platform.width &&
          player.x + player.width > platform.x &&
          player.y + player.height > platform.y &&
          player.y + player.height < platform.y + platform.height
        ) {
          player.y = platform.y - player.height;
          player.dy = 0;
          player.grounded = true;
        }
      });

      // Check for coin collection
      coins.forEach(coin => {
        if (
          !coin.collected &&
          player.x < coin.x + 20 &&
          player.x + player.width > coin.x &&
          player.y < coin.y + 20 &&
          player.y + player.height > coin.y
        ) {
          coin.collected = true;
          score += 10;
        }
      });
    }

    // Render function for drawing the game
    function render() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw player
      ctx.fillStyle = player.color;
      ctx.fillRect(player.x, player.y, player.width, player.height);

      // Draw platforms
      ctx.fillStyle = 'green';
      platforms.forEach(platform => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
      });

      // Draw coins
      ctx.fillStyle = 'gold';
      coins.forEach(coin => {
        if (!coin.collected) {
          ctx.beginPath();
          ctx.arc(coin.x + 10, coin.y + 10, 10, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Display score
      ctx.fillStyle = 'black';
      ctx.font = '20px Arial';
      ctx.fillText('Score: ' + score, 10, 30);
    }

    // Start the game loop
    gameLoop();
  </script>
</body>
</html>
