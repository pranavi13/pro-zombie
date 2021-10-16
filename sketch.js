function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black")
  if(keyWentDown("space")){
      player.addImage(shooter3)    
  }
  else if (keyWentUp("space")){
      player.addImage(shooter2)
  }

  if(keyDown("DOWN_ARROW") ||touches.length>0){

      player.y+=15
  }
  if(keyDown("UP_ARROW") ||touches.length>0){

      player.y-=15
  }
 
}