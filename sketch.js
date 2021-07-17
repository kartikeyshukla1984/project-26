
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var stone,ground;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;

var myEngine, myWorld ,hammer1;
function setup(){
   createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

 hammer1 = new Hammer(100,200);
 stone = new Stone(700,320,40,40);
 ground = new Ground(600,390,1200,20);
 sand1 = new Sand(600,200,5,5);
 sand2 = new Sand(610,200,5,5);
 sand3 = new Sand(620,200,5,5);
 sand4 = new Sand(630,200,5,5);
 sand5 = new Sand(640,200,5,5);
 sand6 = new Sand(650,200,5,5);
 sand7 = new Sand(660,200,5,5);
 sand8 = new Sand(670,200,5,5);

}
function draw()
{
  background("skyblue");

  Engine.update(myEngine);

 
  hammer1.display();
  stone.display();
  ground.display();
  sand1.display();
  sand4.display();
  sand2.display();
  sand3.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
}


