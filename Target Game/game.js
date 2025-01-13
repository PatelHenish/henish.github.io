class Game{

  constructor(){
    this.cannonAngle = 60;
    this.cannonPower = 10;
    this.shots = [];
  }

  play(){
    // calll ones per frame (acts like draw)
    imageMode(CORNER);
    image(backImage,0,0);

    imageMode(CENTER);

    // process and draw every cannonball
    for(let i = 0; i < this.shots.length; i++){
      let b = this.shots[i];
      b.move();
      b.display();
      b.checkGroundCollision();
      // check the target collisions 
      if(b.getAlive()===false){
        if(b.getCollisionType()===1){
          //ground collisions
          this.shots.splice(i,  1);
          i--;
        }
      }

    }

    // process and draw every smoke particals



    //process and draw every explostion that is active



    // draw the correct image for number of shots left and targets hit 

    //draw the cannon
    this.displayCannon();
    this.displayPower();



  }

  createshot(){
    let v = createVector(this.cannonPower * cos(radians(this.cannonAngle)),
    this.cannonPower * sin(radians(this.cannonAngle)*-1));
    this.shots.push(new Ball(v));

  }
    
  displayCannon(){
    imageMode(CENTER);
    push();
    translate(73, 525);
    push();
    rotate(radians(360 - this.cannonAngle));
    image(barrelImage,0,0);
    pop();
    image(baseImage,0,0);
    pop();
  }

  displayPower(){
    rectMode(CORNER);
    fill(0);
    rect(0,50,this.cannonPower * 15 - 50, 45);
  }

  changePower(increase){
    if(increase){
      if(this.cannonPower < 20) {
        this.cannonPower += 0.15;
      }
    }
    else{
      if(this.cannonPower > 5) {
        this.cannonPower -= 0.15;
      }
  
    }
  }

  changeAngle(increase){
    // if increase is true getting larger angle 
    if(increase){
      if(this.cannonAngle < 90) {
        this.cannonAngle += 2;
      }
    }
    else{
      if(this.cannonAngle > 0) {
        this.cannonAngle -= 2;
      }

    }
  }





}


