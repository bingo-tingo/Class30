class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.Visiblity = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/block.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos = this.body.position

      if (this.body.speed < 3){
         translate(pos.x,pos.y);
         push ();
         rectMode(CENTER);
        // rect(pos.x,pos.y,this.width, this.height);
        rect(this.image, 0,0,this.width*1.1, this.height*0.8);
         rotate(angle);
         pop ();
       } else {
         (this.body.speed > 6 && this.body.position.x < 901 && this.body.position.y < 401)
          World.remove(world, this.body);
          push();
          this.visibility= -15;
          tint(255, this.visibility);
          rect(this.rect, this.body.position.x, this.body.position.y, 40, 65);
          pop();
      }
    }
  }
