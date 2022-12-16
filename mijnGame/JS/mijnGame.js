var groen,blauw,rood,geel;
var beloningGr,beloningBl,beloningOr;
var achtergrond;
var bliksem;

  function preload() {
    achtergrondmuziek = loadSound("sounds/bensound-dance.mp3");
    spelafgelopen = loadSound("sounds/afgelopen.mp3");
    groen = loadImage("images/groen.png");
    blauw = loadImage("images/blauw.png");
    rood = loadImage("images/rood.png");
    geel = loadImage("images/geel.png"); 
    beloningGr = loadImage("images/beloningGroen.png");
    beloningBl = loadImage("images/beloningBlauw.png");
    beloningOr = loadImage("images/beloningOranje.png");
    achtergrond = loadImage("images/achtergrond.png");
    bliksem = loadImage("images/bliksem.png");
  }


  function setup() {
    createCanvas(windowWidth,windowHeight);
    colorMode(RGB,255,255,255,1);
    textFont("Monospace");
    textSize(30);
    textAlign(CENTER);  
    frameRate(10);

    spel = new Levels(groen,blauw,rood,geel,beloningGr,beloningBl,beloningOr,achtergrond,bliksem); 
    spel.nieuwSpel();
  }
  
  function draw() {
    spel.update();
    spel.spelerStaOpBom();
    spel.spelerStaOpBeloning();
    spel.teken();

  }
  
 
  function keyTyped() {
    if (!spel.actief && !spel.levelGehaald && keyCode == ENTER) {
      // begin spel
      spel.actief = true;
      achtergrondmuziek.play();
    }
    if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
      // level gehaald tijdens het spel
      achtergrondmuziek.pause();
      spel.nieuwLevel();
      // achtergrondmuziek.play();
    }
    if (spel.afgelopen ) {
      // einde spel, alle levels gehaald
      // achtergrondmuziek.pause();
      spel.nieuwSpel();
      // spelafgelopen.loop();

    }  
  
  }
  
  /*  **********************************************************
      **               EINDE hoofdprogramma                   **
      ********************************************************** */




      // herinnering Nori: p5js.org <-- kijken naar "stop" https://p5js.org/reference/#/libraries/p5.sound
      // regels 130,131
      // het geluid voor als je af bent mag maar 1 keer worden afgespeeld
      // begin geluid moet weer terug
      // geluiden: https://pixabay.com/sound-effects/search/game/
    