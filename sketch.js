var fixedRect;
var movingRect;

function setup() {
   createCanvas(800,400);
   fixedRect=createSprite(100, 200, 100, 50);
   movingRect=createSprite(700,200,50,100);

   fixedRect.shapeColor="Green";
   movingRect.shapeColor="Green";

   movingRect.velocityX =-5;
   fixedRect.velocityX =  5;
}

function draw() {
  background(0); 
  // movingRect.x=World.mouseX;
  // movingRect.y=World.mouseY;

  console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";
  }
  else{ fixedRect.shapeColor="Green";
        movingRect.shapeColor="Green";

  }
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
      movingRect.velocityX=movingRect.velocityX *(-1);
      fixedRect.velocityX=-fixedRect.velocityX *(-1);
    }
  drawSprites();
}

