class Bom {
    constructor(x,y,grootte,snelheid,level) {
      this.x = floor(random(1,x))*grootte;
      this.y = floor(random(1,y))*grootte - grootte;
      this.grootte = grootte;
      this.snelheid = snelheid;
      this.level = level;
      
    }
    
    toon() {
      push();
      fill('black');
      rect(this.x,this.y,this.grootte);
      pop();
    }

    beweeg(){
      this.y -= this.grootte * this.snelheid;
      this.x -= this.grootte * this.snelheid;

      this.x = constrain(this.x,0,windowWidth * this.level);
      this.y = constrain(this.y,0,windowHeight - this.grootte);
    }

    // beweeg() {
    //   this.x += floor(random(-1,2))*this.stapGrootte;
    //   this.y += floor(random(-1,2))*this.stapGrootte;
  
    //   this.x = constrain(this.x,0,windowWidth - raster.celGrootte);
    //   this.y = constrain(this.y,0,windowHeight - raster.celGrootte);
    // }
  }