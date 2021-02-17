var ground, paper,bucket1, bucket2, bucket3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render =Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)
//Create the Bodies Here.
dustbinObj=new dustbin(1200,650);

	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);

 paper = new Paper(60,660,50,50);
ground = new Ground(400,680,2600,30);

var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  });


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(25);
Engine.update(engine);
  paper.display();
  ground.display();
  dustbinObj.display();
  
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position, {x:90, y:-105});
}

}

