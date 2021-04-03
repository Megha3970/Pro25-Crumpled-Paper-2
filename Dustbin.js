class Dustbin 
{
    constructor (x,y,width,height,options)
    {
    var options ={
        isStatic:true
    
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(this.x,this.y, this.width, this.height, options);
    World.add(world, this.body);
    }

    display ()
    {
        var dustbinPos = this.body.position;
        push()
        translate (dustbinPos.x, dustbinPos.y);
        rectMode (CENTER);
        fill (0,141,0);
        rect(0, 0,this.width, this.height);
        pop();
    }
}