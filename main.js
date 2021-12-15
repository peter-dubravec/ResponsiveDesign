let burger = document.querySelector(".burger");
let toggleOnMobile = document.querySelector(".toggle-on-mobile");

function toggleFucntion() {
  console.log(toggleOnMobile);
  toggleOnMobile.classList.toggle("togglemenu");
}

burger.addEventListener("click", toggleFucntion);
