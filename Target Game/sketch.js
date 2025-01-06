// Target game 
// Henish Patel
// 1/6/2025

// POINT CIRCE COLLISION.............................................................................

// let cX = 500; let cY = 300;
// let cDiameter = 250;
// let cRadius = cDiameter/2;

// // point we use mouse x and mouse y 

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(220);
//   // is the distance between the mouse pointer
//   // and the circle's centerpoint (cX,cY) < radius
//   if(dist(mouseX,mouseY,cX,cY)  < cRadius){
//     fill(255,0,255);
//   }
//   else{
//     fill(255);
//   }
//   ellipse(cX, cY, cDiameter,cDiameter);
// }

// POINT RECTANGLE COLLISION..........................................................................

let rX = 200; let rY = 150;
let rWidth =  300; let rHeight = 100;
let rLeft = rX; let rTop = rY;
let rRight = rX + rWidth; let rBottom = rTop + rHeight; 

// point use mouse x and mouse y 

function setup( ){
  createCanvas(windowWidth, windowHeight);

}

function draw(){
  background(225);
  fill(255);

  // if mousex > left and mousex < right 
  if(mouseX > rLeft && mouseX < rRight){
    if(mouseY > rTop && mouseY < rBottom){
      fill(200,54,196); 
    }
  }

  rect(rX, rY, rWidth, rHeight);
}