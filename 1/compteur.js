    
    let secondes=0 ;
    let minutes=0;
    let heures=0;
    let tierces = 0;
    let compteur;
    let x= 0;
    let start = document.getElementById('start');
    let reset = document.getElementById('reset');
    function compte() {
        tierces++;
        if(tierces === 60) {
            secondes++;
            tierces = 0;
        }
        if(secondes===60) {
            secondes=0;
            minutes++;
        } 
        if (minutes===60) {
            secondes=0;
            minutes=0;
            heures++;
        }
        if (heures===24) {
            heures=0;
            minutes=0;
            secondes=0;
        }
        document.getElementById("compteur").innerHTML = heures+ " heure(s) " +minutes+ " minute(s) " +secondes+ " seconde(s) " +tierces+ " tierce(s)";
        document.getElementById("compteur").style= "color:#f50; font-weight:bold";
    }
    document.addEventListener("DOMContentLoaded", function(){
        start.addEventListener("click", function(e){
            e.preventDefault();
            switch(x) {
                case 0:
                    start.textContent="Stop";
                    compteur = setInterval(compte, 1000/60);
                    start.style="background-color: green; color: white";
                    x++;
                break;
                case 1:
                    start.textContent="Start";
                    clearInterval(compteur);
                    start.style="background-color: #f50; color: white";
                    x=0
                break;
            }

        })

            reset.addEventListener("click", function(){
                start.textContent="Start";
                start.style="background-color: #f50; color: white";
                x=0
                secondes=0;
                minutes=0;
                heures=0;
                tierces=0;
                document.getElementById("compteur").innerHTML = heures+ " heure(s) " +minutes+ " minute(s) " +secondes+ " seconde(s) " +tierces+ " tierces";
                clearInterval(compteur);
            });
        
        
    })