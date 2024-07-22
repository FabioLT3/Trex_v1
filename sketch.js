
var trex ,trexrun, piso;
function preload(){
  trexrun = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  piso = loadAnimation("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite(50,180,20,50);
 trex.addAnimation("runing", trexrun);
 trex.scale = 0.5;
 trex.x = 50;

 //piso y obstaculos
 ground = createSprite(200,190,4000,20);
 ground.addAnimation("ground", piso);
}

function draw(){
  background("white");

  //salto
  if (keyDown("space")) {
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(ground);
  
drawSprites();
}
