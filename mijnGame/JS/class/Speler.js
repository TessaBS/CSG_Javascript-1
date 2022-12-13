class Speler {
    constructor(g,h) {
        this.stapGrootte = g;
        this.grootte = this.stapGrootte * (3/4);
        this.x = (this.stapGrootte - this.grootte) * (1/2);
        this.y = (this.stapGrootte - this.grootte) * (1/2);
        // this.grootte = this.stapGrootte;
        // this.x = 0;
        // this.y = 0;
        this.hoogte = h;

    }

    beweeg() {
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.stapGrootte;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.stapGrootte;
        }
    
        this.y = constrain(this.y,0,this.hoogte - this.stapGrootte);
    
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