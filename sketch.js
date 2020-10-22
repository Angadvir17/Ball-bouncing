const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball; 

function setup(){
    var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(350,690,700,20,ground_options);
    World.add(world,ground);
    var ball_options ={
        restitution:0.5
    }

ball=Bodies.circle(350,350,20,ball_options)
World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,700,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20)
}