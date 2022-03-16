const canvas = document.getElementById("canvo"),
  cnxt = canvas.getContext("2d"),
  w = canvas.clientWidth,
  h = canvas.clientHeight;

// -HL global Alpha
cnxt.globalAlpha = 0.7; // 0 ~ 1

// draw line in the center
(cnxt.strokeStyle = `#aaa`),
  (cnxt.lineWidth = 5),
  cnxt.moveTo(w / 2, 0),
  cnxt.lineTo(w / 2, h),
  cnxt.stroke();

(cnxt.font = `32px cursive`), (cnxt.fillStyle = `#32cda5`);

// -HL Context direction
// cnxt.direction = `rtl`;

// -HL Text Align
cnxt.textAlign = `start`;
cnxt.fillText("Start", 300, 100);

//  the end at  the gaven points
cnxt.textAlign = `end`;
cnxt.fillText("end", 300, 150);

//  the center at  the gaven points
cnxt.textAlign = `center`;
cnxt.fillText("center", 300, 200);

//  the left at  the gaven points
cnxt.textAlign = `left`;
cnxt.fillText("left", 300, 250);

//  the right at  the gaven points
cnxt.textAlign = `right`;
cnxt.fillText("right", 300, 300);
