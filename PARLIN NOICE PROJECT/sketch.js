let rectWidth = 10; 
let noiseOffset = 0; 
let heights;
let isDay = true;

function setup() {
  createCanvas(800, 400);
  heights = new Array(floor(width / rectWidth));
  generateTerrain();
}

function draw() {
 
  if (isDay) {
    background(135, 206, 250); // light blue for day 
  } else {
    background(25, 25, 112); // dark blue for night 
  }

  drawTerrain();
  drawFlagAtHighestPeak();
  drawAverageHeightLine();
  
  noiseOffset += 0.005; 
}


function generateTerrain() {
  let noiseVal = noiseOffset;  // start at current noise 
  for (let i = 0; i < heights.length; i++) {
    heights[i] = noise(noiseVal) * height; // noise for heights
    noiseVal += 0.02; //  smoother transition
  }
}


function drawTerrain() {
  noStroke();
  fill(34, 139, 34); // green color terrain 
  
  beginShape();
  vertex(0, height); // start at left
  for (let i = 0; i < heights.length; i++) {
    vertex(i * rectWidth, height - heights[i]); // draw to the height
  }
  vertex(width, height); // draw to right
  endShape(CLOSE); // Close 
}

function drawFlagAtHighestPeak() {
  let highest = -1;
  let peakIndex = -1;

  
  for (let i = 0; i < heights.length; i++) {  // find the higest peak
    if (heights[i] > highest) {
      highest = heights[i];
      peakIndex = i;
    }
  }

  // flag at the peak
  if (peakIndex !== -1) {
    drawFlag(peakIndex * rectWidth + rectWidth / 2, height - highest);
  }
}

// draw the flag
function drawFlag(x, y) {
  fill(255, 0, 0); // Red color for flag
  rect(x - 2, y - 20, 4, 20); // flag pole
  fill(255); // white flag
  triangle(x - 10, y - 20, x + 10, y - 20, x, y - 40); // flag triangle
}

// buttons ........................................................................................
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    rectWidth = max(1, rectWidth - 1); // decrease width
  } else if (keyCode === RIGHT_ARROW) {
    rectWidth++;                      // increase width
  } else if (keyCode === 32) {        // spacebar to change background day/night
    isDay = !isDay; 
  }
  generateTerrain(); 
}

// draw height line
function drawAverageHeightLine() {
  let totalHeight = 0;
  
  // calculate average height
  for (let h of heights) {
    totalHeight += h;
  }
  let averageHeight = totalHeight / heights.length;
  
  stroke(255, 215, 0); // gold color for  height line
  line(0, height - averageHeight, width, height - averageHeight);
}
