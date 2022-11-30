class Beloning {
    constructor() {
      this.x = floor(random(1,raster.aantalKolommen))*raster.celGrootte;
      this.y = floor(random(0,raster.aantalRijen))*raster.celGrootte;
    }
    
    toon() {
      push();
      fill('green');
      ellipse(this.x,this.y,celGrootte);
      pop();
    }
  }