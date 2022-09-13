function preload() {
  kever = loadImage("images/sprites/kever.png");
}
function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop(); 

}

function draw() {
  noStroke();
  for(var n = 0;n < 10;n++){
    image(kever,25,25,30,30);
    translate(40,0);
  }

}