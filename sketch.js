var roof,rope1,rope2,rope3,rope4,rope5,bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,bobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Roof (360,200,150,30)

	bobObject1= new Bob(320,400,20)

	bobObject2= new Bob(340,400,20)

	bobObject3= new Bob(360,400,20)

	bobObject4= new Bob(380,400,20)

	bobObject5= new Bob(400,400,20)

	bobDiameter=40;

	rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*1,0);

	rope2=new Rope(bobObject2.body,roof.body,-20,0);

	rope3=new Rope(bobObject3.body,roof.body,2,0);

	rope4=new Rope(bobObject4.body,roof.body,20,0);

	rope5=new Rope(bobObject5.body,roof.body,40,0);

	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background("white");

  
  
  roof.display();

  bobObject1.display();

  bobObject2.display();

  bobObject3.display();
  
  bobObject4.display();
  
  bobObject5.display();

  rope1.display();

  rope2.display();

  rope3.display();

  rope4.display();

  rope5.display();

  drawSprites();
 
}

function keyPressed() 
  { if (keyCode === UP_ARROW) 
	
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
 
} }

