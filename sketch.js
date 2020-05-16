
var ground
var rectObject;
var paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;
	ground=new Ground(width/2, height-25, width, 10);
	rectObject=new RectClass(width-200,height-40,150,20);
	paper=new Paper(130,100);
	Engine.run(engine);
}
function draw() {
  background(150);
  rectMode(CENTER);
  paper.display();
  ground.display();
  rectObject.display();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70});
	}
}



