'use strict';

function addAnimation(element, startStyle, endStyle, trigger, animDuration = 0.5, speed = 1){
  new ScrollMagic.Scene({
    duration: animDuration * 1000,
    triggerElement: trigger,
    triggerHook: 0
  })
  .setTween(TweenMax.fromTo(element, speed, startStyle, endStyle))
  .addTo(controller)
}

addAnimation('.header__logo', {filter: "invert(0%)"}, {filter: "invert(100%)"}, ".header-invert", 0, 1)
addAnimation('.discount-menu__open-button', {color: "rgb(255, 255, 255)"}, {color: "rgb(16, 16, 16)"}, ".header-invert", 0, 1)

addAnimation('.start', {opacity: 1, top: "50%"}, {opacity: 0, top: "45%"}, ".text-intro-end", 0.5, 1)
// addAnimation('.start', {opacity: 0, top: "55%"}, {opacity: 1, top: "50%"}, ".text-intro-start", 0.5, 1)

addAnimation('.header', {opacity: 0}, {opacity: 1}, ".header-appearing", 0.5, 1)

addAnimation('.text1', {opacity: 1, top: "50%"}, {opacity: 0, top: "45%"}, ".text1-end", 0.5, 1)
addAnimation('.text1', {opacity: 0, top: "55%"}, {opacity: 1, top: "50%"}, ".text1-start", 0.5, 1)

addAnimation('.text2', {opacity: 1, top: "50%"}, {opacity: 0, top: "45%"}, ".text2-end", 0.5, 1)
addAnimation('.text2', {opacity: 0, top: "55%"}, {opacity: 1, top: "50%"}, ".text2-start", 0.5, 1)

addAnimation('.text3-block', {opacity: 1, top: "50%"}, {opacity: 0, top: "45%"}, ".text3-end", 0.5, 1)
addAnimation('.text3-block', {top: "62%"}, {top: "50%"}, ".textlist-start", 1, 1)
addAnimation('.text3-list', {opacity: 0}, {opacity: 1}, ".textlist-start", 1, 1)
addAnimation('.text3-block', {opacity: 0, top: "67%"}, {opacity: 1, top: "62%"}, ".text3-start", 0.5, 1)

addAnimation('.text-list', {opacity: 0}, {opacity: 1}, ".textlist-start", 0.5, 1)

addAnimation('.text4', {opacity: 1, top: "50%"}, {opacity: 0, top: "45%"}, ".text4-end", 0.5, 1)
addAnimation('.text4', {opacity: 0, top: "55%"}, {opacity: 1, top: "50%"}, ".text4-start", 0.5, 1)

addAnimation('.text5-block', {opacity: 1, top: "50%"}, {opacity: 0, top: "45%"}, ".text5-end", 0.5, 1)
addAnimation('.text5-block', {opacity: 0, top: "55%"}, {opacity: 1, top: "50%"}, ".text5-start", 0.5, 1)

addAnimation('.text6', {opacity: 1, top: "50%"}, {opacity: 0, top: "45%"}, ".text6-end", 0.5, 1)
addAnimation('.text6', {opacity: 0, top: "55%"}, {opacity: 1, top: "50%"}, ".text6-start", 0.5, 1)

addAnimation('.text7', {opacity: 1, top: "50%"}, {opacity: 0, top: "45%"}, ".text7-end", 0.5, 1)
addAnimation('.text7', {opacity: 0, top: "55%"}, {opacity: 1, top: "50%"}, ".text7-start", 0.5, 1)

addAnimation('.text9', {opacity: 1, top: "50%"}, {opacity: 0, top: "45%"}, ".text9-end", 0.5, 1)
addAnimation('.text9', {opacity: 0, top: "55%"}, {opacity: 1, top: "50%"}, ".text9-start", 0.5, 1)

addAnimation('.text10', {opacity: 1, top: "50%"}, {opacity: 0, top: "45%"}, ".text10-end", 0.5, 1)
addAnimation('.text10', {opacity: 0, top: "55%"}, {opacity: 1, top: "50%"}, ".text10-start", 0.5, 1)
