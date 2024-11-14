// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scale = 15;
let leafDepth = 4; // default depth to draw leaves

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  background(255);
  let angle = map(mouseX, 0, width, 10, 45); // Adjust angle based on mouseX
  drawTree(width / 2, height * 0.9, -90, 6, angle); // Initial call to drawTree
}

// Draw a branch of the tree
function drawLine(x1, y1, x2, y2, depth) {
  stroke(0); // Black branches
  strokeWeight(depth * 1.5); // Thickness based on depth
  line(x1, y1, x2, y2);
}

// Recursive function to draw the tree
function drawTree(x1, y1, angle, depth, branchAngle) {
  if (depth > 0) {
    // Calculate branch endpoints
    let x2 = x1 + cos(radians(angle)) * depth * scale;
    let y2 = y1 + sin(radians(angle)) * depth * scale;

    // Draw the current branch
    drawLine(x1, y1, x2, y2, depth);

    // Recursive calls for the three branches
    drawTree(x2, y2, angle - branchAngle, depth - 1, branchAngle);
    drawTree(x2, y2, angle, depth - 1, branchAngle); // center branch
    drawTree(x2, y2, angle + branchAngle, depth - 1, branchAngle);

    // Add leaves at branches with depth less than leafDepth
    if (depth < leafDepth) {
      drawLeaf(x2, y2, depth);
    }
  }
}

// Function to draw a leaf (balloon)
function drawLeaf(x, y, depth) {
  noStroke();
  // Random color for the leaf
  fill(random(255), random(255), random(255), 200);
  // Random size based on depth (closer to trunk, larger leaves)
  let leafSize = map(depth, 1, 6, 10, 30);
  ellipse(x, y, random(leafSize * 0.8, leafSize * 1.2)); // Randomize size a bit
}

// Keyboard controls for leaf depth
function keyPressed() {
  if (key === 'z' && leafDepth > 1) {
    leafDepth--; // Decrease leaf depth
  } else if (key === 'x' && leafDepth < 6) {
    leafDepth++; // Increase leaf depth
  }
}
