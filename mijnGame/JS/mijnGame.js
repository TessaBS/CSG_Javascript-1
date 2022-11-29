function preload() {
  achtergrondmuziek = loadSound(sounds/bensound-dance.mp3);
  speler = loadImage(mijnGame/images/imposter.png);
  bom = loadImage(mijnGame/images/bom.png);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //canvas.parent('processing');
  //frameRate(10);
  textFont("Monospace");
  textSize(40);
  textAlign(CENTER,CENTER);
  background(252,204,243);
  // speler = new Speler(5,celGrootte);
  // spel = new Spel();
  
  raster = new Raster(12,18);
  raster.berekenCelGrootte();
  scherm = new Schermen();
  raster = new Raster();
  bom = new Bommen();
}

function draw() {
  scherm.maakBegin();
  
  // image(strand,strandX,0);
  // image(strand,strandX + strand.width,0);
  // strandX--;
  // if (strandX == -strand.width) {
  //   strandX = 0;
  // }
}

function keyPressed() {
  if (keyCode == ENTER) {
    function keyTyped() {
        if (!spel.actief && !spel.levelGehaald) {
          scherm.maakBegin();
          spel.actief = true;
        }
        if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {

        }
        if ((spel.afgelopen)) {
          scherm.maakBegin();
        }  
      }
    scherm.maakSpel();
    }
}