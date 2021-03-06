"use strict";
/**
 * Exo :
 * Adapter le feu de circulation avec async et await
 */
const lights = document.querySelectorAll('#trafficLight > div');

function changeColor(index, resolve){
    let colors = ["red", "orange", "green"];
    lights.forEach((l, i)=>{
        l.style.backgroundColor = i != index ? "": colors[i]
    })
    resolve();
}
function switchPromise(time, i){
    return new Promise(resolve=>{
        setTimeout(changeColor, time, i, resolve);
    })
}

async function step(){
    await switchPromise(2000, 0);
    await switchPromise(3000, 1);
    await switchPromise(1000, 2);
    step();
}
step();
