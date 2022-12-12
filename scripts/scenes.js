'use strict';

let topPosition;
let centerPosition;
let bottomPosition;

let circle;
let circleActive;

// let isTabletBefore = isTablet;
// 
// window.addEventListener("resize", () => {
//   isTablet = window.innerWidth <= 1024;

//   if(isTabletBefore == isTablet){
//     return;
//   }

//   setPosition();

//   isTabletBefore = isTablet;
// })

function setPosition () {
  if(!isTablet && !isMobile){
    topPosition = "55%";
    centerPosition = "50%";
    bottomPosition = "45%";

    circle = "16px";
    circleActive = "24px"
  }
  else{
    topPosition = "15%";
    centerPosition = "10%";
    bottomPosition = "5%";

    circle = "10px";
    circleActive = "20px"
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

window.addEventListener("DOMContentLoaded", () => {
  
new ScrollMagic.Scene({
  duration: 0 * 1000,
  triggerHook: 0
})
.setTween( new TimelineMax()
  .fromTo('.video-start__content', 4, {opacity: 1, top: "50%"}, {opacity: 1, top: "50%"})
  .fromTo('.video-start__content', 5, {pointerEvents: "none", opacity: 1, top: "50%"}, {pointerEvents: "auto", opacity: 1, top: "35%"})
  .fromTo('.video-start__element', 5, {transform: "translateY(-50%)"}, {transform: "translateY(0%)"}, "-=2")
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


addAnimation('.text3-item6', {opacity: 1}, {opacity: 0.5}, ".text3list-items-end", 0.5, 1)
addAnimation('.text3-item-circle6', {filter: "grayscale(0%)", width: circleActive, height: circleActive}, {filter: "grayscale(100%)", width: circle, height: circle}, ".text3list-items-end", 0.5, 1)

addAnimation('.text3-item5', {opacity: 1}, {opacity: 0.5}, ".text3list-item6", 0.5, 1)
addAnimation('.text3-item-circle5', {filter: "grayscale(0%)", width: circleActive, height: circleActive}, {filter: "grayscale(100%)", width: circle, height: circle}, ".text3list-item6", 0.5, 1)
addAnimation('.text3-item6', {opacity: 0.5}, {opacity: 1}, ".text3list-item6", 0.5, 1)
addAnimation('.text3-item-circle6', {filter: "grayscale(100%)", width: circle, height: circle}, {filter: "grayscale(0%)", width: circleActive, height: circleActive}, ".text3list-item6", 0.5, 1)

addAnimation('.text3-item4', {opacity: 1}, {opacity: 0.5}, ".text3list-item5", 0.5, 1)
addAnimation('.text3-item-circle4', {filter: "grayscale(0%)", width: circleActive, height: circleActive}, {filter: "grayscale(100%)", width: circle, height: circle}, ".text3list-item5", 0.5, 1)
addAnimation('.text3-item5', {opacity: 0.5}, {opacity: 1}, ".text3list-item5", 0.5, 1)
addAnimation('.text3-item-circle5', {filter: "grayscale(100%)", width: circle, height: circle}, {filter: "grayscale(0%)", width: circleActive, height: circleActive}, ".text3list-item5", 0.5, 1)

addAnimation('.text3-item3', {opacity: 1}, {opacity: 0.5}, ".text3list-item4", 0.5, 1)
addAnimation('.text3-item-circle3', {filter: "grayscale(0%)", width: circleActive, height: circleActive}, {filter: "grayscale(100%)", width: circle, height: circle}, ".text3list-item4", 0.5, 1)
addAnimation('.text3-item4', {opacity: 0.5}, {opacity: 1}, ".text3list-item4", 0.5, 1)
addAnimation('.text3-item-circle4', {filter: "grayscale(100%)", width: circle, height: circle}, {filter: "grayscale(0%)", width: circleActive, height: circleActive}, ".text3list-item4", 0.5, 1)

addAnimation('.text3-item2', {opacity: 1}, {opacity: 0.5}, ".text3list-item3", 0.5, 1)
addAnimation('.text3-item-circle2', {filter: "grayscale(0%)", width: circleActive, height: circleActive}, {filter: "grayscale(100%)", width: circle, height: circle}, ".text3list-item3", 0.5, 1)
addAnimation('.text3-item3', {opacity: 0.5}, {opacity: 1}, ".text3list-item3", 0.5, 1)
addAnimation('.text3-item-circle3', {filter: "grayscale(100%)", width: circle, height: circle}, {filter: "grayscale(0%)", width: circleActive, height: circleActive}, ".text3list-item3", 0.5, 1)

addAnimation('.text3-item1', {opacity: 1}, {opacity: 0.5}, ".text3list-item2", 0.5, 1)
addAnimation('.text3-item-circle1', {filter: "grayscale(0%)", width: circleActive, height: circleActive}, {filter: "grayscale(100%)", width: circle, height: circle}, ".text3list-item2", 0.5, 1)
addAnimation('.text3-item2', {opacity: 0.5}, {opacity: 1}, ".text3list-item2", 0.5, 1)
addAnimation('.text3-item-circle2', {filter: "grayscale(100%)", width: circle, height: circle}, {filter: "grayscale(0%)", width: circleActive, height: circleActive}, ".text3list-item2", 0.5, 1)

addAnimation('.text3-item1', {opacity: 0.5}, {opacity: 1}, ".text3list-item1", 0.5, 1)
addAnimation('.text3-item-circle1', {filter: "grayscale(100%)", width: circle, height: circle}, {filter: "grayscale(0%)", width: circleActive, height: circleActive}, ".text3list-item1", 0.5, 1)


addAnimation('.text-list', {opacity: 0}, {opacity: 1}, ".textlist-start", 0.5, 1)

addAnimation('.text4', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text4-end", 0.5, 1)
addAnimation('.text4', {opacity: 0, top: topPosition}, {opacity: 1, top: centerPosition}, ".text4-start", 0.5, 1)

// addAnimation('.text5-block', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text5-end", 0.5, 1)
// addAnimation('.text5-block', {top: (parseInt(topPosition)+7)+"%" }, {top: centerPosition}, ".text5list-start", 1, 1)
// addAnimation('.text5-list', {opacity: 0}, {opacity: 1}, ".text5list-start", 1, 1)
// addAnimation('.text5-block', {opacity: 0, top: (parseInt(topPosition)+12)+"%"}, {opacity: 1, top: (parseInt(topPosition)+7)+"%"}, ".text5-start", 0.5, 1)

addAnimation('.text5-item3', {opacity: 1}, {opacity: 0.5}, ".text5list-item4", 0.5, 1)

addAnimation('.text5-item2', {opacity: 1}, {opacity: 0.5}, ".text5list-item3", 0.5, 1)
addAnimation('.text5-item-circle2', {filter: "grayscale(0%)", width: circleActive, height: circleActive}, {filter: "grayscale(100%)", width: circle, height: circle}, ".text5list-item3", 0.5, 1)
addAnimation('.text5-item3', {opacity: 0.5}, {opacity: 1}, ".text5list-item3", 0.5, 1)
addAnimation('.text5-item-circle3', {filter: "grayscale(100%)", width: circle, height: circle}, {filter: "grayscale(0%)", width: circleActive, height: circleActive}, ".text5list-item3", 0.5, 1)

addAnimation('.text5-item1', {opacity: 1}, {opacity: 0.5}, ".text5list-item2", 0.5, 1)
addAnimation('.text5-item-circle1', {filter: "grayscale(0%)", width: circleActive, height: circleActive}, {filter: "grayscale(100%)", width: circle, height: circle}, ".text5list-item2", 0.5, 1)
addAnimation('.text5-item2', {opacity: 0.5}, {opacity: 1}, ".text5list-item2", 0.5, 1)
addAnimation('.text5-item-circle2', {filter: "grayscale(100%)", width: circle, height: circle}, {filter: "grayscale(0%)", width: circleActive, height: circleActive}, ".text5list-item2", 0.5, 1)


if(isMobile){
  addAnimation('.text5-block', {opacity: 1, top: bottomPosition}, {opacity: 0, top: parseInt(bottomPosition) - 5 + "%"}, ".text5-end", 0.5, 1)
  addAnimation('.text5-block', {top: centerPosition}, {top: bottomPosition}, ".text5list-start", 1, 1)
  addAnimation('.text5-list', {opacity: 0}, {opacity: 1}, ".text5list-start", 1, 1)
  addAnimation('.text5-block', {opacity: 0, top: topPosition}, {opacity: 1, top: centerPosition}, ".text5-start", 0.5, 1)
}
else{
  addAnimation('.text5-block', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text5-end", 0.5, 1)
  addAnimation('.text5-block', {top: (parseInt(topPosition)+7)+"%" }, {top: centerPosition}, ".text5list-start", 1, 1)
  addAnimation('.text5-list', {opacity: 0}, {opacity: 1}, ".text5list-start", 1, 1)
  addAnimation('.text5-block', {opacity: 0, top: (parseInt(topPosition)+12)+"%"}, {opacity: 1, top: (parseInt(topPosition)+7)+"%"}, ".text5-start", 0.5, 1)  
}

// window.addEventListener("resize", () => {
  if(window.innerWidth <= 1024){
    addAnimation('.text5-title', {opacity: 1}, {opacity: 0}, ".text5list-start", 1, 1)
  }
// })

addAnimation('.text6', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text6-end", 0.5, 1)
addAnimation('.text6', {opacity: 0, top: topPosition}, {opacity: 1, top: centerPosition}, ".text6-start", 0.5, 1)

addAnimation('.text7', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text7-end", 0.5, 1)
addAnimation('.text7', {opacity: 0, top: topPosition}, {opacity: 1, top: centerPosition}, ".text7-start", 0.5, 1)

addAnimation('.text9', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text9-end", 0.5, 1)
addAnimation('.text9', {opacity: 0, top: topPosition}, {opacity: 1, top: centerPosition}, ".text9-start", 0.5, 1)

addAnimation('.text10', {opacity: 1, top: centerPosition}, {opacity: 0, top: bottomPosition}, ".text10-end", 0.5, 1)
addAnimation('.text10', {opacity: 0, top: topPosition}, {opacity: 1, top: centerPosition}, ".text10-start", 0.5, 1)

});