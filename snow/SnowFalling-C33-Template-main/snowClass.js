class Snow {
    constructor(x,y) {

    var options = {
    'friction' : 3,
    'density' : 0.1,
    'isStatic' : false,
    }

    this.body = Bodies.rectangle(x,y,50,50,options);
    this.x = x;
    this.y = y;
    this.image = loadImage("snow4.webp");
    World.add(world,this.body);

    }
    display(){
     var pos = this.body.position;
     
     image(this.image,pos.x,pos.y,50,50);
    }
}