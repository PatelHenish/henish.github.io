// Project Title
// Your Name
// sept 11 2024
//
// 2d primitives, color, anmation, mouse/keyboard events

function setup() {
  // happens one at very start 
  createCanvas(500, 400);
}

function draw() {
  background(220);
  drawCircles();
  
}

function drawCircles() {
  fill(101, 0, 225)
  circle(0,0,50);

  fill(150, 255, 90)
  circle(width/2, height/2 , 50);

  fill(225, 0, 0)
  circle(0, height, 50);
  circle(width, 0, 50);
  circle(width,height, 50);

  circle(width*0.66, height/2, 50);

}