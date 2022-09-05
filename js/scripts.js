const hamburger_button = document.querySelector(".hamburger-icon");
const hamburger_overlay = document.querySelector(".hamburger-overlay");
const hamburger_section = document.querySelector(".hamburger-section");
const hamburger_close = document.querySelector(".hamburger-menu-close");

hamburger_button.addEventListener("click", function () {
  hamburger_button.classList.toggle("is-active");
  hamburger_overlay.classList.toggle("is-open");
  hamburger_section.classList.toggle("is-active");
  hamburger_close.classList.toggle("is-active");
});

hamburger_overlay.scrollIntoView();
