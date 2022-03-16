const canvas = document.getElementById("canvo"),
  cnxt = canvas.getContext("2d"),
  w = canvas.clientWidth,
  h = canvas.clientHeight;

// -HL Shadows
(cnxt.shadowColor = `rgba(0,0,0,.6)`),
  (cnxt.shadowBlur = 20);

// shadow offsets
(cnxt.shadowOffsetX = -10), (cnxt.shadowOffsetY = 10);

// -HL save context before scaling and so on
cnxt.save();

// -HL Transform
cnxt.scale(1.5, 0.9);

cnxt.fillStyle = `#e91e63`;
cnxt.fillRect(100, 70, 100, 50);

// -HL restore the context from the point u saved
cnxt.restore();

cnxt.fillStyle = `#002263`;
// -HL Transform
cnxt.translate(-20, 60);
cnxt.fillRect(100, 70, 100, 50);
