/*  **********************************************************
    **                BEGIN klasse Speler                   **
    ********************************************************** */
class Speler {
    constructor(x,y,celGrootte) {
        this.x = x;
        this.y = y;
        this.stap = celGrootte;
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
        ellipse(this.x,this.y,50);
        // image(poppetje,0,0);
        pop();
    }
}
      
/*  **********************************************************
    **    EINDE klasse Speler      BEGIN klasse Platform    **
    ********************************************************** */
