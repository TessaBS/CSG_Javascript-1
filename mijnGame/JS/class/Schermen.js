class Schermen {
    constructor(){
      this.windowWidth = 3000;
      this.canvas = null;
    }
      
    maakBegin(){
      push();
        background(252, 204, 243);
        text('Klik op Enter om het spel te starten. \n'+'Je moet proberen om naar de overkant te komen, door middel van het gebruik van de pijltjestoetsen. ' +
        'Hierbij kom je obstakels tegen, als je een obstakel raakt ben je af en moet je opnieuw beginnen. ' +
        'Je kunt ook een kleine of grote beloning krijgen door deze aan te raken. ' + 
        'Als je de overkant en voldoende muntjes hebt gehaald, ga je door naar het volgende level.',(windowWidth-1000)/2,100,1000);
      pop();
    }
    
    maakSpel(){
      raster.teken();
      image(bom,this.x,this.y,raster.celGrootte,raster.celGrootte);
    }
    
    maakEinde(){
      push();
      background(252, 204, 243);
      text('Hoera, je hebt gewonnen!',(windowWidth-1000)/2,100,1000);
    pop();
    }
}