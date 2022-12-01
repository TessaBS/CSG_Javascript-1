class Raster {
    constructor() {
      this.aantalRijen = 4;
      this.aantalKolommen = null;
      this.celGrootte = null;
    }
    
    // genereer() {
    //   this.aantalKolommen = floor(window.width/ this.celGrootte) +1;
    //   this.aantalRijen = floor(window.height / this.celGrootte) +1;

    // }
    
    genereer(){
      this.celGrootte = window.height / this.aantalRijen;
      this.aantalKolommen = floor(window.width/ this.celGrootte) +1;
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