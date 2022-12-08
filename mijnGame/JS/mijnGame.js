  function preload() {
    //achtergrond = loadImage("images/backgrounds/boom_mist.jpg");
    //speler = loadImage("mijnGame/images/imposter.png");
    //bom = loadImage("mijnGame/images/bom.png");
  }
  


  function setup() {
    createCanvas(windowWidth,windowHeight);
    colorMode(RGB,255,255,255,1);
    textFont("Monospace");
    textSize(30);
    textAlign(CENTER);  
    frameRate(10);
    spel = new Levels(); 
    spel.nieuwSpel();


  }
  
  function draw() {
    spel.update();
    spel.teken();
  }
  
  // function mousePressed() {
  //   if (spel.actief) {
  //     spel.levelGehaald = true;
  //   }
  //   if (spel.level>=spel.maxLevel) {
  //     spel.afgelopen = true;
  //     spel.gewonnen = true;
  //     spel.actief = false;
  //   }  
  // }
  
  function keyTyped() {
    if (!spel.actief && !spel.levelGehaald) {
      // begin spel
      spel.actief = true;
    }
    if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
      // level gehaald tijdens het spel
      spel.nieuwLevel();
    }
    if ((spel.afgelopen || spel.staOpBom) && keyCode == 32) {
      // einde spel, alle levels gehaald
      spel.nieuwSpel();

    }  
  }
  
  /*  **********************************************************
      **               EINDE hoofdprogramma                   **
      ********************************************************** */