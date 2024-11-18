let angle = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);

 
  let rotateXAngle = map(mouseY, 0, height, -90, 90); 
  let rotateYAngle = map(mouseX, 0, width, -180, 180); 

  
  rotateX(rotateXAngle);
  rotateY(rotateYAngle);

 
  for (let i = 0; i < 360; i += 45) {
    push();
    rotateY(i); 
    boxes(30);  
    pop();
  }
}

function boxes(size) {
  if (size > 3) {
    push();
    rotateZ(angle);            
    translate(size * 1.5, 0);   
    box(size);                  
    boxes(size * 0.8);         
    pop();
  }
}
