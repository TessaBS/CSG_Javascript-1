class Raster {
    constructor(hoogte) {
      this.aantalRijen = 4;
      this.aantalKolommen = null;
      this.celGrootte = null;
      this.hoogte = hoogte;
    }
    
    
    genereer(){
      this.celGrootte = this.hoogte / this.aantalRijen;
      this.aantalKolommen = floor(windowWidth / this.celGrootte) +1;
    }


    teken() {
      push();
      noFill();
      stroke('black');
      for (var rij = 0;rij<this.aantalRijen;rij++) {
        for (var kolom = 0;kolom<this.aantalKolommen;kolom++) {
          rect(kolom*this.celGrootte,rij*this.celGrootte,this.celGrootte,this.celGrootte);
        }
      }
      pop();
    }
  }