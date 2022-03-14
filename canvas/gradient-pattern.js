const theCanvas = document.getElementById("canvo"),
  // select context type
  theContext = theCanvas.getContext("2d");

//   fill style
theContext.fillStyle = "#FF6F91"; // color, gradient, pattern

// The gradient
const gradient = theContext.createLinearGradient(
  0,
  0,
  100,
  150
);

// Add color stops
gradient.addColorStop(0, "#00C9A7");
gradient.addColorStop(1, "#845EC2");

theContext.fillStyle = gradient;

const img = document.getElementById("canvoImg");

// create the pattern
const pattern = theContext.createPattern(img, "repeat");

theContext.fillStyle = pattern;

// draw rectangle
theContext.fillRect(
  20,
  20,
  theCanvas.width,
  theCanvas.height
);
// theCanvas.width;
// theCanvas.height;
