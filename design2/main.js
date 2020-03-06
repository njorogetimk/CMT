// Show menu
const showMenu = document
  .querySelector(".menu-btn")
  .addEventListener("click", addClass);

function addClass() {
  document.querySelector(".main-menu").classList.toggle("show-menu");
}
