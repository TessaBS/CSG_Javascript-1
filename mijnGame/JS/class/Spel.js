/*  **********************************************************
    **             BEGIN klasse Spel met Levels             **
    ********************************************************** */


    class Levels {
      constructor(hoogte) {
        this.r = 252;
        this.g = 204;
        this.b = 243;

        this.raster = new Raster();
        this.level = null;
        this.maxLevel = 3;
        this.actief = null;
        this.levelGehaald = null;
        this.afgelopen = null;
        this.gewonnen = null;
        this.snelheid = 10;
        this.height = hoogte;
        this.raster.genereer();
        this.speler = new Speler(this.raster.celGrootte,this.height);

        // this.bom = new Bom(this.raster.aantalKolommen,this.raster.aantalRijen,this.raster.celGrootte,this.snelheid,this.level);
        this.aantalBommen = this.level * 5;
        this.staOpBom = false;
        this.bommenArray = [];
        this.b;
        this.c;

    }

    nieuwSpel() {
      this.level = 0;
      this.actief = false;
      this.gewonnen = false;
      this.afgelopen = false;
      this.nieuwLevel();

      for (var b = 0; b < this.aantalBommen; b++) {
        bommenArray.push(new Bom(this.raster.aantalKolommen,this.raster.aantalRijen,this.raster.celGrootte,this.snelheid,this.level));
      }
    }
  
    nieuwLevel() {
      this.level++;
      this.levelGehaald = false;
      this.snelheid += 10;
      this.hoogte = canvas.windowHeigth;
    }
  
    tekenScorebord() {
      push();
      background(this.r,this.g,this.b);
      textSize(30);
      fill(0);
      text(" Dit is Level "+this.level+"\nHet spel is actief.\n\nKlik om het level te \"halen\".",(windowWidth-1000)/2,100,1000);   
      
      pop();

    }
    
    beginScherm() {
      push();
        background(this.r,this.g,this.b);
        text('Klik op Enter om het spel te starten. \n'+'Je moet proberen om naar de overkant te komen, door middel van het gebruik van de pijltjestoetsen. ' +
        'Hierbij kom je bommen tegen, als je een bom raakt ben je af en moet je opnieuw beginnen. ' +
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
              this.bom.toon();
              for(var c = 0; c < this.bommenArray.length; c ++){
                bommenArray[c].toon();
              }
          }
      }
    }
  }
  
  /*  **********************************************************
      **  EINDE klasse Spel met Levels  BEGIN hoofdprogramma  **
      ********************************************************** */