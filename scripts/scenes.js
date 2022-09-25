'use strict';

const invertHeaderLogo = new ScrollMagic.Scene({
  duration: 0,
  triggerElement: ".header-invert",
  triggerHook: 0
})
.setTween(TweenMax.fromTo('.header__logo', 1, {filter: "invert(0%)"}, {filter: "invert(100%)"}))
.addTo(controller)
const invertHeaderButton = new ScrollMagic.Scene({
  duration: 0,
  triggerElement: ".header-invert",
  triggerHook: 0
})
.setTween(TweenMax.fromTo('.header__discount', 1, {color: "rgb(255, 255, 255)"}, {color: "rgb(16, 16, 16)"}))
.addTo(controller)

const text1end = new ScrollMagic.Scene({
  duration: 0.5 * 1000 * video.scrollSensivity,
  triggerElement: ".text1-end",
  triggerHook: 0
})
.setTween(TweenMax.fromTo('.text1', 1, {opacity: 1, top: "40%"}, {opacity: 0, top: "35%"}))
.addTo(controller)

const text2end = new ScrollMagic.Scene({
  duration: 0.5 * 1000 * video.scrollSensivity,
  triggerElement: document.querySelector(".text2-end"),
  triggerHook: 0
})
.setTween(TweenMax.fromTo(".text2", 1, {opacity: 1, top: "40%"}, {opacity: 0, top: "35%"}))
.addTo(controller)

const text2start = new ScrollMagic.Scene({
  duration: 0.5 * 1000 * video.scrollSensivity,
  triggerElement: ".text2-start",
  triggerHook: 0
})
.setTween(TweenMax.fromTo(".text2", 1, {opacity: 0, top: "45%"}, {opacity: 1, top: "40%"}))
.addTo(controller)