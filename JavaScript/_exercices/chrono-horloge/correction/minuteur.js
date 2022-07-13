"use strict";
const btnminuteur = document.querySelector("#minuteur"),
main = document.querySelector("main");
let input, btn, btnR, t, start, timeout;


btnminuteur.addEventListener("pointerdown", minuteur);

function minuteur(){
    if(main.querySelector("#alarm")){
        return;
    }
    main.innerHTML = "";
    input = document.createElement("input");
    btn = document.createElement("button");
    btnR = document.createElement("button");
    t = document.createElement("time");
    input.type = "time";
    input.step = 1;
    btn.textContent = "Start minuteur";
    btnR.textContent = "Reset";
    t.id = "alarm";
    main.append(input, btn, t, btnR);
    btn.addEventListener("pointerdown", setMinuteur);
    btnR.addEventListener("pointerdown", resetMinuteur);
    input.focus();
}
function setMinuteur(){
    if(input.value != "" && !start){
        start = true;
        t.textContent = input.value;
        let time = input.value.split(":");
        startMinuteur(...time.map(x=>parseInt(x)));
    }
}
function resetMinuteur(){
    if(timeout){
        clearTimeout(timeout);
    }
    t.textContent = "00:00:00";
    start = false;
}
function startMinuteur(h,m,s){
    if(h==0 && m==0 && s == 0){
        start = false;
        t.textContent = "00:00:00"
        alert("C'est FINIIIIIII !")
        return;
    }
    if(s<0 && (m>0||h>0)){
        s=59;
        m--;
        if(m<0 && h>0){
            m=59;
            h--;
        }
    }
    t.textContent = `${h<10?"0"+h:h}:${m<10?"0"+m:m}:${s<10?"0"+s:s}`;
    s--;
    timeout = setTimeout(startMinuteur, 1000, h,m,s);
}
function setMinuteur2(){
    if(input.value != "" && !start){
        start = true;
        t.textContent = input.value;
        let set = Date.parse(`01 Jan 1970 ${input.value} GMT`);
        startMinuteur2(set);
    }
}
function startMinuteur2(ts){
    if(ts === 0){
        start = false;
        t.textContent = "00:00:00"
        alert("C'est FINIIIIIII !")
        return;
    }
    const cd = new Date();
    ts-= 1000;
    // Je paramètre le timestamp 
    cd.setTime(ts);
    // Je corrige le décalage du fuseau horaire.
    cd.setTime(ts+cd.getTimezoneOffset()*60*1000);
    t.textContent = cd.toLocaleTimeString();
    timeout = setTimeout(startMinuteur2, 1000, ts);
}