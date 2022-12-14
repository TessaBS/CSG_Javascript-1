class Bom {
    constructor(x,y,sg,snelheid,hoogte,g) {
      this.stapGrootte = sg;
      this.snelheid = snelheid;
      this.hoogte = hoogte;
      this.grootte = this.stapGrootte * (g);
      this.plek = (this.stapGrootte - this.grootte) * 0.5;
      this.xnr = floor(random(2,x));
      this.x = this.xnr * this.stapGrootte + this.plek;
      this.ynr = floor(random(1,y));
      this.y = this.ynr * this.stapGrootte + this.plek;
      this.breedte = x;
    }

    vierInKolom(){
      // for(var d = 0; d < this.bommenLijst.length; d++){
      //   // if(this.x == this.bommenLijst[d].x && this.y == this.bommenLijst[d].y){
      //   //   if(this.x == this.bommenLijst[d].x && this.y == this.bommenLijst[d].y + this.stapGrootte){
      //   //     if(this.x == this.bommenLijst[d].x && this.y == this.bommenLijst[d].y + (this.stapGrootte * 2)){
      //         if(this.x == this.bommenLijst[d].x && this.y == this.bommenLijst[d].y + (this.stapGrootte * 3)){
      //           this.x = floor(random(1,x)) * this.stapGrootte + this.plek;
      //           this.y = floor(random(1,y)) * this.stapGrootte - (this.grootte + 2 * this.plek) + this.plek;    
      //   //       }
      //   //     }
      //   //  }
      //   // }
      //   if(this.x == this.bommenLijst[d].x --> vier keer){
      //     this.x = floor(random(1,x)) * this.stapGrootte + this.plek;
      //     this.y = floor(random(1,y)) * this.stapGrootte - (this.grootte + 2 * this.plek) + this.plek;  
      //   }
      // }
  }
    
    toon() {
      push();
      fill('black');
      rect(this.x,this.y,this.grootte);
      pop();
    }

    beweeg(){
      this.x -= this.snelheid;

      this.x = constrain(this.x,0 - (2 * this.stapGrootte),this.breedte * this.stapGrootte);
      this.y = constrain(this.y,0,this.hoogte - this.stapGrootte + this.plek);
    }
}
