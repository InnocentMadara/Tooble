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


function setHeaderColor(e) {
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
}

// setHeaderColor()

let isLocked = false;

scene.on("update", e => {
  setHeaderColor(e)

  scrollPosition = (e.scrollPos - videoOffset) / 1000 * (1 / scrollSensivity);

  if(!isLocked){
    setVideoTime();
  }
  isLocked = true;
  setTimeout(function() {
    isLocked = false;
  }, 1000/24);
})  

function setVideoTime() {
  delay += (scrollPosition - delay) * accelAmount;
  videoMainElement.currentTime = delay;
  console.log(scrollPosition);
}

// setInterval(() => {
//   setVideoTime();
//   videoMainElement.currentTime += 1000/25/3600;
// }, 1000/60);


// requestAnimationFrame(setVideoFrame);

// function setVideoFrame() {
//   delay += (scrollPosition - delay) * accelAmount;
  
//   videoMainElement.currentTime = delay;

  
//   console.log(scrollPosition, videoMainElement.currentTime);

//   requestAnimationFrame(setVideoFrame);
// }



document.querySelectorAll('.trigger').forEach(trigger => {
  trigger.style.top = trigger.dataset.time * scrollSensivity * 1000 + 'px';
})

document.querySelector('.footer__arrow-img').addEventListener("click", e => {
  window.scrollTo({top: 0, behavior: "smooth"});
})