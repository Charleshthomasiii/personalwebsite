class plant{
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.repulsed=0;
    this.attractionZoneSize = 400;
    this.health = 50;
    this.dead = 0;
    this.deadCounter=90;
    this.repulsionZoneSize=this.size*2;
    this.repulsionStrength=0.02;
    this.attractionStrength=0.1;
    this.size=50;
  }
  // rotateCreature(){
    
  // }
  healthFunc() {
    this.health-=0.1;
    if (this.health<=0){
      this.deathProcess();
    }
  }
  deathProcess(){
    //var tempCreature = creatures.splice(this.index,1);
    this.dead=1;
    this.deadCounter=90;

    //deadCreatures.append(tempCreature);
    
  }
  moveAndDisplay() {
    stroke(255);
    fill(0);
    // image(bush,this.x,this.y,this.size,this.size*.95);
    ellipse(this.x,this.y,this.size);
    if (this.dead ==1){
      this.deadCounter-=1;
    }
    else{
      this.healthFunc();
    }
  }

}