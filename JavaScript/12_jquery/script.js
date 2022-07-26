"use strict";

/* 
jquery fut créé en 2006 par Jonh RESIG. Il est représenté par la phrase
"faire plus en écrivant moins". Il permet de faire du JS plus rapidement et
simplement.

voir site officiel pour la documentation : https://jquery.com/
Il existe des variantes comme Jquery UI qui apporte plus de fonctionnalité adapté
à la création d'interface utilisateur.
Cela reste une bibliothèque JS, on ne change pas de langage. Tout ce qui est faisable
en JS, l'est aussi en jquery.

! Certains objets jquery peuvent différer des objets JS vanilla, et donc ne pas avoir les
! mêmes méthodes.
*/

/* 
$("") sert à la fois de querySelector et de createElement
$("div") sélectionnara toutes les divs.
$("<div>") créera une nouvelle div.
*/

const btnSlide = $('#slide');
console.log(btnSlide[0]); 
//jquery rend toujours un tableau, même si il y a un seul élément HTML.
//Si on veut juste l'objet il faut mettre son index dans le tableau.

btnSlide.on("click", slideTitle);
// on remplace addEventListener en jquery
//il y a aussi des versions raccourci comme .click(fonction)
// btnSlide.click(slideTitle)
function slideTitle(){
/* 
Certains effets classiques utilisés en CSS comme fade, slide, hide sont implémentés de base
dans jquery, avec des méthodes comme slideIn, slideOut, slideToggle.
Par exemple ici, je peux lui donner une durée et une fonction à faire une fois terminé.
*/
    $("h1").slideToggle(1000, function(){});
/* 
Pour accéder aux propriétés css avec jquery, on peut tout simplement utiliser la méthode.css()
à la quelle si on ne donne qu'un argument, elle nous rend la valeur correspondante.
Si on lui en en donne 2, elle changera la propriété.
.css("background-color") retourne la couleur de mon élément (en rgb()).
.css("background-color", "red") change la couleur de l'élément en rouge.
*/
console.log(btnSlide.css("background-color"));
let color = btnSlide.css("background-color")==="rgb(255, 0, 0)"?"green":"red";
btnSlide.css("background-color", color);
}

$("#fade").click(fadeSpan);
function fadeSpan(){
/* 
Peu importe si je sélectionne un ou plusieurs éléments (ici, il y a 2 span), la plupart
des méthodes jquery sont faites pour être effective sur plusieurs éléments à la fois.
*/
    $("h1 span").fadeToggle();
}
/* 
.hover() est l'équivalent de .on("mouseenter", callback1);
mais la méthode .hover() me permet au choix un ou deux callback.
Si le premier est bien l'équivalent de "mouseenter", le second est celui de "mouseleave".
On notera aussi que comme pour le fadeToggle, nos évènemets peuvent être ajoutés à plusieurs éléments HTML
en même temps.
*/
$("h1 span").hover(callback1, callback2);

function callback1(){
// la façon la plus classique de récupérer la cible d'un évènement avec jquery est $(this)
    $(this).css("font-size","4rem");
}
function callback2(){
    $(this).css("font-size","");
}
$("document").ready(function(){
/* un classique de jquery est d'utiliser cet évènement pour code
toute la logique à l'intérieur. Il se déclenchera une fois le document entièrement chargé.
Cela permet entre autre de remplacer l'attribut defer avant qu'il n'existe. */
})
$("h1").dblclick(function(){
    $(this).hide();
});

$("#load").click(function(){
    $('ol').hide(200); //durée en milisecondes.
    $.ajax("liste.json") // ajax est le fetch de jquery

        //done est lancé en cas de requête réussie
        .done(data=>{
        /* 
        jquery traite automatiquement les données récupérées
        si elles sont de type text, html ou json 
        */
            console.log(data);
            data.forEach(d=>{
        /* 
        Pour chaque donnée de mon json, je crée un li,
        je lui ajoute la donnée, et j'ajoute mon li à mon ol
        ! appendTo est du jquery, append du JS et pour les deux
        ! le conteneur et l'élément ajouté échangent leur place.
        * conteneur.append(element)
        * element.appendTo(conteneur)
        */
                $("<li>").text(d).appendTo($("ol"))
            })
            $("ol").show(500);
        }) 

        //fail est lancé en cas d'échec de la requête
        .fail(err=>console.log(err))

        //always est toujours lancé, une fois la requête terminée.
        .always(()=>console.log("Requête terminée")) 
})

/* 
! Attention, lorsque que l'on utilise des bibliothèques, parfois les méthodes
! peuvent partager un même nom.
*/
$('#anime').click(function(){
    $(this).css("position", "absolute")
    //animate de jquery n'est pas le même que celui de JS !
    $(this).animate({
        width:"50vw",
        height:"5rem",
        top:"+=50px", // += permet d'ajouter la valeur à chaque animation (ici au clic)
        left:"-=50px" // -= permet d'en enlever
    }, 1);
})