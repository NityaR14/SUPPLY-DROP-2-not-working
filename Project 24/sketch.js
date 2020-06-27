const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground
var boxSide1,  boxSide2, boxBase

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	var canvas = createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	ground1 = new Ground(400, 680, 800, 20);
	//groundSprite.shapeColor=color(255);

	boxSide1 = new boxSide(20, 100, 300, 680);
	boxSide1.shapeColor = color(650);
	
	boxSide2 = new boxSide(20, 100, 500, 680);
	boxSide2.shapeColor = color(650);
	
	boxBase = new boxSide(200, 20, 400, 690);
	boxBase.shapeColor = color(650);


	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
		World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
		World.add(world, ground);

	
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  groundSprite.x= ground.position.x 
  groundSprite.y= ground.position.y 

  boxSide1.display();
  boxSide2.display();
  boxBase.display();
  ground1.display();

  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



