let div = document.querySelector(".our-element");

let p = document.querySelector("p");

let divStart = document.createElement("div");
divStart.classList.add("start");
divStart.setAttribute("title", "Start Element");
divStart.setAttribute("data-value", "Start");
divStart.innerHTML = `Start`;

let divEnd = document.createElement("div");
divEnd.classList.add("end");
divEnd.setAttribute("title", "End Element");
divEnd.setAttribute("data-value", "End");
divEnd.innerHTML = `End`;

div.before(divStart);
div.after(divEnd);
p.remove();
