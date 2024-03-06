class Klikken {
    constructor (){
        this.lijst = new Array();
        this.N = 0;
        this.muisX;
        this.muisY;
    }

    
    plaatsen(){

            if (this.N < 64){

                this.lijst.push(this.N);
                this.N++ ;
              }
        // if (mouseX = and mouseY = and mouseIsPressed) {

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
        // }
    }
}