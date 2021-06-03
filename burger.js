class Burger {
    constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':0.3,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, 60, 60, options);
      this.width = 60;
      this.height = 60;
      this.image = loadImage("burger.png.gif");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("orange");
      stroke("pink");
      strokeWeight(3);
      image(this.image,0, 0, this.width, this.height)
      pop();
    }
  };
  