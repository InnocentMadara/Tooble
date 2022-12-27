const items = Array.from(document.querySelectorAll('.text5-item'));
const lines = Array.from(document.querySelectorAll('.line'));
const ends = Array.from(document.querySelectorAll('.line-end'));

let lineTop = [];
let lineRight = [];
let lineLeft = [];
let lineBottom =[];

let lineTopRaw = [];

function setLineTop(){
  if(isMobile){
    lineTopRaw = [0.38, 0.7, 0.8];
  }
  else if(isTablet){
    lineTopRaw = [0.28, 0.55, 0.65];
  }
  else{
    lineTopRaw = [0.2, 0.55, 0.7];
  }
}

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let textBlockTop;
let textBlockTopAvg = 10;




setTextBlockTopAvg();
setAspectRatio();
setLineTop();

let offset = items.map( item => item.clientWidth - Math.max(...(items.map(item=>item.clientWidth))) );
lines.forEach((item, i) => {
  if(isMobile) return;
  item.style.marginLeft = -offset[i] + "px";
})

window.addEventListener('resize', function (e) {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  textBlockTop = parseInt(document.querySelector('.text5-block').style.top)
  


  setTextBlockTopAvg();
  
  setLinePosition();
  
  setAspectRatio();
  
  setLineTop();

  setLineStyles();
  
  setLineType();
})

window.addEventListener('load', function (e) {
  textBlockTop = parseInt(document.querySelector('.text5-block').style.top)
  
  setAspectRatio();
  
  setLinePosition();
  
  setLineStyles();

  setLineType();
})

function setLinePosition(){
  lineLeft = lines.map(line => line.getBoundingClientRect().left);
  lineBottom = lines.map((line, i)=> windowHeight - items[i].getBoundingClientRect().top - 14);
  lineTop = lineTopRaw.map(line => ((line + (textBlockTop - textBlockTopAvg)/100) ));
  if(isMobile){
    lineRight = [0.2, 0.3, 0.52].map(line => line * windowWidth);
  }
  else if(isTablet){
    lineRight = lines.map(line => windowWidth * 0.36);
  }
  else{
    lineRight = lines.map(line => windowWidth * ( aspectRatio * 0.1414 + 0.1186));
  }
}

function setLineStyles(){
  lines.forEach((line, i) => {
    let width = windowWidth - lineLeft[i] - lineRight[i];
    let height = windowHeight - lineTop[i] * windowHeight - lineBottom[i];
    if(aspectRatio>16/9){
      height *= aspectRatio/(16/9);
    }
    if(height < 0){
      height = -height;
      line.setAttribute("inverted", "");
    }
    else if(line.hasAttribute("inverted")){
      line.removeAttribute("inverted");
    }
    line.style.width =  width + "px";
    line.style.height = height + "px";
    

    line.querySelector('.line-right').style = `flex-basis: ${ width * 0.3 + 30 - 30 * i }px`;
    if(isTablet && i == 2){
      line.querySelector('.line-right').style = `flex-basis: ${ width * 0.3 + 30}px`;
    }

  })
}

function setAspectRatio(){
  aspectRatio = windowWidth/windowHeight;
  if(aspectRatio > 16/9) aspectRatio = 16/9
  else if(aspectRatio < 1) aspectRatio = 1;
}

function setTextBlockTopAvg(){
  if(isMobile) return;
  // if(isTablet){
    textBlockTopAvg = 10;
  // }
  // else{
  //   textBlockTopAvg = 50;
  // }
}

function setLineType () {
  lines.forEach(line => {
    if(isMobile){
      line.setAttribute("mobile", "");
    }
    else{
      line.removeAttribute("mobile");
    }
  })
}