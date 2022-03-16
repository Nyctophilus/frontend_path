const canvas = document.getElementById("canvo"),
  cnxt = canvas.getContext("2d"),
  w = canvas.clientWidth,
  h = canvas.clientHeight,
  c = 2 * Math.PI;

cnxt.beginPath();

// Main circle face
(cnxt.fillStyle = `#ffff02`),
  cnxt.arc(w / 2, h / 2, 200, 0, c),
  cnxt.moveTo(w / 2 + 100, h / 2 + 30);
cnxt.fill();

// mouth
cnxt.arc(w / 2, h / 2 + 30, 100, 0, c / 2);
cnxt.stroke();

// partize the path ... not recommended! the one path method is the best practice

// left eye
cnxt.beginPath(),
  (cnxt.fillStyle = `#FFF`),
  cnxt.arc(220, 180, 40, 0, c);

cnxt.fill();

// right eye
cnxt.beginPath(),
  (cnxt.fillStyle = `#FFF`),
  cnxt.arc(370, 180, 40, 0, c);

cnxt.fill();
