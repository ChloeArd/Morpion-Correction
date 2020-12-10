const CLICK_LEFT = 0;
const CLICK_RIGHT = 2;

let cases = document.getElementsByClassName("case");


//Ici square contient un nouvel élément .case de la liste d'éléments a chaque passage de la boucle !
for(let square of cases) {

    // On ajoute un listener sur chaque élément de classe .case.
    square.addEventListener('mouseup', function(event) {
        switch(event.button) {
            case CLICK_LEFT:
                console.log("click gauche");
                break;

            case CLICK_RIGHT:
                console.log("click droit");
                break;
        }
    });
}