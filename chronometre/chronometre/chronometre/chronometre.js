
let chrono = document.getElementById("chrono");

let seconde = 0;
let minute = 0;
let heure = 0;
let tierce = 0;

chrono.innerHTML = `<span id="heure">${heure} </span> heure(s) : ${minute} minute(s) : ${seconde} secondes`;
function myChrono() {
    tierce++;
    if (tierce === 60) {
        tierce = 0;
        seconde++;
    }
    if (seconde === 60) {
        seconde = 0;
        minute++;
    }
    if (minute === 60) {
        minute = 0;
        heure++;
    }
    if (heure === 24) {
        heure = 0;
    }
    // chrono.innerHTML = tierce + " tierce(s) ";
    chrono.innerHTML = `${heure} heure(s) : ${minute} minute(s) : ${seconde} secondes`;
}

// 1s = 60tierce;
// 1s = 1000m
// cela revient à dire que  1000m = 60t
// ?     = 1t  donc ?= (1000*1) /60
let setIntervalId;
let startChrono = document.getElementById("startChrono");

startChrono.addEventListener('click',function(events){
    events.preventDefault();
    
    if(startChrono.textContent=="Start"){
        startChrono.textContent= "Stop";
        startChrono.style="background-color:red ;color:white";
        setIntervalId = setInterval(myChrono, 1000 / 60);
    }
    else{
        startChrono.textContent="Start"
        clearInterval(setIntervalId);
        startChrono.style="background-color:green ;color:white";
    }
    
})

let resetChrono = document.getElementById("resetChrono");

resetChrono.addEventListener('click',()=>{
   
    startChrono.textContent="Start";
    startChrono.style="background-color:green ;"
    tierce=0;
    seconde=0;
    minute=0;
    heure=0;
    clearInterval(setIntervalId);
    
    chrono.innerHTML = `${heure} heure(s) : ${minute} minute(s) : ${seconde} secondes`;
})
let saisieHeure= document.getElementById('heure');
saisieHeure.addEventListener('dblclick', function(event){
    event.preventDefault();
    saisieHeure.innerHTML=`<input type="text" style="border:none; outline:none;" size="1" value="${heure}" id="champH">`
    document.getElementById('champH').addEventListener('blur', function(){
        if(!isNaN(this.value)){
            heure=this.value;
            saisieHeure.innerHTML=heure
        }
    })

})
