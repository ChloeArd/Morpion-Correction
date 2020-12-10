const CLICK_LEFT = 0;
const CLICK_RIGHT = 2;

let cases = document.getElementsByClassName("case");


//Ici square contient un nouvel élément .case de la liste d'éléments a chaque passage de la boucle !
for(const square of cases) {

    // On ajoute un listener sur chaque élément de classe .case.
    square.addEventListener('mouseup', function(event) {
        switch(event.button) {
            case CLICK_LEFT:
                // Faire en sorte d'afficher un X pour le gauche, mai ne pas oublier.
                //Trouver la meilleur méthode: <img>? backgroundImage ? valeur texte ????

                //Une fois que le X sera dans le div, on ne pourra plus rien ajouter dans ce div.

                break;

            case CLICK_RIGHT:
                //Faire en sorte d'afficher un O pour le droit, mai ne pas oublier .

                //Une fois que le O sera dans le div, on ne pourra plus rien ajouter dans ce div.
                break;
        }

        //toujours après avoir effectué un clic, vérifier si qlqn a gagné, function???


    });
}