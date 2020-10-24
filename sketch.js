
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=createSprite(100,680,20,20);
	paper.shapecolor=color(255);

	Engine.run(engine);
  
	boxPosition=width/2-0
	 boxY=650;
	 


 	boxleftSprite=createSprite(boxPosition, boxY, 10,90);
 	boxleftSprite.shapeColor=color("white");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,10);
 	boxBase.shapeColor=color("white");

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 10,90);
 	boxleftSprite.shapeColor=color("white");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject,body.position,{x:85,y:-85});
	}
}

