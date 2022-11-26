const items = Array.from(document.querySelectorAll('.text5-item'));
const lines = Array.from(document.querySelectorAll('.line'));
const ends = Array.from(document.querySelectorAll('.line-end'));


let offset = items.map( item => item.clientWidth - Math.max(...(items.map(item=>item.clientWidth))) );
let lineWidth = 0;

let heightPercentage = [0.4, 0.1, 0.018];
let height;
// let height = [400, 105, 20];

let lineStart = 0;

let lineEndRight = 0;
let lineEndTop = [0, 0, 0]; 

window.addEventListener('load', function (e) {
  height = heightPercentage.map( h => h * window.innerHeight );
  lines.forEach((line, i) => {
    line.style = `margin-left: ${60 - offset[i]}px; width: ${lineWidth}px; height: ${height[i]}px`;
  })
  renderLines();
});


window.addEventListener('resize', function (e) {
  height = heightPercentage.map( h => h * window.innerHeight );
  renderLines();
});


function setStyles() {
  lines.forEach((line, i) => {
    line.style = `margin-left: ${60 - offset[i]}px; width: ${lineWidth}px; height: ${height[i]}px`;
    line.querySelector('.line-right').style = `flex-basis: ${lineWidth * 0.3 + 30 - 30 * i}px`;
  })
}

function renderLines() {
  lineStart = lines[0].getBoundingClientRect().left;

  let width = window.innerWidth;
  let height = window.innerHeight;

  let aspectRatio = width/height;
  if(aspectRatio > 16/9) aspectRatio = 16/9
  else if(aspectRatio < 1) aspectRatio = 1;
  lineEndRight = width * ( aspectRatio * 0.1414 + 0.1086);
  
  lineWidth = width - lineEndRight - lineStart;
  

  setStyles();
}