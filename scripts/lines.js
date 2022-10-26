const items = Array.from(document.querySelectorAll('.text5-item'));
const lines = Array.from(document.querySelectorAll('.line'));
const ends = Array.from(document.querySelectorAll('.line-end'));


let offset = items.map( item => item.clientWidth - Math.max(...(items.map(item=>item.clientWidth))) );
let height = [480, 160, 60];
let flexBasis = [25, 20, 15];

let lineWidth = 0;
lineWidth = window.innerWidth * 0.49 - 390;
renderLines();

window.addEventListener('resize', function (e) {
  lineWidth = window.innerWidth * 0.49 - 390;
  // height = height.map((item) => {
  //   return (item - 40) + window.innerHeight * 0.05;
  // })
  console.log(height);
  renderLines();
});


function renderLines() {
  lines.forEach((line, i) => {
    line.style = `margin-left: ${60 - offset[i]}px; width: ${lineWidth}px; height: ${height[i]}px`;
    line.querySelector('.line-right').style = `flex-basis: ${lineWidth * 0.3 + 30 - 30 * i}px`;
  })
}