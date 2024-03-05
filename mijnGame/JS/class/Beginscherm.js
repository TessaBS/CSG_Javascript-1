class Beginscherm {
    constructor (){
        
    }

    start (){
        this.lampjes();
        this.tekst();
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
              rect(kolom,rij,50,50);
            }
        }
        pop();
    }

    tekst(){
        push();
        fill(0, 0, 0);
        text('Op deze website kun je je eigen design voor je nieuwe powerbankhoesje maken!' + '\nRechts op het scherm ziet u vakjes staan, als u op een van de vakjes klikt zal er links op het scherm een keuze menu komen te staan. Hier kunt u een keuze voor een kleur maken.' + 
        '\n Als u op de knop KLAAR drukt zal de code tevoorschijn komen die u kunt kopiëren en plakken naar uw project op de website van microbit',(windowWidth/2),2000,5,10);
        pop();
    }

}

// De lampjes zijn 50 bij 50
