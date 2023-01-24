
let fps = 0;
let fpst;

window.addEventListener('load', function(){
    fpst = document.querySelector(".container");
    window.requestAnimationFrame(kola);
});

function kola() {
    window.requestAnimationFrame(kola);
    if(fps>100){
        fps=0;
    } else {
        fps++;
    }
    switch(fps){
        case 50:
            fpst.style.left="94%";
            fpst.style.backgroundColor="yellow";
        break;
        case 99:
            fpst.style.left="0";
            fpst.style.backgroundColor="brown";
        break;
    }
}