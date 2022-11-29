class Speler {
    constructor() {
        this.x = 2*raster.celGrootte;
        this.y = 5*raster.celGrootte;
        this.stap = raster.celGrootte;
    }
        
    beweeg() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.stap;
        }

        if (keyIsDown(UP_ARROW)) {
            this.y -= this.stap;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.stap;
        }
    
        this.x = constrain(this.x,0,canvas.width);
        this.y = constrain(this.y,0,canvas.height-raster.celGrootte);
    
        if (this.y == 0) {
            this.gehaald = true;
        }
    }

    teken() {
        push();
        image(speler,this.x,this.y,raster.celGrootte,raster.celGrootte);
        pop();
    }
}