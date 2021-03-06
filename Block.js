class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.Visibility = 255;  
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push ();

      console.log(this.body.speed);

     if(this.body.speed < 5)
     {

      translate (pos.x, pos.y);
      rotate (angle);
      fill("blue");
      imageMode (CENTER);
      image(this.image, 0, 0, this.width, this.height);
  
     }
  
     else
     {
       
  
       World.remove(world, this.body);
       this.Visibility = this.Visibility-5;
  
       tint (255, this.Visibility);
       image(this.image, this.body.position.x, this.body.position.y, 30, 40);
     }
  
     pop ();

    }
}