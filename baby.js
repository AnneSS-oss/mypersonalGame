class Baby {
    constructor(x, y) {
      var options = {
          'restitution':0,
          'friction':2,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, 500, 500, options);
      this.width = 500;
      this.height = 500;
      this.image = loadImage("mousebaby.png.png");
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