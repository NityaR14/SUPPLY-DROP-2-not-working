class boxSide{
    constructor(x, y, w, h){
        var prop = {
            'friction':0.5,
            'density':0.5,
            'restitution':0.5,
        }
        

        this.body = Matter.Bodies.rectangle(x,y,w,h,prop);
        this.width = w;
        this.height = h;
        Matter.Body.setStatic(this.body, true);
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
        pop()
    }
}