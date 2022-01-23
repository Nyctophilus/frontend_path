for (i = 0; i < 100; i++) {
  let myDiv = document.createElement("div");

  let h3 = document.createElement("h3");
  let p = document.createElement("p");

  myDiv.setAttribute("class", "product");
  myDiv.appendChild(h3).innerHTML = `H3 Title ${i + 1}`;
  myDiv.appendChild(p).innerHTML = "Paragharph here!";

  myDiv.style =
    "text-align:center;width:100px;margin:5px auto;background-color:yellow; padding: 1px 20px;border-radius:20px";

  document.body.appendChild(myDiv);
}
