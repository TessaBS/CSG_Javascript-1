class Beloning {
    constructor(x,y,sg,snelheid,hoogte,bommenlijst,g,bl) {
      this.stapGrootte = sg;
      this.snelheid = snelheid;
      this.hoogte = hoogte;
      this.grootte = this.stapGrootte * (g);
      this.breedte = x;

      this.plek = (this.stapGrootte - this.grootte) * 0.5;

      this.bommenLijst = bommenlijst;
      this.beloningStaOpBom(x,y);

      this.r = 255;
      this.g = 255;
      this.b = 255;
      this.doorzichtig = 1;

      this.xnr = null;
      this.x = null;
      this.ynr = null;
      this.y = null;

      this.xMax = x;
      this.yMax = y;
      this.kiesPlek();

      this.beloningPlaatjes = bl;
      this.beloningKleurKiezen();
    }

    kiesPlek() {
      this.xnr = floor(random(2,this.xMax));
      this.x = this.xnr * this.stapGrootte + this.plek;
      this.ynr = floor(random(0,this.yMax));
      this.y = this.ynr * this.stapGrootte + this.plek;
    }
    
    beloningStaOpBom(x,y){
      for(var d = 0; d < this.bommenLijst.length; d++){
        if(this.x == this.bommenLijst[d].x && this.y == this.bommenLijst[d].y){
          this.x = floor(random(1,x)) * this.stapGrootte + this.plek;
          this.y = floor(random(1,y)) * this.stapGrootte + this.plek;    
        }
      }
    }

    beloningKleurKiezen(){
      this.beloningKiezen = round(random(0,this.beloningPlaatjes.length));
    }

    toon() {
      push();
      noStroke();
      // image(this.beloningPlaatjes[this.beloningKiezen],this.x,this.y,this.grootte,this.grootte);
      fill(this.r,this.g,this.b,this.doorzichtig);
      rect(this.x,this.y,this.grootte);
      pop();
    }

    beweeg(){
      this.x -= this.snelheid;
      this.x = constrain(this.x,0 - (2 * this.stapGrootte),this.breedte * this.stapGrootte);
      this.y = constrain(this.y,0,this.hoogte - this.stapGrootte + this.plek);
    }
  }