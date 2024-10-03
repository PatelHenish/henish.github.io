// 
// Henish  patel 
// Wednesday, sepetember 25, 2024 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let currentcolor = 0;    //0, 1, 2
let mycolor;
let circleSize = 50;
let growing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mycolor = color(210,0,175);
}

function draw() {
  background(220);
  switch(currentcolor) {
    case 0:
      fill(255,0,0);   break;
    case 1:
      fill(mycolor);   break;
    case 2:
      fill(0,50,210);  break;
  }
    
  if(growing) circleSize += 2;
  else circleSize -= 2

  circle(width/2, height/2, circleSize);

function Keypressed() {

if(key === "a"){
  growing = !growing
}
}

   if(frameCount % 10 === 0) {
   currentcolor += 1;
   if (currentcolor > 2) currentcolor =0;

 }



}