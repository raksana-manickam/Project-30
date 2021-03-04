class Block{
  constructor(x, y, width, height) {
    var options = {
      restitution :0.4,
      friction :0.0,     
    }
        
    this.Visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display(){
    var angle = this.body.angle;
    var pos= this.body.position;
    
    if(this.body.speed<3){  
      rectMode(CENTER); 
      rect(pos.x,pos.y,30,40);
    }

    else{
      World.remove(world,this.body);
      push ();
      this.Visibility = this.Visibility - 5;
      tint (255,this.Visibility);
      pop ();
    }    
  }
}