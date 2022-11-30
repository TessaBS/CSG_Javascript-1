/*  **********************************************************
    **             BEGIN klasse Spel met Levels             **
    ********************************************************** */


    class Levels {
      constructor() {
      this.raster = new Raster();
      this.level = null;
      this.maxLevel = 3;
      this.actief = null;
      this.levelGehaald = null;
      this.afgelopen = null;
      this.gewonnen = null;

    }
    
    nieuwSpel() {
      this.level = 0;
      this.actief = false;
      this.gewonnen = false;
      this.afgelopen = false;
      this.raster.genereer();
      this.nieuwLevel();
    }
  
    nieuwLevel() {
      this.level++;
      this.levelGehaald = false;
    }
  
    tekenScorebord() {
      push();
      background(252, 204, 243);
      fill(0,0,0,.8);
      noStroke();
      textSize(30);
      var marge = 100;
      rect(marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);
      fill(255);
      text(" Dit is Level "+this.level+"\nHet spel is actief.\n\nKlik om het level te \"halen\".",marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);   
      pop();
    }
    
    beginScherm() {
      push();
        background(252, 204, 243);
        text('Klik op Enter om het spel te starten. \n'+'Je moet proberen om naar de overkant te komen, door middel van het gebruik van de pijltjestoetsen. ' +
        'Hierbij kom je obstakels tegen, als je een obstakel raakt ben je af en moet je opnieuw beginnen. ' +
        'Je kunt ook een kleine of grote beloning krijgen door deze aan te raken. ' + 
        'Als je de overkant en voldoende muntjes hebt gehaald, ga je door naar het volgende level.',(windowWidth-1000)/2,100,1000);
      pop();
    }
  
    levelScherm() {
      push();
      fill('black');
      text('Gefeliciteerd!\nJe hebt level '+this.level+' gehaald!\n\nDruk ENTER om naar level '+(this.level+1)+' te gaan.',0,0,canvas.width,canvas.height / 2);
      pop();
    }   
  
    eindScherm() {
      var tekst = 'Je hebt het gehaald.';
      if (this.gewonnen) {
        tekst = 'Gefeliciteerd!';
      }
      push();
      fill(0);
      text(tekst + '\n\nDruk SPATIE voor nieuw spel.',0,0,canvas.width,canvas.height);
      pop();
    }    
    
    teken() {
      //background(achtergrond);
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

          }
      }
    }
  }
  
  /*  **********************************************************
      **  EINDE klasse Spel met Levels  BEGIN hoofdprogramma  **
      ********************************************************** */