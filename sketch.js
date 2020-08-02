//Global Variables
var bananaImage, obstacleImage, backImage;
var  obstacleGroup,backgroundsprite,Score;
var monkey,monkey_running;
var bananaGroup;


function preload(){
  backImage = loadImage("jungle.jpg");
monkey_running = 
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
   
}

function setup() {
  createCanvas(600,300);
  backgroundsprite=createSprite(300,150,600,300);
  backgroundsprite.addImage("bg",backImage);
  monkey=createSprite(50,250,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.2;
  bananaGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
 background(255);
  
if (bananaGroup.isTouching(monkey)) {
    bananaGroup.destroyEach();
    Score = Score+2;
     }
  switch(Score) {
     case 10: monkey.scale=0.12;
              break;
     case 20: monkey.scale=0.14;
              break;
     case 30: monkey.scale=0.16;
              break;
     case 40: monkey.scale=0.18;
              break;
              default: break;
      }
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.2;
     }
  
  textSize(20);
  fill("white");
  text("Score: " + Score,500,50);
  
  spawnBananas();
  
  spawnObstacles();
  
   drawSprites();
}


function spawnBananas() {
  //write code here to spawn the bananas
  if (World.frameCount % 100 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = random(80,120);
    banana.addImage("banana" , bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    bananaGroup.add(banana);
    
  }
  
}

function spawnObstacles() {
  if(World.frameCount % 100 === 0) {
    var obstacle = createSprite(600,270,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage("obstacle",obstacleImage);
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}