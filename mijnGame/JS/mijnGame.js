  function setup() {
    createCanvas(windowWidth,windowHeight);

    colorMode(RGB,255,255,255,1);
    textFont('Georgia');
    textSize(35);
    frameRate(5);
    background(252, 153, 110);

    // klikken.copyText = null;

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

  if(klikken.klaar == false){
    if (mouseX <= 700 && mouseX >= 600 && mouseY <= 120 && mouseY >= 70){
      klikken.lijst.push(klikken.groen);

      push();
      stroke(0,0,0);
      fill(0, 255, 0);
      rect((klikken.vakX - 1)*50 + 20, klikken.vakY*50 + 20, 50, 50);
      pop();

      klikken.klaar = true;
    }

    if(mouseX <= 850 && mouseX >=750 && mouseY <= 120 && mouseY >= 70){
      klikken.lijst.push(klikken.geel);

      push();
      stroke(0,0,0);
      fill(255, 255, 0);
      rect((klikken.vakX - 1)*50 + 20, klikken.vakY*50 + 20,50,50);
      pop();

      klikken.klaar = true;
    }

    if(mouseX <= 700 && mouseX >=600 && mouseY <= 190 && mouseY >= 140){
      klikken.lijst.push(klikken.oranje);

      push();
      stroke(0,0,0);
      fill(255, 130, 0);
      rect((klikken.vakX - 1)*50 + 20, klikken.vakY*50 + 20,50,50);
      pop();

      klikken.klaar = true;
    }

    if(mouseX <= 850 && mouseX >=750 && mouseY <= 190 && mouseY >= 140){
      klikken.lijst.push(klikken.rood);

      push();
      stroke(0,0,0);
      fill(255, 0, 0);
      rect((klikken.vakX - 1)*50 + 20, klikken.vakY*50 + 20,50,50);
      pop();

      klikken.klaar = true;
    }

    if(mouseX <= 700 && mouseX >=600 && mouseY <= 260 && mouseY >= 210){
      klikken.lijst.push(klikken.paars);

      push();
      stroke(0,0,0);
      fill(130, 0, 255);
      rect((klikken.vakX - 1)*50 + 20, klikken.vakY*50 + 20,50,50);
      pop();

      klikken.klaar = true;
    }

    if(mouseX <= 850 && mouseX >=750 && mouseY <= 260 && mouseY >= 210){
      klikken.lijst.push(klikken.blauw);

      push();
      stroke(0,0,0);
      fill(0, 0, 255);
      rect((klikken.vakX - 1)*50 + 20, klikken.vakY*50 + 20,50,50);
      pop();
    
      klikken.klaar = true;
    }

    if(mouseX <= 700 && mouseX >=600 && mouseY <= 330 && mouseY >= 280){
      klikken.lijst.push(klikken.wit);

      push();
      stroke(0,0,0);
      fill(255, 255, 255);
      rect((klikken.vakX - 1)*50 + 20, klikken.vakY*50 + 20,50,50);
      pop();

      klikken.klaar = true;
    }

    if(mouseX <= 850 && mouseX >=750 && mouseY <= 330 && mouseY >= 280){
      klikken.lijst.push(klikken.zwart);

      push();
      stroke(0,0,0);
      fill(0, 0, 0);
      rect((klikken.vakX - 1)*50 + 20, klikken.vakY*50 + 20,50,50);
      pop();
    
      klikken.klaar = true;
    }
  }

  }

// function copyOnClick() {  
//   klikken.copyTextKopie = document.getElementById('codeKopie').innerHTML;
//   var tempInput = document.createElement("input");
//   tempInput.style = "position: absolute; left: -1000px; top: -1000px";
//   tempInput.value = klikken.copyTextKopie;
//   document.body.appendChild(tempInput);
//   tempInput.select();
//   document.execCommand("copy");
//   document.body.removeChild(tempInput);
//   alert("Link copied");
// }