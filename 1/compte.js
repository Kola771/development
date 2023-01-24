
    let x=0 ;
    
document.addEventListener("DOMContentLoaded", function(){
    let compteur = setInterval(function compte(){
        x++;
        document.getElementById("compte").innerHTML = x;
    }, 1000);

})