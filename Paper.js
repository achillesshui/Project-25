class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill(255);
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, 70, 70);

    }
  }