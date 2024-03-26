class Klikken {
    constructor (){
        this.lijst = new Array();
        this.N = 0;
        this.vakNr;
        this.vakX = 0;
        this.vakY = 0;
        this.groen = 1;
        this.geel = 2;
        this.oranje = 3;
        this.rood = 4;
        this.paars = 5;
        this.blauw = 6;
        this.wit = 7;  
        this.zwart = 8;
        this.klaar = true;
        this.opnieuw = false;
        this.eindScherm = false;
        this.codeText = "";
        this.codeTextKopie = "";
        this.codeSchrijvenKlaar = false;
        this.waar = 0;
    }

    plaatsen(){
      if(this.klaar == true){
        if(this.vakY < 8){
          if(this.vakX < 8){
            push();
            fill(0, 0, 0);
            textSize(20);
            text(this.N + 1, this.vakX*50 + 30, this.vakY*50 + 50);
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
      }

      if(this.klaar == false){
        this.kleurKiezen();
      }

      if (mouseX <= 550 && mouseX >= 450 && mouseY <= 70 && mouseY >= 20 && mouseIsPressed == true){ 
          this.codeSchrijven();
          this.eindScherm = true;

      }
      if (klikken.eindScherm == true){
        klikken.lampjesOpnieuw();

      }
       if (mouseX <= 550 && mouseX >= 450 && mouseY <= 140 && mouseY >= 50 && mouseIsPressed == true){
        this.opnieuw = true;
      }
      
    }

    kleurKiezen(){

        if (mouseX <= 700 && mouseX >= 600 && mouseY <= 120 && mouseY >= 70 && mouseIsPressed == true){
          this.lijst.push(this.groen);

          push();
          stroke(0,0,0);
          fill(0, 255, 0);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20, 50, 50);
          pop();

          this.klaar = true;
        }

        if(mouseX <= 850 && mouseX >=750 && mouseY <= 120 && mouseY >= 70 && mouseIsPressed == true){
          this.lijst.push(this.geel);

          push();
          stroke(0,0,0);
          fill(255, 255, 0);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20,50,50);
          pop();

          this.klaar = true;
        }

        if(mouseX <= 700 && mouseX >=600 && mouseY <= 190 && mouseY >= 140 && mouseIsPressed == true){
          this.lijst.push(this.oranje);

          push();
          stroke(0,0,0);
          fill(255, 130, 0);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20,50,50);
          pop();

          this.klaar = true;
        }

        if(mouseX <= 850 && mouseX >=750 && mouseY <= 190 && mouseY >= 140 && mouseIsPressed == true){
          this.lijst.push(this.rood);

          push();
          stroke(0,0,0);
          fill(255, 0, 0);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20,50,50);
          pop();

          this.klaar = true;
        }

        if(mouseX <= 700 && mouseX >=600 && mouseY <= 260 && mouseY >= 210 && mouseIsPressed == true){
          this.lijst.push(this.paars);

          push();
          stroke(0,0,0);
          fill(130, 0, 255);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20,50,50);
          pop();

          this.klaar = true;
        }

        if(mouseX <= 850 && mouseX >=750 && mouseY <= 260 && mouseY >= 210 && mouseIsPressed == true){
          this.lijst.push(this.blauw);

          push();
          stroke(0,0,0);
          fill(0, 0, 255);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20,50,50);
          pop();
        
          this.klaar = true;
        }

        if(mouseX <= 700 && mouseX >=600 && mouseY <= 330 && mouseY >= 280 && mouseIsPressed == true){
          this.lijst.push(this.wit);

          push();
          stroke(0,0,0);
          fill(255, 255, 255);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20,50,50);
          pop();

          this.klaar = true;
        }

        if(mouseX <= 850 && mouseX >=750 && mouseY <= 330 && mouseY >= 280 && mouseIsPressed == true){
          this.lijst.push(this.zwart);

          push();
          stroke(0,0,0);
          fill(0, 0, 0);
          rect((this.vakX - 1)*50 + 20, this.vakY*50 + 20,50,50);
          pop();
        
          this.klaar = true;
        }

    }

    codeSchrijven(){

      fill(255, 255, 255);
      noStroke();
      rect(0,0,windowWidth,windowHeight);
      fill(0, 0, 0);
      textSize(5);
      this.codeSchrijvenKlaar = true;
      this.codeText += "input.onButtonPressed(Button.A, function () { <br> strip.clear()";
      this.codeTextKopie += "input.onButtonPressed(Button.A, function () { \n strip.clear()";


      for(this.vakNr = 0;this.vakNr < this.N; this.vakNr +=1 ){

        if(this.lijst[this.vakNr] == 1){
          this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(0, 255, 0))";
          this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(0, 255, 0))";
        }

        if(this.lijst[this.vakNr] == 2){
          this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 255, 0))";
          this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 255, 0))";
        }

        if(this.lijst[this.vakNr] == 3){
          this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 130, 0))";
          this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 130, 0))";
        }

        if(this.lijst[this.vakNr] == 4){
          this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 0, 0))";
          this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 0, 0))";
        }

        if(this.lijst[this.vakNr] == 5){
          this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(130, 0, 255))";
          this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(130, 0, 255))";
        }

        if(this.lijst[this.vakNr] == 6){
          this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(0, 0, 255))";
          this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(0, 0, 255))";
        }

        if(this.lijst[this.vakNr] == 7){
          this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 255, 255))";
          this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 255, 255))";
        }

        if(this.lijst[this.vakNr] == 8){
          this.codeText;
          this.codeTextKopie;
        }

      }


      this.codeText +="<br> strip.show() <br> }) <br><br> input.onButtonPressed(Button.B, function () { <br> strip.clear() <br> strip.show() <br> }) <br> let strip: neopixel.Strip = null <br> strip = neopixel.create(DigitalPin.P0, " + (this.N - 1) + ", NeoPixelMode.RGB)";
      this.codeTextKopie += "\n strip.show() \n }) \n \n input.onButtonPressed(Button.B, function () { \n strip.clear() \n strip.show() \n }) \n let strip: neopixel.Strip = null \n strip = neopixel.create(DigitalPin.P0, " + (this.N - 1) + ", NeoPixelMode.RGB)";

    }

    lampjesOpnieuw(){
      push();

      noStroke();
      fill(198, 200, 237);
      rect(100, 0, 100, 50);
      fill(2, 1, 69);
      textSize(20);
      text('Opnieuw',110,30);
      pop();

      if (mouseX <= 200 && mouseX >= 100 && mouseY <= 50 && mouseY >= 0 && mouseIsPressed == true){
        this.opnieuw = true;
      }

    }


    }

