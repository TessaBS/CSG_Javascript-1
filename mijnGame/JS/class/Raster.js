class Raster {
    constructor() {
      this.aantalRijen = null;
      this.aantalKolommen = null;
      this.celGrootte = 100;
    }
    
    // berekenCelGrootte() {
    //   this.celGrootte = canvas.width / this.aantalKolommen;
    // }

    genereer() {
      this.aantalKolommen = floor(window.width/ this.celGrootte) +1;
      this.aantalRijen = floor(window.height / this.celGrootte) +1;

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