// /*  **********************************************************
//     **                BEGIN klasse Speler                   **
//     ********************************************************** */


//     class Speler {
//         constructor(x,v,stap) {

//           this.x = x;
//           this.y = null;
//           this.kleur = 'darkred';
//           this.snelheid = 0;
//           this.aanHetSpringen = false;
//           this.stap = stap;
//           this.g = 0.5;
//           this.springSnelheid = v;
//         }
        
//         verwerkInvoer() {
//           if (keyIsDown(LEFT_ARROW))
//           {
//             this.x -= this.stap;
//           }
//           if (keyIsDown(RIGHT_ARROW))
//           {
//             this.x += this.stap;
//           }    
//         }
      
//         beweeg() {
//           this.verwerkInvoer(); 
//           this.x = constrain(this.x,0,canvas.width);
//           this.y = constrain(this.y,0,canvas.height);
//         }
      
//         teken() {
//           push();
//           image(poppetje,0,0);
//           pop();
//         }
//       }
      
// /*  **********************************************************
//     **    EINDE klasse Speler      BEGIN klasse Platform    **
//     ********************************************************** */

function preload() {
    achtergrondmuziek = loadSound("sounds/bensound-dance.mp3");
    // poppetje = loadImage("mijnGame/images/player.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont("Monospace");
    textSize(40);
    textAlign(CENTER,CENTER);
    background(252, 204, 243);
    speler = new Speler();
    // spel = new Spel();
}

function draw() {
    maakBegin();
}

function maakBegin() {
    push();
    textAlign(CENTER,CENTER);
    background(252, 204, 243);
    text('Klik op Enter om het spel te starten. \n'+'Je moet proberen om naar de overkant te komen, door middel van het gebruik van de pijltjestoetsen. ' +
    'Hierbij kom je obstakels tegen, als je een obstakel raakt ben je af en moet je opnieuw beginnen. ' +
    'Je kunt ook een kleine of grote beloning krijgen door deze aan te raken. ' + 
    'Als je de overkant en voldoende muntjes hebt gehaald, ga je door naar het volgende level.',0,0,1000);
    textSize(20);
    pop();
}

function keyPressed() {
  if (keyCode == ENTER) {
    startSpel();
    }
  }

