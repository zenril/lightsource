import  { Util } from './Util';

export class Wall extends Util {

  constructor(x = 0, y = 0, x1 = 0, y1 = 0){
    super();
    
    this.start = { x, y };
    this.end = { x : x1, y : y1 };
  }

  update(obj) {
    Object.assign(this, obj); 
  }
  
  draw() {
    push();
    stroke(0);
    line(
      this.start.x,
      this.start.y, 
      this.end.x, 
      this.end.y
    ); 
    pop();
  }
}