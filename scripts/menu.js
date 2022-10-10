const menu = document.querySelector('.discount-menu');
const menuOpenButton = document.querySelector('.discount-menu__open-button');
const menuCloseButton = document.querySelector('.discount-menu__close-button');

menuOpenButton.addEventListener("click", e => {
  menu.classList.add("discount-menu--active")
})

menuCloseButton.addEventListener("click", e => {
  menu.classList.remove("discount-menu--active")
})

const privacyButton = document.querySelector('.footer__privacy-policy')
const privacyBlock = document.querySelector('.privacy-policy');


privacyButton.addEventListener("click", e => {
  privacyBlock.setAttribute('active', '');
  document.body.style.overflow = 'hidden';
});

privacyBlock.addEventListener("click", e => {
  if (!e.target.closest('.privacy-policy__back-button') && !e.target.closest('.privacy-policy__close-button')) return;
  privacyBlock.removeAttribute('active');
  document.body.style.overflow = 'auto';
})