// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let circletime = 5;
lwt circleInterval = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
  
}

function draw() {
  background(220);
  line(width/2,0,width/2,height);
  randomcircle();
  noicecircle();

 } 
 
 function noicecircle() {
  let cSize = noise(circletime);
  cSize = map(cSize, 0, 1, 10, 255);
  circle(width*0.75, height/2, cSize);
  text(round(cSize), width*0.75, height/2 )
}


  function randomcircle() {
    let cSize = random(10,100);
    circle(width*0.25, height/2, cSize);
    textAlign(CENTER, CENTER)
    textSize(30);
    text(round(cSize), width*0.25, height/2 )
    circletime += circleInterval;
  }