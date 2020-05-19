"use strict";

// Tableau avec les 10 Chuck Norris facts
let facts = [
  "Peter Parker a été mordu par une araignée, Clark Kent a été mordu par Chuck Norris",
  "Chuck norris se souvient très bien de son futur",
  "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
  "Google, c'est le seul endroit où tu peux taper Chuck Norris...",
  "Certaines personnes portent un pyjama Superman. Superman porte un pyjama Chuck Norris.",
  "Chuck Norris donne fréquemment du sang à la Croix-Rouge. Mais jamais le sien.",
  "Chuck Norris et Superman ont fait un bras de fer, le perdant devait mettre son slip par dessus son pantalon.",
  "Chuck Norris a déjà été sur Mars, c'est pour cela qu'il n'y a pas de signes de vie là bas.",
  "Chuck Norris connait la dernière décimale de Pi.",
  "Un jour, au restaurant, Chuck Norris a commandé un steak. Et le steak a obéi.",
];

// Focntion changeText pour changer la Chuck Norris Fact
function changeText ()  {
    fact.textContent = facts[i];
    i++;
    if(i===facts.length){
        i=0;
    }
}

/* Même fonction mais les facts sont générés aléatoirement
mais, il peut y avoir 2 fois le même fact à la suite */
// function changeText ()  {
//     fact.textContent = facts[Math.floor(Math.random()*10)];
// }

// Fonction générant trois couleurs aléatoires
function changeColor () {
    // Initialisation du tableau
    let colorTable = [];

    // Boucle ajoutant 3 valeurs aléatoires au tableau
    for(let i=0; i<3; i++){
        colorTable.push(Math.floor(Math.random()*256));
    }

    // On assigne les couleurs aléatoires à chaques éléments du DOM
    button.style.backgroundColor = `rgb(${colorTable[0]}, ${colorTable[1]}, ${colorTable[2]})`;
    
    container.style.backgroundColor = `rgb(${colorTable[0]}, ${colorTable[1]}, ${colorTable[2]})`;
    
    container.style.color = `rgb(${colorTable[0]}, ${colorTable[1]}, ${colorTable[2]})`;
    
    block.style.border = `1px, solid, rgb(${colorTable[0]}, ${colorTable[1]}, ${colorTable[2]})`;
}

// On variabilise chaque éléments du DOM nécessaires
let i=0
let fact = document.querySelector("#fact");
let button = document.querySelector("#button");
let container = document.querySelector(".container");
let block = document.querySelector(".block");

// Au click du bouton, le fact et les couleurs changent
button.addEventListener("click", function() {changeText(); changeColor()})

