const canvas = document.getElementById("canvo"),
  cnxt = canvas.getContext("2d"),
  w = canvas.clientWidth,
  h = canvas.clientHeight;

// begin the path
cnxt.beginPath();

// Adjust styles
(cnxt.strokeStyle = `#e91e63`), (cnxt.lineWidth = 5);

// -HL arc
cnxt.arc(150, 90, 50, 0, Math.PI, true);

// draw the path
cnxt.stroke();

// fill the path
// cnxt.fillStyle = `#00bcd4`;
// cnxt.fill();
