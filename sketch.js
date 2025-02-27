var car, wall;
var speed, weight;
var leftWall, rightWall;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall=createSprite(1400,200,60,200); 
}

function draw() {
  background(0);  

  car.collide(wall);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509
    if(deformation>180)
    {
      car.shapeColour=(255,0,0)
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColour=(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColour=(0,255,0);
    }
  }
    

  drawSprites();
  
  car.collide(wall);
}