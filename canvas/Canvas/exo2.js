
document.addEventListener('DOMContentLoaded', function(){
    let canvas = document.getElementById('mycanvas');
    let ctx = canvas.getContext('2d');
    ctx.strokeRect(0, 0, 200, 150);
    ctx.font = "30px Arial";
    ctx.fillStyle = 'magenta';
    ctx.fillText('Hello', 10, 50);
    ctx.fillStyle = 'blue';
    ctx.fillText('World', 85, 50);
    ctx.fillStyle = 'green';
    ctx.fillText('!', 5 +ctx.measureText('Hello').width + ctx.measureText('world').width+20, 50);
})