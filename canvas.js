const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let w = canvas.width
let h = canvas.height




let a = w*h / 2000
let baseA = w*h / 2000
let inc = 0.1
let moveStep = 0.001
let offSet = 0
let da = -0.5
c.globalAlpha = 0.3

function loop(){
    requestAnimationFrame(loop)

    c.clearRect(0, 0, w, h)

    a += da
    if(a < -baseA) da = 0.5
    if(a > baseA) da = -0.5

    offSet += moveStep
    for(let x = 0 + offSet; x < 2*Math.PI + offSet; x+= inc){
        c.fillStyle = `hsl(${x*50}, 50%, 50%)`
        c.beginPath()
        c.arc(w/2 + a*Math.sin(x), h/2 + a*Math.sin(x)*Math.cos(x), w/150, 0, 2*Math.PI)
        c.fill()
        c.closePath()
    }
}


function resizeCanvas(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    w = canvas.width
    h = canvas.height
    baseA = w*h / 2000
}


window.addEventListener("resize", resizeCanvas)
