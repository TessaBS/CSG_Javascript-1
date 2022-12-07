/*  **********************************************************
    **             BEGIN klasse Spel met Levels             **
    ********************************************************** */


    class Levels {
      constructor(hoogte) {
        this.r = 252;
        this.g = 202;
        this.b = 243;

        this.raster = new Raster();
        this.level = null;
        this.maxLevel = 3;
        this.actief = null;
        this.levelGehaald = null;
        this.geraakt = null;
        this.afgelopen = null;
        this.gewonnen = null;
        this.snelheid = 0.01;
        this.height = hoogte;
        this.raster.genereer();
        this.speler = new Speler(this.raster.celGrootte,this.height);
        this.maxLevel = 3;
        this.aantalBommen = null;
        this.staOpBom = false;
        this.bommenArray = [];

  
    }

    nieuwSpel() {
      this.level = 0;
      this.actief = false;
      this.gewonnen = false;
      this.afgelopen = false;
      this.geraakt = false;
      this.nieuwLevel();

    }
  
    nieuwLevel() {
      this.level++;
      this.levelGehaald = false;
      this.snelheid += 0.025;
      this.hoogte = canvas.windowHeigth;
      this.aantalBommen = this.level * 5;
      for (var b = 0; b < this.aantalBommen; b++) {
        this.bommenArray.push(new Bom(this.raster.aantalKolommen,this.raster.aantalRijen,this.raster.celGrootte,this.snelheid,this.level));
      }
      

      
      // for (var b = 0;b < bommenLijst.length;b++) {
      //   if (bommenLijst[b].x == this.x && bommenLijst[b].y == this.y) {
      //     this.staOpBom = true;
      //   }
      // }
  }
      
    
  
    tekenScorebord() {
      push();
      background(this.r,this.g,this.b);
      textSize(30);
      fill(0);
      text(" Dit is Level "+this.level+"\nHet spel is actief.\n\nKlik om het level te \"halen\".",(windowWidth-1000)/2,100,1000);   
      
      pop();

    }
    
    update() {
      for(var d = 0; d < this.bommenArray.length; d++){
        if (this.bommenArray[d].x <= this.speler.x + this.speler.stapGrootte && this.bommenArray[d].x >= 0 && this.bommenArray[d].y <= this.speler.y + this.speler.stapGrootte && this.bommenArray[d].y >= this.speler.y ) {
          this.geraakt = true;
        }
      }
      // for(var e = 0; e < this.bommenArray.length; e++){
      //   if (this.bommenArray[e].x == 0) {
      //     this.levelGehaald = true;
      //   }
      // }
    }

    beginScherm() {
      push();
        background(this.r,this.g,this.b);
        text('Klik op Enter om het spel te starten. \n'+'Je moet proberen om naar de overkant te komen, door middel van het gebruik van de pijltjestoetsen. ' +
        'Hierbij kom je bommen tegen, als je een bom raakt ben je af en moet je helemaal opnieuw beginnen. ' +
        'Je kunt ook een kleine of grote beloning krijgen door deze aan te raken. ' + 
        'Als je de overkant haalt, ga je door naar het volgende level.',(windowWidth-1000)/2,100,1000);
      pop();

    }
  
    levelScherm() {
      push();
      background(this.r,this.g,this.b);
      fill('black');
      text('Gefeliciteerd!\nJe hebt level '+this.level+' gehaald!\n\nDruk ENTER om naar level '+(this.level+1)+' te gaan.',(windowWidth-1000)/2,100,1000);
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

              for(var c = 0; c < this.bommenArray.length; c ++){
                this.bommenArray[c].toon();
                this.bommenArray[c].beweeg();
              }
          }
                    
          if(this.geraakt) {
            this.geraaktScherm();
          }
      }
    }
  }
  
  /*  **********************************************************
      **  EINDE klasse Spel met Levels  BEGIN hoofdprogramma  **
      ********************************************************** */