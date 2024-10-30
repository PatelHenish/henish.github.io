// CARS CARS CARS
// Henish patel
// 10/18/2024
let eastbound = [];
let westbound = [];
let trafficLight;

function setup() {
  createCanvas(800, 400);

  // Initialize vehicles
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let yEast = random(height / 4, height / 2 - 20); // Eastbound lane
    let yWest = random(height / 2 + 20, height * 3 / 4); // Westbound lane

    eastbound.push(new Vehicle(floor(random(2)), x, yEast, 1, random(2, 5))); // Random vehicle (car or truck), eastbound
    westbound.push(new Vehicle(floor(random(2)), x, yWest, 0, random(2, 5))); // Random vehicle (car or truck), westbound
  }

  // Initialize traffic light
  trafficLight = new TrafficLight();
}

function draw() {
  background(200);

  // Draw the road, looks cool right?
  drawRoad();

  // Vehicles only move when the light is green, duh!
  if (trafficLight.state === 'green') {
    for (let vehicle of eastbound) vehicle.action();
    for (let vehicle of westbound) vehicle.action();
  } else {
    // Cars stop when the light is red, obviously
    for (let vehicle of eastbound) vehicle.display(); // Still show vehicles when stopped
    for (let vehicle of westbound) vehicle.display();
  }

  // Draw and update traffic light
  trafficLight.display();
  trafficLight.update();
}

function drawRoad() {
  // Draw the road (black rectangle)
  fill(0);
  rect(0, height / 4, width, height / 2);

  // Draw dashed lane divider
  stroke(255);
  strokeWeight(5);
  for (let i = 0; i < width; i += 40) {
    line(i, height / 2, i + 20, height / 2); // Small dashes, looks neat!
  }
}

// Vehicle class
class Vehicle {
  constructor(type, x, y, direction, xSpeed) {
    this.type = type;  // 0 for car, 1 for truck/van
    this.vColor = this.getNaturalColor(); // Natural color
    this.x = x;
    this.y = y;
    this.direction = direction; // 0 = left (westbound), 1 = right (eastbound)
    this.xSpeed = xSpeed;
    this.acceleration = 0.1; // Smooth acceleration, nice!
    this.maxSpeed = this.type === 0 ? 8 : 6; // Cars go faster than trucks, obv
  }

  // Function to get a natural color for vehicles
  getNaturalColor() {
    const colors = [
      color(100, 100, 255), // Light blue
      color(150, 255, 150), // Light green
      color(255, 100, 100), // Light red
      color(255, 255, 150), // Light yellow
      color(150, 150, 150), // Gray
      color(200, 100, 100)  // Brown
    ];
    return random(colors);
  }

  // Function to display the vehicle (with smaller size)
  display() {
    stroke(0); // Thinner outline
    strokeWeight(1); // Thinner outline
    fill(this.vColor);
    
    // Draw the car body
    if (this.type === 0) {
      rect(this.x, this.y, 30, 15); // Smaller car body
      fill(50);
      rect(this.x + 5, this.y + 5, 20, 7); // Car windows
      // Draw the wheels
      fill(0);
      ellipse(this.x + 7, this.y + 15, 6, 6); // Front wheel
      ellipse(this.x + 23, this.y + 15, 6, 6); // Back wheel
    } else {
      rect(this.x, this.y, 40, 20); // Smaller truck body
      fill(50);
      rect(this.x + 5, this.y + 6, 30, 10); // Truck windows
      // Draw the wheels
      fill(0);
      ellipse(this.x + 10, this.y + 20, 8, 8); // Front wheel
      ellipse(this.x + 30, this.y + 20, 8, 8); // Back wheel
    }
  }

  // Function to move the vehicle
  move() {
    this.xSpeed = constrain(this.xSpeed, -this.maxSpeed, this.maxSpeed); // Limit speed, obviously

    // Add acceleration for smoother movement
    if (this.direction === 1) { 
      this.x += this.xSpeed; // Move right (eastbound)
    } else {
      this.x -= this.xSpeed; // Move left (westbound)
    }

    // Wrap around the screen when the vehicle goes off the canvas
    if (this.x > width) {
      this.x = 0; // Back to the start, neat!
    } else if (this.x < 0) {
      this.x = width; // Go back around
    }
  }

  // Function to speed up the vehicle
  speedUp() {
    if (this.xSpeed < this.maxSpeed) {
      this.xSpeed += this.acceleration;
    }
  }

  // Function to slow down the vehicle
  speedDown() {
    if (this.xSpeed > 0) {
      this.xSpeed -= this.acceleration;
    }
  }

  // Function to change the vehicle color
  changeColor() {
    this.vColor = this.getNaturalColor();
  }

  // The main action function
  action() {
    this.move();
    if (random(100) < 1) this.speedUp(); // 1% chance to speed up, crazy right?
    if (random(100) < 1) this.speedDown(); // 1% chance to slow down, lol
    if (random(100) < 1) this.changeColor(); // 1% chance to change color
    this.display();
  }
}

// Traffic Light class
class TrafficLight {
  constructor() {
    this.state = 'green'; // Initial state
    this.timer = 0;
  }

  display() {
    fill(100);
    rect(width / 2 - 10, height / 4 - 20, 20, 60); // Light pole

    // Light color
    if (this.state === 'green') {
      fill(0, 255, 0); // Green light
    } else if (this.state === 'red') {
      fill(255, 0, 0); // Red light
    }
    ellipse(width / 2, height / 4, 20, 20); // Light circle
  }

  update() {
    if (this.state === 'red' && this.timer > 0) {
      this.timer--;
    } else if (this.state === 'red' && this.timer === 0) {
      this.state = 'green'; // Switch back to green
    }
  }

  switchToRed() {
    this.state = 'red';
    this.timer = 120; // Red for 120 frames
  }

  toggle() {
    if (this.state === 'green') {
      this.switchToRed();
    } else {
      this.state = 'green';
    }
  }
}

// Add cars on mouse click
function mousePressed() {
  let x = random(width);
  let yEast = random(height / 4, height / 2 - 20); // Eastbound lane
  let yWest = random(height / 2 + 20, height * 3 / 4); // Westbound lane

  if (mouseButton === LEFT) {
    if (keyIsDown(SHIFT)) {
      // Add westbound vehicle (car or truck) on SHIFT + LEFT click
      westbound.push(new Vehicle(floor(random(2)), x, yWest, 0, random(2, 5)));
    } else {
      // Add eastbound vehicle (car or truck) on LEFT click
      eastbound.push(new Vehicle(floor(random(2)), x, yEast, 1, random(2, 5)));
    }
  }
}

// Traffic light control with spacebar
function keyPressed() {
  if (key === ' ') {
    trafficLight.toggle(); // Toggle between red and green
  }
}
 