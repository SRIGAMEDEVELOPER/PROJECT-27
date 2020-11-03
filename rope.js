class Rope {

constructor (body1,body2,offsetX,offsetY) {

   this.offsetX=offsetX;
   this.offsetY=offsetY;


   var options={


   bodyA:body1,

   bodyB:body2,

      pointB:{x:this.offsetX,y:this.offsetY}

}

this.Rope= Constraint.create(options);

World.add(world,this.Rope);


}
display(){
var  PA=this.Rope.bodyA.position;

var CB=this.Rope.bodyB.position;

strokeWeight(2);

var Anchor1X=PA.x

var Anchor1Y=PA.y

var Anchor2X=CB.x+this.offsetX

var Anchor2Y=CB.y+this.offsetY

line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

}
}