class Beginscherm {
    constructor (){
        
    }

    lampjes(){
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
    }
}

