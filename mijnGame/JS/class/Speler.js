class Speler {
    constructor(stapGrootte) {
        this.stapGrootte = stapGrootte;
        this.x = 0;
        this.y = this.stapGrootte * 3;
        this.hoogte = null;
    }

    beweeg() {
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.stapGrootte;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.stapGrootte;
        }
    
        this.y = constrain(this.y,0,this.hoogte);
    
        if (this.y == 0) {
            spel.Levelgehaald = true;
        }
    }

    teken() {
        push();
        fill('pink');
        rect(this.x,this.y,this.stapGrootte);
        // ellipse(100,100,100);
        pop();
    }
}