  function preload() {
    //achtergrond = loadImage("images/backgrounds/boom_mist.jpg");
    //speler = loadImage("mijnGame/images/imposter.png");
    //bom = loadImage("mijnGame/images/bom.png");
  }
  


  function setup() {
    //canvas = createCanvas(900,600);

    createCanvas(windowWidth,windowHeight);
    //canvas.parent('processing');
    colorMode(RGB,255,255,255,1);
    textFont("Monospace");
    textSize(30);
    textAlign(CENTER,CENTER);  
    frameRate(10);
    spel = new Levels(windowHeight); 
    spel.nieuwSpel();


  }
  
  function draw() {
    spel.update();
    spel.teken();
  }
  
  function mousePressed() {
    if (spel.actief) {
      spel.levelGehaald = true;
    }
    if (spel.level>=spel.maxLevel) {
      spel.afgelopen = true;
      spel.gewonnen = true;
      spel.actief = false;
    }  
  }
  
  function keyTyped() {
    if (!spel.actief && !spel.levelGehaald) {
      // begin spel
      spel.actief = true;
    }
    if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
      // level gehaald tijdens het spel
      spel.nieuwLevel();
    }
    if ((spel.afgelopen || spel.geraakt) && keyCode == 32) {
      // einde spel
      spel.nieuwSpel();
    }  
  }
  
  /*  **********************************************************
      **               EINDE hoofdprogramma                   **
      ********************************************************** */