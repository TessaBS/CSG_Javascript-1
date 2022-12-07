class Beloning {
    constructor(x,y,grootte,snelheid) {

      this.x = floor(random(1,x))*grootte;
      this.y = floor(random(1,y))*grootte - grootte;
      this.grootte = grootte;
      this.snelheid = snelheid;
      
    }
    
    toon() {
      push();
      fill(137,148,217);
      rect(this.x,this.y,this.grootte);
      pop();
    }

    beweeg(){
      this.x -= this.snelheid;

      this.x = constrain(this.x,0 - this.grootte,windowWidth * 2);
      this.y = constrain(this.y,0,windowHeight - this.grootte);
    }
  }