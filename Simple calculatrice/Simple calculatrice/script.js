const affichage = document.querySelector(".ecran");
let x = true


// Bouton eqal
document.querySelector("#equal").addEventListener('click', ()=> {
    const write = affichage.textContent;
    affichage.textContent = eval(write);
})

// Bouton racine carré
document.querySelector("#rac").addEventListener('click', ()=> {
    if (affichage.textContent==" ") {
        affichage.innerText = " "
        
    }else{
        const write = affichage.textContent;
        affichage.textContent = Math.sqrt(write);
    }
})

// Bouton expo2
document.querySelector("#expo2").addEventListener('click', ()=> {
    if (affichage.textContent==" ") {
        affichage.innerText = " "
        
    }else{
        const write = affichage.textContent;
        affichage.textContent = Math.pow(write,2);
    }
})

// Bouton expo3
document.querySelector("#expo3").addEventListener('click', ()=> {
    if (affichage.textContent==" ") {
        affichage.innerText = " "
        
    }else{
        const write = affichage.textContent;
        affichage.textContent = Math.pow(write,3).toFixed(0);
    }
})


// Bouton off
document.querySelector("#off").addEventListener('click', ()=> {
    const write = affichage.textContent;
    affichage.textContent = " ";
    x = false;
})

// Bouton AC
document.querySelector("#reset").addEventListener('click', ()=> {
    const write = affichage.textContent;
    affichage.textContent = 0;
    x = true;
})

// Bouton BackSpace
document.querySelector("#back").addEventListener('click', ()=> {

    let write = affichage.textContent;
    console.log({write: write.length}); 
    if (write.length == 1) {
        console.log("condition remplie");
        affichage.textContent = "0";
    }else{
        write = write.substring(0, write.length - 1);
        affichage.textContent = write;
    }
   
   
  
})


// Les autres boutons
document.querySelectorAll("#press").forEach(function (eachButton) {
    eachButton.addEventListener('click',()=>{

        if (affichage.textContent.length = 1 && affichage.textContent=="0") {
            affichage.innerText = " "
        }
        if (x &&  affichage.textContent.length < 12) {
        affichage.innerText += eachButton.textContent;
       }
      
    })
    
})

