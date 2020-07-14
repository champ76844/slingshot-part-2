const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/background.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,100,100);
    box2 = new Box(920,320,100,100);
    box3 = new Box(700,240,100,100);
    box4 = new Box(920,240,100,100);
    box5 = new Box(810,160,100,100);
    box5 = new Box(810,160,100,100);
    box6 = new Box(810,160,100,100);
    box7 = new Box(810,160,100,100);
    
    
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(bird.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(1)
    var x = mouseX;
    var y = mouseY;
    text( "x "+x,100,100)
    text( "y "+y,100,150)
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode==32){
 slingshot.attach(bird.body)
    
    }
    }     