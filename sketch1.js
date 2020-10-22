
var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 100, 50, 80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
movingRect.velocityY=+5;    


  fixedRect= createSprite(400, 700, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
    fixedRect.velocityY = -5;
  
}

function draw() {
  background("black"); 
  
  if(movingRect.x  - fixedRect.x < fixedRect.width/2+movingRect.width/2 
    && fixedRect.x -movingRect.x < fixedRect.width/2+movingRect.width/2){
        movingRect.velocityX =  movingRect.velocityX * (-1); 
        fixedRect.velocityX =  fixedRect.velocityX * (-1); 
        movingRect.shapeColor = "red";
        fixedRect.shapeColor = "red";

    }
if(movingRect.y  - fixedRect.y < fixedRect.height/2+movingRect.height/2 
        && fixedRect.y -movingRect.y < fixedRect.height/2+movingRect.height/2){
            movingRect.velocityY =  movingRect.velocityY * (-1); 
            fixedRect.velocityY =  fixedRect.velocityY* (-1); 
            movingRect.shapeColor = "red";
            fixedRect.shapeColor = "red";
        }

  
        
  

  drawSprites();
}