'use strict';

let video = {
  framerate: 50,
  duration: 54,
  scrollSensivity: 1
}

const videoWrapper = document.querySelector('.videoWrapper');
const videoElement = videoWrapper.firstElementChild;

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: video.duration * 1000 * video.scrollSensivity,
  triggerElement: videoWrapper,
  triggerHook: 0
})
.setPin(videoWrapper)
.addTo(controller);

let scrollPosition = 0;
let delay = 0;

scene.on("update", e => {
  scrollPosition = e.scrollPos / (1000 * video.scrollSensivity);
})

setInterval(function() {
  delay += (scrollPosition - delay);
  videoElement.currentTime = delay;
}, 1000/video.framerate);

document.querySelectorAll('.trigger').forEach(trigger => {
  trigger.style.top = trigger.dataset.time * 1000 + 'px';
  console.log(trigger);
})