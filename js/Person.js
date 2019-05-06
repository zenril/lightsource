import  { Util } from './Util';
import  { walls } from './Walls';

export class Person extends Util {

  constructor(x = 0, y = 0, rays = 360){
    super();
    
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.rays = rays;
  }

  update(obj) {
    Object.assign(this, obj); 
  }
  
  draw() {
    push();
    ellipseMode(RADIUS);
    fill(0);
    ellipse(this.x, this.y, this.width, this.height);
    pop();

    push();
    
    
    stroke(0,0,0,100);
    // fill(0,0,0,100);
    // beginShape();
    for (let angle = 0; angle < 360; angle = angle + ( 360 / this.rays )) {


      var end = this.getEndPoint(this.x, this.y, 2000, angle);
      
      var intersection = walls.getIntersection(this.x, this.y, end.x, end.y);
      if(intersection){
        // end = intersection;
        line(intersection.x, intersection.y, end.x, end.y); 
        // vertex(end.x, end.y);

      }

 
    }
    // endShape();
    pop();
  }

}