let lis = document.querySelectorAll("li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor =
    window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document
    .querySelector(
      `[data-color="${window.localStorage.getItem(
        "color"
      )}"]`
    )
    .classList.add("active");
}

lis.forEach((el) => {
  el.addEventListener("click", (e) => {
    // console.log(e.target.dataset.color);

    // remove active class
    lis.forEach((li) => {
      li.classList.remove("active");
    });

    // add active class to current element
    el.classList.add("active");
    // e.currentTarget.classList.add("active");

    // Add current color to local storage
    window.localStorage.setItem(
      "color",
      e.target.dataset.color
    );

    // change div bg to selected color
    exp.style.backgroundColor =
      window.localStorage.getItem("color");
  });
});
