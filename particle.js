class Particle{
  construtor(x,y,radius){
    var options = {
      restitution : 0.4
    }
    this.radius = radius;
    this.body = Body.circle(x,y,this.radius,option);
    this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
   }  
   display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     fill(this.color);
     ellipseMode(RADIUS);
     ellipse(o,o,this.radius,this.radius);
     pop();
   }

}



 
  