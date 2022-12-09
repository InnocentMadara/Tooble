const items = Array.from(document.querySelectorAll('.text5-item'));
const lines = Array.from(document.querySelectorAll('.line'));
const ends = Array.from(document.querySelectorAll('.line-end'));

let lineTop = [];
let lineRight = [];
let lineLeft = [];
let lineBottom =[];

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let textBlockTop;// = parseInt(document.querySelector('.text5-block').style.top);

setAspectRatio();

let offset = items.map( item => item.clientWidth - Math.max(...(items.map(item=>item.clientWidth))) );
lines.forEach((item, i) => {
  item.style.marginLeft = -offset[i] + "px";
})

window.addEventListener('resize', function (e) {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  textBlockTop = parseInt(document.querySelector('.text5-block').style.top)
  
  setLinePosition();

  setAspectRatio();
  
  setLineStyles();
})

window.addEventListener('load', function (e) {
  textBlockTop = parseInt(document.querySelector('.text5-block').style.top)
  
  setAspectRatio();
  
  setLinePosition();
  
  // setLineStyles();
  setLineStyles();
})

function setLinePosition(){
  lineLeft = lines.map(line => line.getBoundingClientRect().left);
  lineBottom = lines.map((line, i)=> windowHeight - items[i].getBoundingClientRect().top - 14);
  lineTop = [0.2, 0.55, 0.7].map(line => (line + (textBlockTop - 50)/100));
  lineRight = lines.map(line => windowWidth * ( aspectRatio * 0.1414 + 0.1086));
}

function setLineStyles(){
  lines.forEach((line, i) => {
    let width = windowWidth - lineLeft[i] - lineRight[i];
    let height = windowHeight - lineTop[i] * windowHeight - lineBottom[i];
    if(height < 0){
      height = -height;
      line.setAttribute("inverted", "");
    }
    else if(line.hasAttribute("inverted")){
      line.removeAttribute("inverted");
    }
    line.style.width =  width + "px";
    line.style.height = height + "px";
    
    console.log({id: i+1, height:height ,windowHeight, lineTop: lineTop[i] * windowHeight,lineBottom: lineBottom[i]});

    line.querySelector('.line-right').style = `flex-basis: ${ width * 0.3 + 30 - 30 * i }px`;

  })
}

function setAspectRatio(){
  aspectRatio = windowWidth/windowHeight;
  if(aspectRatio > 16/9) aspectRatio = 16/9
  else if(aspectRatio < 1) aspectRatio = 1;
}

// let lineWidth = 0;

// let heightPercentage = [0.4, 0.1, 0.018];
// let lineHeight;

// let lineStart = 0;

// let lineEndRight = 0;
// let lineEndTop = [0, 0, 0]; 

// window.addEventListener('load', function (e) {
  
//   let width = window.innerWidth;
//   let height = window.innerHeight;
  
//   let aspectRatio = width / height;
//   if(aspectRatio > 16/9)
//     aspectRatio = width / height / 16 * 9;
//   else
//     aspectRatio = 1;
  
//   renderLines();
// });


// window.addEventListener('resize', function (e) {
  
//   let width = window.innerWidth;
//   let height = window.innerHeight;
  
//   let aspectRatio = width / height;
//   if(aspectRatio > 16/9)
//     aspectRatio = width / height / 16 * 9;
//   else
//     aspectRatio = 1;
    
//   renderLines();
// });


// function setStyles() {
//   lines.forEach((line, i) => {
//     line.querySelector('.line-right').style = `flex-basis: ${lineWidth * 0.3 + 30 - 30 * i}px`;
//     if(!isMobile)
//       line.style = `margin-left: ${60 - offset[i]}px; width: ${lineWidth}px; height: ${lineHeight[i]}px`;
//     else
//       line.style = `margin-left: 16px; width: ${lineWidth}px; height: ${lineHeight[i]}px`;
//   })
// }

// function renderLines() {
//   lineStart = lines[0].getBoundingClientRect().left;

//   let width = window.innerWidth;
//   let height = window.innerHeight;

//   let aspectRatio = width/height;
//   if(aspectRatio > 16/9) aspectRatio = 16/9
//   else if(aspectRatio < 1) aspectRatio = 1;
//   lineEndRight = width * ( aspectRatio * 0.1414 + 0.1086);
  
//   lineWidth = width - lineEndRight - lineStart;
  
//   lineHeight = heightPercentage.map( h => h * window.innerHeight * aspectRatio );

//   setStyles();
// }
