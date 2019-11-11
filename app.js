const canvas = document.getElementById("jsCanvas");
const body = document.querySelector("body");
let text ="";
// function onMouseMove(event) {
//     console.log(event)

// }
/*
if(canvas){
    canvas.addEventListener("mousemove", onMouseMove)
}
*/

canvas.onmousemove = function(){
    return text = 'aa';
}
document.querySelector("#jsMode").innerText = text;
