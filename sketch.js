
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var db1, db2, db3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,40);

	paper = new Paper(100,600,25);

	db1 = new Dustbin(550,570,20,200);
	db2 = new green(640,660,160,20);
	db3 = new Dustbin(730,570,20,200);

	
	Engine.run(engine);
	console.log(paper)
}


function draw() {
	rectMode(CENTER);
	ellipseMode(CENTER);
	imageMode(CENTER);
	background("white");

	ground.display();
	db1.display();
	
	db3.display();
	paper.display();

	db2.display();
	
	drawSprites();
 
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.pos, {x:100, y:-120})
	}
}



