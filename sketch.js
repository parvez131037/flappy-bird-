var bird;
var birdImg;
var pipes = [];
var score = 0;

function setup() {
  createCanvas(500, 500);
  bird = new Bird();
  pipes.push(new Pipe());
}

function preload(){
  birdImg = loadImage('fp1.png');
}

function keyPressed(){
  if(keyCode === 32){
    bird.up(); 
  }
}

function draw() {
  background(255);
  bird.show();
  bird.update();
  text('Score : '+score, 20 ,100)
  
  if(frameCount % 80  == 0){
      pipes.push(new Pipe());
  }
  
 
  
  for(var i = 0; i < pipes.length; i++){
    pipes[i].show();
    pipes[i].update();
    
     if (pipes[i].pass(bird)) {
      score++;
  }
    
    if(pipes[i].hits(bird)){
      console.log("brd hits pipe")
    }
  }
}