class Beloning {
    constructor(x,y,grootte,snelheid,hoogte,bomX,bomY) {

      this.x = floor(random(1,x))*grootte;
      this.y = floor(random(1,y))*grootte - grootte;
      this.grootte = grootte;
      this.snelheid = snelheid;
      this.hoogte = hoogte;
      this.bomX = bomX;
      this.bomY = bomY;
    }
    
    toon() {
      push();
      fill(137,148,217);
      if(this.x == this.bomX){
        this.x = floor(random(1,x))*grootte;
      }
      if(this.y == this.bomY){
        this.y = floor(random(1,y))*grootte - grootte;
      }
      rect(this.x,this.y,this.grootte);

      pop();
    }

    beweeg(){
      this.x -= this.snelheid;

      this.x = constrain(this.x,0 - (2 * this.grootte),windowWidth * 2);
      this.y = constrain(this.y,0,this.hoogte - this.grootte);
    }
  }