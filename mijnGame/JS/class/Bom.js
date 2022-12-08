class Bom {
    constructor(x,y,grootte,snelheid,hoogte) {
      this.x = floor(random(1,x))*grootte;
      this.y = floor(random(1,y))*grootte - grootte;
      this.grootte = grootte;
      this.snelheid = snelheid;
      this.hoogte = hoogte;
      
    }
    
    toon() {
      push();
      fill('black');
      rect(this.x,this.y,this.grootte);
      pop();
    }

    beweeg(){
      this.x -= this.snelheid;

      this.x = constrain(this.x,0 - (2 * this.grootte),windowWidth * 2);
      this.y = constrain(this.y,0,this.hoogte - this.grootte);
    }
  }