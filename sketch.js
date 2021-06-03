const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;
var backgroundImg;
var slingshot;
var broccoli;
var burger;
var mousebaby;


function preload() {
  backgroundImg = loadImage("kitchen.jpg");
}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world

  ground = new Ground(600,780,1200,20);
  broccoli = new Broccoli(200,400);
  burger = new Burger(200,600);
  slingshot = new Slingshot(broccoli.body,{x:200, y:400});
  slingshot1 = new Slingshot(burger.body,{x:200, y:600});
  mousebaby = new Baby(900,700);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine)


  ground.display();
  broccoli.display();
  burger.display();
  slingshot.display();
  slingshot1.display();
  mousebaby.display();

}

function mouseDragged(){
  Matter.Body.setPosition(broccoli.body, {x: mouseX , y: mouseY});
  Matter.Body.setPosition(burger.body, {x:mouseX , y: mouseY});
 }

 function mouseReleased(){
  slingshot.fly();
  slingshot1.fly();
  }

  function keyPressed() {
    if (keyCode === 32) {
       Matter.Body.setPosition(broccoli.body, {x:200, y:400});
       Matter.Body.setPosition(burger.body, {x:200, y:600});
       slingshot.attach(broccoli.body);
       slingshot1.attach(burger.body);
   }   
   }