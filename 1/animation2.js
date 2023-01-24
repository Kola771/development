let ball;

let positionY=0;
let directionY=1;

let positionX=0;
let directionX=1;

let limitRightX;
let limitbottom;

let rupture;
let x = 0;

function compte(){

    ball = document.querySelector("#container")

    limitbottom = window.innerHeight - (ball.clientHeight);

    limitRightX = window.innerWidth - (ball.clientWidth);

    rupture=requestAnimationFrame(retour);
    
    function retour() {

        rupture=requestAnimationFrame(retour);

        positionY+= 6*directionY;
        positionX+= 6*directionX;

        ball.style.top = `${positionY}px`;
        ball.style.left = `${positionX}px`;
        
        if(positionY<=0 || positionY>=limitbottom) {
            directionY*=-1;
            ball.style.backgroundColor="green";
        }

        if(positionX<=0 || positionX>=limitRightX) {
            directionX*=-1;
            ball.style.backgroundColor="#f50";
        }
        
    }
}

document.addEventListener("DOMContentLoaded", compte);

window.addEventListener('click', function(){
    switch(x){
        case 0:
            cancelAnimationFrame(rupture);
            x++;
        break;
        case 1:
            document.addEventListener("DOMContentLoaded", compte);
            x=0;
        break;
    }
})
