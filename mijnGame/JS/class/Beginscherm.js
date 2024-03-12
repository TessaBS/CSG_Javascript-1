class Beginscherm {
    constructor (){
 

    }

    teken (){
      push();
        this.lampjes();
        this.tekst();
        this.kleurKeuzes();
        this.knoppen();
      pop();
    }

    lampjes(){
        push();
        for (var rij = 0;rij < 400;rij += 50) {
            for (var kolom = 0;kolom < 400;kolom += 50) {
              fill(255, 255, 255);
              rect(kolom + 20,rij + 20,50,50);
            }
        }
        pop();
    }

    tekst(){
        push();
        fill(252, 153, 110);
        noStroke();
        rect(50,500, windowWidth/3, windowHeight/2)
        textAlign(LEFT);
        textSize(20);
        fill(255, 255, 255);
        text('Op deze website kun je je eigen design voor je nieuwe powerbankhoesje maken!' + '\nRechts op het scherm ziet u vakjes staan, als u op een van de vakjes klikt zal er links op het scherm een keuze menu komen te staan. Hier kunt u een keuze voor een kleur maken.' + 
        '\n Als u op de knop KLAAR drukt zal de code tevoorschijn komen die u kunt kopiëren en plakken naar uw project op de website van microbit.',50,450, windowWidth/3);
        pop();
    }

    kleurKeuzes(){
      push();
      noStroke();
      fill(0, 255, 0);
      rect(600,70,100,50);

      fill(255, 255, 0);
      rect(750,70,100,50);

      fill(255, 130, 0);
      rect(600,140,100,50);

      fill(255, 0, 0);
      rect(750,140,100,50);

      fill(130, 0, 255);
      rect(600,210,100,50);

      fill(0, 0, 255);
      rect(750,210,100,50);

      fill(255, 255, 255);
      rect(600,280,100,50);

      fill(0, 0, 0);
      rect(750,280,100,50);
      
      pop();
    }

    knoppen(){
      push();
      noStroke();
      fill(198, 200, 237);
      rect(450, 20, 100, 50);
      rect(450, 90, 100, 50);
      fill(2, 1, 69);
      textSize(20);
      text('Klaar', 460, 50);
      text('Opnieuw',460,120);
      pop();
    }
}
 
// De lampjes zijn 50 bij 50
