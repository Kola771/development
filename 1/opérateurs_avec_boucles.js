// Calcul avec les opérateurs
let d;
do {
     a = window.prompt("Entrez un nombre");
     b = window.prompt("Entrez l'oparateur");
     c = window.prompt("Entrez un deuxième nombre");
}
while(isNaN(a)&&isNaN(c));

if(!isNaN(a)&&!isNaN(c)) {
    if(b==="/"&& c==0) {
        document.getElementById("js").innerHTML="Impossible";
    }
    else {
        switch(b) {
                    case "*":  d = Number(a) * Number(c);
                    document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
                    break;
                    case "/":  d = Number(a) / Number(c);
                    document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
                    break;
                    case "+": d = Number(a) + Number(c);
                    document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
                    break;
                    case "-": d = Number(a) - Number(c);
                    document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
                    break;
                    default: document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
                }
    }
}