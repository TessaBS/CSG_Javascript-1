/*  **********************************************************
    **             BEGIN klasse Spel met Levels             **
    ********************************************************** */


    class Levels {
      constructor() {
        this.r = 252;
        this.g = 202;
        this.b = 243;

        this.hoogte = windowHeight - 100;

        this.level = null;
        this.maxLevel = 3;
        this.actief = null;
        this.levelGehaald = null;

        this.afgelopen = null;
        this.gewonnen = null;

        this.snelheid = null;

        this.raster = new Raster(this.hoogte);

        this.raster.genereer();

        this.aantalBommen = null;
        this.staOpBom = false;
        this.bommenArray = null;

        this.aantalBeloningen = null;
        this.staOpBeloning = null;
        this.beloningenArray = null;
        this.punten = null;

        this.speler = null;
  
    }

    nieuwSpel() {
      this.level = 0;

      this.actief = false;
      this.gewonnen = false;
      this.afgelopen = false;


      this.snelheid = 7.5;

      this.staOpBom = false;
      this.bommenArray = [];

      this.staOpBeloning = false;
      this.beloningenArray = [];

      this.beloning = null;
      this.punten = 0;
      this.nieuwLevel();

    }
  
    nieuwLevel() {
      this.level++;
      this.levelGehaald = false;
      this.snelheid += 2.5;

      this.aantalBommen = this.level * 6;

      this.aantalBeloningen = this.level * 5;

      this.speler = new Speler(this.raster.celGrootte,this.hoogte);

      for (var b = 0; b < this.aantalBommen; b++) {
        this.bommenArray.push(new Bom(this.raster.aantalKolommen + (this.level * 2),this.raster.aantalRijen,this.raster.celGrootte,this.snelheid,this.hoogte));
      }

      for (var bl = 0; bl < this.aantalBeloningen; bl++) {
        this.beloningenArray.push(new Beloning(this.raster.aantalKolommen + (this.level * 2),this.raster.aantalRijen,this.raster.celGrootte,this.snelheid,this.hoogte,this.bommenArray.x,this.bommenArray.y));
      }
 
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
      text('Dit is Level '+this.level+ '\nJe hebt ' + this.punten + ' punten.',0,this.hoogte + 10,windowWidth);   
      
      pop();

    }
    
    update() {
      for(var d = 0; d < this.bommenArray.length; d++){
        if (this.bommenArray[d].x <= (this.speler.x + this.speler.stapGrootte) && this.bommenArray[d].x > (this.speler.x - this.bommenArray[d].grootte) && this.bommenArray[d].y < (this.speler.y + this.speler.stapGrootte) && this.bommenArray[d].y >= this.speler.y ) {
          this.staOpBom = true;
        }
      }

      for(var dl = 0; dl < this.beloningenArray.length; dl++){
        if (this.beloningenArray[dl].x <= (this.speler.x + this.speler.stapGrootte) && this.beloningenArray[dl].x > (this.speler.x - this.beloningenArray[dl].grootte) && this.beloningenArray[dl].y < (this.speler.y + this.speler.stapGrootte) && this.beloningenArray[dl].y >= this.speler.y ) {
          this.punten++;
        }
      }

      for(var e = 0; e < this.bommenArray.length; e++){
        if (this.bommenArray[e].x == 0) {
          this.levelGehaald = true;
        }
      }

      if (spel.level>=spel.maxLevel) {
        spel.afgelopen = true;
        spel.gewonnen = true;
        spel.actief = false;
      } 


    }

    beginScherm() {
      push();
        background(this.r,this.g,this.b);
        text('Klik op Enter om het spel te starten. \n'+'Je moet proberen om naar de overkant te komen. Door middel van het gebruik van de pijltjestoetsen kun je de speler naar boven en beneden bewegen. ' +
        'Tijdens het spel kom je bommen tegen, als je een bom raakt ben je af en moet je helemaal opnieuw beginnen. ' +
        'Je kunt ook een kleine of grote beloning krijgen door deze aan te raken. ' + 
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