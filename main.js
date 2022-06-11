canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouseEvent=""
var lpx,lpy
color="black"
w=1
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    mouseEvent="mousedown"
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    cpmx=e.clientX-canvas.offsetLeft
    cpmy=e.clientY-canvas.offsetTop
    if(mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=w
        console.log("last position x and y coordinates=")
        console.log("x= "+lpx+" y= "+lpy)
        //ctx.moveTo(lpx,lpy)
        console.log("current position of x and y coordinates=")
        console.log("x= "+cpmx+" y= "+cpmy)
        ctx.arc(cpmx,cpmy,20,0,2*Math.PI)
        ctx.stroke()
    }
    lpx=cpmx
    lpy=cpmy
}