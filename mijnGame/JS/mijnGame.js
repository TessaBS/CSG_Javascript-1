var spel;

  function preload() {
    achtergrondGeluid = loadSound("sounds/achtergrondgeluid.mp3"); 
    spelAfgelopenGeluid = loadSound("sounds/spelafgelopen.mp3");
    spelPuntGeluid = loadSound("sounds/positive_beeps.mp3");

    groen = loadImage("images/groen.png");
    blauw = loadImage("images/blauw.png");
    rood = loadImage("images/rood.png");
    geel = loadImage("images/geel.png"); 
    beloningGr = loadImage("images/beloningGroen.png");
    beloningBl = loadImage("images/beloningBlauw.png");
    beloningOr = loadImage("images/beloningOranje.png");
    achtergrond = loadImage("images/achtergrond.png");
    bliksem = loadImage("images/bliksem.png");
    achtergrondBegin = loadImage("images/achtergrond2.png");
    lekker = loadImage("images/lekker.png");
    achtergrondEind = loadImage("images/WooHoo.png");
  }


  function setup() {
    createCanvas(windowWidth,windowHeight);
    colorMode(RGB,255,255,255,1);
    textFont('Georgia');
    textSize(35);
    textAlign(CENTER);  
    frameRate(10);

    kleuren = new Array(groen,blauw,rood,geel);
    beloningen = new Array(beloningGr,beloningBl,beloningOr);

    spel = new Levels(kleuren,beloningen,achtergrond,bliksem,achtergrondBegin,lekker,spelAfgelopenGeluid,achtergrondGeluid,spelPuntGeluid,achtergrondEind); 
    spel.nieuwSpel();
  }
  
  function draw() {
    spel.update();
    spel.muziek();
    spel.spelerStaOpBom();
    spel.spelerStaOpBeloning();
    spel.teken();
  }
  
 
  function keyTyped() {
    if (!spel.actief && !spel.levelGehaald && keyCode == ENTER) {
      // begin spel
      spel.actief = true;
      achtergrondGeluid.loop();
    }
    if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
      // level gehaald --> naar nieuw level
      spel.nieuwLevel();
      achtergrondGeluid.play();
    }
    if (spel.afgelopen && keyCode == ENTER) {
      // spel gehaald --> nieuw spel maken
      spel.nieuwSpel();
    }
  }
  