function Pipe(){
  
  
    this.x = width;
    this.w = 20; // width of each pipe
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.speed = 3;
    this.highlight = false;
    this.passed = false;
    
    this.hits = function(){
      
      if((bird.y < this.top) || ( bird.y > height - this.bottom)){
        if((bird.x > this.x) && (bird.x < this.x + this.w)){
          this.highlight = true;
          return true
        }
      }
      else {
        this.highlight = false;
        return false;
      }
    }
    
    this.show = function(){
      fill(0);
      if(this.highlight){
        fill(255,0,0)
      }
      rect(this.x, 0, this.w, this.top); // top pipe
      rect(this.x, height - this.bottom, this.w, this.bottom); // bottom pipe
    }
    
    
      this.pass = function(bird){
          if (bird.x > this.x && !this.passed) {
          this.passed = true;
       //     score++;
          return true;
        }
        return false;
       }
    
    this.update = function(){
      this.x = this.x -this.speed;
    }
    
    
    
    
    
  }