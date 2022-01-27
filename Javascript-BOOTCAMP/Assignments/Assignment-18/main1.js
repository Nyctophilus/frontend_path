// part2
setTimeout(popUp, 5000);

function popUp() {
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let btn = document.createElement("button");

  h2.textContent = `Welcome!`;
  p.textContent = `Welcome To Elzero Web School`;
  btn.textContent = `x`;

  div.append(h2, p, btn);

  document.body.appendChild(div);

  div.style.cssText =
    "background-color: #ccc5;border: 1px solid #ccc;width: fit-content;padding: 10px 100px;text-align: center;left: 50%;transform: translate(-50%,200%);position: relative;box-shadow:  20px 20px 60px #bebebe,-20px -20px 60px #ffffff;";

  btn.style.cssText =
    "border-radius: 50%;border: none;background-color: red;color: white;font-weight: bold;font-size: 20px;position: absolute;right: -12px;top: -15px;";

  btn.addEventListener("click", () => {
    console.log(`Aw, You Clicked me :'(`);
    div.remove();
  });
}
