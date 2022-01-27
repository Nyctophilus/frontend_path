let btn = document.querySelector("button");

window.onscroll = () => {
  if (scrollY >= 1000) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
