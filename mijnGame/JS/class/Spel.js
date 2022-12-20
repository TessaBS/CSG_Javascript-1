/*  **********************************************************
    **             BEGIN klasse Spel met Levels             **
    ********************************************************** */

    class Levels {
      constructor(kleuren,beloningen,a,b,aB,l,sa,ag,sp) {
        this.r = 232;
        this.g = 104;
        this.b = 215;

        this.hoogte = windowHeight - 100;
        this.grootte = null;
        this.snelheid = null;
        this.breedte = null;

        this.level = null;
        this.maxLevel = 3;
        this.actief = null;
        this.levelGehaald = null;
        this.afgelopen = null;
        this.gewonnen = null;

        this.aantalBommen = null;
        this.staOpBom = false;
        this.bommenArray = null;
        this.check = null;

        this.aantalBeloningen = null;
        this.staOpBeloning = null;
        this.beloningenArray = null;

        this.punten = 0;
        this.speler = null;
        this.raster = null;

        this.kleurenArray = kleuren;
        this.plaatjesBeloningenArray = beloningen;
        this.bliksem = b;
        this.achtergrond = a;
        this.achtergrondX = null;
        this.achtergrondBegin = aB;
        this.lekker = l;

        this.spelAfgelopenGeluid = sa;
        this.achtergrondGeluid = ag;
        this.spelPuntGeluid = sp;
        this.bomGeluid = false;
        this.beloningGeluid = false;
      }

    nieuwSpel() {
      this.level = 0;
      this.bomGeluid = false;
      this.beloningGeluid = false;

      this.actief = false;
      this.gewonnen = false;
      this.afgelopen = false;

      this.snelheid = 7.5;
      this.grootte = 0.65;
      this.nieuwLevel();
      
      this.punten = 0;
    }
  
    nieuwLevel() {
      this.raster = new Raster(this.hoogte);
      this.raster.genereer();
      this.achtergrondX = 0;

      this.level++;
      this.bomGeluid = false;
      this.beloningGeluid = false;
      this.punten = 0;
      this.levelGehaald = false;
      this.snelheid += 3;
      this.grootte += 0.05;
      this.breedte = windowWidth * (this.level * 1.25) / this.raster.celGrootte;


      this.genereerBommen();
      this.genereerBeloningen();

      while(this.controleerBommen()) {
        this.genereerBommen();
      }

      this.speler = new Speler(this.raster.celGrootte,this.hoogte,this.grootte,this.kleurenArray);

      this.spelerStaOpBeloning();
      this.spelerStaOpBom();

  }
    
    genereerBommen(){
      this.bommenArray = [];
      this.check = [];
      this.aantalBommen = this.level * 6;
      this.staOpBom = false;
      this.staOpBeloning = false;

      var tweeOpeenPlek = false;

      for (var b = 0; b < this.aantalBommen; b++) {
        this.bommenArray.push(new Bom(this.breedte,this.raster.aantalRijen,this.raster.celGrootte,this.snelheid,this.hoogte,this.grootte,this.bliksem));
        tweeOpeenPlek =  this.checkPlekBom(b);
        while (tweeOpeenPlek) { // zolang het waar is dat er twee op één plek zitten, moet je kiesplek uitvoeren
          this.bommenArray[b].kiesPlek();
          tweeOpeenPlek =  this.checkPlekBom(b);
          // console.log('nieuwe plek gekozen');
        }
      }
      for(var cl = 0; cl < this.breedte; cl++){
        this.check[cl] = 0;
      }
    }

    checkPlekBom(b) {
      var antwoord = false;
      for(var bo = 0; bo < this.bommenArray.length - 1; bo++){
        if(this.bommenArray[b].x == this.bommenArray[bo].x && this.bommenArray[b].y == this.bommenArray[bo].y){
          antwoord = true;         
        }
      }
      return antwoord;    
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
      
    
    genereerBeloningen(){
      this.beloningenArray = [];
      this.aantalBeloningen = this.level * 5;
      this.staOpBeloning = false;

      var tweeOpeenPlekB = false;
      for (var bl = 0; bl < this.aantalBeloningen; bl++) {
        this.beloningenArray.push(new Beloning(this.breedte,this.raster.aantalRijen,this.raster.celGrootte,this.snelheid,this.hoogte,this.bommenArray,this.grootte,this.plaatjesBeloningenArray));
        tweeOpeenPlekB =  this.checkPlekBeloning(bl);
        while (tweeOpeenPlekB) { // zolang het waar is dat er twee op één plek zitten, moet je kiesplek uitvoeren
          this.beloningenArray[bl].kiesPlek();
          tweeOpeenPlekB =  this.checkPlekBeloning(bl);
        }
      }
    }

    checkPlekBeloning(bl) {
      var antwoordB = false;
      for(var blo = 0; blo < this.beloningenArray.length - 1; blo++){
        if(this.beloningenArray[bl].x == this.beloningenArray[blo].x && this.beloningenArray[bl].y == this.beloningenArray[blo].y){
          antwoordB = true;         
        }
      }
      return antwoordB;    
    }

    tekenScorebord() {
      push();
      noStroke();
      textSize(30);
      fill(137,148,217);
      rect(0,this.hoogte,windowWidth,100);
      fill(0);
      textSize(25);
      textStyle(BOLD);
      text('Dit is Level '+this.level+ '\nJe hebt ' + this.punten + ' punten gehaald.',0,this.hoogte + 15,windowWidth);   
      pop();

    }
    
    tekenAchtergrond(){
      push();
      image(this.achtergrond,this.achtergrondX,0,windowWidth,windowHeight);
      image(this.achtergrond,this.achtergrondX + windowWidth,0,windowWidth,windowHeight);
      this.achtergrondX -= this.snelheid;
      if (this.achtergrondX <= -windowWidth) {
        this.achtergrondX = 0;
      }
      pop();
    }

    spelerStaOpBom(){
      for(var d = 0; d < this.bommenArray.length; d++){
        if (this.bommenArray[d].x <= (this.speler.x + this.speler.grootte) && this.bommenArray[d].x > (this.speler.x - this.bommenArray[d].grootte) && this.bommenArray[d].y <= (this.speler.y + this.speler.grootte) && this.bommenArray[d].y >= this.speler.y - 1 ) {
          this.staOpBom = true;
          this.afgelopen = true;
        }
      }
    }

    spelerStaOpBeloning(){
      this.staOpBeloning = false;

      for(var dl = 0; dl < this.beloningenArray.length; dl++){
        if (this.beloningenArray[dl].x < this.speler.x + this.snelheid && this.beloningenArray[dl].x >= this.speler.x  && this.speler.y >= this.beloningenArray[dl].y - 1 && this.speler.y <= this.beloningenArray[dl].y + 1 ){
          this.punten++;

          this.beloningenArray[dl].r = 105;
          this.beloningenArray[dl].g = 245;
          this.beloningenArray[dl].b = 98;
          this.beloningenArray[dl].doorzichtig = 0.5;

          this.staOpBeloning = true;
        }
      }
    }

    update() {
      this.levelGehaald = true;
      for(var e = 0; e < this.beloningenArray.length; e++){
        if (this.beloningenArray[e].x > 0 - this.beloningenArray[e].grootte + this.beloningenArray[e].plek) {
          this.levelGehaald = false;
        }
      }

      if (this.level > this.maxLevel) {
        this.afgelopen = true;
        this.gewonnen = true;
        this.actief = false;
      } 
    }

    muziek(){
      if (this.bomGeluid == false && this.staOpBom && !this.levelGehaald && this.spelAfgelopenGeluid.isPlaying() == false) {
        this.spelAfgelopenGeluid.play(); 
        this.bomGeluid = true;
      }

      if(this.levelGehaald || this.afgelopen) {
        this.achtergrondGeluid.stop();
      }

      if(this.staOpBeloning && !this.afgelopen && !this.levelGehaald){
        this.spelPuntGeluid.play();
      }
    }

    beginScherm() {
      push();
        image(this.achtergrondBegin,0,0,windowWidth,windowHeight);
        image(this.lekker,(windowWidth - 410)/2,10,410,171);
        fill(this.r,this.g,this.b);
        text('Je kan punten verdienen door een snoepje volledig aan te raken. Je moet proberen om geen bliksem te raken, want dan ga je af. Door middel van het gebruik van de pijltjestoetsen kun je de speler naar boven en beneden bewegen. ' +
        'Als alle snoepjes voorbij zijn gegaan, heb je het level gehaald en ga je door naar het volgende level.' + '\nKlik op ENTER om het spel te starten.',(windowWidth-1000)/2,200,1000);
      pop();
    }
  
    levelScherm() {
      push();
      image(this.achtergrondBegin,0,0,windowWidth,windowHeight);
      fill(this.r,this.g,this.b);
      text('Gefeliciteerd!\n\nJe hebt level '+this.level+' gehaald! \nJe hebt ' +this.punten + ' punten gehaald. \n\nDruk ENTER om naar level '+(this.level+1)+' te gaan.',(windowWidth-1000)/2,100,1000);
      pop();
    }   
  
    geraaktScherm(){
      push();
      image(this.achtergrondBegin,0,0,windowWidth,windowHeight);
      fill(this.r,this.g,this.b);
      text('Helaas. \nJe bent af!\n\nKlik op ENTER om opnieuw te beginnen.',(windowWidth-1000)/2,100,1000);
      pop();
    }

    eindScherm() {
      push();
      image(this.achtergrondBegin,0,0,windowWidth,windowHeight);
      fill(this.r,this.g,this.b);
      text('Wat goed!!! Je hebt gewonnen!\n\nKlik op ENTER voor nieuw spel.',(windowWidth-1000)/2,100,1000);
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
              this.tekenAchtergrond();
              this.tekenScorebord();
              // this.raster.teken();
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