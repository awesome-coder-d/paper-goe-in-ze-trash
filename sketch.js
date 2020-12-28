
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper;
var dropzone0, dropzone1, dropzone2, dropzoneSprite0, dropzoneSprite1, dropzoneSprite2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, height - 30, width, 20);
	paper = new Ball((width/2) - 200, height/2, 13);

	dropzoneSprite0 = createSprite(width/2, height/2, 200, 20);
	dropzoneSprite0.shapeColor = rgb(255, 0, 0);


	dropzoneSprite1 = createSprite(310, height/2, 20, 100);
	dropzoneSprite1.shapeColor = rgb(255, 0, 0);

	dropzoneSprite2 = createSprite(310, height/2, 20, 100);
	dropzoneSprite2.shapeColor = rgb(255, 0, 0);

	dropzone0 = Bodies.rectangle((width/2) + 200, height - 50, 100, 10, {isStatic:true});
	World.add(world, dropzone0);

	dropzone1 = Bodies.rectangle((width/2) + 300, height - 100, 10, 100, {isStatic:true});
	World.add(world, dropzone1);

	dropzone2 = Bodies.rectangle(width - 310, height - 100, 10, 100, {isStatic:true});
	World.add(world, dropzone2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dropzoneSprite0.x= dropzone0.position.x;
  dropzoneSprite0.y= dropzone0.position.y;

  dropzoneSprite1.x= dropzone1.position.x;
  dropzoneSprite1.y= dropzone1.position.y;

	dropzoneSprite2.x= dropzone2.position.x;  
	dropzoneSprite2.y= dropzone2.position.y;
  Engine.update(engine);
  ground.display();
  drawSprites();
 paper.display();
}

document.addEventListener('keydown', function (event) {
	var code = event.keyCode;
	if (code === 38) {Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});}
})


