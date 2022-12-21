class Bom {
    constructor(x,y,sg,snelheid,hoogte,g,b) {
      this.bliksem = b;
      this.stapGrootte = sg;
      this.snelheid = snelheid;
      this.hoogte = hoogte;
      this.grootte = this.stapGrootte * (g);
      this.plek = (this.stapGrootte - this.grootte) * 0.5;
      this.xnr = null;
      this.x = null;
      this.ynr = null;
      this.y = null;
      this.breedte = x; // maximale x-waarde van een bom
      this.xMax = x;
      this.yMax = y;
      this.kiesPlek();
    }

    kiesPlek() {
      this.xnr = floor(random(2,this.xMax));
      this.x = this.xnr * this.stapGrootte + this.plek;
      this.ynr = floor(random(0,this.yMax));
      this.y = this.ynr * this.stapGrootte + this.plek;
    }
    
    toon() {
      push();
      fill('black');
      image(this.bliksem,this.x,this.y,this.grootte,this.grootte);
      pop();
    }

    beweeg(){
      this.x -= this.snelheid;

      this.x = constrain(this.x,0 - (2 * this.stapGrootte),this.breedte * this.stapGrootte);
      this.y = constrain(this.y,0,this.hoogte - this.stapGrootte + this.plek);
    }
  }
