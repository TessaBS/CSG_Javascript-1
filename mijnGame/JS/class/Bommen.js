class Bommen {
    constructor() {
      this.x = floor(random(1,raster.aantalKolommen))*raster.celGrootte;
      this.y = floor(random(0,raster.aantalRijen))*raster.celGrootte;
    }
    
    toon() {
      image(bom,this.x,this.y,raster.celGrootte,raster.celGrootte);
    }
  }