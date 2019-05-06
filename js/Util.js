import { checkIntersection } from "line-intersect";

export class Util {
  getEndPoint(x, y, length, angle) {

    var rads = radians(angle);
    return {
      x : x  + length * cos(rads),
      y : y  + length * sin(rads)
    };
  }


    line_intersect(wall, x3, y3, x4, y4) {
      var ua, ub, denom = (y4 - y3)*(wall.start.x - wall.start.x) - (x4 - x3)*(wall.end.y - wall.start.y);
      if (denom == 0) {
          return null;
      }
      ua = ((x4 - x3)*(wall.start.y - y3) - (y4 - y3)*(wall.start.x - x3))/denom;
      ub = ((wall.start.x - wall.start.x)*(wall.start.y - y3) - (wall.end.y - wall.start.y)*(wall.start.x - x3))/denom;
      return {
          x: wall.start.x + ua * (wall.start.x - wall.start.x),
          y: wall.start.y + ub * (wall.end.y - wall.start.y),
          seg1: ua >= 0 && ua <= 1,
          seg2: ub >= 0 && ub <= 1
      };
  }

  checkIntersection(wall, x3, y3, x4, y4){
    return checkIntersection(
      wall.start.x, wall.start.y, wall.end.x, wall.end.y,
      x3, y3, x4, y4
    );
  }

}