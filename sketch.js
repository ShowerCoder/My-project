var wall
car;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(90,200);
  weight=random(400,1500);

  car=createsprite(50,200,50,50);
  car.debug=true;
  car.shapeColour="green";

  wall=createSprite(1500,200,60,height/2);
  wall.debug=true;
  wall.shapeColour="blue";

  
}

function draw() {
  background(255,255,255);
  car.velocityX = speed;
  
  isTouching(car,wall);
  drawSprites();
}

function isTouching (a,b) {
  if((car.velocityX = -100) && a.x-b.x <= a.width/2 + b.width/2 &&
    b.x-a.x <= a.width/2 + b.width/2 
    
    car.shapeColour(0,255,0);
    )

      if((car.velocityX = >100,<180) && a.x-b.x <= a.width/2 + b.width/2 &&
        b.x-a.x <= a.width/2 + b.width/2 
        
        car.shapeColour(230,230,0);
        )

          if((car.velocityX = >180) && a.x-b.x <= a.width/2 + b.width/2 &&
            b.x-a.x <= a.width/2 + b.width/2 
            
            car.shapeColour(255,0,0);
            )}

}


