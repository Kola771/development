'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

let image = document.getElementById('firing-button');
let decompte = 10;
let rocket = document.getElementById('rocket');
let compte;
let x = 0;

    function comptage () {
        // image.removeEventListener('click', comptage)

            document.querySelector('span').innerHTML = decompte;
            rocket;

            if(decompte <= 10 && decompte >= 1) {
                rocket.src="images/rocket2.gif";
            }

            if(decompte === 0) {
                clearInterval(compte);
                decompte = 11;
                image.classList.add('disabled');
                rocket.classList.add('tookOff');
                rocket.src="images/rocket3.gif";
            }

            decompte --;
           }


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
document.addEventListener('DOMContentLoaded', function(){
    image.addEventListener('click', function(e){
        e.preventDefault();
        switch(x) {
            case 0:
                image.src="images/cancel-button.png";
                compte = setInterval(comptage, 1000);
                x++;
            break;
            case 1:
                image.src="images/firing-button.png";
                clearInterval(compte);
                x=0;
            break;
        }
    });
})
document.querySelector('span').innerHTML = decompte;


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
