class green {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            density:1.0,
        }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png")
    World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        fill("white");
        image(this.image,pos.x,570,this.width,200);
    }
}