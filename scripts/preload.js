const appLoadEvent = new Event("appload", [,,])

const preloadBlock = document.querySelector('.preload');
const logo = document.querySelector('.preload__svg-wrapper');
let percent = 0;

let mediaElements = Array.from(document.querySelectorAll('img, video'));
const startVideo = document.querySelector('.video-start__element');
const mainVideo = document.querySelector('.video-main__element');
let isVideoLoaded = false;

document.body.style.overflowY = "hidden";

mainVideo.oncanplay = () => {isVideoLoaded = true};

document.addEventListener('DOMContentLoaded', function (e) {
  startVideo.pause();

  let interval = setInterval(function() {
    percent += 10;
    if(percent < 100){  
      logo.style.height = percent + "%";
    }

    if(percent >= 100 && isVideoLoaded){
      window.dispatchEvent(appLoadEvent);  
      clearInterval(interval);
    }
  }, 300);
});

window.addEventListener("appload", ()=> {
  window.scrollTo({top: 0});
  preloadBlock.style.opacity = "0";
  setTimeout(function() {
    preloadBlock.style.display = "none";
  }, 300);

  document.body.style.overflowY = "auto";

  document.querySelector('.video-start').setAttribute("appeared", "");
  startVideo.play();
})