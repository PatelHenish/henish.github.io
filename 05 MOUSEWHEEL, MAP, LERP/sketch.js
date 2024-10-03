// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y;
let w = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2;  y = height/2;
  noFill();

}

function draw() {
  //background(220);
(mouseX, 0.12);
(mouseY, 0.12);

  circle(x,y,w);
}

function mouseWheel(event){
  print(eventvent.delta);
  if (event.delta > 0){
    w -= 10;
    if(w < 10) w = 10;
  }
  else w+= 10;
}
