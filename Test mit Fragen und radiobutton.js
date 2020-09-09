let fragenummer=1;
let FragenTexte = [];
FragenTexte[0] = "Dies ist Frage 0?";
FragenTexte[1] = "Dies ist Frage 1?";
FragenTexte[2] = "Dies ist Frage 2?";
let radio;


function setup() {
  console.log("setup"); //zeigt den Text in der Konsole
  createCanvas(400, 400);
  radio = createRadio();
radio.option("  Richtig   ");
radio.option("  Falsch  ");
radio.style("with", "60px");
}

function draw() {
  background(100);
  drawFrage(fragenummer);
}

function drawFrage(t){
  text(FragenTexte[t], 20, 20);
  
}