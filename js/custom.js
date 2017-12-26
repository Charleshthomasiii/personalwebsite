//$( document ).ready(function() {
  // Handler for .ready() called.



  $("#home").hide();
  $("#resume").hide();
  $("#contact").hide();
  $("#skytext").hide();


  
  $("#nresume").click(function() {
    $("#resume").show();
    $("#nresume").hide();
  });
  
  $("#ncontact").click(function() {
    $("#contact").show();
    $("#ncontact").hide();

  });


  $("#nhome").click(function() {
    $("#home").show();
    $("#nhome").hide();
    $("#skytext").delay(10000).fadeIn(10);
  });


  
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d"); 


    var height = canvas.height;
    var width = canvas.width;
    var ballRadius=1.5;
    var x=ballRadius+1;
    var y= 5*canvas.height/8;
    var dx=2;
    var dy=0;
    var ballColor = "blue";
    var counter = 0;
    var xCounter = 10;
    var stateUpCounter =0;
    var stateDownCounter=180;
    var stateExist=false;
    var stateMake =false;
    
    function randomSky(){
      if(x + dx > width-ballRadius) {//too far to the right
        y=(6*height/8)-ballRadius;
        dx=-2;
        dy=0
          }

        if(y + dy < ballRadius || y + dy > height-ballRadius) {
            dy = -dy;
        }

        if(dx>0){//moving right
          if(counter>xCounter){ //if its time to change directions
            if(y>(height/2)){ //if its below half
              dy=-2; //start moving up
              dx=0;
              xCounter = (Math.random()*50)+35; //next target
              counter=0; //resets counter
              if((stateExist==false) && (Math.random()>.8)){
                stateExist=true;
                stateMake=true;
              }
            }
            if(y<(height/2)){ //if its above half
              dy=2; //start moving down
              dx=0;
              xCounter = (Math.random()*50)+45; //next target
              counter=0; //resets counter
            }
          }
        }
        
      if(dx==0) {//if the ball moves vertically
        if(counter>xCounter){ //if it time to change directions
          if(dy>0){ //if its moving down
            dy=0;
            dx=2
            xCounter= Math.random()*6+2;
            counter=0;
          }
          if(dy<0){ //if its moving up
            dy=0;
            dx=2
            var side = Math.random();
            if(side<.12){
              dy=.2+Math.random();
            }
            if(side>.88){
              dy=-Math.random()-.2;
            }
            xCounter= Math.random()*20+17;
            counter=0;

          }
        }
      }
      x=x+dx;
      y=y+dy; 
      counter++;

    }
    function signature(){


    }

    function liberty(){
      
    }

    function bridge(){

    }

    function threeD(){

    }
    function stateUp(){
      switch (true) {
        case (stateUpCounter==0): //start of the buildin
            dy=0;
            dx=2;
            break;
        case (stateUpCounter<=80): //going right
            dy=-2;
            dx=0;
            break;
        case stateUpCounter<=86://x
            dy=0;
            dx=2;
            break;
        case stateUpCounter<=107://y
            dy=-2;
            dx=0;
            break;
        case stateUpCounter<=109://x
            dy=0;
            dx=2;
            break;
        case stateUpCounter<=118://y
            dy=-2;
            dx=0;
            break;
        case stateUpCounter<=121://x
            dy=0;
            dx=2;
            break;
        case stateUpCounter<=133://y
            dy=-2;
            dx=0;
            break;
        case stateUpCounter<=136://x
            dy=0;
            dx=2;
            break;   
        case stateUpCounter<=154://second tower
            dy=-2;
            dx=0;
            break;
        case stateUpCounter<=174://spire
            dx=.2;
            dy=-2;
            break;
        case stateUpCounter>180://spire
            dx=0;
            dy=0;
            //y=0;
            //x=0;
            break;
      }

      x=x+dx;
      y=y+dy;
      stateUpCounter++;
    }
    function stateDown(){
      switch (true) {
        case (stateDownCounter<=0): //start of the buildin
            dy=0;
            dx=.5;
            break;
        case (stateDownCounter<=80): //going right
            dy=-2;
            dx=0;
            break;
        case stateDownCounter<=86://x
            dy=0;
            dx=2;
            break;
        case stateDownCounter<=107://y
            dy=-2;
            dx=0;
            break;
        case stateDownCounter<=109://x
            dy=0;
            dx=2;
            break;
        case stateDownCounter<=118://y
            dy=-2;
            dx=0;
            break;
        case stateDownCounter<=121://x
            dy=0;
            dx=2;
            break;
        case stateDownCounter<=133://y
            dy=-2;
            dx=0;
            break;
        case stateDownCounter<=136://x
            dy=0;
            dx=2;
            break;   
        case stateDownCounter<=154://second tower
            dy=-2;
            dx=0;
            break;
        case stateDownCounter<=174://spire
            dx=.2;
            dy=-2;
            break;
        case stateDownCounter>180://spire
            dx=0;
            dy=0;
            break;
      }

      x=x+dx;
      y=y-dy;
      stateDownCounter--;
    }

    function drawBall(){
      ctx.fillStyle="white";
      ctx.beginPath();
      ctx.arc(x,y,ballRadius,0,2*Math.PI);
      //ctx.fillstyle="#FF0000";
      //ctx.strokeStyle="red";
      ctx.fill();
      ctx.closePath();
      }
    function draw(){
      drawBall();
      requestAnimationFrame(draw);
      //randomSky();
      if(stateMake==true){
        if(stateUpCounter<180){
          stateUp();
        }
        else if(stateDownCounter>-1)
        {
          stateDown();
        }
        else{
          stateMake=false;
        }


      }
      else{
        randomSky();
      }

    }
      draw();
      draw();
      draw();
      draw();

//});