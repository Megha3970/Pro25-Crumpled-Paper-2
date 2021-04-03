const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumpledPaper;
var ground;
var dustbin, dustbinImg, dustbinBottom, dustbinSide1, dustbinSide2;

function preload()
{
	//load images here
	dustbinImg = loadImage ("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	dustbin = createSprite(600,500,200,100);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.70;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	
	crumpledPaper = new Paper (60,595,70);
	ground = new Ground (400,650,800,100);
	
	dustbinBottom = new Dustbin (600,595,160,20);
	dustbinSide1 = new Dustbin (530,505,20,215);
	dustbinSide2 = new Dustbin (670,505,20,215);	

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);

  crumpledPaper.display();
  ground.display();
  dustbinBottom.display();
  dustbinSide2.display();
  dustbinSide1.display();
  drawSprites();
}

function keyPressed ()
{
if (keyCode === UP_ARROW)
{
	Matter.Body.applyForce (crumpledPaper.body, crumpledPaper.body.position, {x:80, y:-95});
}
}