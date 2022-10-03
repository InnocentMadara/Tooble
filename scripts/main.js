'use strict';

const videoStartDuration = 10;
const videoMainDuration = 54;

const videoStart = document.querySelector('.video-start');
const videoStartElement = videoStart.firstElementChild;
const videoMain = document.querySelector('.video-main');
const videoMainElement = videoMain.firstElementChild;

const controller = new ScrollMagic.Controller();

const sceneStart = new ScrollMagic.Scene({
  duration: videoStartDuration * 1000,
  triggerElement: videoStart,
  triggerHook: 0
})
.setPin(videoStart)
.addTo(controller);

const scene = new ScrollMagic.Scene({
  duration: videoMainDuration * 1000,
  triggerElement: videoMain,
  triggerHook: 0
})
.setPin(videoMain)
.addTo(controller);

let scrollPositionStart = 0;

scene.on("update", e => {
  scrollPositionStart = e.scrollPos / 1000;
})

requestAnimationFrame(setVideoFrame);

function setVideoFrame () {
  requestAnimationFrame(setVideoFrame);
  videoStartElement.currentTime = scrollPositionStart;
  videoMainElement.currentTime = scrollPositionStart - 10;//<<<
}


document.querySelectorAll('.trigger').forEach(trigger => {
  trigger.style.top = trigger.dataset.time * 1000 + 'px';
  // console.log(trigger);
})