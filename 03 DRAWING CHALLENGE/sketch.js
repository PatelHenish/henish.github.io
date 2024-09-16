// drawing challenge
// Henish patel
// Friday 13, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rx = 50;  let ry = 50;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
// moving rectungle 
if (keyIsPressed){
  if(key === "a") { 
    ry += 10;   //ry = ry + 10
    if(ry > height) ry = 0;             
 }
}
  


 fill(50, 150, 255);
 rect(rx, ry,  70, 25, 10, 0);

}

function keyIsPressed() {
// DONT CALL THIS FUNCTION! (its automatic)
 print(keycode===DOWN_ARROW) {
  ry += 100;
 }
}