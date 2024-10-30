// Project Title: Circle Grid
// Your Name: [Your Name]
// Date: [Current Date]
//
// Extra for Experts:
// - Added interactivity by changing circle colors based on distance from the mouse.
// - Included a dynamic resizing feature for the grid based on window size.

let gridSpacing = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  renderGrid();
}

function circleDistance(x1, y1, x2, y2) {
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(pow(a, 2) + pow(b, 2));
  return round(c);
}

function renderGrid() {
  for (let x = 0; x < width; x += gridSpacing) {
    for (let y = 0; y < height; y += gridSpacing) {
      let d = circleDistance(x, y, mouseX, mouseY);
      
      // Change circle color based on distance
      if (d < 50) {
        fill(255, 0, 0); // Red if mouse is close
      } else {
        fill(0, 0, 255); // Blue otherwise
      }
      
      circle(x, y, gridSpacing);
      textAlign(CENTER, CENTER);
      fill(0);
      text(d, x, y);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
