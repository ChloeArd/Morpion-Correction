const CLICK_LEFT = 0;
const CLICK_RIGHT = 2;

let cases = document.getElementsByClassName("case");


//Ici square contient un nouvel élément .case de la liste d'éléments a chaque passage de la boucle !
//Maintenant que j'ai tous mes éléments, je dois trouver une solution pour savoir QUI et SI on a cliqué.
for(const square of cases) {
    // On ajoute un listener sur chaque élément de classe .case.
    square.addEventListener('mouseup', function(event) {
        switch(event.button) {
            case CLICK_LEFT:
                //Une fois que le X sera dans le div, on ne pourra plus rien ajouter dans ce div.
               insertPlayerText(this, "X")
                break;

            case CLICK_RIGHT:
                //Une fois que le O sera dans le div, on ne pourra plus rien ajouter dans ce div.
               insertPlayerText(this, "O")
                break;
        }

        //toujours après avoir effectué un clic, vérifier si qlqn a gagné, function???
        checkCases();

    });
}


// Vérifier quelque chose.
function checkCases() {
    let result = checkHorizontal();
    //Si el résultat est autre chose qu'une chaine (donc false) alors on passe au test suivant !
    if(!result) { // revient à ==> result === false
        result = checkVertical();
    }


    checkDiagonal();
}

//Un vérification horizontale.
function checkHorizontal() {
    //On traite la 1ère ligne ==> 0, 1, 2
   /** if (cases[0].innerHTML === "X" && cases[1].innerHTML === "X" && cases[2].innerHTML === "X") {
        return 'Player 1 won !'
    }

    else if (cases[0].innerHTML === "O" && cases[1].innerHTML === "O" && cases[2].innerHTML === "O") {
        return 'Player 2 won !'
    }

    //On traite la 2è ligne ==> 3, 4, 5
    if (cases[3].innerHTML === "X" && cases[4].innerHTML === "X" && cases[5].innerHTML === "X") {
        return 'Player 1 won !'
    }

    else if (cases[3].innerHTML === "O" && cases[4].innerHTML === "O" && cases[5].innerHTML === "O") {
        return 'Player 2 won !'
    }

    //On traite la 3è ligne ==> 6, 7, 8
    if (cases[6].innerHTML === "X" && cases[7].innerHTML === "X" && cases[8].innerHTML === "X") {
        return 'Player 1 won !'
    }

    else if (cases[6].innerHTML === "O" && cases[7].innerHTML === "O" && cases[8].innerHTML === "O") {
        return 'Player 2 won !'
    }
    */

    // Le code juste au dessus en commentaire revient au code juste en dessous en plus simplifié !
    for (let index = 0; index <= 8; index += 3) { //On a fait un pas de 3 a chaque fois de 0 à 3, de 1 à 4, ...
        //Et la au 1er passage, j'aurai 0, 1, 2 / au 2è j'aurai 3, 4, 5 et au 3è j'aurai 6, 7, 8
        if (cases[index].innerHTML === "X" && cases[index+1].innerHTML === "X" && cases[index+2].innerHTML === "X") {
            return 'Player 1 won !'
        }

        else if (cases[index].innerHTML === "O" && cases[index+1].innerHTML === "O" && cases[index+2].innerHTML === "O") {
            return 'Player 2 won !'
        }
    }
    return false;
}

//Une vérification verticale.
function checkVertical() {
    for (let index = 0; index <= 2; index ++) { //On a fait un pas de 3 a chaque fois de 0 à 3, de 1 à 4, ...
        //Et la au 1er passage, j'aurai 0, 3, 6 / au 2è j'aurai 1, 4, 7 et au 3è j'aurai 2, 5, 8
        if (cases[index].innerHTML === "X" && cases[index+3].innerHTML === "X" && cases[index+6].innerHTML === "X") {
            return 'Player 1 won !'
        }

        else if (cases[index].innerHTML === "O" && cases[index+3].innerHTML === "O" && cases[index+6].innerHTML === "O") {
            return 'Player 2 won !'
        }
    }
    return false;

}

//Une verification diagonale.
function checkDiagonal() {
    //doit tester 0, 4, 8
    //            2, 4, 6

}








//Insère une lettre dans le div .case
function insertPlayerText(element, playerChar) {
    //Element contient l'élément a qui on va donner la lettre contenue dans playerChar.
    if(element.innerHTML.length === 0) {
        //PlayerChar contient la lettre à insérer, X ou O
        element.innerHTML = playerChar; //Contient l'objet qui a généré l'évènement (l'objet sur lequel on a clic)
    }
}

// Empêche un élément par défault de se produire, ici on empèche que le menu apparaisse quand on fait un clique droit qu'au niveau du square !!!!
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

