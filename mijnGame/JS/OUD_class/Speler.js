class Speler {
    constructor(sg,h,g,kleuren) {
        this.stapGrootte = sg;
        this.grootte = this.stapGrootte * g;
        this.plek = (this.stapGrootte - this.grootte) * 0.5;
        this.x = this.plek;
        this.y = this.plek;
        this.hoogte = h;
        this.kleurenArray = kleuren;
        this.kleurNr = null;
        this.spelerKiezen();
    }

    beweeg() {
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.stapGrootte;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.stapGrootte;
        }
    
        this.y = constrain(this.y,0 + this.plek,this.hoogte - this.stapGrootte + this.plek);
    }
    
    spelerKiezen(){
        this.kleurNr = floor(random(0,this.kleurenArray.length));
    }

    teken() {
        push();
        image(this.kleurenArray[this.kleurNr],this.x,this.y,this.grootte,this.grootte);
        pop();
    }
}