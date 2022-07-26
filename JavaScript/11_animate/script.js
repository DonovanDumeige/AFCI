"use strict"

const div = document.querySelector('.anime');
document.querySelector(".b1").addEventListener("click", animation1)
document.querySelector(".b2").addEventListener("click", animation2)
document.querySelector(".b3").addEventListener("click", animation3)
document.querySelector(".b4").addEventListener("click", animation4)
document.querySelector(".b5").addEventListener("click", animation5)


/* 
.animate() est une méthode de web animation API.
Elle prend deux arguments, le premier est une liste des keyframes que l'élément
HTML ciblé, devra parcourir. Le second est un objet contenant les options de l'animation.
*/
function animation1() {
    // Les keyframes peuvent être un tableau d'objet dont chaque propriété est du CSS.
    // Chaque objet représente une étape de l'animation.
    const keyframes = [{
            left: 0,
            top: 0
        },
        {
            left: "80%",
            top: "-200px"
        },
        {
            left: "20%",
            top: "500px"
        }
    ]
    const options = {
        duration: 2000, //en milisecondes donc 2 secondes
        iterations: 3, // nb de fois où l'animation est joué
        fill: "forwards", // indique à l'élément de rester sur la dernière étape de son animation.
        direction: "alternate"
    }
    div.animate(keyframes, options);
}

function animation2() {
    /*
    Les keyframes peuvent aussi être un seul objet, dont chaque propriété
    a un tableau indiquant les différentes étapes clés 
    */
    const keyframes = {
        backgroundColor: ["blue", "red", "green"],
        opacity: [1, 0, 0.5]
    }
    div.animate(keyframes, {
        duration: 2000,
        direction: "alternate",
        iteration: 2
    })
}

function animation3() {
    /* 
    On peut sauvegarder l'objet animation dans une variable pour accéder à
    certaines métbhodes et propriétés
     */
    let anime = div.animate({
        transform: ["skew(0deg, 0deg)", "skew(360deg,180deg", "skew(180deg, 360deg"]
    }, {
        duration: 2000,
        direction: "alternate"
    })
    console.log(anime)
    anime.addEventListener("finish", () => {
        //l'évènement finish se déclenche lorsque l'animation est terminée.
        document.querySelector(".b4").style.opacity = 1;
    })
}
let a4 = false;

function animation4() {
    if (a4) {
        //la méthode cancel va annuler toute action de l'animation
        a4.cancel()
        a4 = false;
    } else {
        a4 = div.animate({
            borderRadius: ["0%", "50%", "5px", "25%"]},
            {
                duration: 2500,
                fill: "forwards"
            })
        }
}

/* 
La méthode animate n'est qu'un raccourci pour l'utilisation des objets KeyFrameEffect et Animation
*/
const keyframes = new KeyframeEffect(
    div, [{transform:"translate(0,0)"}, {transform: "translate(100%, 50%)"}],
{duration:3000, fill:"forwards"}
);
/* Animation prend en premier argument l'objet KeyFrameEffect et en second sur
quel timeline il doit se baser (généralement, celle du document). */
const anime5 = new Animation(keyframes, document.timeline);
async function animation5() {
    // La propriété playState indique l'état de l'animation.
    switch(anime5.playState){
        case "idle": //en attente, par défaut
            anime5.play() // la méthode play lance l'animation
            this.textContent = "Pause"
            /* La propriété finished est une promesse se réalisant quand 
            l'animation est terminée */
            await anime5.finished
            this.textContent="Reverse"
            break;
        case "paused":
            anime5.play();
            this.textContent = "Pause"
            break;
        case "finished":
            anime5.reverse(); // demande à l'animation de se jouer à l'envers
            await anime5.finished
            this.textContent = "Start"
            // Une fois terminée, je remet l'animation dans son état initial.
            anime5.reverse();
            anime5.cancel();
            break;
        case "running":
            anime5.pause() // met l'animation en pause
            this.textContent = "Continue"
            break;
    }
}