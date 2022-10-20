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

// document.querySelector('.slider').addEventListener("mousemove", e => {
//   console.log(e);
// })