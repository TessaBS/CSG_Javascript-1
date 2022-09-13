var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;

var spriteJos;
var xJos;
var yJos;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  spriteJos = loadImage("images/sprites/Jos100px/Jos_0.png");
}

function setup() {
  canvas = createCanvas(901,601);
  canvas.parent('processing');
  celGrootte = width / aantalKolommenRaster;
}

function draw() {
  for(var n=0; n<aantalRijenRaster, n++){

    for(var m=0; m<aantalKolommenRaster, m++){
      tekenRaster(n,m)
 
    }
  }


}

function tekenRaster(a,b) {

  push();
  noFill();
  stroke('grey');
  rect(a*celGrootte,b*celGrootte,celGrootte,celGrootte);
  pop();

}

for (var rij = 0;rij < 450;rij += 50) {
  for (var kolom = 0;kolom < 450;kolom += 50) {
    // R = random(0,255);
    
    fill(R,G,B);
    rect(kolom,rij,50,50);
  }
}