const appLoadEvent = new Event("appload", [,,])

const preloadBlock = document.querySelector('.preload');
const logo = document.querySelector('.preload__svg-wrapper');
let percent = 0;

let mediaElements = Array.from(document.querySelectorAll('img, video'));
const startVideo = document.querySelector('.video-start__element');

document.addEventListener('DOMContentLoaded', function (e) {
  let itemsLoaded = 0;
  // let itemsMax = mediaElements.length;

  let interval = setInterval(function() {
    percent += 10;
    logo.style.height = percent + "%";
    
    if(percent >= 100){
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

let div = document.createElement("div");
div.style = "position: fixed; top: 0; left: 0; width: 100px; height: 100px; left: 0; background: green; z-index: 10000000";

document.querySelector('.video-main__element').onloadeddata = (e) => {
  document.body.append(div);
}