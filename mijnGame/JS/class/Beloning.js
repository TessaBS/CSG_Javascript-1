class Beloning {
    constructor(x,y,sg,snelheid,hoogte,bommenlijst) {
      this.stapGrootte = sg;
      this.snelheid = snelheid;
      this.hoogte = hoogte;
      this.grootte = this.stapGrootte * (3/4);
      this.plek = (this.stapGrootte - this.grootte) * 0.5;
      this.x = floor(random(2,x)) * this.stapGrootte + this.plek;
      this.y = floor(random(1,y)) * this.stapGrootte - (this.grootte + 2 * this.plek) + this.plek;
      this.bommenLijst = bommenlijst;
      this.beloningStaOpBom(x,y);

      this.r = 137;
      this.g = 148;
      this.b = 217;
      this.doorzichtig = 0.5;
    }
    
    beloningStaOpBom(x,y){
      for(var d = 0; d < this.bommenLijst.length; d++){
        if(this.x == this.bommenLijst[d].x && this.y == this.bommenLijst[d].y){
          this.x = floor(random(1,x)) * this.stapGrootte + this.plek;
          this.y = floor(random(1,y)) * this.stapGrootte - (this.grootte + 2 * this.plek) + this.plek;    
        }
      }
    }


    toon() {
      push();
      fill(this.r,this.g,this.b,this.doorzichtig);
      rect(this.x,this.y,this.grootte);

      pop();
    }

    beweeg(){
      this.x -= this.snelheid;

      this.x = constrain(this.x,0 - (2 * this.stapGrootte),windowWidth * 2);
      this.y = constrain(this.y,0,this.hoogte - this.stapGrootte);
    }
  }