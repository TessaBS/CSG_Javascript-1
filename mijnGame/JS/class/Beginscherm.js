class Beginscherm {
    constructor (r,k){
      this.rij = r;
      this.kolom = k;
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
        for (this.rij = 0;this.rij < 400;this.rij += 50) {
            for (this.kolom = 0;this.kolom < 400;this.kolom += 50) {
              push();
              stroke(0,0,0);
              fill(255, 255, 255);
              rect(this.kolom + 20,this.rij + 20,50,50);
              pop();
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
        text('Op deze website kunt u uw eigen design voor uw nieuwe powerbankhoesje maken!' + '\nRechts op het scherm ziet u vakjes met verschillende kleuren staan. Als u op een van de vakjes klikt, zal links op het scherm het eerste vakje deze kleur krijgen. (Zwart betekent dat het lampje uit zal blijven.) Als u vervolgens op nog een vakje klikt, zal het volgende vakje deze kleur krijgen. Dit gaat zo door totdat u klaar bent. Dan kunt op op het vakje KLAAR drukken. ' + 
        '\nEr zal nadat u op KLAAR heeft geklikt, een code verschijnen die u kunt kopiëren (alles selecteren [Ctrl + A] en dan kopiëren [Ctrl + C]) en plakken naar uw project op de website van micro:bit.' + 
        '\n \nTip: Het is handig als u eerst een patroon op papier uitwerkt, zodat u daarna makkelijk de kleuren op volgorde aan kunt klikken. Het patroon kan uit 8x8 vakjes bestaan.',50,450, windowWidth - 100);
              
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
