const paginationContent = ["Living Room", "Bedroom"];

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    bulletElement: 'button',
    el: '.swiper-pagination',
    bulletClass: 'slider__bullet button-regular',
    bulletActiveClass: 'slider__bullet--active',
    clickable: true,
  },
});

Array.from(swiper.pagination.bullets).forEach((bullet, index) => {
  bullet.textContent = paginationContent[index];
})

const cursor = document.querySelector('.slider__cursor');
const slider = document.querySelector('.slider');

slider.addEventListener("mousemove", e => {
  x = e.clientX;
  y = e.clientY - slider.getBoundingClientRect().top;

  cursor.style.left = x + 'px';
  cursor.style.top = y - 25 + 'px';

  if(e.target.closest(".slider__pagination")){
    cursor.setAttribute("unactive", "");
  }
  else{
    cursor.removeAttribute("unactive");
  }
});

slider.addEventListener("mouseover", e => {
  cursor.removeAttribute("unactive");
})
slider.addEventListener("mouseout", e => {
  cursor.setAttribute("unactive", "");
})
slider.addEventListener("", e => {
  cursor.setAttribute("unactive", "");
})