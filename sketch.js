var moveitrect, fixitrect;

function setup() {
  createCanvas(800,400);
  fixitrect= createSprite(400, 200, 50, 50);
  moveitrect= createSprite (200,200,50,50);
  fixitrect.shapeColor = "black"
  moveitrect.shapeColor = "black"
}

function draw() {
  background(255,255,255); 
  
  moveitrect.x = World.mouseX
  moveitrect.y = World.mouseY
  if (moveitrect.x - fixitrect.x < fixitrect.width/2 + moveitrect.width/2 &&
    fixitrect.x - moveitrect.x < fixitrect.width/2 + moveitrect.width/2 &&
    moveitrect.y - fixitrect.y < fixitrect.height/2 + moveitrect.height/2 &&
    fixitrect.y - moveitrect.y < fixitrect.height/2 + moveitrect.height/2 ){
    moveitrect.shapeColor = "red"
    fixitrect.shapeColor = "red"
  }
  else {
    moveitrect.shapeColor = "black"
    fixitrect.shapeColor = "black"
  }
  drawSprites();
}