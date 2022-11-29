class Spel{
    constructor(){
        this.windowWidth = 3000;
        this.canvas = null;
        this.level = null;
        this.maxLevel = 3;
        this.actief = null;
        this.levelGehaald = null;
        this.afgelopen = null;
        this.gewonnen = null;
      }

    actief(){

    }

    nieuwSpel() {
      this.level = 0;
      this.actief = false;
      this.gewonnen = false;
      this.afgelopen = false;
      this.nieuwLevel();
    }
  
    nieuwLevel() {
      this.level++;
      this.levelGehaald = false;
    }
    
    levelGehaald(){

    }

    afgelopen(){

    }
}