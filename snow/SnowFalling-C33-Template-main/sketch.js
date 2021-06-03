const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backg;
var now1;
function preload() {
backgroundImageplacer();
   
}

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1000,700);
  var rand1 = Math.round(random(100,600));
    now1 = new Snow(rand1,100);
  
}

function draw() {

  Engine.update(engine);
  background(backg);

 
    if(now1.y > 1000){
      now1.y = 100;
    }
    now1.display();
    console.log(now1.y);

  
  

  drawSprites();

}

function backgroundImageplacer() {
var rand = Math.round(random(1,3));

  if(rand === 1){
    backg = loadImage("snow1.jpg");
  }

  if(rand === 2){
    backg = loadImage("snow2.jpg");
  
  }

  if(rand === 3){
    backg = loadImage("snow3.jpg");
  }
}