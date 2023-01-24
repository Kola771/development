
document.addEventListener('DOMContentLoaded', function(){
    let canvas = document.getElementById('mycanvas');
    let ctx = canvas.getContext('2d');
    ctx.strokeRect(50, 50, 200, 150);

    ctx.strokeStyle= 'green'
    ctx.strokeRect(50, 210, 200, 150);
    
    ctx.fillStyle = 'red';
    ctx.fillRect(280, 210, 200, 150);
})