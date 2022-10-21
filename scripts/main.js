'use strict';
const videoOffset = window.pageYOffset + document.querySelector('.triggers').getBoundingClientRect().top;

const videoMainDuration = 54;
const scrollSensivity = 0.5;

const videoMain = document.querySelector('.video-main');
const videoMainElement = videoMain.querySelector('video');;

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: videoMainDuration * scrollSensivity * 1000,
    triggerElement: videoMain,
    triggerHook: 0
  })
  .setPin(videoMain)
  .addTo(controller);

let scrollPosition = 0;
let accelAmount = 0.1;
let delay = 0

let footerTopDistance = window.pageYOffset + document.querySelector('.footer').getBoundingClientRect().top;
let videoLightBG = window.pageYOffset + document.querySelector('.header-invert').getBoundingClientRect().top;

window.addEventListener('resize', function (e) {
  footerTopDistance = window.pageYOffset + document.querySelector('.footer').getBoundingClientRect().top;
  videoLightBG = window.pageYOffset + document.querySelector('.header-invert').getBoundingClientRect().top;
});
document.addEventListener('load', function (e) {
  footerTopDistance = window.pageYOffset + document.querySelector('.footer').getBoundingClientRect().top;
  videoLightBG = window.pageYOffset + document.querySelector('.header-invert').getBoundingClientRect().top;
  console.log("ok");
});

scene.on("update", e => {
  scrollPosition = (e.scrollPos - videoOffset) / 1000 * (1 / scrollSensivity);

  
  if(e.scrollPos > footerTopDistance){
    document.querySelector('.header__logo').style.filter = "invert(0%)";
    document.querySelector('.discount-menu__open-button').style.color = "rgb(255, 255, 255)";
  }
  else if(e.scrollPos < videoLightBG){
    document.querySelector('.header__logo').style.filter = "invert(0%)";
    document.querySelector('.discount-menu__open-button').style.color = "rgb(255, 255, 255)";
  }
  else{
    document.querySelector('.header__logo').style.filter = "invert(100%)";
    document.querySelector('.discount-menu__open-button').style.color = "rgb(16, 16, 16)";
  }
})

requestAnimationFrame(setVideoFrame);


function setVideoFrame() {
  requestAnimationFrame(setVideoFrame);

  delay += (scrollPosition - delay) * accelAmount;

  videoMainElement.currentTime = delay;
}


document.querySelectorAll('.trigger').forEach(trigger => {
  trigger.style.top = trigger.dataset.time * scrollSensivity * 1000 + 'px';
})

document.querySelector('.footer__arrow-img').addEventListener("click", e => {
  window.scrollTo({top: 0, behavior: "smooth"});
})