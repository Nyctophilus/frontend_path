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
cnxt.moveTo(w, 0);
cnxt.lineTo(w / 2, h / 2);

// Adjust styles
(cnxt.strokeStyle = `#f0f`), (cnxt.lineWidth = 5);

// draw the path
cnxt.stroke();
