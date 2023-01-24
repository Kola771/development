
// const username = window.prompt("Votre nom de famille");
// const usernom = window.prompt("Vos prénoms");
// let userAge = window.prompt("Votre année de naissance");
// const date = new Date();
// const [year] = [date.getFullYear()];
// const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
// const rest = ("Bonjour, votre nom de famille est: " +username+ " vos prénoms: " +usernom+ " et votre age est: " +date);
// document.getElementById("js").innerHTML = rest;

// Text
// const username = window.prompt("Votre nom de famille");
// const usernom = window.prompt("Vos prénoms");
// let userAge = window.prompt("Votre année de naissance");
// const today = new Date();
// const year = today.getFullYear();
// const day = today.getDay();
// const res = year - userAge;
// const rest = ("Bonjour, votre nom de famille est: " +username+ " vos prénoms: " +usernom+ " et votre age est: " +res);
// document.getElementById("js").innerHTML = rest;

// const nbre = window.prompt("entrez votre chiffre porte bonheur");
// const reste = nbre / day;
// const royal = reste%2;
// if(royal==0) {
// document.getElementById("jq").innerHTML ="Vous etes chanceux";
// }
// else {
// document.getElementById("jq").innerHTML = "Vous etes malchanceux";
// }


// // Affichage dans la console
// const salutation = "Salut ";
// const userprenom = window.prompt("Quel est votre prénom");
// console.log(salutation+userprenom);

// // Calcul
// let calcul = window.prompt("Entrez votre opération");
// let result = eval(calcul);
// alert(calcul+ ' = ' +result);

// // Calcul de puissance
// let calcule = window.prompt("Entrez un nombre");
// let calcules = window.prompt("Donnez la puissance à laquelle vous la voulez");
// let results = Math.pow(calcule,calcules);
// alert(calcule+ " à la puissance " +calcules+ ' = ' +results);

// // Reste d'une division
// let c = window.prompt("Entrez un nombre");
// let d = window.prompt("Divisez-le par un autre nombre pour connaitre le reste");
// let e = c%d;
// alert("Le reste de " +c+ " divisé par " +d+ " est " +e);

// Comparaison
// let a = window.prompt("Entrez un nombre");
// let b = window.prompt("Entrez un deuxième nombre pour vérifier lequel est supérieur");
// if(a>b) {
//     alert(b+ " est inférieur à " +a);
// }
// else {
//     alert(b+ " est supérieur à " +a);
// }

 
    // if(!isNaN(a)&&!isNaN(c)) {
    //     switch(b) {
    //         case "*":  d = Number(a) * Number(c);
    //         document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
    //         break;
    //         case "/":  d = Number(a) / Number(c);
    //         document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
    //         break;
    //         case "+": d = Number(a) + Number(c);
    //         document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
    //         break;
    //         case "-": d = Number(a) - Number(c);
    //         document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
    //         break;
    //         default: document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
    //     }
    // }
    // else {
    //     do {
    //         let a = window.prompt("Entrez à nouveau un nombre");
    //         let b = window.prompt("Entrez l'oparateur");
    //         let c = window.prompt("Entrez à nouveau un deuxième nombre");
    //         let d;
    //     }
    //     while(!isNaN(a)&&!isNaN(c)) 
    //         switch(b) {
    //             case "*":  d = Number(a) * Number(c);
    //             document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
    //             break;
    //             case "/":  d = Number(a) / Number(c);
    //             document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
    //             break;
    //             case "+": d = Number(a) + Number(c);
    //             document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
    //             break;
    //             case "-": d = Number(a) - Number(c);
    //             document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
    //             break;
    //             default: document.getElementById("js").innerHTML = "Le calcul de " +a+ b +c+ " est " +d;
            
    //     }
    // }


// // Quelques trucs
// let g = window.prompt("Vous avez mangé quoi hier ?");
// if(g =="pizza") {
//   let g = window.prompt("Vous avez pris quoi dessus");
//    if(g == "youki") {
//     alert("Cool");
//    }
//    else {
//     alert("ZUT");
//    }
// }
// else {
//     alert("OK");
// }