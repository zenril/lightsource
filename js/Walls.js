import  { Util } from './Util';

export class Walls extends Util {

  constructor(walls = []){
    super();
    this.walls = [
      ...(walls || [])
    ];

    this.width = 0;
    this.heigth = 0;
  }

  add(wall) {
    this.walls.push(wall);
  }

  update(obj) {
    Object.assign(this, obj);
  }

  getIntersection(x1,y1,x2,y2){

    let distance = Infinity;
    let ret  = null;

    for (let wallIndex = 0; wallIndex < this.walls.length; wallIndex++) {
      let wall = this.walls[wallIndex];
      var result = this.checkIntersection(wall, x1,y1,x2,y2);

      if(result.type == 'intersecting') {
        let d = int(dist(x1, y1, result.point.x, result.point.y));

        if( d < distance ){
          distance = d;
          ret = result.point;
        }

      }
    }

    return ret;
  }

  draw() {
    for (let wallIndex = 0; wallIndex < this.walls.length; wallIndex++) {
      let wall = this.walls[wallIndex];
      wall.draw();
    }
  }
}

const walls = new Walls();
export { walls };