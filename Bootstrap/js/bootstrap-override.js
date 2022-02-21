$(".carousel").carousel({
  interval: 6000,
});

// Show Color Option Div When Click On The Gear
$(".option-box svg").click(function () {
  $(".option-box .color-option").fadeToggle();
});

/*document.querySelector(".option-box svg").onclick = () => {
  document
    .querySelector(".option-box .color-option")
    .classList.toggle("hidden");
};*/

// Change theme color on click
$(".color-option ul li")
  .eq(0)
  .css("backgroundColor", "brown")
  .end()
  .eq(1)
  .css("backgroundColor", "#e426d5")
  .end()
  .eq(2)
  .css("backgroundColor", "#009AFF")
  .end()
  .eq(3)
  .css("backgroundColor", "#ffc107")
  .end()
  .eq(4)
  .css("backgroundColor", "#009688");

$(".color-option ul li").click(function () {
  document.documentElement.style.setProperty(
    "--theme-clr",
    $(this).attr("data-value")
  );

  // console.log($(this).attr("data-value"));
});

// loading screen
window.onload = () => {
  setTimeout(() => {
    document.querySelector(
      ".loading-overlay .lds-ripple"
    ).style.opacity = 0;
    document.body.style.overflow = `auto`;

    setTimeout(() => {
      document.querySelector(
        ".loading-overlay"
      ).style.opacity = 0;

      setTimeout(() => {
        document.querySelector(".loading-overlay").remove();
      }, 2000);
    }, 1000);
  }, 1000);
};

// scroll-up btn
let scrollBtn = $("#scroll-top");
$(window).scroll(function () {
  if ($(this).scrollTop() > 700) {
    scrollBtn.show();
  } else scrollBtn.hide();

  // console.log($(this).scrollTop());
});

scrollBtn.click(function () {
  $("html,body").animate({ scrollTop: 0 }, 600);
});
