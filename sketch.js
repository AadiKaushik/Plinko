var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var gameState = "play"

var particle
var turn = 0;
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

 
 


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }




    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 



function draw() {
  background("black");
  textSize(20)
  
 text("Score : "+score,20,30);
 text(score,40,500);
 text(score,120,500);
 text(score,200,500);
 text(score,280,500);
 text(score,360,500);
 text(score,440,500);
 text(score,520,500);
 text(score,600,500);
 text(score,680,500);
 text(score,760,500);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  

   mousePressed();

    
  if(particle !== null)
  {
    particle.display();
      
    if(particle.body.position.y>450)
    {
      if(particle.body.position.x<300)
      {
        score =score +500;
        particle = null
        if(turn >5)
        {
          gameState = "end"
        }
      }
    }
  }


   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed()
{
  if(mousePressed)
  {
  if(gameState!=="end")
  {
    turn++;
    particle = new Particle(mouseX,450,10,10);
  }
}
}