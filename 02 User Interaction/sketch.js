// User Events
// Henish patel
// Thusday 12, 2024
//
// 

let tsize = 40;
let x= = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  if (mouseIsPressed) tsize = random(20,80);
  fill(0)
  textSize(tsize);
  text((mouseX + ", " + mouseY),mouseX, mouseY);

  fill(255,0,0);
  circle(width*0.5, height*0.5,100);

  fill(0,255,0);

  x = x + 10;
  if (x > width)
  rect(x, height/2, 60);
  
}
