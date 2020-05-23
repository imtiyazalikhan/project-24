var packageBody,ground,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	ball=createSprite(390,10,10,10);

	box=createSprite(400,670,190,10);
	box.shapeColor=color("red");
	box1=createSprite(300,630,10,90);
	box1.shapeColor=color("red");
	box2=createSprite(490,630,10,90);
	box2.shapeColor=color("red");

	box3=createSprite(200,670,190,10);
	box3.shapeColor=color("red");
	box4=createSprite(100,630,10,90);
	box4.shapeColor=color("red");
	box5=createSprite(490,630,10,90);
	box5.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  ball.velocityY=5
	 }
   }
   
   function keyPressed() {
	if (keyCode === UP_ARROW) {
		ball.velocityY=-5;
	   
	 }
   }

   function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		ball.velocityX=5;
	   
	 }
   }

   function keyPressed() {
	if (keyCode === LEFT_ARROW) {
	  ball.velocityX=-5;
	   
	 }
   }
   
