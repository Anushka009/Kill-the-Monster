const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,backgroundimg,hero,fly;

function preload() {
 backgroundimg = loadImage("images/backgroundIMG.jpg");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(10,500,2500,20);
    hero = new Hero(250,30,2);
    fly = new Fly(hero.body,{x:150,y:100})
}

function draw(){
  background(backgroundimg);
  
  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display()
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseY, y:mouseY});
}