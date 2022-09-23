'use strict';
let video = {
  framerate: 25,
  duration: 54,
  scrollSensivity: 1
}

const videoWrapper = document.querySelector('.videoWrapper');
const videoElement = videoWrapper.firstElementChild;
const section = document.querySelector('.textContent');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: video.duration * 1000 * video.scrollSensivity,
  triggerElement: videoWrapper,
  triggerHook: 0
})
.addIndicators()
.setPin(videoWrapper)
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  duration: 1 * 1000 * video.scrollSensivity,
  triggerElement: videoWrapper,
  triggerHook: 0
})
.setTween(TweenMax.fromTo(document.querySelector('.text'), 1, {opacity: 1, top: "40%"}, {opacity: 0, top: "30%"}))
.addTo(controller)

const scene3 = new ScrollMagic.Scene({
  duration: 1 * 1000 * video.scrollSensivity,
  triggerElement: document.querySelector(".textContent2"),
  triggerHook: 0
})
.setTween(TweenMax.fromTo(document.querySelector(".text2"), 1, {opacity: 0, top: "30%"}, {opacity: 1, top: "40%"}))
.addTo(controller)


let scrollPosition = 0;
let delay = 0;

scene.on("update", e => {
  scrollPosition = e.scrollPos / (1000 * video.scrollSensivity);
})

setInterval(function() {
  delay += (scrollPosition - delay);
  videoElement.currentTime = delay;
}, 1000/video.framerate);