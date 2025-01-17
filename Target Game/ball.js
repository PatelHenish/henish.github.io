class Ball{

  constructor(v_){
    this.pos = createVector(73,525);
    this.velocity = v_;
    this.gravity = createVector(0,0.2);
    this.alive = true;
    this.collisionType = 0 //1 -- ground 2-- TARGET 0 -- no collision
  }

  move(){
    this.pos.add(this.velocity);
    this.velocity.add(this.gravity);

  }

  display(){
    push();
    translate(this.pos.x, this.pos.y);
    image(cannonballImage, 0, 0);
    pop();
  }

  getAlive(){
    return this.alive;
  }
  

  getCollisionType(){
    return this.collisionType;
  }

  checkGroundCollision(){
    //546
    if(this.pos.y > 546){
      this.alive = false;
      this.collisionType = 1;

    }
  }

  checkTargetcollision(){
    if(dist(this.pos.x, this.pos.y, currentGame.targetx, currentGame.targety) < 40){
      this.alive = false;
      this.collisionType = 2;
      currentGame.targetx = random(50,600);
      currentGame.targetY = random(50,600);
    }
  }

}