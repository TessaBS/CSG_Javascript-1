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
    frameRate(50);
    spel = new Levels();
    spel.nieuwSpel();
    // bom = new Bom();
    // for (var b = 0; b < 10; b++) {
    // bom.push(new Bom());
    //   }
    speler = new Speler();
    raster = new Raster();
    level = new Levels();

    speler.stapGrootte = raster.celGrootte;
    speler.beginx = raster.celGrootte / 2;
    speler.beginy = raster.celGrootte * 3;

  }
  
  function draw() {
    spel.teken();
    // for(n=0;n < level.level * 10;n++) {
    //   bom[n].teken();
    // }

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
    if ((spel.afgelopen) && keyCode == 32) {
      // einde spel
      spel.nieuwSpel();
    }  
  }
  
  /*  **********************************************************
      **               EINDE hoofdprogramma                   **
      ********************************************************** */