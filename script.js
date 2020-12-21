
function run (){
let pos = 20;
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
ctx.beginPath();
a = ctx.rect(20, 20, 150, 100);
ctx.stroke();
let inpt = document.getElementById("inpt").value;
inpt.value = ""
alert("aferin la " + inpt );
var i;
for (i= 0;i<100;i++) {

pos += 20;
a.y = pos+"px";
}
}