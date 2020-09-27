const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2, box3;

var helicopter, helicopterImg;
var package, packageImg;

function preload(){
    helicopterImg = loadImage("helicopter.png");
    packageImg = loadImage("package.png");
}
function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    packageSprite=createSprite(200, 200, 10,10);
	packageSprite.addImage(packageImg)
    packageSprite.scale=0.1
    
    helicopter = createSprite(width/2, 100, 5, 5);
    helicopter.addImage(helicopterImg);
    helicopter.scale = 0.5;

    package = {
		restitution:1
	}

	packageBody = Bodies.rectangle(200, 200, 10, 10, package);
    World.add(world, packageBody);
    
    ground = new Ground(200, 390, 400, 20);

    box1 = new Ground(180, 375, 80, 10);
    box1.shapeColor = "red";
    box2 = new Ground(145, 390, 10, 100);
    box2.shapeColor = "red";
    box3 = new Ground(225, 375, 10, 70);
    box3.shapeColor = "red";
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    ground.display();

    packageSprite.x= packageBody.position.x; 
    packageSprite.y= packageBody.position.y; 
    
    drawSprites();
}