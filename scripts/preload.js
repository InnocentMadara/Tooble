const appLoadEvent = new Event("appload", [,,])

const preloadBlock = document.querySelector('.preload');
const logo = document.querySelector('.preload__svg-wrapper');
let percent = 0;

let mediaElements = Array.from(document.querySelectorAll('img, video'));
const startVideo = document.querySelector('.video-start__element');
const mainVideo = document.querySelector('.video-main__element');
let isVideoLoaded = false;

mainVideo.oncanplay = () => {isVideoLoaded = true};

document.addEventListener('DOMContentLoaded', function (e) {
  let itemsLoaded = 0;
  // let itemsMax = mediaElements.length;

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

  // mediaElements.forEach(item => {
  //   item.onload = () => {
  //     itemsLoaded += 1;
      
  //     mediaElements.splice(mediaElements.indexOf(item), 1);

  //     console.log(item);

  //     percent = (itemsLoaded / itemsMax) * 100;
      
  //     logo.style.height = percent + "%";
      
  //     if(percent >= 100){
  //       window.dispatchEvent(appLoadEvent);  
  //     }
  //   };
  //   item.onerror = () => {
  //     console.log("error",  item);
  //   }
  // })
});

window.addEventListener("appload", ()=> {
  preloadBlock.style.opacity = "0";
  setTimeout(function() {
    preloadBlock.style.display = "none";
  }, 300);

  startVideo.play();
})