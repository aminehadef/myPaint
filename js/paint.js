const canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var x = 0
var y = 0

var color = 'black'

var size = 0.5

var ply = document.getElementsByClassName('ply')

var colorDiv = document.getElementsByClassName('color')

function eventClick(varia, index, col = '', url = 'url(src/crayon.png), auto'){
    varia[index].addEventListener('click', ()=>{
        color = col
        canvas.style.cursor = url
    })
}

function ligne(ev){
   
    
    var rect = canvas.getBoundingClientRect();

    x = ev.clientX - rect.left
    y = ev.clientY - rect.top

    ctx.strokeStyle = color
    ctx.lineWidth = size
    ctx.lineTo(x / 2 ,y / 4 + 10)
    ctx.stroke()
}

function plyF(varia, index, si) {

    varia[index].addEventListener('click', () => {
        size = si;
    })
}

eventClick(colorDiv, 0, 'red')
eventClick(colorDiv, 1, 'green')
eventClick(colorDiv, 2, 'black')
eventClick(colorDiv, 3, 'blue')
eventClick(colorDiv, 4, 'yellow')
eventClick(colorDiv, 5, 'pink')
eventClick(colorDiv, 6, 'brown')
eventClick(colorDiv, 7, 'azure', 'url(src/gomme.png), auto')

plyF(ply,0,1)
plyF(ply,1,2)
plyF(ply,2,3)

canvas.addEventListener('mousedown', () =>{
    canvas.addEventListener('mousemove', ligne)
})

canvas.addEventListener('mouseup',() =>{
    ctx.beginPath()
    canvas.removeEventListener('mousemove', ligne)
})

canvas.addEventListener('mouseout',() =>{
    ctx.beginPath()
    canvas.removeEventListener('mousemove', ligne)
})