/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

// */
// function mood() {
//     let valeur = document.querySelector(".red");

//         valeur.classList.add("mood");

//         console.log(valeur);
// };
// document.addEventListener("click", mood);

// function mood1() {
//     let valeur = document.querySelector(".red");

//         valeur.classList.add("mood1");

//         console.log(valeur);
// };
// document.addEventListener("dblclick", mood1);

// function mood(){

//     document.addEventListener("click", function(){
//         document.querySelector(".red").style.left= '500px';
//     })
// }
// document.addEventListener("DOMContentLoaded", function(event){ 
//  mood();
// })

document.addEventListener('DOMContentLoaded', function(){
    // stock du nombre de clique
    let x = 0;
    // recupération du bouton qui pour id moveDiv
    let move=document.querySelector('#moveDiv');
    // recupération du bouton qui pour id hideModal
    let hide= document.querySelector('#hideModal')
    // recupération de la div '.red
    let red=document.querySelector('.red');
    // recupération de la div '.modal'
    let modal = document.querySelector('.modal');
    // recupération de la div '.container'
    let container = document.querySelector('.container');
    // 
    move.addEventListener('click', function(){
        let movee = setInterval(function(){
            switch(x) {
                case 0:
                    red.style="left:100%;  background: green;";
                    x++;
                    // contain c'est pour vérifier si un élément a une classe
                    if (modal.classList.contains('active') && container.classList.contains('modal-active')) {
                        modal.classList.remove('active');
                        container.classList.remove('modal-active');
                    }
                break;
                case 1:
                    red.style="top:50%; left:100%;  background: yellow";
                    x++;
                break;
                case 2:
                    red.style="top:50%; left:0;  background: blue";
                    x++;
                break;
                default:
                    red.style="top:0; left:0";
                    modal.classList.add('active');
                    container.classList.add('modal-active');
                    x=0;
                break;
            }
        }, 1000)
    })
    hide.addEventListener('click', function(){
        modal.classList.remove('active');
        container.classList.remove('modal-active');
    })
})

let log = document.getElementById('log');

document.addEventListener('keyup', function(e) {
    log.innerHTML += e.key;
  });

