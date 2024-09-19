// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  mybackground();
  let rectHeight = 75
  noStroke();
  for(let y = height; y >= 0; y -= 100 ){
    let value = map(y,0,height,0,255);
    fill(value, 255-value, 255-value);
    rect(0,y,width, rectHeight);
  }
  
}



function mybackground(){
background(200);
}

function myforeground(){
for(let x = 0; x  <  width; x+= 40 ) {
   fill(0)
   circle(x, height/2, 40);
   fill(225);
   text(x, x, height/2);
 }
// Create stars  x100
let starCount = 0; 
randomseed(4);
while(starCount < 100){
  fill(255, 0, 0);
  let x = random(0, width); 
  let y = random(0, height);
  circle(X,Y,10);
  starCount++;
}


}