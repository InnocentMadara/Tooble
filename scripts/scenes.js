'use strict';

let topPosition;
let centerPosition;
let bottomPosition;

function setPosition () {
  if(window.innerWidth > 1024){
    topPosition = "55%";
    centerPosition = "50%";
    bottomPosition = "45%";
  }
  else{
    topPosition = "25%";
    centerPosition = "20%";
    bottomPosition = "15%";
  }
}
setPosition();

function addAnimation(element, startStyle, endStyle, trigger, animDuration = 0.5, speed = 1){
  new ScrollMagic.Scene({
      duration: animDuration * 1000,
      triggerElement: trigger,
      triggerHook: 0
    })
    .setTween(TweenMax.fromTo(element, speed, startStyle, endStyle))
    .addTo(controller)
  }


  

window.addEventListener("load", () => {



  // addAnimation('.header__logo', {filter: "invert(0%)"}, {filter: "invert(100%)"}, ".header-invert", 0, 1)
  // addAnimation('.discount-menu__open-button', {color: "rgb(255, 255, 255)"}, {color: "rgb(16, 16, 16)"}, ".header-invert", 0, 1)
  
  // addAnimation('.start', {top: "50%"}, {top: "35%"}, ".text-intro", 1, 1)
  
  
new ScrollMagic.Scene({
  duration: 0 * 1000,
  triggerHook: 0
})
.setTween( new TimelineMax()
  .fromTo('.video-start__content', 4, {opacity: 1, top: "50%"}, {opacity: 1, top: "50%"})
  .fromTo('.video-start__content', 5, {pointerEvents: "none", opacity: 1, top: "50%"}, {pointerEvents: "auto", opacity: 1, top: "35%"})
  .fromTo('.video-start__element', 5, {transform: "translateY(-50%)"}, {transform: "translateY(0%)"}, "-=5")
  .fromTo('.video-start__text-block', 3, {opacity: 0}, {opacity: 1}, '-=4')
  )
.addTo(controller)

addAnimation('.header', {opacity: 0}, {opacity: 1}, ".header-appearing", 0.5, 1)

addAnimation('.text1', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text1-end", 0.5, 1)
addAnimation('.text1', {opacity: 0, top: topPosition}, {opacity: 1, top: centerPosition}, ".text1-start", 0.5, 1)

addAnimation('.text2', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text2-end", 0.5, 1)
addAnimation('.text2', {opacity: 0, top: topPosition}, {opacity: 1, top: centerPosition}, ".text2-start", 0.5, 1)

addAnimation('.text3-block', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text3-end", 0.5, 1)
addAnimation('.text3-block', {top: (parseInt(topPosition)+7)+"%" }, {top: centerPosition}, ".text3list-start", 1, 1)
addAnimation('.text3-list', {opacity: 0}, {opacity: 1}, ".text3list-start", 1, 1)
addAnimation('.text3-block', {opacity: 0, top: (parseInt(topPosition)+12)+"%"}, {opacity: 1, top: (parseInt(topPosition)+7)+"%"}, ".text3-start", 0.5, 1)


addAnimation('.text3-item4', {opacity: 1}, {opacity: 0.5}, ".text3list-item6", 0.5, 1)
addAnimation('.text3-item-circle4', {filter: "grayscale(0%)", width: "24px", height: "24px"}, {filter: "grayscale(100%)", width: "16px", height: "16px"}, ".text3list-item6", 0.5, 1)
// addAnimation('.text3-item5', {opacity: 1}, {opacity: 0.5}, ".textlist-item6", 0.5, 1)
addAnimation('.text3-item6', {opacity: 0.5}, {opacity: 1}, ".text3list-item6", 0.5, 1)
addAnimation('.text3-item-circle6', {filter: "grayscale(100%)", width: "16px", height: "16px"}, {filter: "grayscale(0%)", width: "24px", height: "24px"}, ".text3list-item6", 0.5, 1)

addAnimation('.text3-item3', {opacity: 1}, {opacity: 0.5}, ".text3list-item4", 0.5, 1)
addAnimation('.text3-item-circle3', {filter: "grayscale(0%)", width: "24px", height: "24px"}, {filter: "grayscale(100%)", width: "16px", height: "16px"}, ".text3list-item4", 0.5, 1)
addAnimation('.text3-item4', {opacity: 0.5}, {opacity: 1}, ".text3list-item4", 0.5, 1)
addAnimation('.text3-item-circle4', {filter: "grayscale(100%)", width: "16px", height: "16px"}, {filter: "grayscale(0%)", width: "24px", height: "24px"}, ".text3list-item4", 0.5, 1)
// addAnimation('.text3-item5', {opacity: 0.5}, {opacity: 1}, ".textlist-item4", 0.5, 1)

addAnimation('.text3-item2', {opacity: 1}, {opacity: 0.5}, ".text3list-item3", 0.5, 1)
addAnimation('.text3-item-circle2', {filter: "grayscale(0%)", width: "24px", height: "24px"}, {filter: "grayscale(100%)", width: "16px", height: "16px"}, ".text3list-item3", 0.5, 1)
addAnimation('.text3-item3', {opacity: 0.5}, {opacity: 1}, ".text3list-item3", 0.5, 1)
addAnimation('.text3-item-circle3', {filter: "grayscale(100%)", width: "16px", height: "16px"}, {filter: "grayscale(0%)", width: "24px", height: "24px"}, ".text3list-item3", 0.5, 1)

addAnimation('.text3-item1', {opacity: 1}, {opacity: 0.5}, ".text3list-item2", 0.5, 1)
addAnimation('.text3-item-circle1', {filter: "grayscale(0%)", width: "24px", height: "24px"}, {filter: "grayscale(100%)", width: "16px", height: "16px"}, ".text3list-item2", 0.5, 1)
addAnimation('.text3-item2', {opacity: 0.5}, {opacity: 1}, ".text3list-item2", 0.5, 1)
addAnimation('.text3-item-circle2', {filter: "grayscale(100%)", width: "16px", height: "16px"}, {filter: "grayscale(0%)", width: "24px", height: "24px"}, ".text3list-item2", 0.5, 1)

addAnimation('.text3-item1', {opacity: 0.5}, {opacity: 1}, ".text3list-item1", 0.5, 1)
addAnimation('.text3-item-circle1', {filter: "grayscale(100%)", width: "16px", height: "16px"}, {filter: "grayscale(0%)", width: "24px", height: "24px"}, ".text3list-item1", 0.5, 1)


addAnimation('.text-list', {opacity: 0}, {opacity: 1}, ".textlist-start", 0.5, 1)

addAnimation('.text4', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text4-end", 0.5, 1)
addAnimation('.text4', {opacity: 0, top: topPosition}, {opacity: 1, top: centerPosition}, ".text4-start", 0.5, 1)

addAnimation('.text5-block', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text5-end", 0.5, 1)
addAnimation('.text5-block', {top: (parseInt(topPosition)+7)+"%" }, {top: centerPosition}, ".text5list-start", 1, 1)
addAnimation('.text5-list', {opacity: 0}, {opacity: 1}, ".text5list-start", 1, 1)
addAnimation('.text5-block', {opacity: 0, top: (parseInt(topPosition)+12)+"%"}, {opacity: 1, top: (parseInt(topPosition)+7)+"%"}, ".text5-start", 0.5, 1)

// window.addEventListener("resize", () => {
  if(window.innerWidth <= 1024){
    addAnimation('.text5-title', {opacity: 1}, {opacity: 0}, ".text5list-start", 1, 1)
  }
// })

addAnimation('.text5-item3', {opacity: 1}, {opacity: 0.5}, ".text5list-item4", 0.5, 1)

addAnimation('.text5-item2', {opacity: 1}, {opacity: 0.5}, ".text5list-item3", 0.5, 1)
addAnimation('.text5-item-circle2', {filter: "grayscale(0%)", width: "24px", height: "24px"}, {filter: "grayscale(100%)", width: "16px", height: "16px"}, ".text5list-item3", 0.5, 1)
addAnimation('.text5-item3', {opacity: 0.5}, {opacity: 1}, ".text5list-item3", 0.5, 1)
addAnimation('.text5-item-circle3', {filter: "grayscale(100%)", width: "16px", height: "16px"}, {filter: "grayscale(0%)", width: "24px", height: "24px"}, ".text5list-item3", 0.5, 1)

addAnimation('.text5-item1', {opacity: 1}, {opacity: 0.5}, ".text5list-item2", 0.5, 1)
addAnimation('.text5-item-circle1', {filter: "grayscale(0%)", width: "24px", height: "24px"}, {filter: "grayscale(100%)", width: "16px", height: "16px"}, ".text5list-item2", 0.5, 1)
addAnimation('.text5-item2', {opacity: 0.5}, {opacity: 1}, ".text5list-item2", 0.5, 1)
addAnimation('.text5-item-circle2', {filter: "grayscale(100%)", width: "16px", height: "16px"}, {filter: "grayscale(0%)", width: "24px", height: "24px"}, ".text5list-item2", 0.5, 1)


addAnimation('.text6', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text6-end", 0.5, 1)
addAnimation('.text6', {opacity: 0, top: topPosition}, {opacity: 1, top: centerPosition}, ".text6-start", 0.5, 1)

addAnimation('.text7', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text7-end", 0.5, 1)
addAnimation('.text7', {opacity: 0, top: topPosition}, {opacity: 1, top: centerPosition}, ".text7-start", 0.5, 1)

addAnimation('.text9', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text9-end", 0.5, 1)
addAnimation('.text9', {opacity: 0, top: topPosition}, {opacity: 1, top: centerPosition}, ".text9-start", 0.5, 1)

addAnimation('.text10', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text10-end", 0.5, 1)
addAnimation('.text10', {opacity: 0, top: topPosition}, {opacity: 1, top: centerPosition}, ".text10-start", 0.5, 1)

});