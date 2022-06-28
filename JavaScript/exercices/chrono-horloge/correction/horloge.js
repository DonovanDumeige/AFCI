"use strict";
const btnHorloge = document.querySelector("#horloge");
// main = document.querySelector("main");
let divH, divM, divS, divP, divClock, interval;
btnHorloge.addEventListener("pointerdown", horloge);

function horloge(){
    if(main.querySelector(".clock")){
        return;
    }
    main.innerHTML = "";
    divH = document.createElement("div");
    divM = document.createElement("div");
    divS = document.createElement("div");
    divP = document.createElement("div");
    divClock = document.createElement("div");
    divH.classList.add("hour");
    divM.classList.add("minute");
    divS.classList.add("second");
    divP.classList.add("pivot");
    divClock.classList.add("clock");
    divClock.append(divH,divM,divS,divP);
    main.append(divClock);
    interval = setInterval(ticHorloge, 1000);
}

function ticHorloge(){
    let h,m,s, time;
    // On récupère l'heure actuelle.
    time = new Date();
    // On défini l'angle de chaque aiguille.
    h = time.getHours()*30-90;
    /* On multiplie la valeur obtenu pour obtenir 360 auquel on retire
    90 pour qu'à 0 elle doit à la verticale. */
    m = time.getMinutes()*6-90;
    s = time.getSeconds()*6-90;
    /* On vient faire tourner nos aiguilles selon l'angle calculé
    précédement */
    divH.style.transform = `rotate(${h}deg)`;
    divM.style.transform = `rotate(${m}deg)`;
    divS.style.transform = `rotate(${s}deg)`;
}