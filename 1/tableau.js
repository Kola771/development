let colors = ["Rouge", "Bleu"];
document.getElementById("js").innerHTML = "Tableau par défaut: " +colors;

document.getElementById("js1").innerHTML = "Affichage d'un élément du tableau: " +colors[1];

colors.push("violet", "jaune", "beige");
document.getElementById("js2").innerHTML = "Ajouter trois autres couleurs dans le tableau: " +colors;

colors.shift();
document.getElementById("js3").innerHTML = "Supprimer la couleur rouge du tableau: " +colors;

colors.pop();
document.getElementById("js4").innerHTML = "Supprimer la couleur beige du tableau: " +colors;

colors[0]="Vert";
document.getElementById("js5").innerHTML = "Remplacer la couleur bleue par la couleur verte: " +colors;