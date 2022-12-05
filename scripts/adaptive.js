const video = document.querySelector('.video-main__element');
let isMobile = (window.innerWidth / window.innerHeight) < 1;
let before = isMobile;

setVideo();

window.addEventListener("resize", (e) => {
  isMobile = (window.innerWidth / window.innerHeight) < 1;
  
  if(before == isMobile){
    return;
  }

  setVideo();

  before = isMobile;
})

function setVideo (){
  if(isMobile){
    video.src = "./video/main-phone.mp4";
  }
  else{
    video.src = "./video/main.mp4";
  }
}