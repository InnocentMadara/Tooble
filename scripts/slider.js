const paginationContent = ["Living Room", "Bedroom"];

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'slider__bullet',
    bulletActiveClass: 'slider__bullet--active',
    clickable: true,
  },
});

Array.from(swiper.pagination.bullets).forEach((bullet, index)=>{
  bullet.textContent = paginationContent[index];
})