const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wall1;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  

  wall1 = new castle(200,200,10,10);

}

function draw() {
  background("black"); 
  Engine.update(engine); 
  
  wall1.display();
}