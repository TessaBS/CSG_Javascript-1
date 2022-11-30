class Speler {
    constructor() {
        this.raster = new Raster();
        this.y = null;
        this.stapGrootte = raster.celGrootte;
        this.beginx = raster.celGrootte / 2;
        this.beginy = raster.celGrootte * 3;
    }

    beweeg() {
        // if (keyIsDown(UP_ARROW)) {
        //     this.y -= this.stapGrootte;
        // }

        // if (keyIsDown(DOWN_ARROW)) {
        //     this.y += this.stapGrootte;
        // }
    
        // this.y = constrain(this.y,0,canvas.height-stapGrootte);
    
        // if (this.y == 0) {
        //     spel.Levelgehaald = true;
        // }
    }

    teken() {
        push();
        fill('pink');
        ellipse(this.beginx,this.beginy,this.stapGrootte);
        // ellipse(100,100,100);
        pop();
    }
}