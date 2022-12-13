class Beloning {
    constructor(x,y,sg,snelheid,hoogte,bomX,bomY,bl) {
      this.stapGrootte = sg;
      this.snelheid = snelheid;
      this.hoogte = hoogte;
      this.grootte = this.stapGrootte * (3/4);
      this.plek = (this.stapGrootte - this.grootte) * 0.5;
      this.x = floor(random(1,x)) * this.stapGrootte + this.plek;
      this.y = floor(random(1,y)) * this.stapGrootte - (this.grootte + 2 * this.plek) + this.plek;
      this.bomX = bomX;
      this.bomY = bomY;
      this.bommenLijst = bl;
    }
    
    toon() {
      push();
      fill(137,148,217);
      for(var d = 0; d < this.bommenLijst; d++){
        if(this.x == this.bomX[d]){
          this.x = floor(random(1,x))*grootte;
        }
        if(this.y == this.bomY[d]){
          this.y = floor(random(1,y))*grootte - grootte;
        }
      }


      rect(this.x,this.y,this.grootte);

      pop();
    }

    beweeg(){
      this.x -= this.snelheid;

      this.x = constrain(this.x,0 - (2 * this.stapGrootte),windowWidth * 2);
      this.y = constrain(this.y,0,this.hoogte - this.stapGrootte);
    }
  }