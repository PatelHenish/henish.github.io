// Project Title
// Henish Patel
// Mon, September 16
// Use b or B or press mouse scroll button to change background color 
// use c or C or press right click on mouse to change random color of snow man 

let currentBack = 0;
let bgColors = [
  [200, 220, 255], // blue
  [180, 200, 255], // dark blue
  [160, 180, 255], // more darker blue
  [140, 160, 255]  // darkest blue
];

let snowmanX, snowmanY;
let snowmanColor = [255, 255, 255]; 

function setup() {
  createCanvas(600, 400);
  snowmanX = width / 2;
  snowmanY = height / 2;
}

function draw() {
  background(bgColors[currentBack]);
  drawSnowman(snowmanX, snowmanY);
  
  // Display artist's mark
  fill(0); 
  textSize(16); //  text size
  textAlign(RIGHT); 
  text("Henish Patel", width - 10, height - 10); // Display name at bottom right
}

// draw snow man 
function drawSnowman(x, y) {
  noStroke(); // Disable stroke for snowman shapes
  fill(snowmanColor);
  ellipse(x, y + 50, 60, 60); 
  ellipse(x, y, 40, 40);     
  ellipse(x, y - 40, 20, 20); 

  // eye..................................
  fill(0);
  ellipse(x - 10, y - 50, 5, 5); 
  ellipse(x + 10, y - 50, 5, 5); 

  // button...............................
  fill(0);
  ellipse(x, y + 20, 10, 10);
  ellipse(x, y + 30, 10, 10);
}

// mouse movement === snowman 
function mouseMoved() {
  snowmanX = mouseX;
  snowmanY = mouseY;
}

// click the scroll button to change the color..........................
function mousePressed() {
  if (mouseButton === CENTER) {
    currentBack = (currentBack + 1) % bgColors.length;
  }
  // rightclick changes snowman color...................................
  if (mouseButton === RIGHT) {
    snowmanColor = [random(255), random(255), random(255)]; 
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    snowmanX = width / 2;
    snowmanY = height / 2;
  }
  // Change snowman color with 'c' key
  if (key === 'c' || key === 'C') {
    snowmanColor = [random(255), random(255), random(255)]; 
  }
  if (key === 'b' || key === 'B') {
    currentBack = (currentBack + 1) % bgColors.length;
  }
  if (key === 't' || key === 'T') {
    snowmanColor = [random(255), random(255), random(255)]; 
  }
}
