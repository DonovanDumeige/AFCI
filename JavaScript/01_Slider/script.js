"use strict"
let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let prev = document.querySelector(".slides-container .before");
let next = document.querySelector(".slides-container .after")
let pos = 
console.log(prev, next);
//Cacher les images du slider
function hideSlide(){
    displayButtons(slides);
    for (let i = 1; i < slides.length; i++) {
        let slide = slides[i]
        slide.style.display = "none"
    }
};
// initialiser le slider
function initSlider(){
    hideSlide();
}
initSlider();

//générer dynamiquement des boutons
function displayButtons() {
    for (let i = 0; i<slides.length; i++){
        let slide = slides[i]
        console.log(slide)
        let btn = document.createElement("button");
        btn.classList.add('button')
        document.querySelector('.buttons').append(btn)
    }
}


//gérer le défilement du slider
function showSlide(index){
    let lastSlideIndex = slideIndex;
    slideIndex = index % slides.length;
    // Cacher l'ancienne slide
    slides[lastSlideIndex].style.display = "none";

    //Afficher la nouvelle slide
    slides[slideIndex].style.display = "block";
}

/* prev.addEventListener("click",PrevSlide);
next.addEventListener("click", NextSlide);

//Obtenir l'élément précédent
function PrevSlide(){
    let index = slideIndex+1
    showSlide(index)
}

function NextSlide(); */