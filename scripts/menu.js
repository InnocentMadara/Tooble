const menu = document.querySelector('.discount-menu');
const button = document.querySelector('.discount-menu__open-button');

button.addEventListener("click", e => {
  menu.classList.toggle("discount-menu--active")
})