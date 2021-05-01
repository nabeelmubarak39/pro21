var fixedRect, movingRect;

var obj1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = -2;

  obj1 = createSprite(100, 200, 50, 50);
  obj1.velocityX = 2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(obj1, movingRect)) {
  obj1.shapeColor = "pink";
  movingRect.shapeColor = "pink";
}
else{
  obj1.shapeColor = "green";
  movingRect.shapeColor = "green";

}

bounce (obj1,movingRect)

  drawSprites();
}
