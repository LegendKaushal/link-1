
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(windowWidth/2,100,windowWidth/2,50)
	ball1 = new ball(windowWidth/2,windowHeight/2,50)
	ball2 = new ball(windowWidth/2-50,windowHeight/2,50)
	ball3 = new ball(windowWidth/2-100,windowHeight/2,50)
	ball4 = new ball(windowWidth/2+50,windowHeight/2,50)
	ball5 = new ball(windowWidth/2+100,windowHeight/2,50)
	
	chain1 = new chain(ground.body,ball1.body,0,0)
	chain2 = new chain(ground.body,ball2.body,1,0)
	chain3 = new chain(ground.body,ball3.body,0,0)
	chain4 = new chain(ground.body,ball4.body,0,0)
	chain5 = new chain(ground.body,ball5.body,0,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  
  ball1.display()
  ball2.display()
  ball3.display()
 ball4.display()
 ball5.display()
 
}



