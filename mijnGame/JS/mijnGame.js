  function setup() {
    createCanvas(windowWidth,windowHeight);

    colorMode(RGB,255,255,255,1);
    textFont('Georgia');
    textSize(35);
    frameRate(5);
    background(252, 153, 110);

    beginscherm = new Beginscherm();
    klikken = new Klikken();

    beginscherm.teken(0,0);
  }
  


  function draw() {

    klikken.plaatsen();
    if(klikken.opnieuw == true){
      setup();
      document.getElementById('code').innerHTML = null;
    }

    if(klikken.codeSchrijvenKlaar == true){
      document.getElementById('code').innerHTML = klikken.codeText;
    }
    

  }
