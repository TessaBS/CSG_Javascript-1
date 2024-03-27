  function setup() {
    createCanvas(windowWidth,windowHeight);

    colorMode(RGB,255,255,255,1);
    textFont('Georgia');
    textSize(35);
    frameRate(5);
    background(252, 153, 110);

    // this.copyText = null;

    beginscherm = new Beginscherm();
    klikken = new Klikken();

    beginscherm.teken(0,0);
  }
  


  function draw() {

    klikken.plaatsen();
    if(klikken.opnieuw == true){
      setup();
      document.getElementById('code').innerHTML = null;
      // document.getElementById('codeKopie').innerHTML = null;
    }

    if(klikken.codeSchrijvenKlaar == true){
      document.getElementById('code').innerHTML = klikken.codeText;
      // document.getElementById('codeKopie').innerHTML = klikken.codeTextKopie;
      klikken.codeSchrijvenklaar = false;
    }
     
  }

  function mouseReleased() {


    if (klikken.eindScherm == false && mouseX <= 550 && mouseX >= 450 && mouseY <= 140 && mouseY >= 50){
      klikken.opnieuw = true;
    }
    if(klikken.eindScherm == true && mouseX <= 200 && mouseX >= 100 && mouseY <= 50 && mouseY >= 0){
      klikken.opnieuw = true;
    }
    if (klikken.eindScherm == false && mouseX <= 550 && mouseX >= 450 && mouseY <= 70 && mouseY >= 20){ 

      klikken.codeSchrijven();
      klikken.eindScherm = true;
  }

  for(this.vakNr = 0;this.vakNr < this.N; this.vakNr +=1 ){

    if(this.lijst[this.vakNr] == 1){
      this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(0, 255, 0))";
      // this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(0, 255, 0))";
    }

    if(this.lijst[this.vakNr] == 2){
      this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 255, 0))";
      // this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 255, 0))";
    }

    if(this.lijst[this.vakNr] == 3){
      this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 130, 0))";
      // this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 130, 0))";
    }

    if(this.lijst[this.vakNr] == 4){
      this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 0, 0))";
      // this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 0, 0))";
    }

    if(this.lijst[this.vakNr] == 5){
      this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(130, 0, 255))";
      // this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(130, 0, 255))";
    }

    if(this.lijst[this.vakNr] == 6){
      this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(0, 0, 255))";
      // this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(0, 0, 255))";
    }

    if(this.lijst[this.vakNr] == 7){
      this.codeText += "<br> strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 255, 255))";
      // this.codeTextKopie += "\n strip.setPixelColor(" + this.vakNr + ", neopixel.rgb(255, 255, 255))";
    }

    if(this.lijst[this.vakNr] == 8){
      this.codeText;
      // this.codeTextKopie;
    }
    if(klikken.vakNr >= klikken.N)
  }



  }
// function copyOnClick() {  
//   this.copyTextKopie = document.getElementById('codeKopie').innerHTML;
//   var tempInput = document.createElement("input");
//   tempInput.style = "position: absolute; left: -1000px; top: -1000px";
//   tempInput.value = this.copyTextKopie;
//   document.body.appendChild(tempInput);
//   tempInput.select();
//   document.execCommand("copy");
//   document.body.removeChild(tempInput);
//   alert("Link copied");
// }