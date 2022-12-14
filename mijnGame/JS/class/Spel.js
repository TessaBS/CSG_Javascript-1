/*  **********************************************************
    **             BEGIN klasse Spel met Levels             **
    ********************************************************** */


    class Levels {
      constructor() {
        this.r = 252;
        this.g = 202;
        this.b = 243;

        this.hoogte = windowHeight - 100;
        this.grootte = null;

        this.level = null;
        this.maxLevel = 3;
        this.actief = null;
        this.levelGehaald = null;

        this.afgelopen = null;
        this.gewonnen = null;

        this.snelheid = null;

        this.raster = new Raster(this.hoogte);
        this.raster.genereer();
        this.breedte = null;

        this.aantalBommen = null;
        this.staOpBom = false;
        this.bommenArray = null;
        this.check = null;
        this.staBomX = null;
        this.staBomY = null;

        this.aantalBeloningen = null;
        this.staOpBeloning = null;
        this.beloningenArray = null;
        this.punten = null;
        this.puntenArray = null;

        this.speler = null;

        // this.groen = gr;
        // this.blauw = bl;
        // this.rood = ro;
        // this.geel = ge;
  
    }

    nieuwSpel() {
      this.level = 0;

      this.actief = false;
      this.gewonnen = false;
      this.afgelopen = false;

      this.snelheid = 7.5;
      this.grootte = 0.65;
      this.nieuwLevel();
      
      this.punten = 0;
    }
  
    nieuwLevel() {
      this.level++;
      this.punten = 0;
      this.levelGehaald = false;
      this.snelheid += 2.5;
      this.grootte += 0.05;
      this.breedte = windowWidth * (this.level * 1.5) / this.raster.celGrootte;


      this.aantalBommen = this.level * 6;
      this.staOpBom = false;

      this.genereerBommen();
      
      if (this.controleerBommen() || this.bomStaOpBom() || this.beloningStaOpBeloning()) {
        this.genereerBommen();
      }

      this.aantalBeloningen = this.level * 5;
      this.staOpBeloning = false;
      this.beloningenArray = [];
      for (var bl = 0; bl < this.aantalBeloningen; bl++) {
        this.beloningenArray.push(new Beloning(this.breedte,this.raster.aantalRijen,this.raster.celGrootte,this.snelheid,this.hoogte,this.bommenArray,this.grootte,this.level));
      }

      this.speler = new Speler(this.raster.celGrootte,this.hoogte,this.grootte);

      this.beloning = null;
      this.spelerStaOpBeloning();
      this.spelerStaOpBom();
  }
    
    genereerBommen(){
      this.bommenArray = [];
      this.check = [];
      this.staBomX = [];
      this.staBomY = [];

      for (var b = 0; b < this.aantalBommen; b++) {
        this.bommenArray.push(new Bom(this.breedte,this.raster.aantalRijen,this.raster.celGrootte,this.snelheid,this.hoogte,this.grootte,this.level));
      }
      for(var cl = 0; cl < this.breedte; cl++){
        this.check[cl] = 0;
      }
      for(var r = 0; r < this.aantalBommen; r++){
        this.staBomX[r] = this.bommenArray[r].x;
        this.staBomY[r] = this.bommenArray[r].y;
      }

    }

    controleerBommen(){
      var antwoord = false;
      for(var k = 0; k < this.aantalBommen; k++){
        this.check[this.bommenArray[k].xnr] ++; 
      }
      for (var q = 0;q < this.check.length; q++) {
        if (this.check[q] >=4) {
          antwoord = true;
        }
      }
      return antwoord;
    }
    

    bomStaOpBom(){
      // var stab = false;
      // for(var s = 0; s < this.aantalBommen; s++){
      //   this.staBomX[this.bommenArray[s].xnr] ++; 
      // }
      // for(var n = 0; n < this.staBomX.length; n++){
      //   this.staBomY[this.bommenArray[n].ynr] ++;
      // }
      // for (var v = 0;v < this.check.length; v++) {
      //   if (this.staBomY[v] >= 2) {
      //     stab = true;
      //   }
      // }
      // return stab;


      // for(var m=0; m <= this.check.length; m++){
      //   this.bomY.push(new this.bomY(m) = [])
      //   for(var w = o; w <= this.check[m]; w++){
      //     this.bomY(m) = 0;
      //   }
      //   for(p = 0; p <= this.check[m]; p++){
      //     this.bomY(m)[this.bommenArray (--> this.bommenArray.x = m).y] ++;
      //   }
      // }
      // --> Hier maak ik een lijst bomY, met lijsten bomY(m) => lijst die bij een bepaalde x-waarde van bommen hoort.
      // En dan per lijst wordt 1 toegevoegd als de x van bom gelijk is aan nummer van de lijst.
      // Dan kun je een if maken met als het getal groter is dan 1 --> nieuw bommen wordt gemaakt. 
    }

    beloningStaOpBeloning(){
      // var stabl = false;

    }

    tekenScorebord() {
      push();
      background(this.r,this.g,this.b);
      textSize(30);
      fill(137, 148, 217);
      rect(0,this.hoogte,windowWidth,100);
      fill(0);
      textSize(25);
      textStyle(BOLD);
      text('Dit is Level '+this.level+ '\nJe hebt ' + this.punten + ' punten gehaald.',0,this.hoogte + 10,windowWidth);   
      
      pop();

    }
    
    spelerStaOpBom(){
      for(var d = 0; d < this.bommenArray.length; d++){
        if (this.bommenArray[d].x <= (this.speler.x + this.speler.grootte) && this.bommenArray[d].x > (this.speler.x - this.bommenArray[d].grootte) && this.bommenArray[d].y < (this.speler.y + this.speler.grootte) && this.bommenArray[d].y >= this.speler.y ) {
          this.staOpBom = true;
          this.afgelopen = true;
        }
      }
    }

    spelerStaOpBeloning(){
      for(var dl = 0; dl < this.beloningenArray.length; dl++){
        if (this.beloningenArray[dl].x < this.speler.x + this.snelheid && this.beloningenArray[dl].x >= this.speler.x  && this.speler.y == this.beloningenArray[dl].y){
          this.punten++;

          this.beloningenArray[dl].r = 105;
          this.beloningenArray[dl].g = 245;
          this.beloningenArray[dl].b = 98;
          this.beloningenArray[dl].doorzichtig = 0.5;
        }

      }
    }

    update() {
      this.levelGehaald = true;
      for(var e = 0; e < this.beloningenArray.length; e++){
        if (this.beloningenArray[e].x > 0 - this.beloningenArray[e].grootte + this.beloningenArray[e].plek) {
          this.levelGehaald = false;
          // spelafgelopen.loop();
        }
      }

      if (spel.level>spel.maxLevel) {
        spel.afgelopen = true;
        spel.gewonnen = true;
        spel.actief = false;
      } 

      if (this.afgelopen && spelafgelopen.isPlaying() == false) {
        spelafgelopen.play();
        
      }

    }

    beginScherm() {
      push();
        background(this.r,this.g,this.b);
        text('Klik op ENTER om het spel te starten. \n'+'Je moet proberen om naar de overkant te komen. Door middel van het gebruik van de pijltjestoetsen kun je de speler naar boven en beneden bewegen. ' +
        'Tijdens het spel kom je bommen tegen, als je een bom raakt ben je af en moet je helemaal opnieuw beginnen. ' +
        'Je kunt ook een beloning krijgen door deze te raken. ' + 
        'Als je de overkant haalt, ga je door naar het volgende level.',(windowWidth-1000)/2,100,1000);
        

      
      pop();
    }
  
    levelScherm() {
      push();
      background(this.r,this.g,this.b);
      fill('black');
      text('Gefeliciteerd!\n\nJe hebt level '+this.level+' gehaald! \nJe hebt ' +this.punten + ' punten gehaald. \n\nDruk ENTER om naar level '+(this.level+1)+' te gaan.',(windowWidth-1000)/2,100,1000);
      pop();
    }   
  
    geraaktScherm(){
      push();
      background(this.r,this.g,this.b);
      fill('black');
      text('Helaas. \nJe bent af!\n\nDruk spatie om opnieuw te beginnen.',(windowWidth-1000)/2,100,1000);
      pop();
    }

    eindScherm() {
      var tekst = 'Je hebt het gehaald.';
      if (this.gewonnen) {
        tekst = 'Gefeliciteerd!';
      }
      push();
      background(this.r,this.g,this.b);
      fill(0);
      text(tekst + '\n\nDruk SPATIE voor nieuw spel.',(windowWidth-1000)/2,100,1000);
      pop();
    }    


    teken() {
      if (!this.actief) {
          if (this.afgelopen) {
              this.eindScherm();
          }
          else {
              this.beginScherm();
          }
      }
      else {
          if (this.levelGehaald) {
              this.levelScherm();
          }
          else {
              this.tekenScorebord();
              this.raster.teken();
              this.speler.teken();
              this.speler.beweeg();

              for(var cl = 0; cl < this.beloningenArray.length; cl ++){
                this.beloningenArray[cl].toon();
                this.beloningenArray[cl].beweeg();
              }

              for(var c = 0; c < this.bommenArray.length; c ++){
                this.bommenArray[c].toon();
                this.bommenArray[c].beweeg();
              }

          }
                    
          if(this.staOpBom) {
            this.geraaktScherm();
          }
      }
    }
  }
  
  /*  **********************************************************
      **  EINDE klasse Spel met Levels  BEGIN hoofdprogramma  **
      ********************************************************** */