const sideNav = document.querySelector("#side-nav");
const toggler = document.querySelector("#toggler");
const texts = document.querySelectorAll(".menu-item-text");
const main = document.querySelector("main");

function toggleNav() {
  sideNav.classList.toggle("active");
  toggler.classList.toggle("active");
  texts.forEach(text => {
    text.classList.toggle("hidden");
  });
}
