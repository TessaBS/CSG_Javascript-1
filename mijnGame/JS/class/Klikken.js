class Klikken {
    constructor (){
        this.lijst = new Array();
        this.N = 0;
        this.vakNr = 0;
        this.vakX = 0;
        this.vakY = 0;
        this.geel = 1;
        this.oranje = 2;
        this.rood = 3;
        this.groen = 4;
        this.blauw = 5;
        this.wit = 6;  
        this.klaar = true;
    }

    
    // vakken(){


    //     // if (mouseX = && mouseY = && mouseIsPressed) {

    //         for (var rij = 0;rij < 400;rij += 50) {
    //             for (var kolom = 0;kolom < 400;kolom += 50) {
    //                 fill('white');
    //               rect(kolom + 20,rij + 20,50,50);
    //             }
    //         }
    //     // }

    // }

    plaatsen(){
      this.kleurKiezen();
      if(this.klaar == true){
        if(this.vakY < 8){
          if(this.vakX < 8){
            push();
            fill(0, 0, 0);
            textSize(20);
            text(this.N, this.vakX*50 + 30, this.vakY*50 + 50);
            pop();
            this.vakX++;
            this.N++;

            this.klaar = false;


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



    }

    kleurKiezen(){
        if (mouseX <= 700 && mouseX >= 600 && mouseY <= 120 && mouseY >= 70 && mouseIsPressed == true){
          this.lijst.push(this.geel);

          push();
          fill(255, 255, 0);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20, 50, 50);
          pop();

          this.klaar = true;
        }

        if(mouseX <= 850 && mouseX >=750 && mouseY <= 120 && mouseY >= 70 && mouseIsPressed == true){
          this.lijst.push(this.oranje);

          push();
          fill(255, 150, 0);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20,50,50);
          pop();

          this.klaar = true;
        }

        if(mouseX <= 1000 && mouseX >=900 && mouseY <= 120 && mouseY >= 70 && mouseIsPressed == true){
          this.lijst.push(this.rood);

          push();
          fill(255, 0, 0);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20,50,50);
          pop();

          this.klaar = true;
        }

        if(mouseX <= 700 && mouseX >=600 && mouseY <= 190 && mouseY >= 140 && mouseIsPressed == true){
          this.lijst.push(this.groen);

          push();
          fill(0, 255, 0);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20,50,50);
          pop();

          this.klaar = true;
        }

        if(mouseX <= 850 && mouseX >=750 && mouseY <= 190 && mouseY >= 140 && mouseIsPressed == true){
          this.lijst.push(this.blauw);

          push();
          fill(0, 0, 255);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20,50,50);
          pop();

          this.klaar = true;
        }

        if(mouseX <= 1000 && mouseX >=900 && mouseY <= 190 && mouseY >= 140 && mouseIsPressed == true){
          this.lijst.push(this.wit);

          push();
          fill(255, 255, 255);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20,50,50);
          pop();
        
          this.klaar = true;
        }
    }

      // fill(kleur1);
      // rect(600,70,100,50);
      // fill(kleur2);
      // rect(750,70,100,50);
      // fill(kleur3);
      // rect(900,70,100,50);
      // fillkleur4);
      // rect(600,140,100,50);
      // fill(kleur5);
      // rect(750,140,100,50);
      // fill(kleur6);
      // rect(900,140,100,50);
      // this.kleur1 = 255, 255, 0;
      // this.kleur2 = 255, 150, 0;
      // this.kleur3 = 255, 0, 0;
      // this.kleur4 = 0, 255, 0;
      // this.kleur5 = 0, 0, 255;
      // this.kleur6 = 255, 255, 255; 
    

    codeSchrijven(){

    }

  }