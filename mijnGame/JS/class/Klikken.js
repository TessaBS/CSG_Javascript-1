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

      if(this.klaar == false){
        this.kleurKiezen();
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

    codeSchrijven(){
      text('test',50,50,50,50);



    //   input.onButtonPressed(Button.A, function () {
    //     strip.clear()
    //     strip.setPixelColor(0, neopixel.rgb(255, 255, 255))
    //     strip.setPixelColor(1, neopixel.rgb(255, 255, 255))
    //     strip.setPixelColor(2, neopixel.rgb(255, 255, 255))
    //     strip.show()
    // })
    // input.onButtonPressed(Button.B, function () {
    //     strip.clear()
    //     strip.show()
    // })
    // let strip: neopixel.Strip = null
    // strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
    // }

    // ALLES leeg maken
    // Knop dat je de code kunct kopiëren? ipv hele code laten zien.
  }