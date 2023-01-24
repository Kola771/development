
let compteur;
let x=0;
do {
     heure = window.prompt("Entrez l'heure");
     minutes = window.prompt("Entrez les minutes");
     secondes = 60 ;
}
while(isNaN(heure)&&isNaN(minutes));

function compte() {
    secondes--;
    if(secondes===0 && minutes !==0) {
        secondes=59;
        minutes--;
    } 
    if (minutes===0 && heure !==0) {
        secondes=59;
        minutes=59;
        heure--;
    }
    if (secondes===0 && minutes ===0 && heure===0) {
        secondes="--";
        minutes=0;
        heure=0;
    }
    document.getElementById("compteur").innerHTML = heure+ " heure(s) " +minutes+ " minute(s) " +secondes+ " seconde(s)";
    document.getElementById("compteur").style= "color:#f50; font-weight: bold";
}

document.getElementById("compteur").innerHTML = heure+ " heure(s) " +minutes+ " minute(s) " +secondes+ " seconde(s)";

document.addEventListener("DOMContentLoaded", function(){
    start.addEventListener("click", function(e){
         e.preventDefault();
         switch(x) {
                case 0:
                    start.textContent="Stop";
                    compteur = setInterval(compte, 1000);
                    x++;
                break;
                case 1:
                    start.textContent="Start";
                    clearInterval(compteur);
                    x=0;
                break;
            }
        })

        reset.addEventListener("click", function(){
            start.textContent="Start";
            x=0
            secondes=0;
            minutes=0;
            heure=0;
            document.getElementById("compteur").innerHTML = heure+ " heures " +minutes+ " minutes " +secondes+ " secondes";
            clearInterval(compteur);
        });
    
    
})