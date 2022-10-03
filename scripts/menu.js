const menu = document.querySelector('.discount-menu');
const button = document.querySelector('.discount-menu__open-button');
const close = document.querySelector('.discount-menu__close-button');

button.addEventListener("click", e => {
  menu.classList.add("discount-menu--active")
})

close.addEventListener("click", e => {
  menu.classList.remove("discount-menu--active")
})