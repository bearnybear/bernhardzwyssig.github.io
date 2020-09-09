let fragenummer=0;
let FragenTexte = [];
FragenTexte[0] = "Dies ist Frage 0?";
FragenTexte[1] = "Dies ist Frage 1?";
FragenTexte[2] = "Dies ist Frage 2?";
let radio;


function setup() {
  console.log("setup");
  createCanvas(400, 400);
  radio = createRadio();
radio.option("Richtig");
radio.option("Falsch");
radio.style("with", "60px");
}

function draw() {
  background(100);
  drawFrage(fragenummer);
}

function drawFrage(i){
  text(FragenTexte[i], 20, 20);
  
}