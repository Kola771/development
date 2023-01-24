// let tableau = [];
// do {
//      n = window.prompt("Entrez le nombre de ligne voulez-vous avoir dans votre tableau");
// }
// while (isNaN(n));

// for (let i = 0; i < n; i++) {
//     let k = window.prompt("Entrez le nombre");
//     tableau.push(k);
// }
// document.getElementById("affichage").innerHTML = tableau;



    let nbre = Number(window.prompt("Entrez le nombre de multiplicateur"));
     let n = Number(window.prompt("Entrez le nombre d'arret'"));
     x = 1;

while (x <= n) {
    k = nbre+ "*" +x + "=" + x * nbre + "<br>";
    
    document.getElementById("affichage").innerHTML+=k
    x++;



    r = nbre+ "+" +x + "=" +eval(x+nbre) + "<br>";
    document.getElementById("affichage").innerHTML+=r
    x++;

    


    m = nbre+ "-" +x + "=" +eval(nbre-x) + "<br>";
    document.getElementById("affichage").innerHTML+= m
    x++;

    


    l = nbre+ "/" +x + "=" +nbre/x + "<br>";
    document.getElementById("affichage").innerHTML+=l
    x++;
}



