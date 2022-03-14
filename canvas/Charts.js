const canvas = document.getElementById("canvo"),
  cnxt = canvas.getContext("2d");

(h = canvas.clientHeight), (w = canvas.clientWidth);

// set global font
cnxt.font = "32px cursive";

// draw chart column
cnxt.fillStyle = "#B39CD0";
cnxt.fillRect(50, 50, 50, h - 50);
cnxt.fillStyle = "white";
cnxt.fillText("1", 67, h - 15);

cnxt.fillStyle = "#00C9A7";
cnxt.fillRect(120, 150, 50, h - 150);
cnxt.fillStyle = "white";
cnxt.fillText("2", 137, h - 15);

cnxt.fillStyle = "#FF8066";
cnxt.fillRect(190, 80, 50, h - 80);
cnxt.fillStyle = "white";
cnxt.fillText("3", 207, h - 15);
