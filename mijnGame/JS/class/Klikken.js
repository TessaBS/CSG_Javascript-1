class Klikken {
    constructor (){
        this.lijst = new Array();
        this.N = 0;
        this.vakNr = 0;
        this.vakX = 0;
        this.vakY = 0;
        this.kleur1 = 255, 255, 0;
        this.kleur2 = 255, 150, 0;
        this.kleur3 = 255, 0, 0;
        this.kleur4 = 0, 255, 0;
        this.kleur5 = 0, 0, 255;
        this.kleur6 = 255, 255, 255;  
    }

    
    // vakken(){


    //     // if (mouseX = and mouseY = and mouseIsPressed) {

    //         for (var rij = 0;rij < 400;rij += 50) {
    //             for (var kolom = 0;kolom < 400;kolom += 50) {
    //                 fill('white');
    //               rect(kolom + 20,rij + 20,50,50);
    //             }
    //         }
    //     // }

    // }

    plaatsen(){
      if (this.vakNr < 64){
          this.lijst.push(this.vakNr);
          this.vakNr++ ;
        }

      if(this.vakY < 8){
        if(this.vakX < 8){
          push();
          fill(0, 0, 0);
          textSize(20);
          text(this.N, this.vakX*50 + 30, this.vakY*50 + 50);
          pop();
          this.vakX++;
          this.N++;
          this.kleurKiezen();
        }
        else{
          this.vakX = 0;
          this.vakY++ ;
        }
      }
      else{
        this.codeSchrijven();
      }


    }

    kleurKiezen(){
//     push();
//     fill(this.kleur1);
//     rect(windowWidth - (20+50),windowWidth - (20 + 50),50,50);
//     Pop();
    }

    codeSchrijven(){

    }
}