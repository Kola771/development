
document.addEventListener('DOMContentLoaded', function(){
    let canvas = document.getElementById('mycanvas');
    let ctx = canvas.getContext('2d');
    let img = new Image();
    img.src = 'image.jpg';
    img.onload = function () {
        //On place l'image
        ctx.drawImage(img,10,10, 400, 300);
    };
})
