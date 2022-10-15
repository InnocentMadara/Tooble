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

scene.on("update", e => {
  scrollPosition = (e.scrollPos - videoOffset) / 1000 * (1 / scrollSensivity);
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