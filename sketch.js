var trex;

function setup() {
  createCanvas(1200,400);
  trex = createSprite(200,200,30,30);

}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    trex.position.x = trex.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    trex.position.x= trex.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    trex.position.y = trex.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    trex.position.y = trex.position.y + 5;
  }

  drawSprites();
}




