class Klikken {
    constructor (){
        this.lijst = new Array();
        this.code = new Array();
        this.N = 0;
        this.vakNr = 0;
        this.codeY = 25;
        this.vakX = 0;
        this.vakY = 0;
        this.geel = 1;
        this.oranje = 2;
        this.rood = 3;
        this.groen = 4;
        this.blauw = 5;
        this.wit = 6;  
        this.klaar = true;
        this.opnieuw = false;
        this.codeText = "";
        this.codeSchrijvenKlaar = false;
        this.aantalLampjes;
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
        // else{
        //   if (mouseX <= 700 && mouseX >= 600 && mouseY <= 120 && mouseY >= 70 && mouseIsPressed == true){
        //     this.codeSchrijven();
        //   }
        // }
      }

      if(this.klaar == false){
        this.kleurKiezen();
      }

      if (mouseX <= 550 && mouseX >= 450 && mouseY <= 70 && mouseY >= 20 && mouseIsPressed == true){
          this.codeSchrijven();
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
          fill(255, 130, 0);
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
      // push();
      noLoop();
      fill(255, 255, 255);
      noStroke();
      rect(0,0,windowWidth,windowHeight);
      fill(0, 0, 0);
      textSize(5);
      // text('input.onButtonPressed(Button.A, function () { \n strip.clear()',10,10,windowWidth - 20);
      this.codeText += "input.onButtonPressed(Button.A, function () { <br> strip.clear()";
      this.codeSchrijvenKlaar = true;


      for(this.vakNr = 0;this.vakNr < this.N; this.vakNr +=1 ){

        if(this.lijst[this.vakNr] == 1){
          // text('strip.setPixelColor(' + this.vakNr + ', neopixel.rgb(255, 255, 0))',10,this.codeY,windowWidth - 20);
          this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 255, 0))";
        }

        if(this.lijst[this.vakNr] == 2){
          // text('strip.setPixelColor(' + this.vakNr + ', neopixel.rgb(255, 130, 0))',10,this.codeY,windowWidth - 20);
          this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 130, 0))";
        }

        if(this.lijst[this.vakNr] == 3){
          // text('strip.setPixelColor(' + this.vakNr + ', neopixel.rgb(255, 0, 0))',10,this.codeY,windowWidth - 20);
          this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 0, 0))";
        }

        if(this.lijst[this.vakNr] == 4){
          // text('strip.setPixelColor(' + this.vakNr + ', neopixel.rgb(0, 255, 0))',10,this.codeY,windowWidth - 20);
          this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(0, 255, 0))";
        }

        if(this.lijst[this.vakNr] == 5){
          // text('strip.setPixelColor(' + this.vakNr + ', neopixel.rgb(0, 0, 255))',10,this.codeY,windowWidth - 20);
          this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(0, 0, 255))";
        }

        if(this.lijst[this.vakNr] == 6){
          // text('strip.setPixelColor(' + this.vakNr + ', neopixel.rgb(255, 255, 255))',10,this.codeY,windowWidth - 20);
          this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 255, 255))";
        }


        this.codeY +=5; 
      
      }

      this.aantalLampjes = this.N - 1;

      // text('strip.show() \n }) \n \n input.onButtonPressed(Button.B, function () { \n strip.clear() \n strip.show() \n }) \n let strip: neopixel.Strip = null \n strip = neopixel.create(DigitalPin.P0,' + this.aantalLampjes + ', NeoPixelMode.RGB)',10,this.codeY + 5,windowWidth - 20);
      this.codeText +="<br> strip.show() <br> }) <br><br> input.onButtonPressed(Button.B, function () { <br> strip.clear() <br> strip.show() <br> }) <br> let strip: neopixel.Strip = null <br> strip = neopixel.create(DigitalPin.P0, " + this.aantalLampjes + ", NeoPixelMode.RGB)";

      push();
      noStroke();
      fill(198, 200, 237);
      rect(windowWidth - 200, 20, 100, 50);
      fill(2, 1, 69);
      textSize(20);
      text('Opnieuw',windowWidth - 190,52);
      pop();
      if (mouseX <= (windowWidth - 100) && mouseX >= (windowWidth - 200) && mouseY <= 70 && mouseY >= 20 && mouseIsPressed == true){
        this.opnieuw = true;
      }

    }

    // pop();


          // ALLES leeg maken
          // Knop dat je de code kunct kopiëren? ipv hele code laten zien.



    }

