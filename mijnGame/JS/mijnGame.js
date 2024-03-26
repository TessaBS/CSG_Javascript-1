  function setup() {
    createCanvas(windowWidth,windowHeight);

    colorMode(RGB,255,255,255,1);
    textFont('Georgia');
    textSize(35);
    frameRate(5);
    background(252, 153, 110);

    // this.copyText = null;

    beginscherm = new Beginscherm();
    klikken = new Klikken();

    beginscherm.teken(0,0);
  }
  


  function draw() {

    klikken.plaatsen();
    if(klikken.opnieuw == true){
      setup();
      document.getElementById('code').innerHTML = null;
      // document.getElementById('codeKopie').innerHTML = null;
    }

    if(klikken.codeSchrijvenKlaar == true){
      document.getElementById('code').innerHTML = klikken.codeText;
      // document.getElementById('codeKopie').innerHTML = klikken.codeTextKopie;
      klikken.codeSchrijvenklaar = false;
    }
     
  }

// function copyOnClick() {  
//   this.copyTextKopie = document.getElementById('codeKopie').innerHTML;
//   var tempInput = document.createElement("input");
//   tempInput.style = "position: absolute; left: -1000px; top: -1000px";
//   tempInput.value = this.copyTextKopie;
//   document.body.appendChild(tempInput);
//   tempInput.select();
//   document.execCommand("copy");
//   document.body.removeChild(tempInput);
//   alert("Link copied");
// }