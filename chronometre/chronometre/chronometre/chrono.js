
let secondes = 0;
let minutes = 59;
let heures = 0;
let chronos = document.getElementById("chrono");
let startChrono = document.getElementById("start");
let stopChrono = document.getElementById("stop");
let resetChrono = document.getElementById("reset");

chronos.style = "font-size:40px;padding-left:15px";
chronos.innerHTML = "Are you ready? Start";

function myChrono(){ 
    
    secondes++;
    
    if (secondes==60){
        secondes = 0;
        
        minutes ++;     
    }

    if(minutes ==60){
        minutes=0;
        heures++;
    }

    let sec=secondes;
    let min=minutes;
    let hrs=heures;
    if(secondes<10){
        sec="0"+secondes;
         
    }
    if(minutes<10){
        min="0"+minutes;
    }
    if(heures<10){
        hrs="0"+heures
    }
    
    chronos.innerHTML = hrs + " heure(s) " +min + " " + "minute(s)"+ " "+ sec + " " +"seconde(s)";
    
    
}

let IntervalId;

startChrono.addEventListener('click',function(event){
    event.preventDefault();
    if(startChrono.textContent=="start"){
        startChrono.textContent="stop";
        IntervalId=setInterval(myChrono,1000);
        this.style = "background-color:brown;color:white;";
    }
    else {
        startChrono.textContent="start";
        
        clearInterval(IntervalId);
        this.style = "background-color:Green;color:white;"
    }
    // stopChrono.classList.add('active');
    // this.classList.add('desactive');
    // let IntervalId=setInterval(myChrono,1000)
    // stopChrono.addEventListener('click',function(){
    //     this.style.color = "white"
    //     stopChrono.classList.remove('active');
    //     startChrono.classList.remove('desactive');
    //     clearInterval(IntervalId)
    // })
});


resetChrono.addEventListener('click',function(){
    let s= 0;
    let m = 0;
    let h = 0;
    chronos.innerHTML = h+ " heure(s)" + " "+ m + " " + "minute(s)"+ " "+ s + " " +"seconde(s)";
})




