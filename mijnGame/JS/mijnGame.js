  function preload() {
    //achtergrond = loadImage("images/backgrounds/boom_mist.jpg");
    //speler = loadImage("mijnGame/images/imposter.png");
    //bom = loadImage("mijnGame/images/bom.png");
  }
  
  var bommenArray = [];

  function setup() {
    //canvas = createCanvas(900,600);

    createCanvas(windowWidth,windowHeight);
    //canvas.parent('processing');
    colorMode(RGB,255,255,255,1);
    textFont("Monospace");
    textSize(30);
    textAlign(CENTER,CENTER);  
    frameRate(15);
    spel = new Levels(windowHeight); 
    spel.nieuwSpel();
    bom = new Bom();
    for (var b = 0; b < this.spel.level * 5; b++) {
      bommenArray.push(new Bom());
    }

  }
  
  function draw() {
    spel.teken();
    for(var c = 0; c < bommenArray.length; c ++){
      bommenArray[c].toon();
    }
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