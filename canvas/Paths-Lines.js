const canvas = document.getElementById("canvo"),
  cnxt = canvas.getContext("2d"),
  w = canvas.clientWidth,
  h = canvas.clientHeight;

// begin the path
cnxt.beginPath();

// select the start position of the path
cnxt.moveTo(0, 0);

// draw end points of the path
cnxt.lineTo(w / 2, h / 2);

// second line
cnxt.moveTo(100, 100);
cnxt.lineTo(100, 200);
cnxt.lineTo(50, 100);
cnxt.lineTo(150, 50);
cnxt.lineTo(150, 150);

// -HL close Path  === cnxt.lineTo(100, 100)
cnxt.closePath();

// extends lines

// Adjust styles
(cnxt.strokeStyle = `#e91e63`), (cnxt.lineWidth = 5);

// draw the path
cnxt.stroke();

// fill the path
cnxt.fillStyle = `#00bcd4`;
cnxt.fill();
