
function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL

    document.head.appendChild(script);  
}

// dynamicallyLoadScript("js/skyline.js");
var creatures = [];
var predators = [];
var deadCreatures=[];
var plants=[];
var timecount = 0;
var sliderY=541; //plus or minus 41 pixels
var state=0;
var creatures = [];
var predators = [];
var deadCreatures=[];
var plants=[];
var timecount = 0;
var pause = 0;
var stop = 4;
var gameend = 0;
var gigifont;
var milliseconds = 0;
var startTime=0;
var tempactivetime = 0;
var numPrey=0;
var numPreds=0;
var numPlants=0;
var pauseTime=0;
creatures = [];
predators = [];
deadCreatures=[];
plants=[];
timecount = 0;
state=0;
creatures = [];
predators = [];
deadCreatures=[];
lants=[];
timecount = 0;
sliderY=470; //plus or minus 41 pixels
pause = 0;
stop = 4;
gameend = 0;
gigifont;
milliseconds = 0;
startTime=0;
tempactivetime = 0;
numPrey=0;
numPreds=0;
numPlants=0;
pauseTime=0;
numPreds+=1;
function setup() {
  createCanvas(displayWidth,displayHeight);
  for (var i = 0; i < 10; i++) {
    creatures.push( new preyCreature(random(width), random(height),100));
    numPrey+=1;
  }
  predators.push(new predatorCreature(500,500,100));
  numPreds+=1;
  noiseDetail(24);

}

function draw() {
  background(0);
  if (predators.length===0 || creatures.length===0) {
    stop=-1;
  }
  if(random()<.01){
    var plantTest= new plant(random(10,width-10), random(10,height-10));
    plants.push(plantTest);
    numPlants++;
  }
  for(var w =0; w<plants.length; w++){
    plants[w].moveAndDisplay();
  }
  for (var i = 0; i < creatures.length; i++) {
    if (creatures[i].health>90 && creatures[i].dead==0) {
      if (random()<.04 && creatures.length<20) {
        creatures.push( new preyCreature(creatures[i].x, creatures[i].y, 80));
        numPrey++;
      }
    }
    creatures[i].setPrevious();
    // visit every other creature and see i fwe need to attract
    for (var j = i+1; j < creatures.length; j++) {
      creatures[i].repulse( creatures[j] );
      // creatures[i].attractPlant(plantTest);
      // creatures[i].repulsePlant(plantTest);
    }
    for(var w =0; w<predators.length;w++){
        creatures[i].repulsePredator(predators[w]);
        //console.log("goteem");
    }
    for (var j = 0; j < plants.length; j++) {
      creatures[i].attractPlant(plants[j]);
      creatures[i].repulsePlant(plants[j]);
    }
    creatures[i].moveAndDisplay();
  }
  for (var i = 0; i < creatures.length; i++) {
    if (creatures[i].deadCounter<1) {
      creatures.splice(i,1);
      i++;
    }
  }
  for (var d = 0; d < plants.length; d++) {
    if (plants[d].deadCounter<1) {
      plants.splice(d,1);
      d++;
    }
  }
  for (var d = 0; d < predators.length; d++) {
    if (predators[d].health>108 && predators[d].dead!=0) {
      if (random()<.003 &&predators.length<12 ) {
        predators[d].health=70;
        predators.push( new predatorCreature(predators[d].x, predators[d].y, 70));
        numPreds++;
      }
    }
    if (predators[d].deadCounter<1) {
      predators.splice(d,1);
      d++;
    }
  }

  for( var r=0; r<predators.length; r++){
    predators[r].setPrevious();
    for (var j = 0; j < creatures.length; j++) {
      predators[r].attract( creatures[j] );
      predators[r].eat( creatures[j],j );
    }
    predators[r].moveAndDisplay();
    predators[r].preyDecision = [];
  }
  //displaying current time
}
