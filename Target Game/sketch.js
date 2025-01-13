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

// let rX = 200; let rY = 150;
// let rWidth =  300; let rHeight = 100;
// let rLeft = rX; let rTop = rY;
// let rRight = rX + rWidth; let rBottom = rTop + rHeight; 

// point use mouse x and mouse y 

// let boxX = 300;   let boxY = 150;
// let boxLength = 300;  let boxHeight = 70;

// let circleDiamter = 120;

// function setup( ){
//   createCanvas(windowWidth, windowHeight);
//   noCursor();
//   rectMode(CORNER);
//   ellipseMode(CENTER);


// }

// function draw(){
//   background(220);
  
// }

// // Draw box
// if(collideRectCircle(boxX, boxY, boxLength, boxHeight, mouseX, mouseY, circleDiamter)){
//   fill(225,225,0);
// }
// else{
//   fill(255);
// }

// rect(boxX, boxY, boxLength, boxHeight);


// //Draw circle 
// fill(255,150);
// ellipse(mouseX, mouseY, circleDiamter, circleDiamter);






//   // if mousex > left and mousex < right 
//   if(mouseX > rLeft && mouseX < rRight){
//     if(mouseY > rTop && mouseY < rBottom){
//       fill(200,54,196); 
//     }
//   }

//   rect(rX, rY, rWidth, rHeight);
// }






let backImage, backImageReport, barrelImage; 
let baseImage, cannonballImage, targetImage; 
let explosionImages = []; 
let shotsRemainingImages = []; 
let targetsHitImages = []; 

let currentGame;



function setup() {
  createCanvas(1068, 600);
  currentGame = new Game();
}

function draw(){
  currentGame.play();
  quickInput();

}

function keyPressed(){
  if (key === " "){
    currentGame.createshot();
  }
}


function quickInput(){
  if(keyIsDown(LEFT_ARROW)){
    currentGame.changeAngle(true);
  }
  if(keyIsDown(RIGHT_ARROW)){
    currentGame.changeAngle(false);
  }
  if(keyIsDown(UP_ARROW)){
    currentGame.changePower(true);
  }
  if(keyIsDown(DOWN_ARROW)){
    currentGame.changePower(false);
  }
}