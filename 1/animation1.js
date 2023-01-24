'use strict'
let fps = 0;
let vuelargeur= window.innerWidth;
let ball;
let retour;
let brake=true;
window.addEventListener('load', function(){
    ball = document.getElementById("container");
    window.requestAnimationFrame(boule);
});

function boule() {
    window.requestAnimationFrame(boule);
    
    if(fps<vuelargeur-Number(ball.style.width)){
        ball.style.left=`${(fps)}px`;
        fps+=10;
    } 
    if(fps==vuelargeur-Number(ball.style.width) && brake==true) {
        retour= vuelargeur-Number(ball.style.width);
        brake=false;
    }
    if(retour>0){
        ball.style.left=`${retour}px`;
        retour-=10;
    } 
        
    if(retour===0) {
        fps=0;
        brake=true;
        retour=" ";
    }
    
}