class Speler {
    constructor() {
        this.raster = new Raster();
        this.y = null;
        this.stap = null;
    }
    
    stappen() {
        // this.y = raster.celGrootte;
        // this.stap = raster.celGrootte;
    }

    beweeg() {
        // if (keyIsDown(UP_ARROW)) {
        //     this.y -= this.stap;
        // }

        // if (keyIsDown(DOWN_ARROW)) {
        //     this.y += this.stap;
        // }
    
        // this.y = constrain(this.y,0,canvas.height-raster.celGrootte);
    
        // if (this.y == 0) {
        //     spel.Levelgehaald = true;
        // }
    }

    teken() {
        push();
        fill('pink');
        ellipse(0,(raster.aantalRijen / 2) *celGrootte,celGrootte);
        pop();
    }
}