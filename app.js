const CLICK_LEFT = 0;
const CLICK_RIGHT = 2;

let cases = document.getElementsByClassName("case");


//Ici square contient un nouvel élément .case de la liste d'éléments a chaque passage de la boucle !
//Maintenant que j'ai tous mes éléments, je dois trouver une solution pour savoir QUI et SI on a cliqué.
for(const square of cases) {

    //Comment trouver quel bouton a été cliqué pour savoir qui a joué.
    // On ajoute un listener sur chaque élément de classe .case.
    square.addEventListener('mouseup', function(event) {
        switch(event.button) {
            case CLICK_LEFT:
                // Faire en sorte d'afficher un X pour le gauche.
                //Trouver la meilleur méthode: <img>? backgroundImage ? valeur texte ????
                this.innerHTML = "X"; //Contient l'objet qui a généré l'évènement (l'objet sur lequel on a clic).

                //Une fois que le X sera dans le div, on ne pourra plus rien ajouter dans ce div.

                break;

            case CLICK_RIGHT:
                //Faire en sorte d'afficher un O pour le droit.
                this.innerHTML = "O";
                //Une fois que le O sera dans le div, on ne pourra plus rien ajouter dans ce div.
                break;
        }

        //toujours après avoir effectué un clic, vérifier si qlqn a gagné, function???


    });

    // Empêche un élément par défault de se produire, ici on empèche que le menu apparaisse quand on fait un clique droit qu'au niveau du square !!!!
    square.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });
}

