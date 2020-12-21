

function run(){

var posx = 0;
var posy = 80;
var height = 40;
var width = 40;
var coef = 5;
var y = [];
var y =Array.from({length: 5}, (v, k) => 40*k);
var dudex = 300;
var dudey = 40;
var dudeh = 40;
var dudew = 40;
var score = 0;
var  row = 0;
var c = document.getElementById("canvas");
var score_h = document.getElementById("score");
var ctx = c.getContext("2d");
drawRect();
drawTheDude();
var timer = setInterval(incoming,2);
ctx.beginPath();
ctx.moveTo(0,182);
ctx.lineTo(700,182);
function incoming() {
ctx.clearRect(posx,posy,height,width);

if (posx > 700) {
posx = 0;
if ( row == 30){
posy = dudey;
row = 0;
}
else {
posy = y[Math.ceil(Math.random()*coef)-1];
}
}
else {
posx+=5;
drawRect();
if (posx == dudex & posy == dudey) {
alert("aha yandın");
}
else if (posx == dudex){
row += 10;
score += 10;
score_h.innerHTML = score
}
}
}

function drawRect() {
//ctx.clearRect(posx,posx,40,40);
ctx.beginPath();
ctx.fillStyle ="#000000";
ctx.stroke();
ctx.fillRect(posx,posy, height, width);
}
// KEYBOARD
window.addEventListener("keydown", keyPressed, false);

function keyPressed(e) {
    switch(e.keyCode) {
        case 37:
            // left key pressed
            moveDude("left");
            break;
        case 38:
            // up key pressed
            moveDude("up");
            break;
        case 39:
            // right key pressed
            moveDude("right");
            break;
        case 40:
            // down key pressed
            moveDude("down");
            break;
    }
}
function moveDude (dir) {
ctx.clearRect(dudex,dudey,dudeh,dudew);
if (dir == "up" & dudey > 0) {
dudey-=40;
}
if (dir == "down" & dudey < 200) {
dudey += 40;
}

drawTheDude();
}
function drawTheDude () {
ctx.beginPath();
ctx.fillStyle ="#FF0000";
ctx.stroke();
ctx.fillRect(dudex,dudey, dudeh, dudew);
}


}