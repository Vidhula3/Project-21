var bg,sleep,brush,gym,eat,drink,move;
var astronaut;

function preload(){
bg=loadImage("images/iss.png");
sleep=loadAnimation("images/sleep.png");
brush=loadAnimation("images/brush.png");
gym=loadAnimation("images/gym1.png","images/gym2.png");
eat=loadAnimation("images/eat1.png","images/eat2.png");
bath=loadAnimation("images/bath1.png","images/bath2.png");
move=loadAnimation("images/move.png","images/move1.png");

}

function setup() {
  createCanvas(500, 500);

  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;

}

function draw() {
  background(bg);

  textSize(20);
  fill("white");
  text("Instructions:",20, 35);

  textSize(15);
  fill("white");
  text("Up Arrow=Brushing",20, 55);

  textSize(15);
  fill("white");
  text("Down Arrow=Gymming",20, 75);

  textSize(15);
  fill("white");
  text("Left Arrow=Eating",20, 95);

  textSize(15);
  fill("white");
  text("Right Arrow=Bathing",20, 115);

  textSize(15);
  fill("white");
  text("M key=Moving",20, 135);

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.x = 350;
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 200;
    astronaut.y=300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.changeAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  drawSprites();
}