function Bird(){
  
    this.x = 25;
    this.y = height/ 2;
    this.icon = birdImg;
    this.icon.resize(30,30);
    this.gravity = 1;
    this.velocity = 0;
    this.lift = -10;
    
    this.show = function() {
      image(this.icon, this.x, this.y)
    };
    
    this.update = function(){
      this.velocity = this.velocity + this.gravity;
      this.y = this.y + this.velocity;
      
      if(this.y >= height) {
        this.y = height -20;
        this.velocity = 0;
      }
      
      if(this.y <=  0){
        this.y = 0;
        this.velocity = 0;
      }
      
    }
    
    this.up = function(){
      this.velocity = this.velocity + this.lift
    }
    
    
    
    
  }