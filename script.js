console.log('Hello from Nerdbord!');
var box = document.querySelector('.box');
var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white'];
var colorIndex = 0;

function changeColor() {
    box.style.borderColor = colors[colorIndex];
    colorIndex = (colorIndex+1) % colors.length;
}
changeColor();
setInterval(changeColor, 3000);