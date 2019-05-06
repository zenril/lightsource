import  { Person } from './Person';
import  { walls } from './Walls';
import  { Wall } from './Wall';
/*
 * @name Mouse 2D
 * @description Moving the mouse changes the position and
 * size of each box.
 */

let person = new Person(0,0,360);

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);

  var border = 30;
  // walls.add(new Wall( 0,0,0,windowHeight - border ));
  // walls.add(new Wall( 0,0,windowWidth -border ,0 ));
  // walls.add(new Wall( windowWidth-border,0,windowWidth-border,windowHeight -border ));
  // walls.add(new Wall( 0,windowHeight-border,windowWidth-border,windowHeight -border));

  // for (let i = 0; i < 5; i++) {
  //   walls.add(new Wall(
  //     Math.random() * windowWidth | 1,
  //     Math.random() * windowHeight | 1,
  //     Math.random() * windowWidth | 1,
  //     Math.random() * windowHeight | 1
  //   ));
  // }

  walls.update({
    width : windowWidth,
    heigth : windowHeight
  });
}

window.update = () => {
  person.update({
    x : mouseX,
    y : mouseY
  });
}

window.draw = () => {
  window.update();
  background(255);
  person.draw();
  walls.draw();
}

var wall = null;
window.mouseClicked = () => {
  if(!wall) {
    wall = new Wall(mouseX, mouseY, 0, 0);
  } else {
    wall.update({
      end : {
        x : mouseX,
        y : mouseY
      }
    });

    walls.add(wall);
    wall = new Wall(mouseX, mouseY, 0, 0);
  }

}