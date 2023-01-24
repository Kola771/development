'use strict'
let circle = {
    color: "#FF0000",
    length:20,
    x:500,
    y:520,
    r:30,
    directionX:1,
    directionY:1
};

let plateau = {
    color: "black",
    length:20,
    x:380,
    y:550,
    width:250,
    height:30,
    directionX:1,
}

let brique = {
    color: "brown",
    length:20,
    x:20,
    y:50,
    width:150,
    height:30,
}

let canvas;
let ctx;

document.addEventListener('DOMContentLoaded', function () {

    canvas = document.querySelector('#canvas');

    ctx = canvas.getContext('2d');

    displaygame();

    requestAnimationFrame(playgame);

    document.addEventListener('keydown', initGame);

});

function playgame()
{
    detectCollisions();
    requestAnimationFrame(playgame);
    
        circle.x += 2*circle.directionX;
        circle.y += 2*circle.directionY;
    
    
        if(circle.x === circle.r || circle.x + circle.r >= canvas.width ) {
            circle.directionX *=-1
        }
    
        if(circle.y === circle.r || circle.y + circle.r >= canvas.height) {
            circle.directionY *=-1
        }

    displaygame();
}

function displaygame()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#DDDDDD';

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = circle.color;

    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, circle.length, 360);
    ctx.fill();
    
    ctx.fillStyle = plateau.color;
    ctx.fillRect(plateau.x, plateau.y, plateau.width, plateau.height)

            ctx.fillStyle = brique.color;
            ctx.fillRect(brique.x, brique.y, brique.width, brique.height)
            ctx.fillStyle = 'green';
            ctx.fillRect(brique.x+160, brique.y, brique.width, brique.height)
            ctx.fillStyle = brique.color;
            ctx.fillRect(brique.x+320, brique.y, brique.width, brique.height)
            ctx.fillStyle = 'green';
            ctx.fillRect(brique.x+480, brique.y, brique.width, brique.height)
            ctx.fillStyle = brique.color;
            ctx.fillRect(brique.x+640, brique.y, brique.width, brique.height)
            ctx.fillStyle = 'green';
            ctx.fillRect(brique.x+800, brique.y, brique.width, brique.height)
}

function initGame(e) {
    switch(e.key)
    {
        case 'ArrowRight':
            if (plateau.x + plateau.length < canvas.width - plateau.length*11) plateau.x +=15;
        break;
        case 'ArrowLeft':
            if (plateau.x > 0) plateau.x-=15;
        break;
    }
    displaygame();
}

function detectCollisions() {
    if( circle.y === plateau.y - 30 && (circle.x > plateau.x && circle.x < plateau.x +300)) {
        circle.directionY *=-1
    } 
    if( circle.y > plateau.y) {
        alert('Game Over')
    }  
}