class Bom {
    constructor(x,y,sg,snelheid,hoogte,g) {
      this.stapGrootte = sg;
      this.snelheid = snelheid;
      this.hoogte = hoogte;
      this.grootte = this.stapGrootte * (g);
      this.plek = (this.stapGrootte - this.grootte) * 0.5;
      this.xnr = floor(random(2,x));
      this.x = this.xnr * this.stapGrootte + this.plek;
      this.ynr = floor(random(1,y));
      this.y = this.ynr * this.stapGrootte + this.plek;
      this.breedte = x;
    }
    
    toon() {
      push();
      fill('black');
      rect(this.x,this.y,this.grootte);
      pop();
    }

    beweeg(){
      this.x -= this.snelheid;

      this.x = constrain(this.x,0 - (2 * this.stapGrootte),this.breedte * this.stapGrootte);
      this.y = constrain(this.y,0,this.hoogte - this.stapGrootte + this.plek);
    }
}
