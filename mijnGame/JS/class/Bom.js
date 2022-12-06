class Bom {
    constructor(x,y,grootte,snelheid,level) {
      this.x = floor(random(1,x))*grootte;
      this.y = floor(random(1,y))*grootte - grootte;
      this.grootte = grootte;
      this.snelheid = snelheid;
      this.level = level;
      this.beeldBom = windowWidth * this.level;
    }
    
    toon() {
      push();
      fill('black');
      rect(this.x,this.y,this.grootte);
      pop();
    }

    beweeg(){
      this.y -= this.stapGrootte * this.snelheid;
      this.x -= this.stapGrootte * this.snelheid;

      this.x = constrain(this.x,0,this.beeldBom);
      this.y = constrain(this.y,0,windowHeight - this.grootte);
    }
    beweeg() {
      this.x += floor(random(-1,2))*this.stapGrootte;
      this.y += floor(random(-1,2))*this.stapGrootte;
  
      this.x = constrain(this.x,0,canvas.width - raster.celGrootte);
      this.y = constrain(this.y,0,canvas.height - raster.celGrootte);
    }
  }