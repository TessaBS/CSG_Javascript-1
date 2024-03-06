class Beginscherm {
    constructor (){


    }

    start (){
      push();
        this.lampjes();
        this.tekst();
      pop();
    }

    lampjes(){
        push();
        for (var rij = 0;rij < 400;rij += 50) {
            for (var kolom = 0;kolom < 400;kolom += 50) {
              if (rij == 150 && kolom == 300) {
                fill('orange');
              }
              else {
                fill('white');
              }
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
        '\n Als u op de knop KLAAR drukt zal de code tevoorschijn komen die u kunt kopiëren en plakken naar uw project op de website van microbit.',50,500, windowWidth/3);
        pop();
    }

}

// De lampjes zijn 50 bij 50
