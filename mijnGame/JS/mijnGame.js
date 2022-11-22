// class Raster {
//     constructor(r,k) {
//       this.aantalRijen = r;
//       this.aantalKolommen = k;
//       this.celGrootte = null;
//     }
    
//     berekenCelGrootte() {
//       this.celGrootte = canvas.width / this.aantalKolommen;
//     }
    
//     teken() {
//       push();
//       noFill();
//       stroke('grey');
//       for (var rij = 0;rij<this.aantalRijen;rij++) {
//         for (var kolom = 0;kolom<this.aantalKolommen;kolom++) {
//           rect(kolom*this.celGrootte,rij*this.celGrootte,this.celGrootte,this.celGrootte);
//         }
//       }
//       pop();
//     }
//   }

class Schermen {
    constructor(){
      this.windowWidth = 3000;
    }

    maakBegin() {
        push();
        background(252, 204, 243);
        text('Klik op Enter om het spel te starten. \n'+'Je moet proberen om naar de overkant te komen, door middel van het gebruik van de pijltjestoetsen. ' +
        'Hierbij kom je obstakels tegen, als je een obstakel raakt ben je af en moet je opnieuw beginnen. ' +
        'Je kunt ook een kleine of grote beloning krijgen door deze aan te raken. ' + 
        'Als je de overkant en voldoende muntjes hebt gehaald, ga je door naar het volgende level.',(windowWidth-1000)/2,100,1000);
        pop();
    }
}

// /*  **********************************************************
//     **                BEGIN klasse Speler                   **
//     ********************************************************** */


    // class Speler {
    //     constructor(x,celGrootte) {
    //       this.x = x;
    //       this.y = null;
    //       this.stap = celGrootte;
    //     }
        
    // beweeg() {
    //     if (keyIsDown(RIGHT_ARROW)) {
    //         this.x += this.stap;
    //     }

    //     if (keyIsDown(UP_ARROW)) {
    //         this.y -= this.stap;
    //     }

    //     if (keyIsDown(DOWN_ARROW)) {
    //         this.y += this.stap;
    //     }
    
    //     this.x = constrain(this.x,0,canvas.width);
    //     this.y = constrain(this.y,0,canvas.height-raster.celGrootte);
    
    //     if (this.y == 0) {
    //         this.gehaald = true;
    //     }
    // }

    // teken() {
    //     push();
    //     image(poppetje,0,0);
    //     pop();
    // }
    //   }
      
// /*  **********************************************************
//     **    EINDE klasse Speler      BEGIN klasse Platform    **
//     ********************************************************** */



function preload() {
    achtergrondmuziek = loadSound("sounds/bensound-dance.mp3");
    // poppetje = loadImage("mijnGame/images/player.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //canvas.parent('processing');
    //frameRate(10);
    textFont("Monospace");
    textSize(40);
    textAlign(CENTER,CENTER);
    background(252, 204, 243);
    //speler = new Speler(5,celGrootte);
    // spel = new Spel();

    // raster = new Raster(12,18);
    // raster.berekenCelGrootte();

}

function draw() {
    schermen.maakBegin();
//     image(strand,strandX,0);
//   image(strand,strandX + strand.width,0);
//   strandX--;
//   if (strandX == -strand.width) {
//     strandX = 0;
}

function keyPressed() {
    if (keyCode == ENTER) {
      if (!spel.actief) {
          spel.actief = true;
          spel.nieuwSpel();
      }
      if (spel.afgelopen) {
        spel.nieuwSpel();
      }
    }
  }



function keyPressed() {
  if (keyCode == ENTER) {
    startSpel();
    }
  }

