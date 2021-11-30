class Board {
 constructor(x,y,width,height) {
 var options = {isStatic: true}
 this.width = width
 this.height = height
 this.body = Bodies.rectangle(x,y,width,height,options)
 this.image = loadImage("assets/board.png")
 World.add(world,this.body)
 }

 display() {
     push()
     translate(this.body.position.x, this.body.position.y)
     rotate(this.body.angle)
     image(this.image, 0, 0, this.width, this.height)
     pop()
     
 }



}