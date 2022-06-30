"use strict"

const indicator = document.querySelector('.scroll-indicator'),
main = document.querySelector('main'),
options = {
    /* 
    L'option root permet de changer le scrolling observé.
    Par défaut, c'est celui du document; mais si on a ajouté un scrolling
    sur un élément html, on pourrait faire nos observations par rapport
    à celui-ci.
    */
    // root: main
    /* rootMargin permet d'étendre ou réduire la zone de détection.
    avec un nombre positif, la détectio sera hors de l'écran
    avec un nombre négatif, elle se fera dans une zone réduite de l'écran
    Que ce soit pour l'entrée ou la sortie de l'élément. */
    
    rootMargin : "200px"
},
/*
L'intersection Observer est un objet qui prend une fonction
callback lors de sa création
*/
observer = new IntersectionObserver(setIndicator, options);
/* 
L'intersection observer a besoin qu'on lui indique ce qu'il doit observer.
Ici on utilise la variable .observe(la cible à observer)
*/
observer.observe(main)
// On peut observer autant d'éléments qu'on le souhaite.
// Par exemple avec un querySelectorAll et un forEach.
function setIndicator(entries){
    /* 
    La fonction donnée en callback sera lancée à chaque fois qu'un élément observé 
    entre ou sort de l'écran.
    */
    let entry =  entries[0]
    console.log(entry);
    /* On trouvera dabs cet objet tout un tas d'informations utiles :
    target => pareil qu'avec les évènement, c'est la cible qui a été intersectée
    (entrée dans le viewport)
    isIntersection => un boolean qui indique si l'élément est dans le viewport ou non.
    intersectionRatio => un chiffre entre 0 et 1 qui indique à quel point l'élément est visible
    boudingClientRect => position et taille de notre élément.
    intersectionRect => position et taille visible de notre élément.
    rootBounds => position et taille de l'élément racine (par défaut viewport)
    */

    if(entry.isIntersecting){
        window.addEventListener("scroll", indicatorAnimation)
    } else{
        window.removeEventListener("scroll", indicatorAnimation) 
        // retirer l'évènement quand l'élément n'est plus visible permet d'alléger le site
    }
}
function indicatorAnimation() {
    // scrollY représente combien de pixel on a scroll
    console.log(main.offsetTop);
    if (window.scrollY > main.offsetTop) {
        // scrollHeight représente la hauteur de l'élément incluant le padding vertical
        // .toFixed retourne un string correspondant à notre nombre avec "n" chiffres après la virgule
        const prc = ((window.scrollY - main.offsetTop)/main.scrollHeight).toFixed(2);
        // On obtient un chiffre entre 0 et 1 représentant le pourcentage de scroll sur notre main.
        /* console.log("prc :"+prc); */
        indicator.style.transform = `scaleX(${prc})`
    } else{
        indicator.style.transform = "";
    }
}
/* 
On peut arrêter l'observation d'un élément avec :
variableObserver(élément observé)
Ici ça donnerait :
observer.unobserve(main);

On peut arrêter toute notre observation de notre observer avec:
variableObserver.disconnect()
ici :
observer.disconnect();

Chaque observer étant lié à une fonction, si on veut lancer des observations
au fonctionnement totalement différent, il vaudra mieux créer un nouvel observer
*/
