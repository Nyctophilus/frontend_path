const theCanvas = document.getElementById("canvo"),
  theContext = theCanvas.getContext("2d");

const gradient = theContext.createLinearGradient(
  0,
  0,
  500,
  150
);

// Add color stops
gradient.addColorStop(0, "#00C9A7");
gradient.addColorStop(1, "#845EC2");

// control line width
// theContext.lineWidth = 10;

theContext.strokeStyle = gradient;

theContext.strokeRect(20, 20, 300, 150);

// -HL 		writting text
// set font
theContext.font = "35px cursive";

// create filled text
// theContext.fillStyle = gradient;
// theContext.fillText("Hello, Fayy", 40, 60);

theContext.strokeStyle = gradient;
theContext.strokeText("Hello, Fayy", 40, 60);
