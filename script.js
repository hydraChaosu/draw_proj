const clearBtn = document.getElementById('clearAll')
const saveBtn = document.getElementById('saveFile')
const colorBtn = document.getElementById('pencolor')
const bgcolorBtn = document.getElementById('bgcolor')
const pencilBtn = document.getElementById('pencil')
const header = document.querySelector('header')
window.addEventListener('resize', () => {
  width = window.innerWidth
  height = window.innerHeight - header.getBoundingClientRect().height
});
let width = window.innerWidth
let height = window.innerHeight - header.getBoundingClientRect().height
pencilBtn.addEventListener('change', (e) => {
  strokeWeight(Number(e.target.value));
})
bgcolorBtn.addEventListener('change', (e) => {
  background(e.target.value);
})
clearBtn.addEventListener('click', (e) => {
  console.log('e')
  clear();
})
colorBtn.addEventListener('change', (e) => {
  stroke(e.target.value);
})
saveBtn.addEventListener('click', (e) => {
  saveCanvas(canvas, 'myCanvas', 'jpg');
})


function setup() {
  let canvas = createCanvas(width, height);
  stroke(0, 0, 0);
  strokeWeight(8);
}

function draw() {
  if (mouseIsPressed) {
    console.log('a')
    // point(mouseX, mouseY)
    //circle(mouseX, mouseY, 10)
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}