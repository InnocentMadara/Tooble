const fadeBlock = document.querySelector('.fade-in');
const logo = document.querySelector('.video-start__logo');

window.addEventListener('load', function (e) {
  fadeBlock.setAttribute("active", "");
  setTimeout(function() {
    logo.setAttribute("filled", "");
  }, 5000);
});