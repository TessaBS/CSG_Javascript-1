// var spel;
// var LED;

  function preload() {
    //achtergrondGeluid = loadSound("sounds/achtergrondgeluid.mp3"); 
    //spelAfgelopenGeluid = loadSound("sounds/spelafgelopen.mp3");
    //spelPuntGeluid = loadSound("sounds/positive_beeps.mp3");

    // groen = loadImage("images/groen.png");
    // blauw = loadImage("images/blauw.png");
    // rood = loadImage("images/rood.png");
    // geel = loadImage("images/geel.png"); 
    // beloningGr = loadImage("images/beloningGroen.png");
    // beloningBl = loadImage("images/beloningBlauw.png");
    // beloningOr = loadImage("images/beloningOranje.png");
    // achtergrond = loadImage("images/achtergrond.png");
    // bliksem = loadImage("images/bliksem.png");
    // achtergrondBegin = loadImage("images/achtergrond2.png");
    // lekker = loadImage("images/lekker.png");
    // achtergrondEind = loadImage("images/winner.png");
  }


  function setup() {
    createCanvas(windowWidth,windowHeight);
    // canvas.parent('processing');
    colorMode(RGB,255,255,255,1);
    textFont('Georgia');
    textSize(35);
    frameRate(7);
    background(252, 153, 110);

    //kleuren = new Array(groen,blauw,rood,geel);
    //beloningen = new Array(beloningGr,beloningBl,beloningOr);

    //spel = new Levels(kleuren,beloningen,achtergrond,bliksem,achtergrondBegin,lekker,spelAfgelopenGeluid,achtergrondGeluid,spelPuntGeluid,achtergrondEind); 
    //spel.nieuwSpel();

    beginscherm = new Beginscherm();
    klikken = new Klikken();

    beginscherm.start();

  }
  


  function draw() {

    klikken.plaatsen();
    if(this.klikken.opnieuw == true){
      noLoop();
      beginscherm.start();
      klikken.plaatsen();
    }

    if(this.klikken.codeSchrijvenKlaar == true){
      document.getElementById('code').innerHTML = this.klikken.codeText;
    }


  }

  

  

  // function myFunction() {
  //   // Get the text field
  //   var copyText = document.getElementById('code');
  
  //   // Select the text field
  //   copyText.select();
  //   copyText.setSelectionRange(0, 99999); // For mobile devices
  
  //    // Copy the text inside the text field
  //   // navigator.clipboard.writeText(copyText.value);
  
  //   // Alert the copied text
  //   // alert("Copied the text: " + copyText.value);
  // } 