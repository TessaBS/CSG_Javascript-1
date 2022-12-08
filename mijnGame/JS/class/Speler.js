class Speler {
    constructor(g,h) {
        this.stapGrootte = g;
        this.x = 0;
        this.y = this.stapGrootte;
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
        rect(this.x,this.y,this.stapGrootte);
        pop();
    }
}