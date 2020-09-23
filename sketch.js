var target1,target2,target3,target4,
car1,car2,car2,car3,car4;

function setup() {
  createCanvas(800,400);
  target1=createSprite(250,200,50,80);
  target1.debug=true;
  target1.shapeColour="blue";

  target2=createsprite(250,250,50,80);
  target2.debug=true;
  target2.shapeColour="blue";
  
  target3=createsprite(250,300,50,80);
  target3.debug=true;
  target3.shapeColour="blue";
  
  target4=createsprite(250,350,50,80);
  target4.debug=true;
  target4.shapeColour="blue";

  car1=createsprite(100,200,80,50);
  car1.debug=true;
  car1.shapeColour="green";
  
  car2=createsprite(100,250,80,50);
  car2.debug=true;
  car2.shapeColour="green";
  
  car3=createsprite(100,300,80,50);
  car3.debug=true;
  car3.shapeColour="green";
  
  car4=createsprite(100,350,80,50);
  car4.debug=true;
  car4.shapeColour="green";
  
}

function draw() {
  background(255,255,255);

  car1.collide(target1);
  car2.collide(target2);
  car3.collide(target3);
  car4.collide(target4);

  isTouching1 (car1,target1);
  isTouching2 (car2,target2);
  isTouching3 (car3,target3);
  isTouching4 (car4,target4);

  drawSprites();
}

function isTouching1 (a,b) {
  if(a.x-b.x <= a.width/2 + b.width/2 &&
    b.x-a.x <= a.width/2 + b.width/2 &&
    a.y-b.y <= a.height/2 + b.height/2 && 
    b.y-a.y <= a.height/2 + b.height/2
    
    car1.shapeColour="orange";
    target1.shapeColour="red";
    ){

}


function isTouching2 (a,b) {
  if(a.x-b.x <= a.width/2 + b.width/2 &&
    b.x-a.x <= a.width/2 + b.width/2 &&
    a.y-b.y <= a.height/2 + b.height/2 && 
    b.y-a.y <= a.height/2 + b.height/2
    
    car2.shapeColour="yellow";
    target2.shapeColour="red";
    ){
}


function isTouching3 (a,b) {
  if(a.x-b.x <= a.width/2 + b.width/2 &&
    b.x-a.x <= a.width/2 + b.width/2 &&
    a.y-b.y <= a.height/2 + b.height/2 && 
    b.y-a.y <= a.height/2 + b.height/2
    
    car3.shapeColour="red";
    target3.shapeColour="red";
    ){

}


function isTouching4 (a,b) {
  if(a.x-b.x <= a.width/2 + b.width/2 &&
    b.x-a.x <= a.width/2 + b.width/2 &&
    a.y-b.y <= a.height/2 + b.height/2 && 
    b.y-a.y <= a.height/2 + b.height/2
    
    car4.shapeColour="green";
    target4.shapeColour="red";
    ){

}
