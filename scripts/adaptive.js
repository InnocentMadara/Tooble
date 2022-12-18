const video = document.querySelector('.video-main__element');
let isMobile = (window.innerWidth / window.innerHeight) < 1;
let isTablet = window.innerWidth <= 1024 && !isMobile;
let before = isMobile;

setVideo();
setCursorVisibility();
setTextStyles();

window.addEventListener("resize", (e) => {
  isMobile = (window.innerWidth / window.innerHeight) < 1;
  
  if(before == isMobile){
    return;
  }
  
  setVideo();
  setCursorVisibility();
  setTextStyles();

  before = isMobile;
})

function setCursorVisibility () {
  if(isMobile){
    cursor.hidden = true;
  }

  else{
    cursor.hidden = false;
  }
}

function setVideo (){
  if(isMobile){
    video.src = "./video/main-phone.mp4";
  }
  else if(isTablet){
    video.src = "./video/main-tablet.mp4";
  }
  else{
    video.src = "./video/main.mp4";
  }
}

function setTextStyles (){
  if(isMobile){
    document.querySelector('.text5-list').style.position = "absolute";
    document.querySelector('.text5-list').style.top = "10%";
    document.querySelector('.text5-heading').style.display = "none";
  }
  else{
    document.querySelector('.text5-list').style.position = "";
    document.querySelector('.text5-list').style.top = "";
    document.querySelector('.text5-heading').style.display = "";
  }
}
