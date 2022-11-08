
function preload() {
    achtergrondmuziek = loadSound("sounds/bensound-dance.mp3");
    
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont("Monospace");
    textSize(40);
    textAlign(CENTER,CENTER);
    background(252, 204, 243);
}

function draw() {
    maakAchtergrond();

}

function maakAchtergrond() {
    push();
    background(252, 204, 243);
    text('Klik op Enter om het spel te starten.'+'Je moet proberen om naar de overkant te komen, door middel van het gebruik van de pijltjestoetsen.' +
    'Hierbij kom je obstakels tegen, als je een obstakel raakt ben je af en moet je opnieuw beginnen.' +
    'Je kunt ook een kleine of grote beloning krijgen door deze aan te raken.' + 
    'Als je de overkant en voldoende muntjes hebt gehaald, ga je door naar het volgende level.',0,0,canvas.width,canvas.height / 2);
    textAlign(CENTER,CENTER);
    textSize(20);
    pop();
}

function keyPressed() {
  if (keyCode == ENTER) {

    }
  }
