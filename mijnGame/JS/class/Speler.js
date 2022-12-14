class Speler {
    constructor(sg,h,g) {
        this.stapGrootte = sg;
        this.grootte = this.stapGrootte * g;
        this.plek = (this.stapGrootte - this.grootte) * 0.5;
        this.x = this.plek;
        this.y = this.plek;
        this.hoogte = h;

    }

    beweeg() {
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.stapGrootte;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.stapGrootte;
        }
    
        this.y = constrain(this.y,0 + this.plek,this.hoogte - this.stapGrootte + this.plek);
    
        if (this.y == 0) {
            spel.Levelgehaald = true;
        }
    }

    teken() {
        push();
        fill('pink');
        rect(this.x,this.y,this.grootte);
        pop();
    }
}