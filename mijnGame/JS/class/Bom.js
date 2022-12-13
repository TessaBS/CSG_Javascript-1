class Bom {
    constructor(x,y,sg,snelheid,hoogte) {
      this.stapGrootte = sg;
      this.snelheid = snelheid;
      this.hoogte = hoogte;
      this.grootte = this.stapGrootte * (3/4);
      this.plek = (this.stapGrootte - this.grootte) * 0.5;

      this.x = floor(random(1,x)) * this.stapGrootte + this.plek;
      this.y = floor(random(1,y)) * this.stapGrootte - (this.grootte + 2 * this.plek) + this.plek;
    }
    
    toon() {
      push();
      fill('black');
      rect(this.x,this.y,this.grootte);
      pop();
    }

    beweeg(){
      this.x -= this.snelheid;

      this.x = constrain(this.x,0 - (2 * this.stapGrootte),windowWidth * 2);
      this.y = constrain(this.y,0,this.hoogte - this.stapGrootte);
    }
  }